// import { PaletteMode } from "@mui/material";
// import { amber, deepOrange, grey } from "@mui/material/colors";

import { createMuiTheme } from "@mui/material";

// const theme = {
//   palette: {
//     primary: amber,
//   },
// };

// export const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode == "light"
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: "#fff",
//             secondary: grey[500],
//           },
//         }),
//   },
// });

// export default theme;

export const drawerLightTheme = createMuiTheme({
  palette: {
    mode: 'light',
    primary:"#1976d2",
    // Define light mode palette for Drawer component
  },
});

export const drawerDarkTheme = createMuiTheme({
  palette: {
    mode: 'dark',
    // Define dark mode palette for Drawer component
  },
});

export const dashboardLightTheme = createMuiTheme({
  palette: {
    mode: 'light',
    // Define light mode palette for Dashboard component
  },
});

export const dashboardDarkTheme = createMuiTheme({
  palette: {
    mode: 'dark',
    // Define dark mode palette for Dashboard component
  },
});