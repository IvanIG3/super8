import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: center;
    button {
        border-radius: 0!important;
        &:first-of-type {
            border-bottom-left-radius: .3em!important;
            border-top-left-radius: .3em!important;
        }
        &:last-of-type {
            border-bottom-right-radius: .3em!important;
            border-top-right-radius: .3em!important;
        }
    }
    span {
        display: none;
        @media (min-width: 768px) {
            display: inline-block;
        }
    }
`;