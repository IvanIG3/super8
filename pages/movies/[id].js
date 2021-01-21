import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

import Layout from '../../components/layout/Layout';
import Skeleton from '../../components/ui/Skeleton';
import Tabs from '../../components/ui/Tabs';
import Tab from '../../components/ui/Tab';
import { clearState } from '../../actions/movieActions';
import useUpdate from '../../hooks/useUpdate';
import { movieSelector } from '../../selectors/movieSelectors';

// Dynamic imports
const DynamicMovieDetails = dynamic(
    () => import('../../components/movies/details/MovieDetails'),
    { ssr: false, loading: () => <Skeleton height="100%" /> }
);
const DynamicMovieCast = dynamic(
    () => import('../../components/movies/details/MovieCast'),
    { ssr: false, loading: () => <Skeleton height="100%" /> }
);
const DynamicMovieRecommendations = dynamic(
    () => import('../../components/movies/details/MovieRecommendations'),
    { ssr: false, loading: () => <Skeleton height="100%" /> }
);

// Get id from params
export async function getServerSideProps({ params: { id } }) {
    return { props: { id } };
};

const MoviePage = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const movie = useSelector(movieSelector);

    // State
    const [tab, setTab] = useState(0);

    // Back to tab 0 when moving to another movie
    useUpdate(() => {
        setTab(0);
        window.scrollTo({top: 0});
    }, [id]);

    // Clear movie on unmount
    useEffect(() => () => dispatch(clearState()), []);

    return (
        <Layout description="Movie details">
            <h1>{movie && movie.title || <Skeleton />}</h1>
            <Tabs idxTab={tab} setIdxTab={setTab}>
                <Tab label={t('Details')}>
                    <DynamicMovieDetails id={id} />
                </Tab>
                <Tab label={t('Cast')}>
                    <DynamicMovieCast id={id} />
                </Tab>
                <Tab label={t('Recommendations')}>
                    <DynamicMovieRecommendations id={id} />
                </Tab>
            </Tabs>
        </Layout>
    );
};

export default MoviePage;