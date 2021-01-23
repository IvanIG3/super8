import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { SortAlphaDown } from '@styled-icons/bootstrap/SortAlphaDown';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { CameraMovie } from '@styled-icons/boxicons-regular/CameraMovie';
import { TvOutline } from '@styled-icons/evaicons-outline/TvOutline';

import Button from '../../styled/Button';
import ButtonsGroup from '../../ui/ButtonsGroup';
import actions from '../../../actions/listActions';

const CollectionSortButtons = ({ collection }) => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // State
    const sortBy = useSelector(state => state[collection].sortBy);
    const { setSortBy } = actions(collection);

    return (
        <ButtonsGroup
            value={sortBy}
            onClick={value => dispatch(setSortBy(value))}
        >
            <Button value='title'>
                <SortAlphaDown style={{ width: "1.5em" }} />
                <span className='hide'>{t('title')}</span>
            </Button>
            <Button value='vote_average'>
                <StarFill style={{ width: "1.5em" }} />
                <span className='hide'>{t('top_rated')}</span>
            </Button>
            <Button value='movie'>
                <CameraMovie style={{ width: "1.5em" }} />
                <span className='hide'>{t('Movies')}</span>
            </Button>
            <Button value='tvshow'>
                <TvOutline style={{ width: "1.5em" }} />
                <span className='hide'>{t('TV Shows')}</span>
            </Button>
        </ButtonsGroup>
    );
};

export default React.memo(CollectionSortButtons);