import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { Bookmark } from '@styled-icons/boxicons-solid/Bookmark';
import { EyeFill } from '@styled-icons/bootstrap/EyeFill';

import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import GridList from '../../styled/GridList';
import ScoreTag from '../../ui/ScoreTag';
import RibbonTag from '../../ui/RibbonTag';
import { movieListSelector } from '../../../selectors/movieSelectors';
import useFirebaseUserCollection from '../../../firebase/collections/useFirebaseUserCollection';

const MoviesList = () => {
    // Redux
    const movies = useSelector(movieListSelector);
    const [mylist] = useFirebaseUserCollection('mylist');
    const [seen] = useFirebaseUserCollection('seen');

    return (
        <GridList xs={2} sm={3} md={4} lg={5}>
            {(movies || [...Array(20)]).map((movie = {}, idx) =>
                <Link href={movie.url || ""} key={idx}>
                    <a href={movie.url}>
                        <ImageCard
                            src={movie.poster_path}
                            height={750}
                            width={500}
                        >
                            {movie.title || <Skeleton />}
                            {movie.score && <ScoreTag score={movie.score} />}
                            {mylist && mylist.some(item => item.id === movie.id) &&
                                <RibbonTag icon={Bookmark} backgroundColor="#901010" />}
                            {seen && seen.some(item => item.id === movie.id) &&
                                <RibbonTag icon={EyeFill} backgroundColor="#300a99" />}
                        </ImageCard>
                    </a>
                </Link>
            )}
        </GridList>
    );
};

export default React.memo(MoviesList);