import React from 'react';
import styled from 'styled-components';
import { StarFullOutline } from '@styled-icons/typicons/StarFullOutline';
import PropTypes from 'prop-types';

const TagContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    column-gap: .1rem;
    position: absolute;
    top: .2rem;
    right: .2rem;
    padding: .1em .3em;
    border-radius: .3em;
    background-color: rgba(0, 0, 0, .8);
    color: white;
`;

const Star = styled(StarFullOutline)`
    width: 1em;
    color: ${props => props.theme.colors.primary};
`;

const ScoreTag = ({ score }) => (
    <TagContainer>
        <Star />
        <span>{score}</span>
    </TagContainer>
);

ScoreTag.propTypes = {
    score: PropTypes.number.isRequired
};
 
export default React.memo(ScoreTag);