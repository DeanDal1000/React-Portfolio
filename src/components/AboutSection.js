import React from 'react';
//Pages
import home1 from '../img/home1.png';
//Styles
import { Description, Hide, Image, Layout } from '../styles/About.elements';
//Animation
import { motion } from 'framer-motion';

const AboutSection = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2
              variants={titleAnimation}
              initial="hidden"
              animate="show"
            >
              We work to make <span>Dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              hello <span>Hello</span>
            </motion.h2>
          </Hide>
          <Hide>
            <h2>Dean</h2>
          </Hide>
        </div>
        <p>Contact Us for inquiries</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
