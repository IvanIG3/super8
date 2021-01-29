import styled from 'styled-components';

export default styled.div`
    display: grid;
    gap: 1em;
    grid-auto-flow: row;
    @media (min-width: 576px) {
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr 2fr;
    }
`;