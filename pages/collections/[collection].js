import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../components/layout/Layout';
import CollectionSortButtons from '../../components/collections/list/CollectionSortButtons';
import CollectionSearch from '../../components/collections/list/CollectionSearch';
import CollectionList from '../../components/collections/list/CollectionList';
import CollectionPaginator from '../../components/collections/list/CollectionPaginator';

import actions from '../../actions/listActions';
import useUpdate from '../../hooks/useUpdate';
import useLanguage from '../../language/useLanguage';
import useFirebaseUserCollection from '../../firebase/collections/useFirebaseUserCollection';

// Props
const PER_PAGE = 20;

// Get collection from params
export async function getServerSideProps({ params: { collection } }) {
    return { props: { collection } };
};

const CollectionPage = ({ collection }) => {
    // Hooks
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { language } = useLanguage();
    const [collectionList] = useFirebaseUserCollection(collection);

    // Redux
    let sortBy = useSelector(state => state[collection].sortBy);
    const page = useSelector(state => state[collection].page);
    const query = useSelector(state => state[collection].query);
    const { searchList, sortList, setSortBy } = actions(collection);

    // Filter functions
    const search = () => {
        const q = query.toLowerCase();
        const matches = collectionList.filter(item => item.title.toLowerCase().includes(q));
        const results = matches.slice((page - 1) * PER_PAGE, page * PER_PAGE);
        const totalPages = Math.ceil(matches.length / PER_PAGE);
        return { results, totalPages };
    };

    const sort = () => {
        let sortedlist = collectionList.slice().sort((a, b) =>
            sortBy === 'vote_average' ?
                b.score - a.score :
                a.title.localeCompare(b.title)
        );
        if (sortBy === 'tvshow' || sortBy === 'movie') {
            sortedlist = collectionList.filter(i => i.type === sortBy);
        }
        const results = sortedlist.slice((page - 1) * PER_PAGE, page * PER_PAGE);
        const totalPages = Math.ceil(sortedlist.length / PER_PAGE);
        return { results, totalPages };
    };

    const getItems = () => {
        if (collectionList) {
            if (query) {
                dispatch(searchList(search));
            } else {
                dispatch(sortList(sort));
            }
        }
    };

    // Set default sort
    useEffect(() => !sortBy && !query && dispatch(setSortBy('title')), [collection]);

    // Update list when some var changes
    useUpdate(() => getItems(), [language, query, sortBy, page, collectionList]);

    // Back to top when moving to another page
    useUpdate(() =>
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 500),
        [page]
    );

    return (
        <Layout description="List of movies and tv shows picked up by the user">
            <h1>{t(collection)}{sortBy && ` - ${t(sortBy)}`}</h1>
            <CollectionSortButtons collection={collection} />
            <CollectionSearch collection={collection} />
            <CollectionList collection={collection} />
            <CollectionPaginator collection={collection} />
        </Layout>
    );
};

export default CollectionPage;