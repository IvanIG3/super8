import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import GridList from '../components/styled/GridList';
import useTheme from '../styles/themes/useTheme';

const ButtonList = styled(GridList)`
    row-gap: 1em;
    column-gap: 1em;
    margin: 1em 0;
`;

const SampleButton = styled.div`
    padding: 1em 0;
    text-align: center;
    border-radius: .3em;
    font-weight: bold;
    font-size: 1em;
    border: 3px solid ${props => props.primary};
    background-color: ${props => props.bgcolor};
    color: ${props => props.textcolor};

    &:hover {
        cursor: pointer;
    }
`;

const UserPage = () => {
    // Hooks
    const { t } = useTranslation();
    const { themes, setTheme } = useTheme();

    return (
        <Layout description="User page configuration">
            <h1>{t('User page')}</h1>
            <h2 className="underline">{t('Themes')}</h2>
            <ButtonList xs={1} sm={3} md={4} lg={5}>
                {themes.map((t, idx) =>
                    <SampleButton
                        key={idx}
                        primary={t.primary}
                        bgcolor={t.bgcolor}
                        textcolor={t.textcolor}
                        onClick={() => setTheme(t.theme)}
                    >
                        {t.name}
                    </SampleButton>
                )}
            </ButtonList>
        </Layout>
    );
}

export default UserPage;