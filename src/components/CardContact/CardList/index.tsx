import { useContext } from "react";
import { ContactCard } from "../Card";
import { ContactContext } from "../../../contexts/ContactContext";

export const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <main>
      <div>
        <h1>Todos os Contatos</h1>
        <div>        
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </main>
  );
};
