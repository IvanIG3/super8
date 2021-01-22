import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { TrendingUp } from '@styled-icons/boxicons-regular/TrendingUp';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { CalendarExclamation } from '@styled-icons/boxicons-regular/CalendarExclamation';

import Button from '../../styled/Button';
import ButtonsGroup from '../../ui/ButtonsGroup';
import actions from '../../../actions/listActions';

const TvshowSortButtons = () => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();

    // State
    const sortBy = useSelector(state => state.tvshows.sortBy);
    const { setSortBy } = actions('tvshows');

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
            <Button value='on_the_air'>
                <CalendarExclamation style={{ width: "1.5em" }} />
                <span className='hide'>{t('on_the_air')}</span>
            </Button>
        </ButtonsGroup>
    );
};

export default React.memo(TvshowSortButtons);