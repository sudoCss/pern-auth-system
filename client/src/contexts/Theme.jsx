import { createContext, useContext, useState } from "react";

const themeContext = createContext();
const themeUpdateContext = createContext();

const getThemeStatusFromLocalStorage = () => {
    const storedTheme = localStorage.getItem("theme");

    return storedTheme || "light";
};

const Theme = ({ children }) => {
    const [theme, setTheme] = useState(getThemeStatusFromLocalStorage());

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

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
