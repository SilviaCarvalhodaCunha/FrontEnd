import React, { createContext, useState } from "react";
import { api } from "../services/api";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IContact {
  id: number;
  name: string;
  email: string;
  telephone: string;
}

interface IContactContext {
  contacts: IContact[];
  listContacts: () => Promise<void>
  addContact: (data: IContact) => Promise<void>;
  deleteContact: (contactId: number) => Promise<void>;
  updateContact: (contactId: number, data: IContact) => Promise<void>;
}

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IDefaultProviderProps) => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  const listContacts = async () => {
    try {
      const response = await api.get("/contact", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`
        }
      })
      setContacts(response.data)

      return response.data
    } catch (error) {
      console.log(error)            
    }
  }
  
  const addContact = async (data: IContact) => {
    try {
      const response = await api.post("/contact", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      setContacts((prevContacts) => [...prevContacts, response.data]);
    } catch (error) {
      console.log(error)
    }
  };

  const deleteContact = async (contactId: number) => {
    try {
      await api.delete(`/contact/${contactId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
    } catch (error) {
      console.log(error)
    }
  };

  const updateContact = async (contactId: number, data: IContact) => {
    try {
      const response = await api.patch(`/contact/${contactId}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === contactId ? response.data : contact
        )
      );
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <ContactContext.Provider
      value={{ contacts, listContacts, addContact, deleteContact, updateContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
