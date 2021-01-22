import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ContainerTab = styled.div`
    padding: .3em 1em;
    text-align: center;
    border-radius: .2em;
    &:last-of-type {
        margin-bottom: .5em;
    }

    @media (min-width: 768px) {
        margin-bottom: -1px;
        &:last-of-type {
            margin-bottom: -1px;
        }
    }
    
    ${props => props.active && css`
        background-color: ${props => `${props.theme.colors.primary}50`};
        @media (min-width: 768px) {
            background-color: ${props => props.theme.colors.bgcolor};
            border: solid ${props => `${props.theme.colors.textcolor}80`};
            border-width: 1px 1px 0 1px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    `};

    ${props => !props.active && css`
        &:hover {
            cursor: pointer;
            background-color: ${props => `${props.theme.colors.primary}30`};
        }
    `};
`;

const Tab = ({ isActive, setActive, label }) => (
    <ContainerTab active={isActive} onClick={() => setActive()}>
        <span>{label}</span>
    </ContainerTab>
);

Tab.propTypes = {
    isActive: PropTypes.bool,
    setActive: PropTypes.func,
    label: PropTypes.string
};

export default Tab;