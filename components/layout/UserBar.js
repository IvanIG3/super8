import React from 'react';
import styled from 'styled-components';
import Container from '../../styles/Container';
import LanguageSelector from './LanguageSelector';
import Login from './Login';

const Content = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5em;
`; 

const UserBar = () => (
    <Content>
        <LanguageSelector />
        <Login />
    </Content>
);
 
export default React.memo(UserBar);