import { useContext } from "react";
import { ContactCard } from "../Card";
import { ContactContext } from "../../../contexts/ContactContext";
import { CardsList } from "./styles";
import { Box } from "@mui/material";

export const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <main>
      <Box sx={{
        width: "100%",
        height: "100%",
        padding: "2rem"
      }}>
        <h1>Todos os Contatos</h1>
        <CardsList>        
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </CardsList>
      </Box >
    </main>
  );
};
