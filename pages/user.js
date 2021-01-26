import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import useAuth from '../firebase/auth/useAuth';
import Layout from '../components/layout/Layout';
import ThemeConfiguration from '../components/user/ThemeConfiguration';
import DeleteAccount from '../components/user/DeleteAccount';

const UserPage = () => {
    // Hooks
    const { t } = useTranslation();
    const { user } = useAuth();
    const router = useRouter();

    // Back to index if no user
    useEffect(() => {
        if(!user && user !== 0) {
            router.push('/');
        }
    }, [user]);

    return (
        <Layout description="User page configuration">
            <h1>{t('Configuration')}</h1>
            <h2 className="underline">{t('Themes')}</h2>
            <ThemeConfiguration />
            <h2 className="underline">{t('Delete account')}</h2>
            <DeleteAccount />
        </Layout>
    );
};

export default UserPage;