import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
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

export const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 10px;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Form = styled.div`
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
  width: 50%;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const FormLeft = styled.div`
  margin-right: auto;
`;

export const FormTitleButton = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
`;

export const FormBody = styled.div`
  display: flex;
`;

export const FormItem = styled.div`
  flex: 1;
  padding: 50px;
`;

export const FormItemLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormName = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: #ea1d6f;
  margin: 3rem 8rem 3rem 4rem;
  font-size: 26px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: orange;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 1rem;
  }
`;

export const FormContact = styled.div`
  margin-top: auto;
  font-size: 8px;
  color: #888;
`;

export const FormInput = styled.div`
  .group {
    margin-bottom: 15px;
  }
  .input {
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #ddd;
    font-size: 14px;
    text-transform: uppercase;
    outline: none;
    transition: border-color 0.2s;
    &::placeholder {
      color: #666;
    }
  }
  .group-message {
    margin-top: 40px;
  }
  .form-button {
    margin-bottom: 0;
    text-align: right;
    color: red;
    #send {
      border: none;
      color: red;
      &:hover {
        background: none;
      }
    }
  }
`;
