import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import SearchForm from '../../ui/SearchForm';
import actions from '../../../actions/listActions';

const SearchActors = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // Redux
    const query = useSelector(state => state.actors.query);
    const { setQuery } = actions('actors');

    return (
        <SearchForm
            query={query}
            setQuery={query => dispatch(setQuery(query))}
            placeholder={t('Search for an actor/actress...')}
        />
    );
};

export default React.memo(SearchActors);