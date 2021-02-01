import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import useUpdate from '../../hooks/useUpdate';
import { trendingList } from '../../actions/indexActions';
import { trendingSelector } from '../../selectors/indexSelectors';
import useLanguage from '../../language/useLanguage';
import ImageSlider from '../ui/ImageSlider';
import ImageSlide from '../ui/ImageSlide';
import Skeleton from '../ui/Skeleton';

const Container = styled.div`
    margin: 2em 0;
`;

const Trending = () => {
    // Hooks
    const router = useRouter();
    const dispatch = useDispatch();
    const language = useLanguage();
    const list = useSelector(trendingSelector);

    // Get trending list
    useEffect(() => !list && dispatch(trendingList(language)), []);
    useUpdate(() => dispatch(trendingList(language)), [language]);

    return (
        <Container>
            {list ?
                <ImageSlider>
                    {list.map((item, idx) =>
                        <ImageSlide
                            key={idx}
                            src={item.backdrop_path}
                            height={1350}
                            width={2400}
                            title={item.title}
                            onClick={() => router.push(item.url)}
                        />
                    )}
                </ImageSlider>
                :
                <>
                    <Skeleton scale={1350/2400}/>
                    <Skeleton height='4em'/>
                </>
            }
        </Container>
    );
};

export default Trending;