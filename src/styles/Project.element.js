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
  padding: 0.5rem;
  /* padding: 0 10px 20px; */
  overflow: hidden;
  /* background: yellow; */
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
    font-family: 'Roboto', sans-serif;
    @media (max-width: 1300px) {
      display: block;
      margin: 2rem 2rem;
      width: 60%;
    }
  }
`;

export const Projectcontainer = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem 5rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  .container {
    margin-top: 100px;
  }

  .title {
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 10px;
  }

  .content {
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: auto;
    overflow: hidden;
    margin: 1rem;
    padding: 0.5rem;
  }

  .content .content-overlay {
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }

  .content:hover .content-overlay {
    opacity: 1;
  }

  .content-image {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

  img {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  .content-details {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .content:hover .content-details {
    top: 50%;
    left: 50%;
    opacity: 1;
  }

  .content-details h3 {
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  .content-details p {
    color: #fff;
    font-size: 0.8em;
    i {
      color: lightgrey;
      margin: 0.5rem;
      font-size: 2.5rem;
    }
  }

  .fadeIn-bottom {
    top: 80%;
  }
`;
