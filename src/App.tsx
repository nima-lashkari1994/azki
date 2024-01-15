import React from 'react';
import {ThemeProvider} from "./features/common/theme";
import {AppLayout} from "@common/ui/layout";
import GlobalStyle from "./styles";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Signup} from "@features/auth";
import InsuranceType from "@features/insuranceType";
import ThirdParty from "@features/thirdParty/ThirdParty";

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route path={"auth/*"} element={<Signup/>}/>
                        <Route path={"third-party/*"} element={<ThirdParty/>}/>
                        <Route path={"/"} element={<InsuranceType/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </ThemeProvider>
    );
}

export default App;
