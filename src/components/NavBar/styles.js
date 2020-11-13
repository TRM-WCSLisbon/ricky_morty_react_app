import styled from 'styled-components';
import bg from './tenor.gif';
// import HeaderFont from '../get_schwifty.ttf';

// export const Nav = styled.nav`
// @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
// @font-face {
//     font-family: "get_schwifty";
//     src: local("get_schwifty"), url(${HeaderFont}) format("truetype");
//   }
//     font: 2.5em 'get_schwifty';

//     ul{
//         display: flex;
//         justify-content: center;
//         text-align: center;
//         float: right;
//         margin-right:0px;
//     }
//     #left{
//         float: left;
//         margin-left:50px;
//         margin-right:0;
//     }
//     li{
//         justify-content: center;
//         margin-top: 100px;
//         margin-right: 50px;
//         list-style: none;
//     }
//     li a {
//         color:#000;
//         text-decoration: none;
//         -webkit-text-stroke-width: 1px;
//         -webkit-text-stroke-color: #fff;
        
//      }
//      li a:hover { 
//         background: #333642;
//         border-radius:20px;
//         box-shadow: 6px 5px 11px rgba(51,54,66,.9);
//     } 
//     @media only screen and (max-width: 945px) {
//         li{
//             font-size: 1em;
//             margin-top: 60px;

//         };
//       }
//     }
//     @media only screen and (max-width: 795px) {
//         li{
//             font-size: 0.9em;
//             display: flex;
//             position: relative;
//             padding: 20px;
//             margin-left: auto;
//             margin-right: 30px;
//             margin-top: 30px;
//         };
//       }
//     }
//     @media only screen and (max-width: 701px) {
//         li{
//             padding: 10px;
//             margin-top: 40px;
//             margin-right: 20px;
//         };
//       }
//     }
//     @media only screen and (max-width: 647px) {
//         li{
//             flex-direction: wrap;
//             padding: 5px;
//             margin-right: 30px;

//         };
//       }
//     }
//     // @media only screen and (max-width: 500px) {
//     //     li{
//     //         font-size: 0.8em;
//     //         padding: 10px;
//     //         margin-top: 40px;
//     //     };
//     //   }
//     // }
    
    
// `;

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
