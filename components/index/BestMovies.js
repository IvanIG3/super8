import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { StarFullOutline } from '@styled-icons/typicons/StarFullOutline';

import { bestMoviesList } from '../../actions/indexActions';
import { bestMoviesSelector } from '../../selectors/indexSelectors';
import useUpdate from '../../hooks/useUpdate';
import useLanguage from '../../language/useLanguage';
import Banner from '../ui/Banner';

const Score = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 4em;
    font-weight: bold;
    border-radius: 0 .3em .3em 0;
    background-color: rgba(0, 0, 0, .6);
`;

const Star = styled(StarFullOutline)`
    color: ${props => props.theme.colors.primary};
    width: 1em;
`;

const BestMovies = () => {
    // Hooks
    const { language } = useLanguage();
    const dispatch = useDispatch();
    const movies = useSelector(bestMoviesSelector);

    // Get movies
    useEffect(() => !movies && dispatch(bestMoviesList(language)), []);
    useUpdate(() => dispatch(bestMoviesList(language)), [language]);

    return (
        <div>
            {(movies || [...Array(10)]).map((movie = {}, idx) =>
                <Link href={movie.url || ""} key={idx}>
                    <a style={{ position: 'relative', display: 'block' }}>
                        <Banner
                            src={movie.backdrop_path}
                            text={movie.title}
                        />
                        <Score>
                            <Star />
                            {movie.score}
                        </Score>
                    </a>
                </Link>
            )}
        </div>
    );
};

export default BestMovies;