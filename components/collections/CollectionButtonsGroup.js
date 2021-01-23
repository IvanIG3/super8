import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { BookmarkCheckFill } from '@styled-icons/bootstrap/BookmarkCheckFill';
import { BookmarkDashFill } from '@styled-icons/bootstrap/BookmarkDashFill';
import { EyeFill } from '@styled-icons/bootstrap/EyeFill';
import { EyeSlashFill } from '@styled-icons/bootstrap/EyeSlashFill';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { Poo } from '@styled-icons/fa-solid/Poo';

import Skeleton from '../ui/Skeleton';
import CollectionButton from './CollectionButton';
import useFirebaseUserCollection from '../../firebase/collections/useFirebaseUserCollection';

const Container = styled.div`
    display: grid;
    row-gap: .3em;
    width: 100%;
`;

const CollectionButtonsGroup = ({ item }) => {
    // Hooks
    const { t } = useTranslation();
    const [mylist, addToMyList, removeFromMyList] = useFirebaseUserCollection('mylist');
    const [seenlist, addToSeen, removeFromSeen] = useFirebaseUserCollection('seen');
    const [favorites, addToFavorites, removeFromFavorites] = useFirebaseUserCollection('favorites');

    const handleAddMyList = () => {
        addToMyList(item);
        removeFromSeen(item.id);
    };

    const handleAddToSeen = () => {
        addToSeen(item);
        removeFromMyList(item.id);
    };

    return (
        <Container>
            {mylist && item ?
                <CollectionButton
                    textOn={t('Add to My List')}
                    IconOn={BookmarkCheckFill}
                    IconOff={BookmarkDashFill}
                    textOff={t('Remove from My List')}
                    onCheck={handleAddMyList}
                    onUncheck={() => removeFromMyList(item.id)}
                    active={mylist.some(i => i.id === item.id)}
                />
                :
                <Skeleton />
            }
            {seenlist && item ?
                <CollectionButton
                    textOn={t('Mark as seen')}
                    IconOn={EyeFill}
                    textOff={t('Unmark as seen')}
                    IconOff={EyeSlashFill}
                    onCheck={handleAddToSeen}
                    onUncheck={() => removeFromSeen(item.id)}
                    active={seenlist.some(i => i.id === item.id)}
                />
                :
                <Skeleton />
            }
            {favorites && item ?
                <CollectionButton
                    textOn={t('Mark as favorite')}
                    IconOn={StarFill}
                    textOff={t('Remove from favorites')}
                    IconOff={Poo}
                    onCheck={() => addToFavorites(item)}
                    onUncheck={() => removeFromFavorites(item.id)}
                    active={favorites.some(i => i.id === item.id)}
                />
                :
                <Skeleton />
            }
        </Container>
    );
};

CollectionButtonsGroup.propTypes = {
    item: PropTypes.object
};

export default CollectionButtonsGroup;