import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../ui/Paginator';
import actions from '../../../actions/listActions';

const TvshowPaginator = () => {
    // Hooks
    const dispatch = useDispatch();

    // Redux
    const page = useSelector(state => state.tvshows.page);
    const totalPages = useSelector(state => state.tvshows.totalPages);

    // Callback
    const { setPage } = actions('tvshows');
    const setPageCallback = useCallback(page => dispatch(setPage(page)), [page]);

    return (
        <Paginator 
            page={page}
            setPage={setPageCallback}
            totalPages={totalPages}
        />
    );
}

export default React.memo(TvshowPaginator);