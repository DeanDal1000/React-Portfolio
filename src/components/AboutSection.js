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
              Dean John <span>Dalzell</span>
            </motion.h2>
          </Hide>
          <br />
          <Hide>
            <motion.h2 variants={titleAnimation}>Web Developer</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>Contact for inquiries</motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={imgAnimation} src={home1} alt="home1" />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
