import Head from 'next/head';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import Theme from '../styles/Theme';
import '../translations';
import store from '../store';

const MyApp = ({ Component, pageProps }) => {

    return (
        <>
            <Head>
                <title>Super8</title>
            </Head>
            <Theme>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Theme>
        </>
    );
};

export default MyApp;