import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: '#f7a000',
        bgcolor: '#002630',
        textcolor: '#c5c5c5',
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;