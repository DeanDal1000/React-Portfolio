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
  //Fix Line
  .line {
    height: 0.5rem;
    background: orange;
    margin: 3rem;
    left: 10rem;
  }
  img {
    width: 33%;
    padding: 0.75rem;
    height: 50vh;
    object-fit: cover;
    flex-direction: column;
    @media (max-width: 1300px) {
      display: block;
      margin: 2rem 2rem;
      width: 50%;
    }
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

export const Row = styled.div`
  margin: 0 -5px;
  /* Clear floats after the columns */
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const Column = styled.div`
  /* Float four columns side by side */
  float: left;
  width: 33%;
  /* padding: 0 10px 20px; */
  overflow: hidden;
  .line {
    height: 0.5rem;
    background: orange;
    width: 20%;
    /* margin-bottom: 3rem; */
  }

  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
    width: 60%;
  }
  h2 {
    padding: 1rem 0rem;
    color: white;
    @media (max-width: 1300px) {
      display: block;
      margin: 2rem 2rem;
      width: 60%;
    }
  }
`;

export const Card = styled.div`
  background: transparent;
  img {
    width: 100%;
    padding: 0.75rem;
    height: 50vh;
    object-fit: cover;
    border-radius: 5%;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card {
    background-color: transparent;
    width: 100%;
    height: 500px;
    perspective: 1000px;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }
`;
