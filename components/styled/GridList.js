import styled, { css } from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 3em;
    margin-bottom: 3em;
    row-gap: 3em;
    column-gap: 2px;

    ${props => props.xs && css`
        grid-template-columns: repeat(${props => props.xs}, 1fr);
    `}

    ${props => props.sm && css`
        @media (min-width: 576px) {
            grid-template-columns: repeat(${props => props.sm}, 1fr);
        }
    `}

    ${props => props.md && css`
        @media (min-width: 768px) {
            grid-template-columns: repeat(${props => props.md}, 1fr);
        }
    `}

    ${props => props.lg && css`
        @media (min-width: 992px) {
            grid-template-columns: repeat(${props => props.lg}, 1fr);
        }
    `}

    ${props => props.xl && css`
        @media (min-width: 1200px) {
            grid-template-columns: repeat(${props => props.xl}, 1fr);
        }
    `}
`;