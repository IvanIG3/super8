import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import Theme from '../styles/Theme';
import '../translations';

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