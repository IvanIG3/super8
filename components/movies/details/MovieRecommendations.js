import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import GridList from '../../styled/GridList';
import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import ScoreTag from '../../ui/ScoreTag';
import useLanguage from '../../../language/useLanguage';
import { getMovieRecommendations } from '../../../actions/movieActions';
import { recommendationsSelector } from '../../../selectors/movieSelectors';

const MovieRecommendations = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const movies = useSelector(recommendationsSelector);
    const { language } = useLanguage();

    // Get recommendations
    useEffect(() => !movies && dispatch(getMovieRecommendations(id, language)), [language]);

    return (
        <GridList xs={2} sm={3} md={4} lg={5}>
            {(movies || [...Array(20)]).map((movie = {}, idx) =>
                <Link href={movie.url || ""} key={idx}>
                    <a>
                        <ImageCard
                            src={movie.poster_path}
                            height={750}
                            width={500}
                        >
                            {movie.title || <Skeleton />}
                            {movie.score && <ScoreTag score={movie.score} />}
                        </ImageCard>
                    </a>
                </Link>
            )}
        </GridList>
    );
};

MovieRecommendations.propTypes = {
    id: PropTypes.string.isRequired
};

export default MovieRecommendations;