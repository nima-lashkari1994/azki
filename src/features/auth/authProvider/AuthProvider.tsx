import React, {useState} from 'react';
import AuthContext from "./AuthContext";
import {User} from "../_common/types";

type AuthProviderProps = {
    children:React.ReactNode
}

const AuthProvider = ({children}:AuthProviderProps) => {
    const [user, setUser] = useState<User>();

    const onLogin = React.useCallback((user:User) => {
        setUser(user)
    }, []);

    const onLogout = React.useCallback(() => {
        setUser(undefined);
    }, []);

    return (
        <AuthContext.Provider value={{user,onLogin,onLogout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;