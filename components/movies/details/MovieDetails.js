import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import { movieSelector } from '../../../selectors/movieSelectors';
import { getMovie } from '../../../actions/movieActions';
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

const MovieDetails = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const movie = useSelector(movieSelector);
    const { language } = useLanguage();

    // Fetch movie details
    useEffect(() => !movie && dispatch(getMovie(id, language)), [id, language]);

    return (
        <DetailsContainer>
            <ImageCard
                src={movie && movie.poster_path}
                height={750}
                width={500}
            >
                <p>Test</p>
            </ImageCard>
            <div>
                <Info>
                    <span>{t('Type')}</span>{t('movie')}
                </Info>
                <Info>
                    <span>{t('Overview')}</span>
                    {movie ? movie.overview : <Skeleton count={5}/>}
                </Info>
                <Info>
                    <span>{t('Score')}</span>
                    {movie ? movie.score : <Skeleton />}
                </Info>
                <Info>
                    <span>{t('Release Date')}</span>
                    {movie ? movie.release_date : <Skeleton />}
                </Info>
                <Info>
                    <span>{t('Runtime')}</span>
                    {movie ? movie.runtime : <Skeleton />}
                </Info>
                <Info>
                    <span>{t('Genres')}</span>
                    {movie ? movie.genres : <Skeleton />}
                </Info>
            </div>
        </DetailsContainer>
    );
}

export default MovieDetails;