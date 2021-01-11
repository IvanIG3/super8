import Head from 'next/head';
import { Provider } from 'react-redux';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import '../styles/fonts.css';
import '../styles/globals.css';
import Theme from '../styles/Theme';

// Translations
import '../translations';

// State
import store from '../store';
import AuthProvider from '../firebase/auth/authProvider';

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Super8</title>
        </Head>
        <Theme>
            <Provider store={store}>
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </Provider>
        </Theme>
    </>
);

export default MyApp;