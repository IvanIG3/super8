import React, { useCallback } from 'react';
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

    // Callback
    const setQueryCallback = useCallback(
        query => dispatch(setQuery(query)), [query],
    );

    return (
        <SearchForm
            query={query}
            setQuery={setQueryCallback}
            placeholder={t('Search for a movie...')}
        />
    );
}

export default React.memo(SearchMovies);