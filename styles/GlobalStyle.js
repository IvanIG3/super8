import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1.2em;
        line-height: 1.5;
        background-color: ${props => props.theme.colors.bgcolor};
        color: ${props => props.theme.colors.textcolor};
        scrollbar-color: ${props => props.theme.colors.textcolor} ${props => props.theme.colors.bgcolor};
        scrollbar-width: thin;
        
    }

    @media (min-width: 576px) {
        body {
            font-size: 1.1em;
        }
    }

    @media (min-width: 768px) {
        body {
            font-size: 1em;
        }
    }

    ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
        background: ${props => props.theme.colors.bgcolor};
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.textcolor};
    }

    h1 {
        border-bottom: 1px solid;
        margin: .8em 0;
        font-size: 1.6em;
        text-align: center;
    }

    @media (min-width: 576px) {
        h1 {
            font-size: 2.2em;
        }
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 2.5em;
        }
    }

    h2 {
        margin: .8em 0;
        font-size: 1.4em;
        text-align: left;
    }

    @media (min-width: 576px) {
        h2 {
            font-size: 1.6em;
        }
    }

    @media (min-width: 768px) {
        h2 {
            font-size: 1.8em;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a,
    button,
    select {
        transition: all .2s ease;
    }

    a:hover,
    button:hover,
    select:hover {
        cursor: pointer;
    }

    /* UTILITY */
    .container {
        width: 100%;
        max-width: 92vw;
        margin: 0 auto;
    }

    @media (min-width: 576px) {
        .container {
            max-width: 95vw;
        }
    }

    @media (min-width: 1200px) {
        .container {
            max-width: 1140px;
        }
    }

    .underline {
        border-bottom: 1px solid ${props => `${props.theme.colors.textcolor}80`};
    }

`;

export default GlobalStyle;