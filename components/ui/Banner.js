import ImageNext from 'next/image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Skeleton from './Skeleton';

const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    height: min(20vw, 100px);
`;

const Image = styled(ImageNext)`
    border-radius: .3em;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: .3em;
    background-color: rgba(0, 0, 0, .2);
`;

const Text = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 1em;
    overflow: hidden;
    text-shadow: 0 2px 5px #000;
    color: #FFF;
`;

const Light = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: .3em;
    &:hover {
        background-color: rgba(255, 255, 255, .2);
    }
`;

const Banner = ({ src, text }) => {
    return (
        <BannerContainer>
            {src ?
                <>
                    <Image
                        src={src}
                        alt={src}
                        layout='fill'
                        objectFit="cover"
                    />
                    <Overlay />
                    <Text>{text}</Text>
                    <Light />
                </>
                :
                <Skeleton height='100px' />
            }
        </BannerContainer>
    );
};

Banner.propTypes = {
    src: PropTypes.string,
    text: PropTypes.string,
};

export default Banner;