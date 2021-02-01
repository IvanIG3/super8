import Layout from '../components/layout/Layout';
import dynamic from 'next/dynamic';
import Skeleton from '../components/ui/Skeleton';

// Dynamic imports
const DynamicTrending = dynamic(
    () => import('../components/index/Trending'),
    { loading: () => <Skeleton height="100%" /> }
);

const Index = () => {

    return (
        <Layout description="List of best and trending Movies and TV Shows">
            <DynamicTrending />
        </Layout>
    );
};

export default Index;