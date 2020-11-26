/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import bg from './tenor.gif';

export const Background = styled.div`
    {
    background: #050404 url(${bg}) no-repeat;
    background-position: center center;
    background-size: 100% cover; 
    margin:0;
    width: 100%;
    height: 30vh;
    content:100%;
    color: #fff;
    }
    @media only screen and (max-width: 795px) {
        {
            width: 100%;
        };
      }
    }
    @media only screen and (max-width: 647px) {
        {
            width: 100%;
        };
      }
    }
    @media only screen and (max-width: 450px) {
        {
            width: 100%;
            height: 20vh;  
        };
      }
    }
`;
