import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import useAuth from '../../../firebase/auth/useAuth';
import { collectionListSelector } from '../../../selectors/collectionSelectors';
import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import GridList from '../../styled/GridList';
import ScoreTag from '../../ui/ScoreTag';
import Login from '../../layout/Login';

const LoginSuggestion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CollectionList = ({ collection }) => {
    const { user } = useAuth();
    const { t } = useTranslation();
    const list = useSelector(state => state[collection] && state[collection].list);
    return (
        <div style={{ flex: '1' }}>
            {user || user === 0 ?
                <GridList xs={2} sm={3} md={4} lg={5}>
                    {(list || [...Array(20)]).map((item = {}, idx) =>
                        <Link href={item.url || ""} key={idx}>
                            <a href={item.url}>
                                <ImageCard
                                    src={item.poster_path}
                                    height={750}
                                    width={500}
                                >
                                    {item.title || <Skeleton />}
                                    {item.score && <ScoreTag score={item.score} />}
                                </ImageCard>
                            </a>
                        </Link>
                    )}
                </GridList>
                :
                <LoginSuggestion>
                    <div style={{ marginBottom: '2em' }}>
                        <p style={{ textAlign: 'center' }}>
                            {t("Login to see your list of movies and TV shows")}
                        </p>
                        <Login />
                    </div>
                </LoginSuggestion>
            }
        </div>
    );
};

export default React.memo(CollectionList);