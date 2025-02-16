import { createTheme, PaletteMode } from "@mui/material";
import React from "react";
import { getDesignTokens } from "./myTheme";
// import theme, { getDesignTokens } from "./Theme";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  // try with usereducer
  

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  // const modifiedTheme = React.useMemo(
  //   () =>
  //     createTheme({
  //       ...theme,
  //       palette: {
  //         ...theme.palette,
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};