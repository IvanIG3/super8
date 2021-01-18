import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: -42%;
    width: 100%;
    margin-top: 3%;
    transform: rotate(-45deg);
    border: 3px solid black;
`;

const TagContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;
    border: 1px solid white;
    padding: 1px 0;
`;

const RibbonTag = ({ icon, backgroundColor }) => {
    const IconComponent = icon;
    return (
        <Container>
            <TagContainer style={{ backgroundColor }}>
                <IconComponent size="6%" />
            </TagContainer>
        </Container>
    );
};

export default RibbonTag;