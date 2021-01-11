import Button from '../styled/Button';
import { useTranslation } from 'react-i18next';
import { Fingerprint } from '@styled-icons/fa-solid/Fingerprint';

const Login = () => {

    const { t } = useTranslation();

    return (
        <Button>
            <Fingerprint style={{
                width: '1em',
                marginRight: '5px'
            }}/>
            {t('Login')}
        </Button>
    );
};
 
export default Login;