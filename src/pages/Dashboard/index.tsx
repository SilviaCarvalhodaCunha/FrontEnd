import { ContactList } from "../../components/CardContact/CardList";
import { Header } from "../../components/Header";
import { useState } from "react";

export const DashboardPage = () => {
  const [showSaudation, setShowSaudation] = useState(true);
  const [showContactList, setShowContactList] = useState(false);

  return (
    <>
      <Header
        onShowContactList={() => {
          setShowContactList(true);
          setShowSaudation(false);
        }}
      />
      {showSaudation && <p>Bem-vindo à sua agenda de contatos!</p>}
      {showContactList && <ContactList />}
    </>
  );
};
