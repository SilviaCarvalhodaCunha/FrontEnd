import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import { ContactProvider } from "./contexts/ContactContext";
import { ThemeProvider } from "@mui/material";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <ContactProvider>
          <RoutesMain />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ContactProvider>
      </UserProvider>
    </ThemeProvider>
  );
};
