import React from 'react';
import styled from 'styled-components';
import imageFrame from '../../images/imageFrame.svg';
import Logo from "../../images/logo.jpg";

const Wrapper = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 200px;

    line-height: 1.5em;
`;

const Title = styled.h1`
    position: absolute;
    width: -500px;
    height: 0%;
    left: -130px;
    top: -30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #222831;
    
`;

const Description = styled.h1`
    position: absolute;
    width: 700px;
    height: 0%;
    left: -350px;
    top: 70px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #000000;

    @media (max-width: 750px) {
        overflow-wrap: break-word;
        width: 400px;
        left: -200px;
    }
`;

const ImgLogo = styled.img`
    position: absolute;
    width: 200px;
    height: 200px;
    left: -100px;
    top: 170px;

    border-radius: 50%;
    background: #C4C4C4;
`;

const Image = styled.img`
    position: absolute;
    width: 500px;
    height: 347px;
    left: -245px;
    top: 478px;

    @media (max-width: 750px) {
        width: 430px;
        left: -217px;
        top: 496px;
    }
`;

class Front extends React.Component {

    render() {
        return (
            <Wrapper>
                <Title>Hello World!</Title>
                <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Description>
                <ImgLogo src={Logo}></ImgLogo>
                <Image src={imageFrame}></Image>
            </Wrapper>
        );
    }
}


export default Front;