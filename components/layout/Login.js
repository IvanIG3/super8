import Button from '../styled/Button';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Fingerprint } from '@styled-icons/fa-solid/Fingerprint';
import styled from 'styled-components';
import useAuth from '../../firebase/auth/useAuth';
import SpinnerDots from '../../components/ui/SpinnerDots';

const UserIcon = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, .2);
    font-weight: bold;
    margin: 0 10px;
    padding: 0 .8em;
    border-radius: 3em;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.bgcolor};
    }
`;

const userIcon = user => user && user.displayName ?
    <UserIcon>{user.displayName.charAt(0).toUpperCase()}</UserIcon> : null;

const Login = () => {
    // Hooks
    const { t } = useTranslation();
    const router = useRouter();
    const { user, logout } = useAuth();

    // Handle button login
    const handleClick = () => user ? logout() : user != 0 && router.push('/login');

    return (
        <div style={{ display: 'flex' }}>
            {userIcon(user)}
            <Button onClick={handleClick}>
                <Fingerprint style={{ width: '1em' }} />
                {user ? t('Logout') : user != 0 ? t('Login') : <SpinnerDots />}
            </Button>
        </div>
    );
};

export default Login;