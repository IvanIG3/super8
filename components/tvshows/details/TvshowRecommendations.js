import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridList from '../../styled/GridList';
import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import ScoreTag from '../../ui/ScoreTag';
import useLanguage from '../../../language/useLanguage';
import { getTvshowRecommendations } from '../../../actions/tvshowActions';
import { recommendationsSelector } from '../../../selectors/tvshowSelectors';

const TvshowRecommendations = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const tvs = useSelector(recommendationsSelector);
    const { language } = useLanguage();

    // Get recommendations
    useEffect(() => !tvs && dispatch(getTvshowRecommendations(id, language)), [language]);

    return (
        <GridList xs={2} sm={3} md={4} lg={5}>
            {(tvs || [...Array(20)]).map((tv = {}, idx) =>
                <Link key={idx} href={tv.url || ""}>
                    <a>
                        <ImageCard
                            src={tv.poster_path}
                            height={750}
                            width={500}
                        >
                            {tv.title || <Skeleton />}
                            {tv.score && <ScoreTag score={tv.score} />}
                        </ImageCard>
                    </a>
                </Link>
            )}
        </GridList>
    );
}

export default TvshowRecommendations;