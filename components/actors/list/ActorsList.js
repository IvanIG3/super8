import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import GridList from '../../styled/GridList';
import { actorListSelector } from '../../../selectors/actorSelectors';

const ActorsList = () => {
    // Redux
    const actors = useSelector(actorListSelector);

    return (
        <div style={{ flex: '1' }}>
            <GridList xs={2} sm={3} md={4} lg={5}>
                {(actors || [...Array(20)]).map((actor = {}, idx) =>
                    <Link href={actor.url || ""} key={idx}>
                        <a href={actor.url}>
                            <ImageCard
                                src={actor.profile_path}
                                height={750}
                                width={500}
                            >
                                {actor.name || <Skeleton />}
                            </ImageCard>
                        </a>
                    </Link>
                )}
            </GridList>
        </div>
    );
};

export default React.memo(ActorsList);