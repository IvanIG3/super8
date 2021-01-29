import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import Layout from '../../components/layout/Layout';
import Skeleton from '../../components/ui/Skeleton';
import Tabs from '../../components/ui/Tabs';
import Tab from '../../components/ui/Tab';
import useUpdate from '../../hooks/useUpdate';
import { clearState } from '../../actions/actorActions';

// Dynamic imports
const DynamicActorDetails = dynamic(
    () => import('../../components/actors/details/ActorDetails'),
    { ssr: false, loading: () => <Skeleton height="100%" /> }
);
const DynamicActorCredits = dynamic(
    () => import('../../components/actors/details/ActorCredits'),
    { ssr: false, loading: () => <Skeleton height="100%" /> }
);


// Get id from params
export async function getServerSideProps({ params: { id } }) {
    return { props: { id } };
};

const ActorsPage = ({ id }) => {
    // Hooks
    const dispatch = useDispatch();
    const { t } = useTranslation();

    // State
    const [tab, setTab] = useState(0);

    // Back to tab 0 when moving to another movie
    useUpdate(() => {
        dispatch(clearState());
        setTab(0);
        window.scrollTo({top: 0});
    }, [id]);

    // Clear movie on unmount
    useEffect(() => () => dispatch(clearState()), []);

    return (
        <Layout description="Actor page details">
            <Tabs idxTab={tab} setIdxTab={setTab}>
                <Tab label={t('Details')}>
                    <DynamicActorDetails id={id} />
                </Tab>
                <Tab label={t('Credits')}>
                    <DynamicActorCredits id={id} />
                </Tab>
            </Tabs>
        </Layout>
    );
};

export default ActorsPage;