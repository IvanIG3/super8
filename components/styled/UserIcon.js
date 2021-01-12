import styled from 'styled-components';

export default styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, .1);
    font-weight: bold;
    margin: 0 10px;
    padding: 0 1em;
    border-radius: 3em;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.bgcolor};
    }
`;