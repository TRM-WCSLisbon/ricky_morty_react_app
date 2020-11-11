import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import HeaderFont from '../get_schwifty.ttf';

const Ul = styled.ul`
@font-face {
  font-family: "get_schwifty";
  src: local("get_schwifty"), url(${HeaderFont}) format("truetype");
}
  font: 2.5em 'get_schwifty';
  display: flex;
  justify-content: center;
  text-align: center;
  
  .right{
    float: right;
    margin-right:20px;
    margin-left:0px;
  }
  .left{
      float: left;
      margin-left:50px;
      margin-right:0;
  }
  li{
      justify-content: center;
      margin-top: 20px;
      margin-right: 50px;
      list-style: none;
  }
  li a {
      font-size: 1.5em;
      color:#fff;
      text-decoration: none;
      // -webkit-text-stroke-width: 1px;
      // -webkit-text-stroke-color: #fff;
      
   }
   li a:hover { 
      background: #85CCAC;
      height:50px;
      border-radius:20px;
      box-shadow: 6px 5px 11px rgba(51,54,66,.9);
  } 
  // @media only screen and (max-width: 945px) {
  //     li{
  //         font-size: 1.5em;
  //         margin-top: 60px;

  //     };
  //   }
  // }
  // @media only screen and (max-width: 795px) {
  //     li{
  //         font-size: 1.5em;
  //         display: flex;
  //         position: relative;
  //         padding: 20px;
  //         margin-left: auto;
  //         margin-right: 30px;
  //         margin-top: 30px;
  //     };
  //   }
  // }
  
  //@media (max-width: 768px) 
  {
  
    font-size:1.2em;
    flex-flow: column nowrap;
    background-color: #31445E;
    opacity: 0.89;
    position: absolute;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 35vh;
    width: 250px;
    padding-top: -0.8rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }

  // @media only screen and (max-width: 701px) {
  //     li{
  //         padding: 10px;
  //         margin-top: 40px;
  //         margin-right: 20px;
  //     };
  //   }
  // }
  // @media only screen and (max-width: 647px) {
  //     li{
  //         flex-direction: wrap;
  //         padding: 5px;
  //         margin-right: 30px;

  //     };
  //   }
  // }
`;

const RightNav = ({ open }) => (
  <Ul open={open}>
    <ul className="left">
      <li>
        <Link to="/characters/" select>
          Characters
        </Link>
      </li>
      <li>
        <Link to="/locations" select>
          Locations
        </Link>
      </li>
    </ul>
    <ul className="right">
      <li>
        <Link to="/episodes" select>
          Episodes
        </Link>
      </li>
      <li>
        <Link to="/contact" select>
          Contact Us
        </Link>
      </li>
    </ul>
  </Ul>
);

export default RightNav;
