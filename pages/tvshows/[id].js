import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

import Layout from '../../components/layout/Layout';
import Skeleton from '../../components/ui/Skeleton';
import Tabs from '../../components/ui/Tabs';
import Tab from '../../components/ui/Tab';
import { clearState } from '../../actions/tvshowActions';
import useUpdate from '../../hooks/useUpdate';
import { tvShowSelector } from '../../selectors/tvshowSelectors';

// Dynamic imports
const DynamicTvshowDetails = dynamic(
    () => import('../../components/tvshows/details/TvshowDetails'),
    { ssr: false, loading: () => <Skeleton height="100%" /> }
);
const DynamicTvshowCast = dynamic(
    () => import('../../components/tvshows/details/TvshowCast'),
    { ssr: false, loading: () => <Skeleton height="100%" /> }
);
const DynamicTvshowRecommendations = dynamic(
    () => import('../../components/tvshows/details/TvshowRecommendations'),
    { ssr: false, loading: () => <Skeleton height="100%" /> }
);
const DynamicTvshowVideos = dynamic(
    () => import('../../components/tvshows/details/TvshowVideos'),
    { ssr: false, loading: () => <Skeleton height="100%" /> }
);

// Get id from params
export async function getServerSideProps({ params: { id } }) {
    return { props: { id } };
};

const TvshowPage = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const tvshow = useSelector(tvShowSelector);

    // State
    const [tab, setTab] = useState(0);

    // Back to tab 0 when moving to another tv show
    useUpdate(() => {
        dispatch(clearState());
        setTab(0);
        window.scrollTo({top: 0});
    }, [id]);

    // Clear tv show on unmount
    useEffect(() => () => dispatch(clearState()), []);

    return (
        <Layout description="Tv shows details">
            <h1>{tvshow && tvshow.title || <Skeleton />}</h1>
            <Tabs idxTab={tab} setIdxTab={setTab}>
                <Tab label={t('Details')}>
                    <DynamicTvshowDetails id={id} />
                </Tab>
                <Tab label={t('Cast')}>
                    <DynamicTvshowCast id={id} />
                </Tab>
                <Tab label={t('Recommendations')}>
                    <DynamicTvshowRecommendations id={id} />
                </Tab>
                <Tab label={t('Videos')}>
                    <DynamicTvshowVideos id={id} />
                </Tab>
            </Tabs>
        </Layout>
    );
};

export default TvshowPage;