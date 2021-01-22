import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import SearchForm from '../../ui/SearchForm';
import actions from '../../../actions/listActions';

const SearchMovies = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // Redux
    const query = useSelector(state => state.movies.query);
    const { setQuery } = actions('movies');

    return (
        <SearchForm
            query={query}
            setQuery={query => dispatch(setQuery(query))}
            placeholder={t('Search for a movie...')}
        />
    );
};

export default React.memo(SearchMovies);