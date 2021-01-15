import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    background-color: rgba(0, 0, 0, .2);
    padding-bottom: ${props => props.width &&
        `${(props.height / props.width * 100)}%`};
    border-radius: .3em;
    font-size: 1em;
    max-height: ${props => props.height && `${props.height}px`};
    max-width: ${props => props.width && `${props.width}px`};
    width: ${props => !props.width && '100%'};
    margin-top: .5em;
    &:first-of-type {
        margin-top: 0;
    }
`;

const Skeleton = ({ height, width, count }) => (
    <>
        {[...Array(count)].map((_, index) =>
            <Container key={index} width={width} height={height}>
                {!height && <br />}
            </Container>
        )}
    </>
);

Skeleton.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    count: PropTypes.number,
};

export default Skeleton;