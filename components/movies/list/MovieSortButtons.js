import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { TrendingUp } from '@styled-icons/boxicons-regular/TrendingUp';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { TheaterMasks } from '@styled-icons/fa-solid/TheaterMasks';
import { CalendarExclamation } from '@styled-icons/boxicons-regular/CalendarExclamation';

import Button from '../../styled/Button';
import ButtonsGroup from '../../ui/ButtonsGroup';
import actions from '../../../actions/listActions';

const MovieSortButtons = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // State
    const sortBy = useSelector(state => state.movies.sortBy);
    const { setSortBy } = actions('movies');

    return (
        <ButtonsGroup
            value={sortBy}
            onClick={value => dispatch(setSortBy(value))}
        >
            <Button value='popular'>
                <TrendingUp style={{ width: "1.5em" }} />
                <span className='hide'>{t('popular')}</span>
            </Button>
            <Button value='top_rated'>
                <StarFill style={{ width: "1.5em" }} />
                <span className='hide'>{t('top_rated')}</span>
            </Button>
            <Button value='now_playing'>
                <TheaterMasks style={{ width: "1.5em" }} />
                <span className='hide'>{t('now_playing')}</span>
            </Button>
            <Button value='upcoming'>
                <CalendarExclamation style={{ width: "1.5em" }} />
                <span className='hide'>{t('upcoming')}</span>
            </Button>
        </ButtonsGroup>
    );
};

export default React.memo(MovieSortButtons);