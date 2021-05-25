import React from 'react';
import { Link } from 'react-router-dom';
//Images
import film from '../img/movie.png';
import human from '../img/human.jpg';
import power from '../img/powerlift.jpg';
import music from '../img/music.jpg';
import road from '../img/road.jpg';
import blog from '../img/blog.jpg';

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
    <Projectcontainer>
      <motion.div
        className="container"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="row">
          <div className="col-md-4">
            <div className="content">
              {' '}
              <a href="https://github.com/DeanDal1000/HR-CrudApplication">
                <div className="content-overlay"></div>{' '}
                <img className="content-image" src={human} alt="" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Horror Resource</h3>
                  <p className="content-text">
                    <i className="fab fa-node"></i>
                    <i className="fab fa-react"></i>
                    <i classNameName="fas fa-database"></i>
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              {' '}
              <a href="https://github.com/DeanDal1000/MovieApi">
                <div className="content-overlay"></div>{' '}
                <img className="content-image" src={film} alt="" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Find My Movie</h3>
                  <p className="content-text">
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-html5"></i>
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              {' '}
              <a href="https://github.com/DeanDal1000/Music-Player">
                <div className="content-overlay"></div>{' '}
                <img className="content-image" src={music} alt="" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Music Player</h3>
                  <p className="content-text">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-js"></i>
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              {' '}
              <a href="https://github.com/DeanDal1000/Gatsby-Project">
                <div className="content-overlay"></div>{' '}
                <img className="content-image" src={blog} alt="" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Gatsby Blog</h3>
                  <p className="content-text">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-js"></i>
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              {' '}
              <a href="https://github.com/DeanDal1000/PowerliftingDataSetPipeline">
                <div className="content-overlay"></div>{' '}
                <img className="content-image" src={power} alt="" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Powerlift</h3>
                  <p className="content-text">
                    <i className="fab fa-python"></i>
                    <i className="fas fa-book-open"></i>
                  </p>
                </div>
              </a>{' '}
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              {' '}
              <a href="https://github.com/DeanDal1000/MobileRSSFeed">
                <div className="content-overlay"></div>{' '}
                <img className="content-image" src={road} alt="" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">Mobile RSS</h3>
                  <p className="content-text">
                    <i className="fab fa-java"></i>
                    <i className="fab fa-android"></i>
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
