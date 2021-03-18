import React from 'react';
import { Faq } from '../styles/Faq.element';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="questions">
        <h4>What is my Degree?</h4>
        <div className="answers">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam,
            magni, harum velit neque inventore fugit eum beatae ea minima
            similique illo odio, dignissimos nulla recusandae. Corporis, nam?
            Impedit, voluptatibus!
          </p>
        </div>
      </div>
      <div className="questions">
        <h4>What is my Name?</h4>
        <div className="answers">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam,
            magni, harum velit neque inventore fugit eum beatae ea minima
            similique illo odio, dignissimos nulla recusandae. Corporis, nam?
            Impedit, voluptatibus!
          </p>
        </div>
      </div>
      <div className="questions">
        <h4>What is my DOB?</h4>
        <div className="answers">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam,
            magni, harum velit neque inventore fugit eum beatae ea minima
            similique illo odio, dignissimos nulla recusandae. Corporis, nam?
            Impedit, voluptatibus!
          </p>
        </div>
      </div>
    </Faq>
  );
};

export default FaqSection;
