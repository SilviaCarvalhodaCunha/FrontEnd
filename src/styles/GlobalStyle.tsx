import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';


const colors = {
  primary: '#ff6b6b',
  secondary: '#ffad9b',
  background: '#F5F5F5',
  text: '#333333',
  error: '#ff0000',
};

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
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

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.text,
    },
    error: {
      main: colors.error,
    },
  },
});
