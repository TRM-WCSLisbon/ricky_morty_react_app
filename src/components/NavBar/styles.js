import styled from 'styled-components';
import bg from './tenor.gif';

export const Nav = styled.nav`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font: 20px 'Roboto', sans-serif;

    img{
        position:absolute;
        display: flex;
        float:left;
        margin: 20px 20px;
        justify-content: center;
    }
    ul{
        display: flex;
        justify-content: center;
        text-align: center;
        float: right;
        margin-right:0px;
    }
    #left{
        float: left;
        margin-left:50px;
        margin-right:0;
    }
    li{
        justify-content: center;
        margin-top: 100px;
        margin-right: 50px;
        font:'Roboto', sans-serif;
        font-size:1.3em;
        list-style: none;
    }
    li a {
        color:#000;
        font-size:1.5em;
        font-weight: bold;
        text-decoration: none;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #fff;
        
     }
     li a:hover { 
        background: #333642;
        box-shadow: 6px 5px 11px rgba(51,54,66,.9);
    } 
    @media only screen and (max-width: 960px) {
        li{
            font-size: 1em;
        };
      }
    }
    @media only screen and (max-width: 795px) {
        li{
            font-size: 0.9em;
            display: flex;
            position: relative;
            padding: 20px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 90px;
        };
      }
    }
    @media only screen and (max-width: 701px) {
        li{
            font-size: 0.8em;
            padding: 10px;
            margin-top: 90px;
            margin-left: auto;
            margin-right: 20px;
        };
      }
    }
    @media only screen and (max-width: 647px) {
        li{
            display: flex;
            flex-direction: wrap;
            font-size: 0.8em;
            padding: 5px;
            margin-top: 80px;
            margin-left: auto;
            margin-right: auto;
        };
      }
    }
    @media only screen and (max-width: 450px) {
        li{
            font-size: 0.8em;
            display: flex;
            position: relative;
            padding: 10px;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
        };
      }
    }
    
    
`;

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
