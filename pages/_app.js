import Head from 'next/head';
import '../styles/globals.css';
import Theme from '../styles/Theme';

const MyApp = ({ Component, pageProps }) => {

    return (
        <>
            <Head>
                <title>Super8</title>
            </Head>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    );
};

export default MyApp;