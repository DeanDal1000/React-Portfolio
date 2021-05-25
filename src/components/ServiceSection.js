import React from 'react';
import home2 from '../img/home2.png';
//Images
import reactIcon from '../img/react.svg';
import javaScriptIcon from '../img/js.svg';
import htmlIcon from '../img/html.svg';
import gitIcon from '../img/git.svg';
import cssIcon from '../img/css.svg';
import pythonIcon from '../img/python.svg';
//Styles
import {
  Layout,
  Description,
  Image,
  Cards,
  Card,
} from '../styles/Service.element';
//Animation
import { motion } from 'framer-motion';
import { imgAnimation } from './animation';
// import { useInView } from 'react-intersection-observer';
// import { useAnimation } from 'framer-motion';

const ServiceSection = () => {
  return (
    <Layout>
      <Description>
        <h2>
          My <span>Skills</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <motion.img
                whileHover={{ scale: 1.2, rotate: 0 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
                alt="react"
                src={reactIcon}
              />
              <h3>React</h3>
            </div>
            <p></p>
          </Card>
          <Card>
            <div className="icon">
              <motion.img
                alt="js"
                whileHover={{ scale: 1.2, rotate: 0 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: '0%' }}
                src={javaScriptIcon}
              />
              <h3>JavaScript</h3>
            </div>
            <p></p>
          </Card>
          <Card>
            <div className="icon">
              <motion.img
                whileHover={{ scale: 1.2, rotate: 0 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: '0%' }}
                alt="html"
                src={htmlIcon}
              />
              <h3>HTML</h3>
            </div>
            <p></p>
          </Card>
          <Card>
            <div className="icon">
              <motion.img
                whileHover={{ scale: 1.2, rotate: 0 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: '0%' }}
                alt="git"
                src={gitIcon}
              />
              <h3>Git</h3>
            </div>
            <p></p>
          </Card>
          <Card>
            <div className="icon">
              <motion.img
                whileHover={{ scale: 1.2, rotate: 0 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: '0%' }}
                alt="css"
                src={cssIcon}
              />
              <h3>CSS</h3>
            </div>
            <p></p>
          </Card>
          <Card>
            <div className="icon">
              <motion.img
                whileHover={{ scale: 1.2, rotate: 0 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: '0%' }}
                alt="python"
                src={pythonIcon}
              />
              <h3>Python</h3>
            </div>
            <p></p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <motion.img variants={imgAnimation} alt="icon" src={home2}></motion.img>
      </Image>
    </Layout>
  );
};

export default ServiceSection;
