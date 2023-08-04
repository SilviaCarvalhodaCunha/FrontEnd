import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../services/api";

export interface IDefaultProviderProps{
  children: React.ReactNode;
}

interface IUser{
  id: string;
  name: string;
  email: string;
  telephone: string;
  dateRegistration: string;
}

export interface IRegisterUser{
  name: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginUser{
  email: string;
  password: string;
}

interface IUserContext{
  user: IUser | null;
  userRegister: (data: IRegisterUser) => Promise<void>;
  userLogin: (data: ILoginUser) => Promise<void>;
  userLogout: () => void;
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: IDefaultProviderProps) => {
  const [ user, setUser ] = useState<IUser | null>(null);

  const navigate = useNavigate()

  const userRegister = async(data: IRegisterUser) => {
    try {
      const response = await api.post("/client", data)
      setUser(response.data)

      console.log(response.data)

      toast.success("Cadastro realizado com sucesso!")

      navigate("/")      
    } catch (error) {
      toast.error("Algo deu errado em seu cadastro")      
    }
  }

  const userLogin = async(data: ILoginUser) => {
    try {
      const response = await api.post("/login", data)
      setUser(response.data)
      localStorage.setItem("@TOKEN", response.data.token)

      toast.success("Login realizado com sucesso!")  
      
      navigate("/dashboard")
    } catch (error) {
      toast.error("Algo deu errado em seu login")      
    }
  }

  const autoLogin = () => {
    const token = localStorage.getItem("@TOKEN")
    if(token){
      navigate("/dashboard")
    } else {
      navigate("/")
    }
  }

  useEffect(() => { autoLogin() }, [])

  const userLogout = () => {
    setUser(null)
    localStorage.removeItem("@TOKEN")

    navigate("/")
  }


  return(
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}