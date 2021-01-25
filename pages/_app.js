import Head from 'next/head';
import { Provider } from 'react-redux';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import '../styles/fonts.css';
import '../styles/globals.css';
import Theme from '../styles/themes/Theme';

// Translations
import '../language';

// Providers
import store from '../store';
import AuthProvider from '../firebase/auth/authProvider';
import LanguageProvider from '../language/languageProvider';

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Super8</title>
        </Head>
        <Provider store={store}>
            <AuthProvider>
                <LanguageProvider>
                    <Theme>
                        <Component {...pageProps} />
                    </Theme>
                </LanguageProvider>
            </AuthProvider>
        </Provider>
    </>
);

export default MyApp;