import React from 'react';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import { Movie, Work } from '../styles/Project.element';
//Style

const Projects = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/projects/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/projects/the-racer">
          <img src={theracer} alt="racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/projects/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

export default Projects;
