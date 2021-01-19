import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import SearchForm from '../../ui/SearchForm';
import actions from '../../../actions/listActions';

const SearchTvshows = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // Redux
    const query = useSelector(state => state.tvshows.query);
    const { setQuery } = actions('tvshows');

    // Callback
    const setQueryCallback = useCallback(
        query => dispatch(setQuery(query)), [query],
    );

    return (
        <SearchForm
            query={query}
            setQuery={setQueryCallback}
            placeholder={t('Search for a Tv Show...')}
        />
    );
}

export default React.memo(SearchTvshows);