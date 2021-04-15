import React from 'react';
import clock from '../img/clock.svg';
import money from '../img/money.svg';
import home2 from '../img/home2.png';
import {
  Layout,
  Description,
  Image,
  Cards,
  Card,
} from '../styles/Service.element';

const ServiceSection = () => {
  return (
    <Layout>
      <Description>
        <h2>
          My <span>Skills</span>
          <Cards>
            <Card>
              <div className="icon">
                <img alt="icon" src={clock} />
                <h3>Clock</h3>
              </div>
              <p>This is a paragraph</p>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={money} />
                <h3>Money</h3>
              </div>
              <p>This is a paragraph</p>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={clock} />
                <h3>Clock</h3>
              </div>
              <p>This is a paragraph</p>
            </Card>
            <Card>
              <div className="icon">
                <img alt="icon" src={money} />
                <h3>Money</h3>
              </div>
              <p>This is a paragraph</p>
            </Card>
          </Cards>
        </h2>
      </Description>
      <Image>
        <img alt="icon" src={home2}></img>
      </Image>
    </Layout>
  );
};

export default ServiceSection;
