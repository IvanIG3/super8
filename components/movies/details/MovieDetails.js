import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import CollectionButtonsGroup from '../../collections/CollectionButtonsGroup';
import { movieSelector, firestoreSelector } from '../../../selectors/movieSelectors';
import { getMovie } from '../../../actions/movieActions';
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

const MovieDetails = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const movie = useSelector(movieSelector);
    const item = useSelector(firestoreSelector);
    const { language } = useLanguage();

    // Fetch movie details
    useEffect(() => !movie && dispatch(getMovie(id, language)), []);
    useUpdate(() => dispatch(getMovie(id, language)), [language]);

    return (
        <DetailsContainer>
            <ImageCard
                src={movie && movie.poster_path}
                height={750}
                width={500}
            >
                <CollectionButtonsGroup item={item} />
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
};

MovieDetails.propTypes = {
    id: PropTypes.string.isRequired
};

export default MovieDetails;