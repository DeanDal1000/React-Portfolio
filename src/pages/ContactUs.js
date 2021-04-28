import React from 'react';
//Animations
import { motion } from 'framer-motion';
import {
  pageAnimation,
  titleAnimation,
  fade,
  imgAnimation,
} from '../components/animation';
import {
  ContactStyle,
  Description,
  Hide,
  Image,
  Layout,
} from '../styles/Contact.element';
import ScrollTop from '../components/ScrollTop';
//Pages
import home1 from '../img/home1.png';
//Styles

//Animation
import { Link } from 'react-router-dom';
const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      {/* <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Contact Me</motion.h2>
        </Hide>
      </Title> */}
      <Description>
        <div className="title">
          <Hide>
            <motion variants={titleAnimation}>
              <div className="container">
                <input type="text" placeholder="FIRST NAME" />
                <input type="email" placeholder="EMAIL" />
                <input type="text" placeholder="Contact No" className="form" />
                <input type="text" placeholder="MESSAGE" className="form" />
                <button type="submit" className="submit-button">
                  SEND
                </button>
              </div>
            </motion>
          </Hide>
          <br />
          <Hide>
            <motion.h3 variants={titleAnimation}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </motion.h3>
          </Hide>
        </div>
      </Description>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Contact <span>Me</span>
            </motion.h2>
          </Hide>
          <br />
          <Hide>
            <motion.h3 variants={titleAnimation}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </motion.h3>
          </Hide>
        </div>
        <motion.p variants={fade}>Contact for inquiries</motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
      </Description>

      <ScrollTop />
    </ContactStyle>
  );
};

export default ContactUs;
