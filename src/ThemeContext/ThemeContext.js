import { useContext,createContext } from "react";


export let ThemeContext = createContext(
    {
        themeMode : 'light',
        darkMode : () => {},
        lightMode : () =>{}
    }
);

export let ThemeContextProvider = ThemeContext.Provider;

export function useTheme(){
    return useContext(ThemeContext);
}