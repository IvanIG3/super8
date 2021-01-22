import { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import GridList from '../../styled/GridList';
import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import { getTvshowCast } from '../../../actions/tvshowActions';
import { castSelector } from '../../../selectors/tvshowSelectors';
import useLanguage from '../../../language/useLanguage';

const SecondaryText = styled.span`
    display: block;
    color: ${props => props.theme.colors.textcolor};
    font-size: .9em;
`;

const TvshowCast = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const cast = useSelector(castSelector);
    const language = useLanguage();

    // Fetch tv cast
    useEffect(() => !cast && dispatch(getTvshowCast(id, language)), [language]);

    return (
        <GridList xs={2} sm={3} md={4} lg={5}>
            {(cast || [...Array(20)]).map((actor = {}, idx) =>
                <Link href={actor.url || ""} key={idx}>
                    <a href={actor.url}>
                        <ImageCard
                            src={actor.profile_path}
                            width={400}
                            height={600}
                        >
                            {actor.name || <Skeleton />}
                            <SecondaryText>
                                {actor.character || <Skeleton />}
                            </SecondaryText>
                        </ImageCard>
                    </a>
                </Link>
            )}
        </GridList>
    );
};

export default TvshowCast;