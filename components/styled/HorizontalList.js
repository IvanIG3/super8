import styled from 'styled-components';

const HorizontalList = styled.div`
    width: 100%;
    overflow: auto;
    white-space: nowrap;
    & > * {
        display: inline-block;
    }
`;

export default HorizontalList;