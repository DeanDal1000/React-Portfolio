import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../components/animation';
import {
  Circle,
  ContactStyle,
  Container,
  Form,
  FormBody,
  FormContact,
  FormInput,
  FormItem,
  FormItemLeft,
  FormLeft,
  FormName,
  FormTitle,
  FormTitleButton,
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
          <motion.h2 variants={titleAnimation}>Contact Me</motion.h2>
        </Hide>
      </Title>
      <Container>
        <Form>
          <FormTitle>
            <FormLeft>
              <FormTitleButton />
            </FormLeft>
          </FormTitle>
          <FormBody>
            <FormItemLeft>
              <FormName>
                <span>CONTACT</span>
                <span>ME</span>
              </FormName>
              <FormContact>Hello</FormContact>
            </FormItemLeft>
            <FormItem>
              <FormInput>
                <div className="group">
                  <input class="input" placeholder="NAME" />
                </div>
                <div className="group">
                  <input class="input" placeholder="EMAIL" />
                </div>
                <div className="group">
                  <input class="input" placeholder="CONTACT NO" />
                </div>
                <div className="group-message">
                  <input class="input" placeholder="MESSAGE" />
                </div>
                <div className="form-button">
                  <button id="send">SEND</button>
                </div>
              </FormInput>
            </FormItem>
          </FormBody>
        </Form>
      </Container>
      <ScrollTop />
    </ContactStyle>
  );
};

export default ContactUs;
