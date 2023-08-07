import { createTheme } from '@mui/material/styles';

const colors = {
    primary: '#ff6b6b',
    secondary: '#ffad9b',
    background: '#F5F5F5',
    text: '#333333',
    error: '#ff0000',
  };
  
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