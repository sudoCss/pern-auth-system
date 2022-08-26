import { createContext, useContext, useState } from "react";

const authContext = createContext();
const authUpdateContext = createContext();

const getAuthStatusFromLocalStorage = () => {
    const isAuth = localStorage.getItem("isAuth");

    return isAuth && JSON.parse(isAuth) === true;
};

const Auth = ({ children }) => {
    const [isAuth, setIsAuth] = useState(getAuthStatusFromLocalStorage());

    const auth = () => {
        setIsAuth(true);
        localStorage.setItem("isAuth", "true");
    };
    const unAuth = () => {
        setIsAuth(false);
        localStorage.setItem("isAuth", "false");
    };

    return (
        <>
            <authContext.Provider value={{ isAuth }}>
                <authUpdateContext.Provider value={{ auth, unAuth }}>
                    {children}
                </authUpdateContext.Provider>
            </authContext.Provider>
        </>
    );
};

export const useAuth = () => useContext(authContext);
export const useAuthUpdate = () => useContext(authUpdateContext);

export default Auth;
