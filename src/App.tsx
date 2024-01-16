import React from 'react';
import {ThemeProvider} from "./features/_common/theme";
import {AppLayout} from "@common/ui/layout";
import GlobalStyle from "./styles";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InsuranceType from "@features/insuranceType";
import ThirdParty from "@features/thirdParty/ThirdParty";
import {AuthorizedRoute, AuthProvider, SignupPage} from "@features/auth";

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AppLayout/>}>
                            <Route path={"auth/*"} element={<SignupPage/>}/>
                            <Route element={<AuthorizedRoute/>}>
                                <Route path={"third-party/*"} element={<ThirdParty/>}/>
                                <Route path={"/"} element={<InsuranceType/>}/>
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
