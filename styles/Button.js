import styled from 'styled-components';

export default styled.button`
    background-color: ${props => 
        props.reverse ? props.theme.colors.secondary : props.theme.colors.primary};
    color: ${props => 
        props.reverse ? props.theme.colors.light : props.theme.colors.dark};
    border: none;
    border-radius: .3em;
    padding: .8em 2em;
    font-weight: bold;
`;