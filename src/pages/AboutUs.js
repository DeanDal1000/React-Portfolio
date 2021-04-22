import React from 'react';
//Styles
//Page Components
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServiceSection from '../components/ServiceSection';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
