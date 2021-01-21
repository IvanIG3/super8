import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

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
                    textOff={t('Unmark as seen')}
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
                    textOff={t('Remove from favorites')}
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

export default CollectionButtonsGroup;