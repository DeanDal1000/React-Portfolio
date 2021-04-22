import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  color: white;
  background-color: #282828;
  padding: 1rem 10rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  h1 {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1.5rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`;

export const Line = styled(motion.div)`
  position: absolute;
  background: orange;
  width: 0%;
  bottom: -80%;
  height: 0.3rem;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
