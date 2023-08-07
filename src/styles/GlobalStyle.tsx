import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    border: 0;
    font-size: 1.2rem;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }
`;
