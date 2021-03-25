import React from 'react';
//Styles
//Page Components
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServiceSection from '../components/ServiceSection';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} inital="hidden" animation="show">
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
