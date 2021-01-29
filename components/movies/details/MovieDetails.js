import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import ImageCard from '../../ui/ImageCard';
import ImageTextGrid from '../../styled/ImageTextGrid';
import LabelText from '../../styled/LabelText';
import Skeleton from '../../ui/Skeleton';
import CollectionButtonsGroup from '../../collections/CollectionButtonsGroup';
import { movieSelector, firestoreSelector } from '../../../selectors/movieSelectors';
import { getMovie } from '../../../actions/movieActions';
import useLanguage from '../../../language/useLanguage';
import useUpdate from '../../../hooks/useUpdate';

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
        <ImageTextGrid>
            <ImageCard
                src={movie && movie.poster_path}
                height={750}
                width={500}
            >
                <CollectionButtonsGroup item={item} />
            </ImageCard>
            <div>
                <LabelText>
                    <span>{t('Type')}</span>{t('movie')}
                </LabelText>
                <LabelText>
                    <span>{t('Overview')}</span>
                    {movie ? movie.overview : <Skeleton count={5}/>}
                </LabelText>
                <LabelText>
                    <span>{t('Score')}</span>
                    {movie ? movie.score : <Skeleton />}
                </LabelText>
                <LabelText>
                    <span>{t('Release Date')}</span>
                    {movie ? movie.release_date : <Skeleton />}
                </LabelText>
                <LabelText>
                    <span>{t('Runtime')}</span>
                    {movie ? movie.runtime : <Skeleton />}
                </LabelText>
                <LabelText>
                    <span>{t('Genres')}</span>
                    {movie ? movie.genres : <Skeleton />}
                </LabelText>
            </div>
        </ImageTextGrid>
    );
};

MovieDetails.propTypes = {
    id: PropTypes.string.isRequired
};

export default MovieDetails;