import React from 'react';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';
import Login from './Login';

const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5em;
`; 

const UserBar = () => (
    <UserContainer className="container">
        <LanguageSelector />
        <Login />
    </UserContainer>
);
 
export default React.memo(UserBar);