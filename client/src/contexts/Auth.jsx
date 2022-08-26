import { createContext, useContext, useState } from "react";

const authContext = createContext();
const authUpdateContext = createContext();

const Auth = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const auth = () => setIsAuth(true);
    const unAuth = () => setIsAuth(false);

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
