/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Foot = styled.div`

  .background {
    /* background-color: whitesmoke; */
    opacity: 0.85;
  }
  p:before {
    display: inline;
    content: "⚠ ";
  }
  .social-container {
    display: flex;
    justify-content: center;
  }
  a.social {
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
  }

  a.social:hover {
    transform: translateY(-2px);
  }

  a.youtube {
    color: #eb3223;
  }

  a.facebook {
    color: #4968ad;
  }

  a.twitter {
    color: #49a1eb;
  }

  a.instagram {
    color: purple;
  }

  /* create media queries for row attention on screen resize*/
`;
