import styled from 'styled-components';

export const Nav = styled.div`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    img{
        display: flex;
        float:left;
        margin: 20px 20px;
        justify-content: center;
    }
    ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        float: right;
        margin-right:50px;
    }
    li{
        justify-content: center;
        margin-top: 50px;
        margin-right: 50px;
        font:'Roboto', sans-serif;
        font-size:1.3em;
        list-style: none;
        text-decoration: none;
    }
`;

export default Nav;
