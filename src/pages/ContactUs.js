import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../components/animation';
import {
  Circle,
  ContactStyle,
  Hide,
  Social,
  Title,
} from '../styles/Contact.element';
import ScrollTop from '../components/ScrollTop';

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Hello</motion.h2>
        </Hide>
      </Title>
      <div>
        <Social>
          <Circle />
          <h2>Hello</h2>
        </Social>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

export default ContactUs;
