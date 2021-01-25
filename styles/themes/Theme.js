import { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";

import themeContext from './themeContext';
import themes from './themes';
import useAuth from '../../firebase/auth/useAuth';
import useUserCollection from '../../firebase/collections/useUserCollection';

const Theme = ({ children }) => {
    const { user } = useAuth();
    const defaultTheme = themes.vintage;

    // State
    const [theme, setTheme] = useState(false);

    // List of themes available
    const themesSample = Object.keys(themes).map(key => ({
        theme: key,
        name: themes[key].name,
        primary: themes[key].colors.primary,
        bgcolor: themes[key].colors.bgcolor,
        textcolor: themes[key].colors.textcolor,
    }));

    // Save theme
    const loadTheme = async key => {
        setTheme(themes[key]);
        if (user) {
            const userRef = await useUserCollection(user);
            await userRef.set({ theme: key });
        }
    };

    // Load theme from user config
    useEffect(() => {
        try {
            if (user && !theme) {
                (async function () {
                    const userRef = await useUserCollection(user);
                    const data = await userRef.get();
                    const key = data.data().theme;
                    setTheme(themes[key]);
                })();
            }
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    return (
        <ThemeProvider theme={theme || defaultTheme}>
            <themeContext.Provider
                value={{
                    themes: themesSample,
                    setTheme: loadTheme,
                }}
            >
                {children}
            </themeContext.Provider>
        </ThemeProvider>
    );
};

export default Theme;