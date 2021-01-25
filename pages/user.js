import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import ThemeConfiguration from '../components/user/ThemeConfiguration';

const UserPage = () => {
    // Hooks
    const { t } = useTranslation();

    return (
        <Layout description="User page configuration">
            <h1>{t('Configuration')}</h1>
            <h2 className="underline">{t('Themes')}</h2>
            <ThemeConfiguration />
        </Layout>
    );
};

export default UserPage;