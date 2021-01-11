import styled, { css } from 'styled-components';

const selected = css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.bgcolor};
`;

export default styled.button`
    background-color: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: .3em;
    padding: .7em 1em;
    font-weight: bold;
    font-size: .8em;
    white-space: nowrap;

    ${props => props.selected && selected}

    &:hover {
        ${selected}
    }
`;