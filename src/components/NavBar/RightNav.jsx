import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import HeaderFont from '../get_schwifty.ttf';

const Ul = styled.ul`
@font-face {
  font-family: "get_schwifty";
  src: local("get_schwifty"), url(${HeaderFont}) format("truetype");
}
//@media (max-width: 768px) 
{
  font: 1.1em 'get_schwifty';
  display: flex;
  justify-content: center;
  text-align: center;
  flex-flow: column nowrap;
  background-color: #59B4A1;
  opacity: 0.85;
  // position: fixed;
  transition: transform 0.45s ease-in-out;
  opacity: ${({ open }) => (open ? 1 : 0)};
  position: ${({ open }) => (open ? 'absolute' : 'fixed')};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')} ;
  top: 0;
  right: 0;
  height: 30vh;
  // height:100%;
  width: 30vw;
  // width: 100%;
  padding-top: -0.8rem;
  
}

  ul{
    display:block;
  }
  li{
    justify-content: center;
    margin-top: 20px;
    list-style: none;
    color: #fff;
    position: relative;

  }
  .right{
    float: right;
    margin-right:10px;
  }
  li a {
      font-size: 1.5em;
      color:#fff;
      text-decoration: none;
   }
   li a:hover { 
      background: #85CCAC;
      height:50px;
      border-radius:20px;
      box-shadow: 6px 5px 11px rgba(51,54,66,.9);
  } 
  @media (max-width: 449px) {
    height: 20vh;
    font-size:0.8em;
    
    li{
      margin-top:0;
      padding:10px;
    }
      }
`;

const RightNav = ({ open }) => (
  <Ul open={open}>
    <ul>
      <li>
        <Link to="/characters" select>
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
