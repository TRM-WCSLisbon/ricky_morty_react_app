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

  // :hover {
  //   @media only screen and (min-width: 600px) {
  //     transform: scale(1.05);
  //   }
  // }
  :hover section {
    transform: rotateY(180deg);
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 7px;
  }

  section {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .card-front, header {
      position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
      padding: 5px 0 10px 10px;
      
      header{
        background-color: #333;
  color: white;
  padding: 20px;
  transform: rotateY(180deg);
      }
      h1 {
        span {
          background: rgba(33, 216, 255, 0.8);
          color: #fff;
          border-radius: 3px;
          padding: 0 6px;
        }
      }

      h3 {
        color: #fff;
        margin-top: 5px;
      }
    }
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
  }
`;

export const CardGrid = styled.ul`
  display: ${({ loading }) => (loading ? 'block' : 'grid')};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

export const PageNumber = styled.li`
  color: ${({ actualPage }) => (actualPage ? '#21d8ff' : '#000')};
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
    content: '';
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
