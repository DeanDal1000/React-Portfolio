import React from 'react';
import { Answer, Faq } from '../styles/Faq.element';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        About <span> Me </span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is My Degree?">
          <Answer>
            <p>
              I graduated from Glasgow Caledonian University with an
              Undergraduate in Computing and a Masters in Data Science
              Technologies.
            </p>
          </Answer>
        </Toggle>
        <Toggle title="What are my Interests?">
          <Answer>
            <p>
              I have a high interest in web development and it's technologies
              such as React, JavaScript, Styling and CMS. When I am not sitting
              in front of the computer, I enjoy going to the gym, rock climbing,
              playing badminton adn listening to audiobooks particularly the
              Sci-fi genre.
            </p>
          </Answer>
        </Toggle>
        <Toggle title="Plan's for the future?">
          <Answer>
            <p>
              I would like to have further developed my programming and UX
              design skills and be in full stack developer position. Also
              finally to finish The Sopranos boxset.
            </p>
          </Answer>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;
