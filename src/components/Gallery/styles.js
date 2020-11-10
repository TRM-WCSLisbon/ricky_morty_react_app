import styled from "styled-components";
import HeaderFont from "../get_schwifty.ttf";

export const Header = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  @font-face {
    font-family: "get_schwifty";
    src: local("get_schwifty"), url(${HeaderFont}) format("truetype");
  }

  display: flex;
  flex-direction: column;
  padding: 50px 50px 30px;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #1B561A;
  color: #000;
  font-size: 1.5em;
  font-weight: bold;

  span {
    color: #273244;
    font: 0.8em "Roboto";
    justify-content: center;
    text-align: justify;
    opacity: 1;
    margin: 20px 20px;
    width: 75%;
    background: #BBE0D5;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 20px 20px 25px #000;
  }
  ul {
    display: flex;
    font-size: 1.5em;
    margin-top: 5px;

    a {
      text-decoration: none;
      :first-child,
      :last-child {
        color: inherit;
      }

      li {
        padding: 0 10px;
        cursor: pointer;
        transition: color 100ms ease-in-out;

        :hover {
          @media only screen and (min-width: 600px) {
            color: #21d8ff;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 795px) {
    span{
        font-size: 0.8em;
        width: 100%;
        display: flex;
        position: relative;
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    };
  }
}
@media only screen and (max-width: 647px) {
    {
        display: flex;
        position: relative;
        padding: 20px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
    };
  }
}
@media only screen and (max-width: 450px) {
    {
        padding: 10px;
        margin-left: 10px;
        margin-right: 10px;
    };
  }
}
`;

export const CardGrid = styled.ul`
  font: 3em "get_schwifty";
  color: #E97299;
  display: ${({ loading }) => (loading ? "block" : "grid")};
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 30px;
  margin: 20px;
  align-items: center;
  justify-content: center;

  #container {
    position: relative;
  }
  img {
    width: 100%;
    height: 300px;
    height: 250px;
    border-radius: 30px;
    opacity: 1;
    display: block;
    width: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  
  #middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  #back{
    top: 20%;
    left: 20%;
  }
  #container:hover img {
    opacity: 0.75;
  }
  
  #container:hover #middle {
    opacity: 1;
  }
  
  img #char:hover {
    visibility: visible;
    opacity: 1;
  }
`;
