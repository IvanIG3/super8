import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../components/layout/Layout';
import TvshowSortButtons from '../components/tvshows/list/TvshowSortButtons';
import SearchTvshows from '../components/tvshows/list/SearchTvshows';
import TvshowsList from '../components/tvshows/list/TvshowsList';
import TvshowPaginator from '../components/tvshows/list/TvshowPaginator';

import actions from '../actions/listActions';
import apiTmdb from '../api/tmdb';
import useUpdate from '../hooks/useUpdate';
import useLanguage from '../language/useLanguage';

const TvshowsPage = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { language } = useLanguage();

    // Redux
    let sortBy = useSelector(state => state.tvshows.sortBy);
    const page = useSelector(state => state.tvshows.page);
    const query = useSelector(state => state.tvshows.query);

    // Functions
    const { searchList, sortList, setSortBy } = actions('tvshows');

    const searchTvshows = async () => {
        const tvs = await apiTmdb(`/search/tv`, { query, language, page });
        return { results: tvs.results, totalPages: tvs.total_pages };
    };

    const sortTvshows = async () => {
        const tvs = await apiTmdb(`/tv/${sortBy}`, { language, page });
        return { results: tvs.results, totalPages: tvs.total_pages };
    };

    const getTvshows = () => {
        if (query) {
            dispatch(searchList(searchTvshows));
        } else {
            dispatch(sortList(sortTvshows));
        }
    };

    // Set default list
    if (!sortBy && !query) {
        sortBy = 'popular';
        dispatch(setSortBy('popular'));
        getTvshows();
    }

    // Get update tv shows list when some var changes
    useUpdate(() => getTvshows(), [language, query, sortBy, page]);

    // Back to top
    useUpdate(() => setTimeout(() => window.scrollTo(0, 0), 500), [page]);

    return (
        <Layout description="List of popular and new tv shows">
            <h1>{t('TV Shows')}{sortBy && ` - ${t(sortBy)}`}</h1>
            <TvshowSortButtons />
            <SearchTvshows />
            <TvshowsList />
            <TvshowPaginator />
        </Layout>
    );
};

export default TvshowsPage;