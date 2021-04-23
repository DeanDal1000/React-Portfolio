import React from 'react';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
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
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Card>
            <Link to="/projects/the-athlete">
              <motion.img variants={imgAnimation} src={athlete} alt="athlete" />
            </Link>
          </Card>
        </Column>
        <Column>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Card>
            <Link to="/projects/the-athlete">
              <motion.img variants={imgAnimation} src={athlete} alt="athlete" />
            </Link>
          </Card>
        </Column>
        <Column>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Card>
            <Link to="/projects/the-athlete">
              <motion.img variants={imgAnimation} src={athlete} alt="athlete" />
            </Link>
          </Card>
        </Column>
        <Column>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Card>
            <Link to="/projects/the-athlete">
              <motion.img variants={imgAnimation} src={athlete} alt="athlete" />
            </Link>
          </Card>
        </Column>
      </Row>
    </Work>
  );
};
export default Projects;
