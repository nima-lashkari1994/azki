import React from 'react';
import {ThemeProvider} from "./features/_common/theme";
import {AppLayout} from "@common/ui/layout";
import GlobalStyle from "./styles";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {InsuranceTypePage} from "@features/insuranceType";
import {AuthorizedRoute, AuthProvider, SignupPage} from "@features/auth";
import { ThirdPartyPage } from '@features/thirdParty';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AppLayout/>}>
                            <Route path={"auth/*"} element={<SignupPage/>}/>
                            <Route element={<AuthorizedRoute/>}>
                                <Route path={"third-party/*"} element={<ThirdPartyPage/>}/>
                                <Route path={"/"} element={<InsuranceTypePage/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
            <GlobalStyle/>
        </ThemeProvider>
    );
}

export default App;
