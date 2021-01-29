import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../ui/Paginator';
import actions from '../../../actions/listActions';

const ActorsPaginator = () => {
    // Hooks
    const dispatch = useDispatch();

    // Redux
    const page = useSelector(state => state.actors.page);
    const totalPages = useSelector(state => state.actors.totalPages);
    const { setPage } = actions('actors');

    return (
        <Paginator 
            page={page}
            setPage={page => dispatch(setPage(page))}
            totalPages={totalPages}
        />
    );
};

export default React.memo(ActorsPaginator);