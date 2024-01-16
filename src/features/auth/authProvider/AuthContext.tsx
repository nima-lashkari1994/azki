import React from "react";
import {User} from "../_common/types";

const AuthContext = React.createContext<{ user?: User, onLogin: (user: User) => void, onLogout: () => void }>({
        user: undefined,
        onLogin: () => {
        },
        onLogout: () => {
        }
    }
)

export default AuthContext;