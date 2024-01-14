import React from 'react';
import {Route, Routes as BaseRoutes} from "react-router-dom";
import Signup from "@features/auth/signup";

const Routes = () => {
    return (
        <BaseRoutes>
            <Route path={"/signup"} element={<Signup/>}/>
        </BaseRoutes>
    );
};

export default Routes;