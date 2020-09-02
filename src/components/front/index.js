import React from 'react';
import styled from 'styled-components';
import imageFrame from '../../images/imageFrame.svg';
import Logo from "../../images/logo.jpg";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 750px;
    left: 0px;
    top: 50px;
    margin: auto;
`;

const Title = styled.h1`
    position: relative;
    width: 95%;
    height: 0%;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #222831;
`;

const Description = styled.h1`
    position: relative;
    width: 95%;
    height: 0px;
    left: 0px;
    top: 30px;

    margin: auto;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

    padding-bottom: 150px;
`;

const ImgLogo = styled.img`
    position: relative;
    width: 200px;
    height: 200px;
    left: 0px;
    top: 0px;

    margin-left: auto;
    margin-right: auto;

    border-radius: 50%;
    background: #C4C4C4;
    display: block;

`;

const Image = styled.img`
    position: relative;
    width: 400px;
    height: 300px;
    left: 0px;
    top: 0px;

    margin-left: auto;
    margin-right: auto;
    
    padding-top: 151px;

    display: block;
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