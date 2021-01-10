import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Container from '../../styles/Container';
import NavHeader from './NavHeader';
import UserBar from './UserBar';
import Footer from './Footer';

const ContainerLayout = styled.div`
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.body};
`;

const BurgerContent = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto auto 1fr auto;
`;

const Layout = ({ children, description }) => {

    const DynamicToastContainer = dynamic(() =>
        import('react-toastify').then(imp => imp.ToastContainer));

    return (
        <>
            <Head>
                <meta name="description" content={description} key="description" />
            </Head>
            <DynamicToastContainer />
            <ContainerLayout>
                <BurgerContent>
                    <NavHeader />
                    <UserBar />
                    <main>
                        <Container>
                            {children}
                        </Container>
                    </main>
                    <Footer />
                </BurgerContent>
            </ContainerLayout>
        </>
    );
};

export default Layout;