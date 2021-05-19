import React from 'react';
import { Answer, Faq } from '../styles/Faq.element';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
  return (
    <Faq>
      <h2>About Me</h2>
      <AnimateSharedLayout>
        <Toggle title="What is My Degree?">
          <Answer>
            <p>
              I graduated from Glasgow Caledonian University with an
              Undergraduate in Computing and a Masters in Data Science
              Technologies
            </p>
          </Answer>
        </Toggle>
        <Toggle title="What are my Hobbies?">
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
