import React from 'react';
import home1 from '../img/home1.png';
const About = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>hello</h2>
          </div>
          <div className="hide">
            <h2>Dean</h2>
          </div>
        </div>
        <p>Contact Us</p>
      </div>
      <div className="image">
        <img src={home1} alt="home1" />
      </div>
    </div>
  );
};

export default About;
