import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../components/layout/Layout';
import SearchActors from '../components/actors/list/SearchActors';
import ActorsList from '../components/actors/list/ActorsList';
import ActorsPaginator from '../components/actors/list/ActorsPaginator';

import actions from '../actions/listActions';
import apiTmdb from '../api/tmdb';
import useUpdate from '../hooks/useUpdate';
import useLanguage from '../language/useLanguage';

const ActorsPage = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { language } = useLanguage();

    // Redux
    const page = useSelector(state => state.actors.page);
    const query = useSelector(state => state.actors.query);

    // Functions
    const { searchList, sortList } = actions('actors');

    const searchActors = async () => {
        const actors = await apiTmdb(`/search/person`, { query, language, page });
        return { results: actors.results, totalPages: actors.total_pages };
    };

    const sortActors = async () => {
        const actors = await apiTmdb(`/person/popular`, { language, page });
        return { results: actors.results, totalPages: actors.total_pages };
    };

    const getMovies = () => {
        if (query) {
            dispatch(searchList(searchActors));
        } else {
            dispatch(sortList(sortActors));
        }
    };

    // Get actors
    useEffect(() => getMovies(), [language, query, page]);

    // Back to top on page change
    useUpdate(() => 
        setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 500), 
        [page]
    );

    return (
        <Layout description="List of actors and actresses">
            <h1>{t('Actors')}</h1>
            <SearchActors />
            <ActorsList />
            <ActorsPaginator />
        </Layout>
    );
};

export default ActorsPage;