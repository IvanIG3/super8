import { cloneElement, Children, useState, useEffect } from 'react';
import styled from 'styled-components';

const Thumbnails = styled.div`
    display: grid;
    grid-auto-flow: column;
    padding: 1rem;
    @media (min-width: 768px) {
        padding: 1.5rem;
    }
`;

// Get circular array index
const getIndex = (index, length) => (index % length + length) % length;

const ImageSlider = ({ children }) => {
    // State of current slide
    const [idxActiveSlide, setIdxActiveSlide] = useState(0);

    // Navigation
    const numChilds = Children.count(children);
    
    const goNext = e => {
        e.stopPropagation();
        setIdxActiveSlide(getIndex(idxActiveSlide + 1, numChilds));
    };

    const goPrev = e => {
        e.stopPropagation();
        setIdxActiveSlide(getIndex(idxActiveSlide - 1, numChilds));
    };

    const onThumbnailClick = idx => {
        setIdxActiveSlide(getIndex(idx - 2 + idxActiveSlide, numChilds));
    };

    // Thumbnails
    const visibleThumbnails = [-2, -1, 0, 1, 2];
    const childrenArray = Children.toArray(children);
    const thumbnails = visibleThumbnails.map(
        index => childrenArray[getIndex(idxActiveSlide + index, numChilds)]
    );

    // Move to next slide automatically
    const nextSlide = () => setIdxActiveSlide(getIndex(idxActiveSlide + 1, numChilds));
    useEffect(() => {
        const timer = setTimeout(nextSlide, 15000);
        return () => clearTimeout(timer);
    }, [idxActiveSlide]);

    return (
        <div>
            <div>
                {Children.map(children, (slide, idx) => (
                    cloneElement(slide, {
                        active: idx === idxActiveSlide,
                        thumbnail: false,
                        goNext: goNext,
                        goPrev: goPrev,
                    })
                ))}
            </div>
            <Thumbnails>
                {thumbnails.map((slide, idx) => (
                    cloneElement(slide, {
                        active: idx === 2,
                        thumbnail: true,
                        onThumbnailClick: () => onThumbnailClick(idx)
                    })
                ))}
            </Thumbnails>
        </div>
    );
};

export default ImageSlider;