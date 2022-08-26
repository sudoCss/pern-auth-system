import { createContext, useContext, useState } from "react";

const themeContext = createContext();
const themeUpdateContext = createContext();

const Theme = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <>
            <themeContext.Provider value={{ theme }}>
                <themeUpdateContext.Provider value={{ toggleTheme }}>
                    {children}
                </themeUpdateContext.Provider>
            </themeContext.Provider>
        </>
    );
};

export const useTheme = () => useContext(themeContext);
export const useThemeUpdate = () => useContext(themeUpdateContext);

export default Theme;
