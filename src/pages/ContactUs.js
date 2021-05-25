import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../components/animation';
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
                  data-netlify="true"
                  action="POST"
                  enctype="multipart/form-data"
                >
                  <input type="text" placeholder="FIRST NAME" name="name" />
                  <input type="email" placeholder="EMAIL" name="email" />
                  <input
                    type="text"
                    placeholder="Contact No"
                    className="form"
                    name="contact"
                  />
                  <input
                    type="text"
                    name="message"
                    placeholder="MESSAGE"
                    className="form"
                  />
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
          {/* <Hide>
            <motion.h3 variants={titleAnimation}>
              Please feel free to give me a message
            </motion.h3>
          </Hide> */}
        </div>
      </Description>

      <ScrollTop />
    </ContactStyle>
  );
};

export default ContactUs;
