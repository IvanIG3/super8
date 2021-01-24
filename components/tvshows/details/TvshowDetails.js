import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import CollectionButtonsGroup from '../../collections/CollectionButtonsGroup';
import { tvShowSelector, firestoreSelector } from '../../../selectors/tvshowSelectors';
import { getTvshow } from '../../../actions/tvshowActions';
import useLanguage from '../../../language/useLanguage';
import useUpdate from '../../../hooks/useUpdate';

const DetailsContainer = styled.div`
    display: grid;
    gap: 1em;
    grid-auto-flow: row;
    @media (min-width: 576px) {
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr 2fr;
    }
`;

const Info = styled.div`
    margin-bottom: 1em;
    text-align: justify;
    span {
        display: block;
        color: ${props => props.theme.colors.primary};
    }
`;

const TvshowDetails = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const tvshow = useSelector(tvShowSelector);
    const item = useSelector(firestoreSelector);
    const { language } = useLanguage();

    // Fetch tv show details
    useEffect(() => !tvshow && dispatch(getTvshow(id, language)), []);
    useUpdate(() => dispatch(getTvshow(id, language)), [language]);

    return (
        <DetailsContainer>
            <ImageCard
                src={tvshow && tvshow.poster_path}
                height={750}
                width={500}
            >
                <CollectionButtonsGroup item={item}/>
            </ImageCard>
            <div>
                <Info>
                    <span>{t('Type')}</span>{t('tvshow')}
                </Info>
                <Info>
                    <span>{t('Overview')}</span>
                    {tvshow ? tvshow.overview : <Skeleton count={5}/>}
                </Info>
                <Info>
                    <span>{t('Score')}</span>
                    {tvshow ? tvshow.score : <Skeleton />}
                </Info>
                <Info>
                    <span>{t('Release Date')}</span>
                    {tvshow ? tvshow.first_air_date : <Skeleton />}
                </Info>
                <Info>
                    <span>{t('Seasons')}</span>
                    {tvshow ? tvshow.seasons : <Skeleton />}
                </Info>
                <Info>
                    <span>{t('Genres')}</span>
                    {tvshow ? tvshow.genres : <Skeleton />}
                </Info>
            </div>
        </DetailsContainer>
    );
};

TvshowDetails.propTypes = {
    id: PropTypes.string.isRequired
};

export default TvshowDetails;