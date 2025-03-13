
// Aqui se crea el codigo para el cambio de tema en la aplicacion (light/dark mode)

import React, {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );
    useEffect(() => {
       document.body.setAttribute('data-theme', theme);
       localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        // Encapsula toda la pagina en el ThemeContext.Provider
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
    
}