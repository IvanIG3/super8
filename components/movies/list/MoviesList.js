import React from 'react';
import { useSelector } from 'react-redux';

import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import GridList from '../../styled/GridList';
import { movieListSelector } from '../../../selectors/movieSelectors';

const MoviesList = () => {
    // Redux
    const movies = useSelector(movieListSelector);
    
    return (
        <GridList xs={2} sm={3} md={4} lg={5}>
            {(movies || [...Array(20)]).map((movie={}, idx) =>
                <ImageCard
                    key={idx}
                    src={movie.poster_path}
                    height={750}
                    width={500}
                >
                    {movie.title || <Skeleton />}
                </ImageCard>
            )}
        </GridList>
    );
};
 
export default React.memo(MoviesList);