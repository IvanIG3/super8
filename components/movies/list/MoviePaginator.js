import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../ui/Paginator';
import actions from '../../../actions/listActions';

const MoviePaginator = () => {
    // Hooks
    const dispatch = useDispatch();

    // Redux
    const page = useSelector(state => state.movies.page);
    const totalPages = useSelector(state => state.movies.totalPages);

    // Callback
    const { setPage } = actions('movies');
    const setPageCallback = useCallback(page => dispatch(setPage(page)), [page]);

    return (
        <Paginator 
            page={page}
            setPage={setPageCallback}
            totalPages={totalPages}
        />
    );
}

export default React.memo(MoviePaginator);