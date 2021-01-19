import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { TrendingUp } from '@styled-icons/boxicons-regular/TrendingUp';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { CalendarExclamation } from '@styled-icons/boxicons-regular/CalendarExclamation';

import Button from '../../styled/Button';
import ButtonsGroup from '../../styled/ButtonsGroup';
import actions from '../../../actions/listActions';

const TvshowSortButtons = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // State
    const sortBy = useSelector(state => state.tvshows.sortBy);
    const { setSortBy } = actions('tvshows');

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
                selected={sortBy === 'on_the_air'}
                onClick={() => dispatch(setSortBy('on_the_air'))}
                aria-label={t('on_the_air')}
            >
                <CalendarExclamation style={{ width: "1.5em" }} />
                <span>{t('on_the_air')}</span>
            </Button>
        </ButtonsGroup>
    );
};

export default React.memo(TvshowSortButtons);