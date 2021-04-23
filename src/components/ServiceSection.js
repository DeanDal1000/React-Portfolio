import React from 'react';
import clock from '../img/clock.svg';
import money from '../img/money.svg';
import home2 from '../img/home2.png';
//Images
import reactIcon from '../img/react.svg';
import javaScriptIcon from '../img/js.svg';
import htmlIcon from '../img/html.svg';
import gitIcon from '../img/git.svg';
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import {
  Layout,
  Description,
  Image,
  Cards,
  Card,
} from '../styles/Service.element';
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
        </Cards>
      </Description>
      <Image>
        <img alt="icon" src={home2}></img>
      </Image>
    </Layout>
  );
};

export default ServiceSection;
