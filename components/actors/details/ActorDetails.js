import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import useLanguage from '../../../language/useLanguage';
import useUpdate from '../../../hooks/useUpdate';
import { getActor } from '../../../actions/actorActions';
import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import { actorInfoSelector } from '../../../selectors/actorSelectors';

const DetailsContainer = styled.div`
    display: grid;
    gap: 1em;
    grid-auto-flow: row;
    @media (min-width: 576px) {
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr 2fr;
    }
`;

const Info = styled.div`
    margin-bottom: 1em;
    text-align: justify;
    span {
        display: block;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
    }
`;

const ActorDetails = ({ id }) => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { language } = useLanguage();
    const actor = useSelector(actorInfoSelector);

    // Get actor info
    useEffect(() => !actor && dispatch(getActor(id, language)), []);
    useUpdate(() => dispatch(getActor(id, language)), [language]);

    return (
        <DetailsContainer>
            <ImageCard
                src={actor && actor.profile_path}
                height={750}
                width={500}
            />
            <div>
                <Info>
                    <span>{t('Name')}</span>
                    {actor ? actor.name : <Skeleton />}
                </Info>
                <Info>
                    <span>{t('Birthday')}</span>
                    {actor ? actor.birthday : <Skeleton />}
                </Info>
                <Info>
                    <span>{t('Place of birth')}</span>
                    {actor ? actor.place_of_birth : <Skeleton />}
                </Info>
                <Info>
                    <span>{t('Biography')}</span>
                    {actor ? actor.biography : <Skeleton />}
                </Info>
            </div>
        </DetailsContainer>
    );
};

export default ActorDetails;