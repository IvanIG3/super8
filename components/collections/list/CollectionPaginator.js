import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../ui/Paginator';
import actions from '../../../actions/listActions';

const CollectionPaginator = ({ collection }) => {
    // Hooks
    const dispatch = useDispatch();

    // Redux
    const page = useSelector(state => state[collection] && state[collection].page);
    const totalPages = useSelector(state => state[collection] && state[collection].totalPages);
    const { setPage } = actions(collection);

    return (
        <Paginator 
            page={page || 1}
            setPage={page => dispatch(setPage(page))}
            totalPages={totalPages || 1}
        />
    );
};

export default React.memo(CollectionPaginator);