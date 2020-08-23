import React from 'react';
import styled from 'styled-components';
import Logo from "../../images/logo.jpg";
import { Link } from 'react-router-dom';

const Menu = styled.nav`
    botton: 100;
    width: 100%;
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 10%;
    top: 20px;

    background: #C4C4C4;
    border-radius: 50%;
    
    max-width: 100px;
    max-height: 100px;

    min-width:: 100px;
    min-height: 100px;
`;

const Button = styled.button`
    position: absolute;
    width: 10%;
    height: 10%;
    left: 80%;
    top: 45px;

    color: #ffffff;
    border: 2px solid #00ADB5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;

    max-width: 160px;
    min-width: 120px;

    max-height: 50px;
    min-height: 50px;
    &:hover {
        cursor: pointer;
    }

    @media (max-width: 650px) {
        left: 70%;
    }
`;

const ButtonPortfolio = styled.h1`
    position: absolute;
    width: 70px;
    height: 21px;
    left: 71%;
    top: 48px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #222831;
    padding-right: 20px;

    max-width: 70px;
    min-width: 120px;

    max-height: 21px;
    min-height: 50px;
    &:hover {
        color: #00ADB5;
        cursor: pointer;
    }

    @media (max-width: 1200px) {
        color: #ffffff;
        padding-top: 3rem;

        &:hover {
            color: #ffffff;
            cursor: default;
        }
    }
`;

const ButtonText = styled.h1`
    position: absolute;
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