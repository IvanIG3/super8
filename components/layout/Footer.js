import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid;
    padding: 15px 0;
    margin-top: 2em;
    position: relative;
`;

const Reference = styled.a`
    display: flex;
    margin: .3em 0;
    font-size: 1rem;
    span {
        margin-left: 5px;
    }
`;

const TmdbLogo = styled.a`
    bottom: 10px;
    right: 0px;
    margin-top: .3em;
    @media (min-width: 600px) {
        position: absolute;
    }
`;

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <FooterContainer className="container">
                <Reference 
                    href="https://github.com/IvanIG3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('Designed & developed by IvanIG3')}
                </Reference>
                <Reference
                    href="https://github.com/IvanIG3/super8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github style={{width: "1em"}}/>
                    <span>{t('View Code')}</span>
                </Reference>
                <TmdbLogo 
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="The Movie Database API"
                >
                    <Image 
                        src="/tmdb.svg" 
                        alt="Logo TMDB"
                        width={60}
                        height={60}
                    />
                </TmdbLogo>
            </FooterContainer>
            
        </footer>
    );
}
 
export default React.memo(Footer);