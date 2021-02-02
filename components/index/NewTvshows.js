import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import useUpdate from '../../hooks/useUpdate';
import { newTvshowsList } from '../../actions/indexActions';
import { newTvshowsSelector } from '../../selectors/indexSelectors';
import useLanguage from '../../language/useLanguage';
import HorizontalList from '../styled/HorizontalList';
import ImageCard from '../ui/ImageCard';
import ScoreTag from '../ui/ScoreTag';

const NewTvshows = () => {
    // Hooks
    const dispatch = useDispatch();
    const language = useLanguage();
    const list = useSelector(newTvshowsSelector);

    // Get trending list
    useEffect(() => !list && dispatch(newTvshowsList(language)), []);
    useUpdate(() => dispatch(newTvshowsList(language)), [language]);

    return (
        <HorizontalList>
            {(list || [...Array(20)]).map((item = {}, idx) =>
                <Link href={item.url || ""} key={idx}>
                    <a href={item.url}>
                        <ImageCard
                            src={item.poster_path}
                            height={750}
                            width={500}
                        >
                            {item.score && <ScoreTag score={item.score} />}
                        </ImageCard>
                    </a>
                </Link>
            )}
        </HorizontalList>
    );
}

export default NewTvshows;