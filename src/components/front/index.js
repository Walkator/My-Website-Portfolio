import React from 'react';
import styled from 'styled-components';
import imageFrame from '../../images/imageFrame.svg';

const Wrapper = styled.div`
    position: absolute;
    width: 661px;
    height: 832px;
    left: 0px;
    top: 200px;
    line-height: 1.5em;
    height: 3em;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
`;

const Title = styled.h1`
    position: absolute;
    width: 264px;
    height: 56px;
    left: 828px;
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
    width: 597px;
    height: 21px;
    left: 661px;
    top: 70px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: #000000;
`;

const ImgLogo = styled.img`
    position: absolute;
    width: 200px;
    height: 200px;
    left: 860px;
    top: 150px;

    border-radius: 50%;
    background: #C4C4C4;
`;

const Image = styled.img`
    position: absolute;
    width: 661px;
    height: 347px;
    left: 635px;
    top: 435px;
`;

class Front extends React.Component {

    render() {
        return (
            <Wrapper>
                <Title>Hello World!</Title>
                <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Description>
                <ImgLogo></ImgLogo>
                <Image src={imageFrame}></Image>
            </Wrapper>
        );
    }
}


export default Front;