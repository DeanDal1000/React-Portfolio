import styled from 'styled-components';
import { Layout } from './About.elements';
import { motion } from 'framer-motion';

export const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 0.5rem;
  }
`;

export const FaqLine = styled.div`
  background: #cccccc;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 100%;
`;

export const Question = styled(motion.div)`
  padding: 3rem 0rem;
  cursor: pointer;
`;

export const Answer = styled.div`
  padding: 1rem 0rem;
  p {
    padding: 1rem 0rem;
  }
`;
