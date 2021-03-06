import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../components/layout/Layout';
import MovieSortButtons from '../components/movies/list/MovieSortButtons';
import SearchMovies from '../components/movies/list/SearchMovies';
import MoviesList from '../components/movies/list/MoviesList';
import MoviePaginator from '../components/movies/list/MoviePaginator';

import actions from '../actions/listActions';
import apiTmdb from '../api/tmdb';
import useUpdate from '../hooks/useUpdate';
import useLanguage from '../language/useLanguage';

const MoviesPage = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { language } = useLanguage();

    // Redux
    let sortBy = useSelector(state => state.movies.sortBy);
    const page = useSelector(state => state.movies.page);
    const query = useSelector(state => state.movies.query);

    // Functions
    const { searchList, sortList, setSortBy } = actions('movies');

    const searchMovies = async () => {
        const movies = await apiTmdb(`/search/movie`, { query, language, page });
        return { results: movies.results, totalPages: movies.total_pages };
    };

    const sortMovies = async () => {
        const movies = await apiTmdb(`/movie/${sortBy}`, { language, page });
        return { results: movies.results, totalPages: movies.total_pages };
    };

    const getMovies = () => {
        if (query) {
            dispatch(searchList(searchMovies));
        } else {
            dispatch(sortList(sortMovies));
        }
    };

    // Set default list
    useEffect(() => !sortBy && !query && dispatch(setSortBy('popular')), []);

    // Get update movies list when some var changes
    useUpdate(() => getMovies(), [language, query, sortBy, page]);

    // Back to top
    useUpdate(() => 
        setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 500), 
        [page]
    );

    return (
        <Layout description="List of popular and new movies">
            <h1>{t('Movies')}{sortBy && ` - ${t(sortBy)}`}</h1>
            <MovieSortButtons />
            <SearchMovies />
            <MoviesList />
            <MoviePaginator />
        </Layout>
    );
};

export default MoviesPage;