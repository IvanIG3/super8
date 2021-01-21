import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import GridList from '../../styled/GridList';
import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import ScoreTag from '../../ui/ScoreTag';
import useLanguage from '../../../language/useLanguage';
import { clearState } from '../../../actions/tvshowActions';
import { getTvshowRecommendations } from '../../../actions/tvshowActions';
import { recommendationsSelector } from '../../../selectors/tvshowSelectors';

const TvshowRecommendations = ({ id }) => {
    // Hooks
    const router = useRouter();
    const dispatch = useDispatch();
    const tvs = useSelector(recommendationsSelector);
    const { language } = useLanguage();

    // Get recommendations
    useEffect(() => !tvs &&
        dispatch(getTvshowRecommendations(id, language)), [id, language]);

    // Handle on click
    const handleOnClick = url => {
        dispatch(clearState());
        router.push(url);
    };

    return (
        <GridList xs={2} sm={3} md={4} lg={5}>
            {(tvs || [...Array(20)]).map((tv = {}, idx) =>
                <a
                    key={idx}
                    onClick={() => handleOnClick(tv.url)}
                >
                    <ImageCard
                        src={tv.poster_path}
                        height={750}
                        width={500}
                    >
                        {tv.title || <Skeleton />}
                        {tv.score && <ScoreTag score={tv.score} />}
                    </ImageCard>
                </a>
            )}
        </GridList>
    );
}

export default TvshowRecommendations;