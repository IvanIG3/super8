import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import { tvShowSelector } from '../../../selectors/tvshowSelectors';
import { getTvshow } from '../../../actions/tvshowActions';
import useLanguage from '../../../language/useLanguage';

const DetailsContainer = styled.div`
    display: grid;
    column-gap: 1em;
    grid-auto-flow: row;
    @media (min-width: 500px) {
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
    const { language } = useLanguage();

    // Fetch tv show details
    useEffect(() => !tvshow && dispatch(getTvshow(id, language)), [id, language]);

    return (
        <DetailsContainer>
            <ImageCard
                src={tvshow && tvshow.poster_path}
                height={750}
                width={500}
            >
                <p>Test</p>
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
}

export default TvshowDetails;