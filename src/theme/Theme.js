import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#D68C00',
    },
    secondary: {
      main: '#434343',
    },
    background: {
      default: '#F3F2F0',
      paper: '#E0DFDE',
    },
    text: {
      primary: '#434343',
      secondary: '#262626',
      disabled: 'rgba(0,0,0,0.5)',
      hint: 'rgba(0,0,0,0)',
    },
    white: '#FFF'
  }
});

export default theme;