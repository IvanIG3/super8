import styled, { css } from 'styled-components';

const selected = css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.bgcolor};
`;

const notselected = css`
    background-color: rgba(0, 0, 0, 0.2);
    color: ${props => props.theme.colors.primary};
`;

export default styled.button`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: .5em;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: .3em;
    padding: .7em 1em;
    font-weight: bold;
    font-size: .8em;
    white-space: nowrap;
    ${props => props.selected ? selected : notselected}

    &:hover {
        ${props => !props.selected && selected}
    }

    &:focus {
        outline: none;
    }
`;