import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import useLanguage from '../../../language/useLanguage';
import useUpdate from '../../../hooks/useUpdate';
import { getActor } from '../../../actions/actorActions';
import ImageTextGrid from '../../styled/ImageTextGrid';
import LabelText from '../../styled/LabelText';
import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import { actorInfoSelector } from '../../../selectors/actorSelectors';

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
        <ImageTextGrid>
            <ImageCard
                src={actor && actor.profile_path}
                height={750}
                width={500}
            />
            <div>
                <LabelText>
                    <span>{t('Name')}</span>
                    {actor ? actor.name : <Skeleton />}
                </LabelText>
                <LabelText>
                    <span>{t('Birthday')}</span>
                    {actor ? actor.birthday : <Skeleton />}
                </LabelText>
                <LabelText>
                    <span>{t('Place of birth')}</span>
                    {actor ? actor.place_of_birth : <Skeleton />}
                </LabelText>
                <LabelText>
                    <span>{t('Biography')}</span>
                    {actor ? actor.biography : <Skeleton />}
                </LabelText>
            </div>
        </ImageTextGrid>
    );
};

export default ActorDetails;