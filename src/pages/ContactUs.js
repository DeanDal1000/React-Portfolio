import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation, fade } from '../components/animation';
import { ContactStyle, Description, Hide } from '../styles/Contact.element';
import ScrollTop from '../components/ScrollTop';

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Description>
        <div className="title">
          <Hide>
            <motion variants={titleAnimation}>
              <div className="container">
                <form
                  id="contact-form"
                  method="POST"
                  action="send"
                  enctype="multipart/form-data"
                >
                  <input type="text" placeholder="FIRST NAME" />
                  <input type="email" placeholder="EMAIL" />
                  <input
                    type="text"
                    placeholder="Contact No"
                    className="form"
                  />
                  <input type="text" placeholder="MESSAGE" className="form" />
                  <button type="submit" className="submit-button">
                    SEND
                  </button>
                </form>
              </div>
            </motion>
          </Hide>
          <br />
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
      </Description>

      <ScrollTop />
    </ContactStyle>
  );
};

export default ContactUs;
