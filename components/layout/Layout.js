import Head from 'next/head';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

import NavHeader from './NavHeader';
import UserBar from './UserBar';
import Footer from './Footer';

const BurgerContent = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto auto 1fr auto;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 1em;
`;

const Layout = ({ children, description }) => (
    <>
        <Head>
            <meta name="description" content={description} key="description" />
        </Head>
        <ToastContainer />
        <BurgerContent>
            <NavHeader />
            <UserBar />
            <Main className="container">
                {children}
            </Main>
            <Footer />
        </BurgerContent>
    </>
);

Layout.propTypes = {
    childre: PropTypes.node,
    description: PropTypes.string.isRequired
};

export default Layout;