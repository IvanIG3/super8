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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: .3em;
    padding: .7em 1em;
    font-weight: bold;
    font-size: .8em;
    white-space: nowrap;
    ${props => props.selected ? selected : notselected};

    & > * {
        margin: 0 .3em 0 .3em;
    }

    &:hover {
        ${props => !props.selected && selected}
    }

    &:focus {
        outline: none;
    }
`;