import styled, { keyframes } from 'styled-components';
import HeaderFont from '../get_schwifty.ttf';

export const Header = styled.div`
  @font-face {
    font-family: "get_schwifty";
    src: local("get_schwifty"), url(${HeaderFont}) format("truetype");
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px 30px;
  header {
    margin: 10px;
    user-select: none;
    @media only screen and (max-width: 600px) {
      margin-top: -30px;
    }
    h1 {
      font: 5em "get_schwifty";
      -webkit-text-stroke: 1px #f5f5f5;
      color: #21d8ff;
      @media only screen and (max-width: 600px) {
        text-align: center;
        font-size: 2.5em;
      }
    }
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
`;
export const Card = styled.div`
  color: #fff;
  background: #7d12ff;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  background-color: transparent;
  height: 308px;
  perspective: 1000px;

  backdrop-filter: blur(5px);
  border: 4px solid #ab20fd;
  box-shadow: 0 10px 25px #ab20fd;
  img {
    margin: 10px auto;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50px;
  }
 
  li {
    font-weight: bold;
    width: 100%;
    border-radius: 20%;
    margin: 2px;
    padding: 5px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(47, 53, 49, 0.12),
      0 1px 2px rgba(47, 53, 49, 0.24);
  }
  .card {
    cursor: pointer;
    background-color: transparent;
    height: 300px;
    perspective: 1000px;
  }

  .card h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  .card span {
    font-size: 1.2em;
    font-weight: bold;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .card .shadow-alive {
    padding: 1em;
    border-radius: 5px;
    display: flex;
    align-items: center;
    box-shadow: 2px 3px 2px 2px #aed581;
  }
  .card .shadow-dead {
    padding: 1em;
    border-radius: 5px;
    display: flex;
    align-items: center;
    box-shadow: 2px 3px 2px 2px #d58181;
  }
  .card img {
    // width: 100%;
    margin-top: -10px;
    display: flex;
    align-items: center;
    // object-fit: cover;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .card:hover .card-inner {
    transform: rotateY(360deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .card-back {
    background-color: #333;
    border-radius: 7px;
    color: white;
    padding: 20px;
  }

  .card li {
    list-style: none;
    padding-bottom: 10px;
  }
`;

export const CardGrid = styled.ul`
  display: ${({ loading }) => (loading ? 'block' : 'grid')};
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  margin: 0 60px;
  grid-gap: 25px;
`;

export const PageNumber = styled.div`
  // color: ${({ actualPage }) => (actualPage ? '#21d8ff' : '#000')};
  color: #000;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li {
    padding: 30px 30px;
  }
  li a:hover {
    color: #21d8ff;
  }
`;

const spinnerAnimation = keyframes`
  0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

export const Spinner = styled.div`
  height: 100vh;
  opacity: 1;
  position: relative;
  transition: opacity linear 0.1s;
  &::before {
    animation: 2s linear infinite ${spinnerAnimation};
    border: solid 3px #7159c1;
    border-bottom-color: #21d8ff;
    border-radius: 50%;
    content: "";
    height: 40px;
    left: 50%;
    opacity: inherit;
    position: absolute;
    top: 25%;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    width: 40px;
    will-change: transform;
  }
`;

export const HeaderDetails = styled.div`
  @font-face {
    font-family: "get_schwifty";
    src: local("get_schwifty"), url(${HeaderFont}) format("truetype");
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px 30px;
  header {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    //user-select: none;
    @media only screen and (max-width: 600px) {
      margin-top: -30px;
    }
    h1 {
      font: 5em "get_schwifty";
      -webkit-text-stroke: 1px #f5f5f5;
      color: #21d8ff;
      @media only screen and (max-width: 600px) {
        text-align: center;
        font-size: 2.5em;
      }
    }
  }
  .IconBack {
    margin-bottom: 20px;
    height: 22px;
    //width: 100%;
    position: relative;
    margin-right: 50px;
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
`;
export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;
export const CardDetails = styled.div`
  color: #fff;
  background: #7d12ff;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  background-color: transparent;
  height: 500px;
  width: 700px;
  display: grid;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  border: 4px solid #ab20fd;
  box-shadow: 0 10px 25px #ab20fd;
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 7px;
  }
  // ul {
  //   opacity: ${(props) => (props.displayEpisodes ? 1 : 0)};
  //   top: 0;
  //   right: 0;
  //   height: 82%;
  //   width: 98%;
  //   position: absolute;
  //   overflow-y: ${(props) => (props.displayEpisodes ? 'auto' : 'hidden')};
  //   transition: opacity 150ms ease-in-out;
  //   &::-webkit-scrollbar {
  //     display: none;
  //   }
  // }
  li {
    font-size: 1em;
    font-weight: bold;
    border-radius: 20%;
    margin: 5px;
    margin-top: 10px;
    padding: 5px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(47, 53, 49, 0.12),
      0 1px 2px rgba(47, 53, 49, 0.24);
  }
  .column-left {
    float: left;
    margin: -20px 20px 10px -20px;
  }
  .column-right {
    float: right;
    margin: -30px -20px 0 10px;
  }
  .Episodes {
  }
`;
export const CardGridDetails = styled.ul`
  display: ${({ loading }) => (loading ? 'block' : 'grid')};
  grid-template-columns: repeat(auto-fit, minmax(1fr));
  width: 750px;
  height: 550px;
  margin: 20px 50px;
  grid-gap: 25px;
  background-color: #333;
  border-radius: 10px;
  color: white;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Characters = styled.div`
ul {
  //opacity: ${(props) => (props.displayEpisodes ? 1 : 0)};
  top: 69%;
  right: 0;
  height: 82%;
  width: 98%;
  position: absolute;
  overflow-y: ${(props) => (props.displayEpisodes ? 'auto' : 'hidden')};
  transition: opacity 150ms ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
  p {
    background: #7159c1;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px;
    margin: 5px 2px 5px 2px;
    width: 30%;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  li {
    background: #7159c1;
    font-weight: bold;
    width: 9%;
    border-radius: 50%;
    margin: 2px;
    padding: 5px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;
