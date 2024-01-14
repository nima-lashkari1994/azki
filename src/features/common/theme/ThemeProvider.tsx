import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import theme from "./theme";

type ThemeProviderProps = {
    children:React.ReactNode
}

const ThemeProvider = ({ children }:ThemeProviderProps) => (
    <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
);

export default ThemeProvider;
