import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "./globals.css";
import {createMuiTheme,ThemeProvider} from '@mui/material'
// import theme from "./Theme/ThemeContextProvider";
// import {Theme} from './Theme/Theme'
import { useThemeContext } from "./Theme/ThemeContextProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100',  '300', '400', '500',  '700', '900'],
  variable:'--font-roboto',
  display:'swap'
});

export default function RootLayout({ children,}: Readonly<{
  children: React.ReactNode;
}>) {


  
 
  return (
    <html lang="en">
      <body className={`roboto ${roboto.className} `}>
        {children}
      </body>
  </html>
  );
}
