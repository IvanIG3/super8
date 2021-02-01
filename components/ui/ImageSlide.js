import ImageNext from 'next/image';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    transition: all .3s ease;
    overflow: hidden;
    border-radius: .3em;

    &:hover{
        cursor: pointer;
    }

    ${props => props.thumbnail && css`
        opacity: .6;
        &:hover{
            opacity: 1;
        }
    `}

    ${props => props.thumbnail && props.active && css`
        opacity: 1;
        box-shadow: 0 0 20px 0 #000;
        transform: scale(1.2);
        z-index: 1;
    `}

    ${props => !props.thumbnail && css`
        display: ${props.active ? 'block' : 'none'};
        border: 1px solid ${props => `${props.theme.colors.textcolor}30`};
        animation-name: fade;
        animation-duration: 1s;
        @keyframes fade { from {opacity: .6}  to {opacity: 1} }
    `}
`;

const SlideFilter = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    border-radius: .3em;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2)
    );
`;

const Title = styled.h2`
    position: absolute;
    bottom: 0;
    left: .3em;
    right: .3em;
    text-align: center;
    color: #FFF;
    text-shadow: 0 1px 3px #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: ${props => props.right && '0'};
    left: ${props => props.left && '0'};
    bottom: 0;
    top: 0;
    padding: 1.5em;
    border-radius: .3em;
    color: #FFF;
    &:hover {
        background-color: rgba(0, 0, 0, .3);
        box-shadow: 0 0 .5em .5em rgba(0, 0, 0, .3);
    }
`;

const Image = styled(ImageNext)`
    border-radius: .3em;
`;

const ImageSlide = ({
    src, width, height, title, onClick, active, thumbnail,
    onThumbnailClick, goNext, goPrev
}) => {
    // Handler
    const handleClick = () => {
        if (thumbnail && onThumbnailClick) onThumbnailClick();
        else if (onClick) onClick();
    };

    return (
        <Container
            active={active}
            thumbnail={thumbnail}
            onClick={handleClick}
        >
            <Image
                src={src}
                alt={src}
                layout='responsive'
                width={width}
                height={height}
            />
            <SlideFilter />
            {!thumbnail && <Title>{title}</Title>}
            {!thumbnail &&
                <Nav left onClick={goPrev}>&#10094;</Nav>}
            {!thumbnail &&
                <Nav right onClick={goNext}>&#10095;</Nav>}
        </Container >
    );
};

ImageSlide.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    title: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    thumbnail: PropTypes.bool,
    onThumbnailClick: PropTypes.func,
    goNext: PropTypes.func,
    goPrev: PropTypes.func,
};

export default ImageSlide;