import styled from 'styled-components';
import HeaderFont from '../get_schwifty.ttf';

export const Header = styled.div`
  @font-face {
    font-family: "get_schwifty";
    src: local("get_schwifty"), url(${HeaderFont}) format("truetype");
  }
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 50px 50px 10px;

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

export const Form = styled.form`

form {
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  font-weight: 100;
  color: white;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(79, 98, 148);
}

.form {
  /* background: #0e101c; */
  max-width: 400px;
  margin: 0 auto;
}

p {
  color: #000;
}

p:before {
  display: inline;
  content: "⚠ ";
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
}

label {
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: #bf1650;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #000;
  font-size: 1em;
  font-weight: bold;
  
}

button[type="submit"],
input[type="submit"] {
  background: #0e101c;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
}

button[type="submit"]:hover,
input[type="submit"]:hover {
  background: #bf1650;
}

button[type="submit"]:active,
input[type="button"]:active,
input[type="submit"]:active {
  transition: 0.3s all;
  transform: translateY(3px);
  border: 1px solid transparent;
  opacity: 0.8;
}

input:disabled {
  opacity: 0.4;
}

input[type="button"]:hover {
  transition: 0.3s all;
}

button[type="submit"],
input[type="button"],
input[type="submit"] {
  -webkit-appearance: none;
}

.App {
  max-width: 600px;
  margin: 0 auto;
}

button[type="button"] {
  display: block;
  appearance: none;
  /* background: #333; */
  color: white;
  border: none;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
}

pre {
  color: white;
}

hr {
  margin-top: 30px;
}

button {
  display: block;
  appearance: none;
  margin-top: 40px;
  border: 1px solid #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
}

`;
