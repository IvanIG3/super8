import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import SearchForm from '../../ui/SearchForm';
import actions from '../../../actions/listActions';

const CollectionSearch = ({ collection }) => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // Redux
    const query = useSelector(state => state[collection] && state[collection].query);
    const { setQuery } = actions(collection);

    return (
        <SearchForm
            query={query}
            setQuery={query => dispatch(setQuery(query))}
            placeholder={t('Search for the title...')}
        />
    );
};

export default React.memo(CollectionSearch);