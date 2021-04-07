import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';

const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      Contact
    </motion.div>
  );
};

export default ContactUs;
