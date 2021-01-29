import { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { getActorCredits } from '../../../actions/actorActions';
import { actorCreditsSelector } from '../../../selectors/actorSelectors'
import useUpdate from '../../../hooks/useUpdate';
import useLanguage from '../../../language/useLanguage';
import GridList from '../../styled/GridList';
import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';

const ActorCredits = ({ id }) => {
    // Hooks
    const language = useLanguage();
    const dispatch = useDispatch();
    const credits = useSelector(actorCreditsSelector);

    // Fetch actor credits
    useEffect(() => !credits && dispatch(getActorCredits(id, language)), []);
    useUpdate(() => dispatch(getActorCredits(id, language)), [language]);

    return (
        <GridList xs={2} sm={3} md={4} lg={5}>
            {(credits || [...Array(20)]).map((credit = {}, idx) =>
                <Link href={credit.url || ""} key={idx}>
                    <a href={credit.url}>
                        <ImageCard
                            src={credit.poster_path}
                            width={400}
                            height={600}
                        >
                            {credit.title || <Skeleton />}
                        </ImageCard>
                    </a>
                </Link>
            )}
        </GridList>
    );
};
 
export default ActorCredits;