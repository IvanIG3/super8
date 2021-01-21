import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import GridList from '../../styled/GridList';
import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import ScoreTag from '../../ui/ScoreTag';
import useLanguage from '../../../language/useLanguage';
import { clearState } from '../../../actions/movieActions';
import { getMovieRecommendations } from '../../../actions/movieActions';
import { recommendationsSelector } from '../../../selectors/movieSelectors';

const MovieRecommendations = ({ id }) => {
    // Hooks
    const router = useRouter();
    const dispatch = useDispatch();
    const movies = useSelector(recommendationsSelector);
    const { language } = useLanguage();

    // Get recommendations
    useEffect(() => !movies &&
        dispatch(getMovieRecommendations(id, language)), [id, language]);

    // Handle on click
    const handleOnClick = url => {
        dispatch(clearState());
        router.push(url);
    };

    return (
        <GridList xs={2} sm={3} md={4} lg={5}>
            {(movies || [...Array(20)]).map((movie = {}, idx) =>
                <a
                    key={idx}
                    onClick={() => handleOnClick(movie.url)}
                >
                    <ImageCard
                        src={movie.poster_path}
                        height={750}
                        width={500}
                    >
                        {movie.title || <Skeleton />}
                        {movie.score && <ScoreTag score={movie.score} />}
                    </ImageCard>
                </a>
            )}
        </GridList>
    );
}

export default MovieRecommendations;