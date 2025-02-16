"use Client"

import { ThemeProvider } from "@emotion/react"
import { PaletteMode, createTheme } from "@mui/material"
import { createContext, useContext, Dispatch, SetStateAction, useState, useMemo } from "react"
import {getDesignTokens} from "./myTheme"

type DataType = {
    DrawerMode: 'light' | 'dark',
    // DrawerMode: boolean,
    setDrawerMode: Dispatch<SetStateAction<'light' | 'dark'>>,
    Drawerbg: 'white' | 'dark' | 'transparent',
    setDrawerbg: Dispatch<SetStateAction<'white' | 'dark' | 'transparent'>>,
    // setDrawerMode: boolean,
    DashboardMode: 'light' | 'dark',
    setDashboardMode: Dispatch<SetStateAction<'light' | 'dark'>>,
    ToggleDrawer: () => void,
    ToggleDashboard: () => void
}

interface ContextProps {
    DrawerMode: 'light' | 'dark',
    // DrawerMode: boolean,
    setDrawerMode: Dispatch<SetStateAction<'light' | 'dark'>>,
    Drawerbg: 'white' | 'dark' | 'transparent',
    setDrawerbg: Dispatch<SetStateAction<'white' | 'dark' | 'transparent'>>,
    // setDrawerMode: boolean,
    DashboardMode: 'light' | 'dark',
    setDashboardMode: Dispatch<SetStateAction<'light' | 'dark'>>,
    ToggleDrawer: () => void,
    ToggleDashboard: () => void,
}

const GlobalContext = createContext<ContextProps>({
    DrawerMode: "light",
    Drawerbg:"dark",
    // DrawerMode: true,
    setDrawerMode: (): void => {},
    setDrawerbg: (): void => {},
    // setDrawerMode: true,
    DashboardMode: "light",
    setDashboardMode: (): void => {},
    ToggleDrawer: (): void => {
        throw new Error("Function not implemented.")
    },
    ToggleDashboard: (): void => {
        throw new Error("Function not implemented.")
    }
})

export const GlobalContextProvider = ({ children }) => {
    const [DrawerMode, setDrawerMode] = useState<'light' | 'dark'>('light');
    const [Drawerbg, setDrawerbg] = useState<'white' | 'dark' | 'transparent'>('dark');
    // const [DrawerMode, setDrawerMode] = useState(true);
    const [DashboardMode, setDashboardMode] = useState<'light' | 'dark'>('light');
    const colorMode: { ToggleDrawer: () => void; ToggleDashboard: () => void; } = useMemo(
        () => ({
            ToggleDrawer: () => {
                setDrawerMode((prevMode :PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
            // ToggleDrawer: () => {
            //     setDrawerMode(!DrawerMode);
            // },
            ToggleDashboard: () => {
                setDashboardMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
    const value: ContextProps = { 
        DrawerMode, 
        setDrawerMode,
        Drawerbg,
        setDrawerbg, 
        DashboardMode, 
        setDashboardMode, 
        ToggleDrawer: colorMode.ToggleDrawer, 
        ToggleDashboard: colorMode.ToggleDashboard 
    };

    const theme = useMemo(( )=> createTheme(getDesignTokens(DrawerMode)), [DrawerMode])

    return (
        <GlobalContext.Provider value={value}>
            <ThemeProvider theme={theme}>
            {children}
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
