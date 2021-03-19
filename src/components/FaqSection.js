import React from 'react';
import { Answer, Faq, FaqLine, Question } from '../styles/Faq.element';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Question>
        <h4>What is my Degree?</h4>
        <Answer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam,
            magni, harum velit neque inventore fugit eum beatae ea minima
            similique illo odio, dignissimos nulla recusandae. Corporis, nam?
            Impedit, voluptatibus!
          </p>
        </Answer>
        <FaqLine />
      </Question>
      <Question>
        <h4>What is my Name?</h4>
        <Answer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam,
            magni, harum velit neque inventore fugit eum beatae ea minima
            similique illo odio, dignissimos nulla recusandae. Corporis, nam?
            Impedit, voluptatibus!
          </p>
        </Answer>
        <FaqLine />
      </Question>
      <Question>
        <h4>What is my DOB?</h4>
        <Answer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam,
            magni, harum velit neque inventore fugit eum beatae ea minima
            similique illo odio, dignissimos nulla recusandae. Corporis, nam?
            Impedit, voluptatibus!
          </p>
        </Answer>
        <FaqLine />
      </Question>
    </Faq>
  );
};

export default FaqSection;
