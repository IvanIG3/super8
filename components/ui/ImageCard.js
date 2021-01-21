import React from 'react';
import ImageNext from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from './Skeleton';

const Card = styled.div`
    overflow: hidden;
    position: relative;
`;

const CardImage = styled.div`
    width: 100%;
    max-height: ${props => props.height && `${props.height}px`};
    max-width: ${props => props.width && `${props.width}px`};
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
    text-align: center;
    color: ${props => props.theme.colors.primary};
`;

const Image = styled(ImageNext)`
    border-radius: .3em;
`;

const ImageCard = ({ children, src, width, height }) => (
    <Card>
        <CardImage width={width} height={height}>
            {src ?
                <Image
                    src={src}
                    alt={src}
                    layout='responsive'
                    width={width}
                    height={height}
                />
                :
                <Skeleton scale={height/width} />
            }
        </CardImage>
        <CardBody>
            {children}
        </CardBody>
    </Card>
);

ImageCard.propTypes = {
    children: PropTypes.node.isRequired,
    src: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default React.memo(ImageCard);