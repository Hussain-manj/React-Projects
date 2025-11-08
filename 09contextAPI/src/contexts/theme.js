import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // Default theme mode
    darkMode: () => {}, // Function to toggle dark mode
    lightMode: () => {}, // Function to toggle light mode
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
