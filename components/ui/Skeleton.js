import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    background-color: rgba(0, 0, 0, .2);
    padding-bottom: ${props => props.scale && `${(props.scale * 100)}%`};
    border-radius: .3em;
    font-size: 1em;
    height: ${props => props.height};
    width: ${props => props.width ? props.width : '100%'};
    margin-top: .5em;
    &:first-of-type {
        margin-top: 0;
    }
`;

const Skeleton = ({ scale, height, width, count }) => (
    <>
        {[...Array(count)].map((_, index) =>
            <Container key={index} width={width} height={height} scale={scale}>
                {!scale && <br />}
            </Container>
        )}
    </>
);

Skeleton.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    count: PropTypes.number,
    scale: PropTypes.number,
};

export default Skeleton;