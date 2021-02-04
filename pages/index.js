import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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
const DynamicBestMovies = dynamic(
    () => import('../components/index/BestMovies'),
    { loading: () => <Skeleton height="100%" /> }
);
const DynamicBestTvshows = dynamic(
    () => import('../components/index/BestTvshows'),
    { loading: () => <Skeleton height="100%" /> }
);

const Ranking = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-auto-flow: column;
        gap: 1rem;
    }
`;

const Index = () => {
    // Hooks
    const { t } = useTranslation();

    return (
        <Layout description="List of best and trending Movies and TV Shows">
            <div style={{ margin: '2rem 0' }}>
                <DynamicTrending />
            </div>
            <div style={{ marginBottom: '3rem' }}>
                <h2 className="underline">{t('New Movies')}</h2>
                <DynamicNewMovies />
            </div>
            <div style={{ marginBottom: '3rem' }}>
                <h2 className="underline">{t('New TV Shows')}</h2>
                <DynamicNewTvshows />
            </div>
            <Ranking>
                <div style={{ marginBottom: '3rem' }}>
                    <h2 className="underline">{t('Best Movies of the Year')}</h2>
                    <DynamicBestMovies />
                </div>
                <div style={{ marginBottom: '3rem' }}>
                    <h2 className="underline">{t('Best TV Shows of the Year')}</h2>
                    <DynamicBestTvshows />
                </div>
            </Ranking>
        </Layout>
    );
};

export default Index;