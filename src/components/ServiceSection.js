import React from 'react';
import clock from '../img/clock.svg';
import money from '../img/money.svg';
import home2 from '../img/home2.png';

const ServiceSection = () => {
  return (
    <div>
      <div className="services">
        <div className="description">
          <h2>
            These are our <span>services</span>
            <div className="cards">
              <div className="card">
                <div className="icon">
                  <img alt="icon" src={clock} />
                  <h3>Clock</h3>
                </div>
                <p>This is a paragraph</p>
              </div>
              <div className="card">
                <div className="icon">
                  <img alt="icon" src={money} />
                  <h3>Money</h3>
                </div>
                <p>This is a paragraph</p>
              </div>
              <div className="card">
                <div className="icon">
                  <img alt="icon" src={clock} />
                  <h3>Clock</h3>
                </div>
                <p>This is a paragraph</p>
              </div>
              <div className="card">
                <div className="icon">
                  <img alt="icon" src={money} />
                  <h3>Money</h3>
                </div>
                <p>This is a paragraph</p>
              </div>
            </div>
          </h2>
        </div>
      </div>
      <div className="image">
        <img alt="icon" src={home2}></img>
      </div>
    </div>
  );
};

export default ServiceSection;
