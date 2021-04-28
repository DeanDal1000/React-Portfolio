import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContactStyle = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
  .container {
    background: none;
    display: block;

    input {
      width: 30%;
      margin: 1rem;
      padding: 10px 0;
      background: none;
      border: none;
      border-bottom: 1px solid #666;
      color: #23d997;
      font-size: 14px;
      text-transform: uppercase;
      outline: none;
      transition: border-color 0.2s;
    }
    .submit-button {
      background: none;
      border: none;
      color: #23d997;
      font-size: 14px;
      cursor: pointer;
      outline: none;
      display: block;
      margin-left: 23.5rem;
    }
    .form {
      width: 65%;
    }
  }
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 1;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 80%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Layout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
