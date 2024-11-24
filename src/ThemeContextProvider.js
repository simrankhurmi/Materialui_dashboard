// ThemeContext.js
import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

export const ThemeContext = createContext();

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
          main: "#000059",
        },
        secondary: {
          main: "#000059",
        },
        background: {
          default: "#ffffff",
          paper: "#f8f8f8",
        },
        text: {
          primary: "#000000",
          secondary: "#555555",
        },
        button:{
          primary:"#41729F",
        }
      },
      typography: {
        fontFamily: "Roboto",
        h1: {
          fontSize: "35px",
        },
        h2: {
          fontSize: "30px",
        },
        h3: {
          fontSize: "25px",
        },
        h4: {
          fontSize: "20px",
        },
        h5: {
          fontSize: "18px",
        },
        h6: {
          fontSize: "16px",
        },
      },
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
          main: "#4c4545",
        },
        secondary: {
          main: "#000059",
        },
        background: {
          default: "#121212",
          paper: "#1d1d1d",
        },
        text: {
          primary: "#ffffff",
          secondary: "#aaaaaa",
        },
      },
      typography: {
        fontFamily: "Roboto",
        h1: {
          fontSize: "35px",
        },
        h2: {
          fontSize: "30px",
        },
        h3: {
          fontSize: "25px",
        },
        h4: {
          fontSize: "20px",
        },
        h5: {
          fontSize: "18px",
        },
        h6: {
          fontSize: "16px",
        },
      },
});

const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => (themeMode === 'light' ? lightTheme : darkTheme), [themeMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
