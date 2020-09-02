import React from 'react';
import styled from 'styled-components';
import Logo from "../../images/logo.jpg";
import { Link } from 'react-router-dom';

const Menu = styled.nav`
    position: relative;
    width: 100%;
    height: 175px;
    top: 0px;
`;

const Image = styled.img`
    position: relative;
    width: 100px;
    height: 100px;
    left: 0px;
    top: 20px;

    margin-left: 10%;
    float: left;
    background: #C4C4C4;
    border-radius: 50%;
`;

const Button = styled.button`
    position: relative;
    width: 120px;
    height: 50px;
    left: 0px;
    top: 50px;

    color: #ffffff;
    border: 2px solid #00ADB5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
    
    margin-right: 10%;
    float: right;

    
    background-color: white;

    &:hover {
        cursor: pointer;
        border: 2px solid #00d9e3;
    }
`;

const ButtonPortfolio = styled.h1`
    position: relative;
    width: 120px;
    height: 50px;
    left: 0px;
    top: 53px;

    float: right;
    margin-right: 1%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
  

    color: #222831;

    &:hover {
        color: #00ADB5;
        cursor: pointer;
    }
    @media (max-width: 1200px) {
        color: #ffffff;
        &:hover {
            color: #ffffff;
            cursor: default;
        }
    }
`;

const ButtonText = styled.h1`
    position: relative;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: #00ADB5;
    &:hover {
        cursor: pointer;
        color: #00d9e3;
    }
`;


class Header extends React.Component {

    render() {
        return (
            <Menu>
                <Link to='/'>
                    <Image src={Logo}></Image>
                </Link>
                <Link to='/contact'>
                    <Button>
                        <ButtonText >Get in touch</ButtonText>
                    </Button>
                </Link>
    
                <Link to='/portfolio'>
                    <ButtonPortfolio>Portfolio</ButtonPortfolio>
                </Link>
            </Menu>
        );
    }
};



export default Header;