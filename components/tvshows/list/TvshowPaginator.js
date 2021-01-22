import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../ui/Paginator';
import actions from '../../../actions/listActions';

const TvshowPaginator = () => {
    // Hooks
    const dispatch = useDispatch();

    // Redux
    const page = useSelector(state => state.tvshows.page);
    const totalPages = useSelector(state => state.tvshows.totalPages);
    const { setPage } = actions('tvshows');

    return (
        <Paginator 
            page={page}
            setPage={page => dispatch(setPage(page))}
            totalPages={totalPages}
        />
    );
}

export default React.memo(TvshowPaginator);