import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Import images for the carousel
import img9 from '../assets/img9.webp';
import img10 from '../assets/img10.webp';
import img11 from '../assets/img11.webp';
import img12 from '../assets/img12.webp';
import img13 from '../assets/img13.webp';
import img14 from '../assets/img14.webp';

const images = [img9, img10, img11, img12, img13, img14];

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 20px;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

const CarouselItem = styled(motion.div)`
  min-width: 300px;
  height: auto;
  aspect-ratio: 1/1.3;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;

export const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [width]);

  return (
    <Section id="resultados">
      <Title>Resultados <span>Reais</span></Title>
      <CarouselContainer ref={carousel}>
        <CarouselTrack
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ x: [0, -width] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {[...images, ...images, ...images].map((img, index) => (
            <CarouselItem key={index}>
              <img src={img} alt={`Resultado TIFA ${index}`} />
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </Section>
  );
};
