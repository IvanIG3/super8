import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {

    // Collect styled components on server side
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="icon" href="favicon.svg" />
                    <link rel="mask-icon" href="mask-icon.svg" color="#000000" />
                    <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                    <link rel="manifest" href="manifest.json" />
                    <link
                        as="font"
                        rel="preload prefetch"
                        href="/fonts/source-sans-pro-v14-latin-regular.woff2"
                        crossOrigin="anonymous"
                    />
                    <link
                        as="font"
                        rel="preload prefetch"
                        href="/fonts/source-sans-pro-v14-latin-700.woff2"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;