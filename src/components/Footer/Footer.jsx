import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div class="row" style={{ bottom: '0', width: '100vw', position: 'relative', height: '42vh', display: 'flex', justifyContent: 'center', backgroundColor: 'whitesmoke', marginLeft: '2px' }}>
            <div class="col-6 col-md-4 col-sm-12 text-center mt-2">
                <h4>About Us</h4>
                <p>Three peaceful Wilders aiming to make XIV century Europe a better place by providing priceless tips on agriculture and weather so farmers can grow their crops, fruits and vegetables with great efficiency.</p>
            </div>
            <div class="col-6 col-md-4 col-sm-12 text-center mt-2">
                <h4>Contacts</h4>
                <p>Send us your best Carrier &#x1F426; <br />&#x2694;<a href='https://www.wildcodeschool.com/en-GB/campuses/lisbon'>WCS Castle LX</a>&#x1F6E1;<br /> 
                &#x2691;<a href=''>Utrecht Fortress</a>&#x2691;<br />Pssssst, you can check our LinkedIn profiles in the Social Media Icons.</p>
                </div>
            <div class="col-6 col-md-4 col-sm-12 text-center mt-2">
                <h4>Social Media</h4>
                <p>You wouldn't believe even if I told you!</p>
                <div className="social-container">
                <a
                    href="https://www.linkedin.com/in/lu%C3%ADs-clara-689822119/"
                    className="youtube social"
                >
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a
                    href="https://www.linkedin.com/in/l%C3%A9on-van-de-klundert-467437b3/"
                    className="facebook social"
                >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/artur-branco-fernandes-a42200166/" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                    href=""
                    className="instagram social"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                </div>
                </div>
            <div class="row">
            <div class="col">
                <hr />
            &#xa9; Copyright 2020: All Rights Reserved By HungerStrike
            </div>
            </div>
        </div>
    )
}

export default Footer
