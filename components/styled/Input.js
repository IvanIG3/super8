import styled from 'styled-components';

export default styled.input`
    appearance: none;
    -webkit-appearance: none;
    color: black;
    padding: .5em 1em;
    font-size: 1em;
    width: 100%;
    border-radius: .3em;
    border: 2px solid ${props => props.theme.colors.textcolor};
    background-color: ${props => props.theme.colors.textcolor};
    color: ${props => props.theme.colors.bgcolor};

    &:focus{
        outline: none;
    }

    &::placeholder{
        opacity: 1;
    }
`;