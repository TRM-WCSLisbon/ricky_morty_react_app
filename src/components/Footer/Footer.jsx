import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  Foot,
} from './styles';

const Footer = () => (
  <Foot
    className="row background"
    style={{
      color: '#000',
      bottom: '0',
      width: '100vw',
      position: 'relative',
      height: ' 175px',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '40px',
    }}
  >
    <div className="col-6 col-md-4 col-sm-12 text-center mt-2">
      <h4>About Us</h4>
      <br />
      <p>You can check our LinkedIn profiles,</p>
      <p>check in the Social Media Icons :D</p>
    </div>
    <div className="col-6 col-md-4 col-sm-12 text-center mt-2">
      <h4>..Know More..</h4>
      <p>
        If you want learn more..
        <br />
        <br />
        <a href="https://www.wildcodeschool.com/en-GB/campuses/lisbon">
          Wild Code School Lisbon Campus
        </a>
        <hr />
        &#xa9; Copyright 2020: All Rights Reserved By TRM
      </p>
    </div>
    <div className="col-6 col-md-4 col-sm-12 text-center mt-2">
      <h4>Social Media</h4>
      <br />
      <div className="social-container">
        <a
          href="https://www.linkedin.com/in/lu%C3%ADs-clara-689822119/"
          target="blank"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://github.com/HugoCravoMendes"
          target="blank"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href=""
          target="blank"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/" target="blank" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  </Foot>
);

export default Footer;
