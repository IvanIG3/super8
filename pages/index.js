import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

import Layout from '../components/layout/Layout';
import Skeleton from '../components/ui/Skeleton';

// Dynamic imports
const DynamicTrending = dynamic(
    () => import('../components/index/Trending'),
    { loading: () => <Skeleton height="100%" /> }
);
const DynamicNewMovies = dynamic(
    () => import('../components/index/NewMovies'),
    { loading: () => <Skeleton height="100%" /> }
);

const Index = () => {
    // Hooks
    const { t } = useTranslation();

    return (
        <Layout description="List of best and trending Movies and TV Shows">
            <DynamicTrending />
            <h2 className="underline">{t('New Movies')}</h2>
            <DynamicNewMovies />
        </Layout>
    );
};

export default Index;