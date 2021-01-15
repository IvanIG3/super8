import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { TrendingUp } from '@styled-icons/boxicons-regular/TrendingUp';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { TheaterMasks } from '@styled-icons/fa-solid/TheaterMasks';
import { CalendarExclamation } from '@styled-icons/boxicons-regular/CalendarExclamation';

import Button from '../../styled/Button';
import ButtonsGroup from '../../styled/ButtonsGroup';
import actions from '../../../actions/listActions';

const MovieSortButtons = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // State
    const sortBy = useSelector(state => state.movies.sortBy);
    const { setSortBy } = actions('movies');

    return (
        <ButtonsGroup>
            <Button
                type="button"
                selected={sortBy === 'popular'}
                onClick={() => dispatch(setSortBy('popular'))}
                aria-label={t('popular')}
            >
                <TrendingUp style={{ width: "1.5em" }} />
                <span>{t('popular')}</span>
            </Button>
            <Button
                type="button"
                selected={sortBy === 'top_rated'}
                onClick={() => dispatch(setSortBy('top_rated'))}
                aria-label={t('top_rated')}
            >
                <StarFill style={{ width: "1.5em" }} />
                <span>{t('top_rated')}</span>
            </Button>
            <Button
                type="button"
                selected={sortBy === 'now_playing'}
                onClick={() => dispatch(setSortBy('now_playing'))}
                aria-label={t('now_playing')}
            >
                <TheaterMasks style={{ width: "1.5em" }} />
                <span>{t('now_playing')}</span>
            </Button>
            <Button
                type="button"
                selected={sortBy === 'upcoming'}
                onClick={() => dispatch(setSortBy('upcoming'))}
                aria-label={t('upcoming')}
            >
                <CalendarExclamation style={{ width: "1.5em" }} />
                <span>{t('upcoming')}</span>
            </Button>
        </ButtonsGroup>
    );
};

export default React.memo(MovieSortButtons);