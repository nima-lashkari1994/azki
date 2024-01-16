import React from 'react';
import {useAuth} from "@features/auth/authProvider";
import {Navigate} from "react-router";
import {Outlet} from "react-router-dom";

const AuthorizedRoute = () => {
    const {user} = useAuth();
    if (!user) return <Navigate to={"/auth"} />
    return <Outlet />
};

export default AuthorizedRoute;