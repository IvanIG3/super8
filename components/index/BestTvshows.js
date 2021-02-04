import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { StarFullOutline } from '@styled-icons/typicons/StarFullOutline';

import { bestTvshowsList } from '../../actions/indexActions';
import { bestTvshowsSelector } from '../../selectors/indexSelectors';
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

const BestTvshows = () => {
    // Hooks
    const { language } = useLanguage();
    const dispatch = useDispatch();
    const tvshows = useSelector(bestTvshowsSelector);

    // Get TV shows
    useEffect(() => !tvshows && dispatch(bestTvshowsList(language)), []);
    useUpdate(() => dispatch(bestTvshowsList(language)), [language]);

    return (
        <div>
            {(tvshows || [...Array(10)]).map((tv = {}, idx) =>
                <Link href={tv.url || ""} key={idx}>
                    <a style={{ position: 'relative', display: 'block' }}>
                        <Banner
                            src={tv.backdrop_path}
                            text={tv.title}
                        />
                        <Score>
                            <Star />
                            {tv.score}
                        </Score>
                    </a>
                </Link>
            )}
        </div>
    );
};

export default BestTvshows;