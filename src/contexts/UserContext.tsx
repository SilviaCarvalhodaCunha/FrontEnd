import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";


export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  telephone: string;
  dateRegistration: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

interface IUserContext {
  user: IUser | null;
  userRegister: (data: IRegisterUser) => Promise<void>;
  userLogin: (data: ILoginUser) => Promise<void>;
  userLogout: () => void;
  updateUser: (userId: number, data: Partial<IUser>) => Promise<void>;
  deleteUser: (userId: number) => Promise<void>;
  fetchUserDetails: (token: string) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userRegister = async (data: IRegisterUser) => {
    try {
      const response = await api.post("/client", data);
      setUser(response.data);

      toast.success("Cadastro realizado com sucesso!");

      navigate("/");
    } catch (error) {
      console.log(error)
    }
  };

  const fetchUserDetails = async (token: string) => {
    try {
      const response = await api.get("/client", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error)
    }
  };

  const userLogin = async (data: ILoginUser) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKEN", response.data.token);

      const userDetails = await fetchUserDetails(response.data.token);

      setUser({
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        telephone: userDetails.telephone,
        dateRegistration: userDetails.dateRegistration,
      });  

      toast.success("Login realizado com sucesso!");

      navigate("/dashboard");
    } catch (error) {
      console.log(error)
    }
  };

  const autoLogin = () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");

    navigate("/");
  };

  const updateUser = async (userId: number, data: Partial<IUser>) => {
    try {
      const response = await api.patch(`/client/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      setUser((prevUser) => {
        if (prevUser && prevUser.id === userId) {
          return { ...prevUser, ...response.data };
        }
        return prevUser;
      });  

      toast.success("Dados atualizados com sucesso!");
    } catch (error) {
      console.log(error)
    }
  
  };

  const deleteUser = async (userId: number) => {
    try {
      await api.delete(`/client/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });

      setUser(null);

      toast.success("Perfil deletado com sucesso!")

      localStorage.removeItem("@TOKEN");

      navigate("/");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userRegister,
        userLogin,
        userLogout,
        updateUser,
        deleteUser,
        fetchUserDetails
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
