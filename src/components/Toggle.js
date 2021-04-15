import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Answer, Faq, FaqLine, Question } from '../styles/Faq.element';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <Question layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <FaqLine />
    </Question>
  );
};
export default Toggle;
