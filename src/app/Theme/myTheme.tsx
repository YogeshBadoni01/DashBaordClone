import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";


export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // my light mode
            // primary: "#1976d2",
            background:{
              default:'transparent',
              body:'transparent',
              paper:'transparent',
              custom1:"#ffffff",
              custom2:"#f0f2f5",
              custom3:"#344767",
              myButton:"#191919",
              // Drawerbg:'linear-gradient(195deg, #42424a 0%, #191919 100%)'
              Drawerbg:' #191919'
            },
            
            divider: "#fff",
            // divider: "linear-gradient(to right, rgba(52, 71, 103, 0), rgb(255, 255, 255), rgba(52, 71, 103, 0)) !important",
            border:{
              avatar:"#fff"
            },
            text: {
              primary: "#344767",
              secondary: "#7b809a",
              third:"#7b809a",
              mydrawer:"#344767",
              myButton:"#fff",

            },
            shadows:"rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;",
          }
          : {
            // my dark mode
            // primary: "#1976d2",
            background: {
              // default: 'rgb(25, 25, 25)',
              default:'#1a2035',
              mybody:'#1a2035',
              paper: '#202940',
              custom1:"#202940",
              custom2:"#202940",
              custom3:"#f0f2f566",
              Drawerbg:"#202940",
              myButton:"#fff",

            },
            divider: "#fff",
            // divider: "linear-gradient(to right, rgba(52, 71, 103, 0), rgb(255, 255, 255), rgba(52, 71, 103, 0)) !important",

            border:{
              avatar:"#fff"
            },
            text: {
              primary: "#fff",
              secondary: "#ffffffcc",
              third:"#fff",
              mydrawer:"#344767",
              myButton:"#344767",
            },
          }),
    },
  });
  