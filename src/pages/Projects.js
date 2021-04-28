import React from 'react';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import film from '../img/film.jpg';
import music from '../img/music.jpg';
import {
  Movie,
  Work,
  Hide,
  Row,
  Column,
  Card,
} from '../styles/Project.element';
//Animation
import {
  pageAnimation,
  fade,
  imgAnimation,
  lineAnimation,
} from '../components/animation';
import { motion } from 'framer-motion';
import ScrollTop from '../components/ScrollTop';

const Projects = () => {
  return (
    // <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
    //   <Movie>
    //     <motion.h2 variants={fade}>The Athlete</motion.h2>
    //     <motion.div variants={lineAnimation} className="line"></motion.div>
    //     <Link to="/projects/the-athlete">
    //       <Hide>
    //         <motion.img variants={imgAnimation} src={athlete} alt="athlete" />
    //       </Hide>
    //     </Link>
    //   </Movie>
    //   <Movie>
    //     <motion.h2 variants={fade}>The Racer</motion.h2>
    //     <div className="line"></div>
    //     <Link to="/projects/the-racer">
    //       <img variants={imgAnimation} src={theracer} alt="racer" />
    //     </Link>
    //   </Movie>
    //   <Movie>
    //     <motion.h2 variants={fade}>Good Times</motion.h2>
    //     <div className="line"></div>
    //     <Link to="/projects/good-times">
    //       <img variants={imgAnimation} src={goodtimes} alt="goodtimes" />
    //     </Link>
    //   </Movie>
    //   <ScrollTop />
    // </Work>
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Row>
        <Column>
          <motion.h2 variants={fade}>Find My Movie</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Card>
            <Link to="/projects/the-movie">
              <motion.img variants={imgAnimation} src={film} alt="athlete" />
            </Link>
          </Card>
        </Column>
        <Column>
          <motion.h2 variants={fade}>Music Player</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Card>
            <Link to="/projects/music">
              <motion.img variants={imgAnimation} src={music} alt="athlete" />
            </Link>
          </Card>
        </Column>
        <Column>
          <motion.h2 variants={fade}>The Form</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>

          <Card>
            <Link to="/projects/form">
              <motion.img variants={imgAnimation} src={athlete} alt="athlete" />
            </Link>
          </Card>
        </Column>
        <Column>
          <motion.h2 variants={fade}>Dynamic</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Card>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Link to="/projects/the-athlete">
                    <motion.img
                      variants={imgAnimation}
                      src={athlete}
                      alt="athlete"
                    />
                  </Link>
                </div>
                <div className="flip-card-back">
                  <h3>The Movie Database</h3>
                  <p>This Application was created with...</p>
                  <p>
                    <button></button>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Column>
      </Row>
      <ScrollTop />
    </Work>
  );
};
export default Projects;
