import { createContext, useState } from "react";

export const LoginContext=createContext();

// eslint-disable-next-line react/prop-types
export default function LoginProvider({ children }){
    const [login, setLogin] = useState(false);
    return (
        <LoginContext.Provider value={{ login , setLogin}}>
            {children}
        </LoginContext.Provider>
    );
}