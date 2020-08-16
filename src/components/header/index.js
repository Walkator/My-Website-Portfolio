import React from 'react';
import styled from 'styled-components';
//import logo from "logo.jpg";
import { render } from '@testing-library/react';


const Menu = styled.div`
    position: absolute;
    width: 1397px;
    height: 100px;
`;

const Image = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    left: 270px;
    top: 20px;

    background: #C4C4C4;
    border-radius: 50%;
`;

const Button = styled.button`
    position: absolute;
    width: 160px;
    height: 50px;
    left: 1500px;
    top: 40px;

    border: 2px solid #00ADB5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
`;

const ButtonPortfolio = styled.h1`
    position: absolute;
    width: 70px;
    height: 21px;
    left: 1350px;
    top: 45px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: #222831;
`;

const ButtonText = styled.h1`
    position: absolute;
    width: 137px;
    height: 10px;
    left: 10px;
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
                <Image srt="./logo.jpg"></Image>
                <Button>
                    <ButtonText>Get in touch</ButtonText>
                </Button>
    
                <ButtonPortfolio>Portfolio</ButtonPortfolio>
            </Menu>
        );
    }
};



export default Header;