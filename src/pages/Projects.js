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
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="content">
              {' '}
              <a href="#">
                <div class="content-overlay"></div>{' '}
                <img
                  class="content-image"
                  src="https://i.imgur.com/7cNRozs.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Geysers Valley Hotel</h3>
                  <p class="content-text">
                    <i class="fa fa-map-marker"></i> Russia
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
                  src="https://i.imgur.com/CS59IJZ.jpg"
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Khumbu Valley Hotel</h3>
                  <p class="content-text">
                    <i class="fa fa-map-marker"></i> Nepal
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
                  <h3 class="content-title">Waipi’o Valley Hotel</h3>
                  <p class="content-text">
                    <i class="fa fa-map-marker"></i> Hawaii
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </Projectcontainer>
  );
};
export default Projects;
