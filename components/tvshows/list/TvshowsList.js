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
import { tvshowListSelector } from '../../../selectors/tvshowSelectors';
import useFirebaseUserCollection from '../../../firebase/collections/useFirebaseUserCollection';

const TvshowsList = () => {
    // Redux
    const tvshows = useSelector(tvshowListSelector);
    const [mylist] = useFirebaseUserCollection('mylist');
    const [seen] = useFirebaseUserCollection('seen');

    return (
        <div style={{ flex: '1' }}>
            <GridList xs={2} sm={3} md={4} lg={5}>
                {(tvshows || [...Array(20)]).map((tv = {}, idx) =>
                    <Link href={tv.url || ""} key={idx}>
                        <a href={tv.url}>
                            <ImageCard
                                src={tv.poster_path}
                                height={750}
                                width={500}
                            >
                                {tv.title || <Skeleton />}
                                {tv.score && <ScoreTag score={tv.score} />}
                                {mylist && mylist.some(item => item.id === tv.id) &&
                                    <RibbonTag icon={Bookmark} backgroundColor="#901010" />}
                                {seen && seen.some(item => item.id === tv.id) &&
                                    <RibbonTag icon={EyeFill} backgroundColor="#300a99" />}
                            </ImageCard>
                        </a>
                    </Link>
                )}
            </GridList>
        </div>
    );
};

export default React.memo(TvshowsList);