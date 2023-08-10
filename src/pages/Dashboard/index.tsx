import { Box, Typography } from "@mui/material";
import { ContactList } from "../../components/CardContact/CardList";
import { Header } from "../../components/Header";
import { useState } from "react";

export const DashboardPage = () => {
  const [showSaudation, setShowSaudation] = useState(true);
  const [showContactList, setShowContactList] = useState(false);

  return (
    <Box>
      <Header
        onShowContactList={() => {
          setShowContactList(true);
          setShowSaudation(false);
        }}
      />
      {showSaudation && <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{height:"10rem"}}><Typography variant="h6">Bem-vindo à sua agenda de contatos!</Typography></Box>}
      {showContactList && <ContactList />}
    </Box>
  );
};
