import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ThMenu } from '@styled-icons/typicons/ThMenu';
import NavLink from './NavLink';

const FixedTop = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

const NavContainer = styled.div`
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Blurrer = styled.div`
    height: 140%;
    top: -30%;
    left: -30%;
    right: -30%;
    position: absolute;
    overflow: hidden;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    z-index: -500;
    background-color: ${props => props.theme.colors.bgcolor};
    background-size: cover;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
`;

const Logo = styled.a`
    margin: 0;
    font-size: 1.5em;
    @media (min-width: 576px) {
        font-size: 2em;
    }
    @media (min-width: 768px) {
        font-size: 2.5em;
    }
`;

const Button = styled(ThMenu)`
    width: 1.5em;
    display: inline-block;
    margin-bottom: 1px;
    @media (min-width: 768px) {
        display: none;
    }
`;

const Nav = styled.nav`
    display: ${props => props.opened ? "flex" : "none"};;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
`;

const NavHeader = () => {
    // State
    const [opened, setOpened] = useState(false);

    // Hooks
    const { t } = useTranslation();
    const router = useRouter();

    // Effec
    useEffect(() => setOpened(false), [router]);

    return (
        <div>
            <div style={{ height: "80px" }}></div>
            <FixedTop>
                <NavContainer className="container">
                    <Blurrer></Blurrer>
                    <Menu>
                        <Link href="/">
                            <Logo>SUPER8</Logo>
                        </Link>
                        <Button onClick={() => setOpened(!opened)} />
                    </Menu>
                    <Nav opened={opened}>
                        <NavLink href="/movies">{t('Movies')}</NavLink>
                        <NavLink href="/tvshows">{t('TV Shows')}</NavLink>
                        <NavLink href="/actors">{t('Actors')}</NavLink>
                        <NavLink href="/collections/mylist">{t('My List')}</NavLink>
                        <NavLink href="/collections/seen">{t('Seen')}</NavLink>
                        <NavLink href="/collections/favorites">{t('Favorites')}</NavLink>
                    </Nav>
                </NavContainer>
            </FixedTop>
        </div>
    );
};

export default React.memo(NavHeader);