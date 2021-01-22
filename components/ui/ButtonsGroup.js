import { Children, cloneElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Buttons = styled.div`
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
    .hide {
        display: none;
        @media (min-width: 768px) {
            display: inline-block;
        }
    }
`;

const ButtonsGroup = ({ children, value, onClick }) => (
    <Buttons>
        {Children.map(children, button =>
            cloneElement(button, {
                type: "button",
                selected: value && button.props.value && value === button.props.value,
                onClick: () => onClick && onClick(button.props.value),
                'aria-label': button.props.value,
            })
        )}
    </Buttons>
);

ButtonsGroup.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.string,
    onClick: PropTypes.func,
};

export default ButtonsGroup;