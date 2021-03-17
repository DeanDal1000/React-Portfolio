import React from 'react';
//Pages
import home1 from '../img/home1.png';
//Styles
import { About, Description, Hide, Image } from '../styles/About.elements';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              hello <span>Hello</span>
            </h2>
          </Hide>
          <Hide>
            <h2>Dean</h2>
          </Hide>
        </div>
        <p>Contact Us for inquiries</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </About>
  );
};

export default AboutSection;
