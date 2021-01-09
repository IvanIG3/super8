import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        secondary: '#752b00',
        primary: '#f7a000',
        light: '#e4e4e4',
        dark: '#002630',
        body: '#c5c5c5',
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;