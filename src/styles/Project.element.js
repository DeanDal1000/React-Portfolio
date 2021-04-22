import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

export const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: orange;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation

export const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100;
`;
