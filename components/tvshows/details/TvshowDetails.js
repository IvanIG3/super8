import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import ImageCard from '../../ui/ImageCard';
import Skeleton from '../../ui/Skeleton';
import ImageTextGrid from '../../styled/ImageTextGrid';
import LabelText from '../../styled/LabelText';
import CollectionButtonsGroup from '../../collections/CollectionButtonsGroup';
import { tvShowSelector, firestoreSelector } from '../../../selectors/tvshowSelectors';
import { getTvshow } from '../../../actions/tvshowActions';
import useLanguage from '../../../language/useLanguage';
import useUpdate from '../../../hooks/useUpdate';

const TvshowDetails = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const tvshow = useSelector(tvShowSelector);
    const item = useSelector(firestoreSelector);
    const { language } = useLanguage();

    // Fetch tv show details
    useEffect(() => !tvshow && dispatch(getTvshow(id, language)), []);
    useUpdate(() => dispatch(getTvshow(id, language)), [language]);

    return (
        <ImageTextGrid>
            <ImageCard
                src={tvshow && tvshow.poster_path}
                height={750}
                width={500}
            >
                <CollectionButtonsGroup item={item}/>
            </ImageCard>
            <div>
                <LabelText>
                    <span>{t('Type')}</span>{t('tvshow')}
                </LabelText>
                <LabelText>
                    <span>{t('Overview')}</span>
                    {tvshow ? tvshow.overview : <Skeleton count={5}/>}
                </LabelText>
                <LabelText>
                    <span>{t('Score')}</span>
                    {tvshow ? tvshow.score : <Skeleton />}
                </LabelText>
                <LabelText>
                    <span>{t('Release Date')}</span>
                    {tvshow ? tvshow.first_air_date : <Skeleton />}
                </LabelText>
                <LabelText>
                    <span>{t('Seasons')}</span>
                    {tvshow ? tvshow.seasons : <Skeleton />}
                </LabelText>
                <LabelText>
                    <span>{t('Genres')}</span>
                    {tvshow ? tvshow.genres : <Skeleton />}
                </LabelText>
            </div>
        </ImageTextGrid>
    );
};

TvshowDetails.propTypes = {
    id: PropTypes.string.isRequired
};

export default TvshowDetails;