import React from 'react';
import {ThemeProvider} from "./features/common/theme";
import Layout from "@common/ui/layout";
import GlobalStyle from "./styles";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthRoutes} from "@features/auth";

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path={"auth/*"} element={<AuthRoutes/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </ThemeProvider>
    );
}

export default App;
