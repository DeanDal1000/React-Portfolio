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
import { titleAnimation, fade, imgAnimation } from './animation';
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
              <img alt="react" src={reactIcon} />
              <h3>React</h3>
            </div>
            <p>This is a paragraph</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="js" src={javaScriptIcon} />
              <h3>JavaScript</h3>
            </div>
            <p>This is a paragraph</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="html" src={htmlIcon} />
              <h3>HTML</h3>
            </div>
            <p>This is a paragraph</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="git" src={gitIcon} />
              <h3>Git</h3>
            </div>
            <p>This is a paragraph</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="css" src={cssIcon} />
              <h3>CSS</h3>
            </div>
            <p>This is a paragraph</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="python" src={pythonIcon} />
              <h3>Python</h3>
            </div>
            <p>This is a paragraph</p>
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
