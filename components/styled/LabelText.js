import styled from 'styled-components';

export default styled.div`
    margin-bottom: 1em;
    text-align: justify;
    span {
        display: block;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
    }
`;