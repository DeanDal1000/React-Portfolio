import React from 'react';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import film from '../img/movie.png';
import human from '../img/human.jpg';

import {
  Movie,
  Work,
  Hide,
  Row,
  Column,
  Card,
  Projectcontainer,
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
import '../styles/styles1.css';

const Projects = () => {
  return (
    // <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
    //   <Row>
    //     <Column>
    //       <motion.h2 variants={fade}>Find My Movie</motion.h2>
    //       <motion.div variants={lineAnimation} className="line"></motion.div>

    //       <Card>
    //         <Link to="/projects/the-movie">
    //           <motion.img variants={imgAnimation} src={film} alt="athlete" />
    //         </Link>
    //       </Card>
    //     </Column>

    //     <Column>
    //       <motion.h2 variants={fade}>Music Player</motion.h2>
    //       <motion.div variants={lineAnimation} className="line"></motion.div>
    //       <Card>
    //         <Link to="/projects/music">
    //           <motion.img variants={imgAnimation} src={music} alt="athlete" />
    //         </Link>
    //       </Card>
    //     </Column>
    //     <Column>
    //       <motion.h2 variants={fade}>The Form</motion.h2>
    //       <motion.div variants={lineAnimation} className="line"></motion.div>

    //       <Card>
    //         <Link to="/projects/form">
    //           <motion.img variants={imgAnimation} src={athlete} alt="athlete" />
    //         </Link>
    //       </Card>
    //     </Column>
    //     <Column>
    //       <motion.h2 variants={fade}>Dynamic</motion.h2>
    //       <motion.div variants={lineAnimation} className="line"></motion.div>
    //       <Card>
    //         <div className="flip-card">
    //           <div className="flip-card-inner">
    //             <div className="flip-card-front">
    //               <Link to="/projects/the-athlete">
    //                 <motion.img
    //                   variants={imgAnimation}
    //                   src={athlete}
    //                   alt="athlete"
    //                 />
    //               </Link>
    //             </div>
    //             <div className="flip-card-back">
    //               <h3>The Movie Database</h3>
    //               <p>This Application was created with...</p>
    //               <p>
    //                 <button></button>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </Card>
    //     </Column>
    //   </Row>
    //   <ScrollTop />;
    // </Work>
    <Projectcontainer>
      <motion.div
        class="container"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <div class="row">
          <div class="col-md-4">
            <div class="content">
              {' '}
              <a href="https://github.com/DeanDal1000/HR-CrudApplication">
                <div class="content-overlay"></div>{' '}
                <img class="content-image" src={human} />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Horror Resource</h3>
                  <p class="content-text">
                    <i class="fab fa-node"></i>
                    <i class="fab fa-react"></i>
                    <i class="fas fa-database"></i>
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div class="col-md-4">
            <div class="content">
              {' '}
              <a href="">
                <div class="content-overlay"></div>{' '}
                <img class="content-image" src={film} />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Find My Movie</h3>
                  <p class="content-text">
                    <i class="fab fa-js"></i>
                    <i class="fab fa-react"></i>
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div class="col-md-4">
            <div class="content">
              {' '}
              <a href="#">
                <div class="content-overlay"></div>{' '}
                <img
                  class="content-image"
                  src="https://i.imgur.com/LITAKvq.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Music Player</h3>
                  <p class="content-text">
                    <i class="fa fa-map-marker"></i> Hawaii
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div class="col-md-4">
            <div class="content">
              {' '}
              <a href="#">
                <div class="content-overlay"></div>{' '}
                <img
                  class="content-image"
                  src="https://i.imgur.com/LITAKvq.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Gatsby Blog</h3>
                  <p class="content-text">
                    <i class="fa fa-map-marker"></i> Hawaii
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div class="col-md-4">
            <div class="content">
              {' '}
              <a href="#">
                <div class="content-overlay"></div>{' '}
                <img
                  class="content-image"
                  src="https://i.imgur.com/LITAKvq.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Powerlift</h3>
                  <p class="content-text">
                    <i class="fa fa-map-marker"></i> Hawaii
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div class="col-md-4">
            <div class="content">
              {' '}
              <a href="#">
                <div class="content-overlay"></div>{' '}
                <img
                  class="content-image"
                  src="https://i.imgur.com/LITAKvq.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Dynamic</h3>
                  <p class="content-text">
                    <i class="fa fa-map-marker"></i> Hawaii
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
        </div>
      </motion.div>
      <ScrollTop />;
    </Projectcontainer>
  );
};
export default Projects;
