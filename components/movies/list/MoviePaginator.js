import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../ui/Paginator';
import actions from '../../../actions/listActions';

const MoviePaginator = () => {
    // Hooks
    const dispatch = useDispatch();

    // Redux
    const page = useSelector(state => state.movies.page);
    const totalPages = useSelector(state => state.movies.totalPages);
    const { setPage } = actions('movies');

    return (
        <Paginator 
            page={page}
            setPage={page => dispatch(setPage(page))}
            totalPages={totalPages}
        />
    );
};

export default React.memo(MoviePaginator);