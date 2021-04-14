import React from 'react';
//Pages
import home1 from '../img/home1.png';
//Styles
import { Description, Hide, Image, Layout } from '../styles/About.elements';
//Animation
import { motion } from 'framer-motion';
import { titleAnimation, fade, imgAnimation } from './animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>
              We work to make <span>Dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>Contact Us for inquiries</motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={imgAnimation} src={home1} alt="home1" />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
