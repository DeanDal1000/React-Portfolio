import React from 'react';
import { Answer, Faq, FaqLine, Question } from '../styles/Faq.element';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is My Degree">
          <Answer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              ullam, magni, harum velit neque inventore fugit eum beatae ea
              minima similique illo odio, dignissimos nulla recusandae.
              Corporis, nam? Impedit, voluptatibus!
            </p>
          </Answer>
        </Toggle>
        <Toggle title="What is my Name">
          <Answer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              ullam, magni, harum velit neque inventore fugit eum beatae ea
              minima similique illo odio, dignissimos nulla recusandae.
              Corporis, nam? Impedit, voluptatibus!
            </p>
          </Answer>
        </Toggle>
        <Toggle title="Hello Dean">
          <Answer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              ullam, magni, harum velit neque inventore fugit eum beatae ea
              minima similique illo odio, dignissimos nulla recusandae.
              Corporis, nam? Impedit, voluptatibus!
            </p>
          </Answer>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;
