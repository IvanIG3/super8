import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        secondary: '#752b00',
        primary: '#f7a000',
        light: '#839496',
        dark: '#002630',
        body: '#d0d0d0',
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "1.05em",
        large: "1.1em"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;