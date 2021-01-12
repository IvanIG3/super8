import Button from '../styled/Button';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Fingerprint } from '@styled-icons/fa-solid/Fingerprint';

import useAuth from '../../firebase/auth/useAuth';
import UserIcon from '../styled/UserIcon';

const Login = () => {
    // Hooks
    const { t } = useTranslation();
    const router = useRouter();
    const { user, logout } = useAuth();

    // Handle button login
    const handleClick = () => user ? logout() :  router.push('/login');

    return (
        <div style={{ display: 'flex' }}>
            {user && user.displayName &&
                <UserIcon>{user.displayName.charAt(0).toUpperCase()}</UserIcon>}
            <Button onClick={handleClick}>
                <Fingerprint style={{ width: '1em', marginRight: '5px' }} />
                {user ? t('Logout') : t('Login')}
            </Button>
        </div>
    );
};

export default Login;