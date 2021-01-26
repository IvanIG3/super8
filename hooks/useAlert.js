import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from '@styled-icons/evaicons-solid/AlertTriangle';
import Button from '../components/styled/Button';

const Container = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 2000;
    justify-content: center;
    align-items: center;
`;

const Popup = styled.div`
    flex: 1;
    max-width: 20em;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.bgcolor};
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: .3em;
    padding: 1em;
    box-shadow: 0px 0px 30px 10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 30px 10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 30px 10px rgba(0,0,0,0.75);
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 2em;
`;

const useAlert = (onSuccess) => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const openPopup = () => setVisible(true);

    const handleClick = success => {
        if (success) onSuccess();
        setVisible(false);
    };

    // Component
    const AlertPopup = ({ text }) => {
        if (!visible) return null;
        return (
            <Container>
                <Popup>
                    <AlertTriangle size='1.7em' />
                    <p>{text}</p>
                    <Buttons>
                        <Button type="button" onClick={() => handleClick(true)}>
                            {t('Accept')}
                        </Button>
                        <Button type="button" onClick={() => handleClick(false)} selected autofocus>
                            {t('Cancel')}
                        </Button>
                    </Buttons>
                </Popup>
            </Container>
        );
    };

    return [openPopup, AlertPopup];
};

export default useAlert;