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
const DynamicNewTvshows = dynamic(
    () => import('../components/index/NewTvshows'),
    { loading: () => <Skeleton height="100%" /> }
);

const Index = () => {
    // Hooks
    const { t } = useTranslation();

    return (
        <Layout description="List of best and trending Movies and TV Shows">
            <div style={{ margin: '2rem 0' }}>
                <DynamicTrending />
            </div>
            <div style={{ marginBottom: '2rem 0' }}>
                <h2 className="underline">{t('New Movies')}</h2>
                <DynamicNewMovies />
            </div>
            <div style={{ margin: '2rem 0' }}>
                <h2 className="underline">{t('New TV Shows')}</h2>
                <DynamicNewTvshows />
            </div>
        </Layout>
    );
};

export default Index;