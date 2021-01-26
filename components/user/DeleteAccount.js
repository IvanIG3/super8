import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import Button from '../styled/Button';
import useAuth from '../../firebase/auth/useAuth';
import getUserCollection from '../../firebase/collections/getUserCollection';
import useAlert from '../../hooks/useAlert';

const Container = styled.div`
    display: grid;
    @media (min-width: 576px) {
        display: block;
    }
`;

const DeleteAccount = () => {
    const { t } = useTranslation();
    const { user } = useAuth();
    const [openPopup, AlertPopup] = useAlert(async () => {
        try {
            const userRef = await getUserCollection(user);
            await userRef.delete();
            await user.delete();
        } catch (error) {
            toast.error(error.message);
        }
    });

    return (
        <Container>
            <AlertPopup text={t('Are you sure? This operation cannot be reverted.')} />
            <p>{t("Delete this account. Be careful, this operation can't be reverted.")}</p>
            <Button type="button" onClick={() => openPopup()}>
                {t('Delete account')}
            </Button>
        </Container>
    );
};

export default DeleteAccount;