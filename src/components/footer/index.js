import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';

const Wrapper = styled.div`
    position: absolute;
    width: 1920px;
    height: 500px;
    left: 0px;
    top: 1975px;

    background: #222831;
`;

const WrapperStart = styled.div`
    position: absolute;
    width: 1373px;
    height: 190px;
    left: 272px;
    top: -100px;

    background: #222431;
    border-radius: 20px;
`;

const Terms = styled.h1`
    position: absolute;
    width: 494px;
    height: 42px;
    left: 712px;
    top: 400px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #EEEEEE;
`;


const Eclipse1 = styled.button`
    position: absolute;
    width: 48px;
    height: 48px;
    left: 843px;
    top: 309px;

    background: #222831;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 50%;
`;

const Eclipse2 = styled.button`
    position: absolute;
    width: 48px;
    height: 48px;
    left: 935px;
    top: 309px;

    background: #222831;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 50%;
`;

const Eclipse3 = styled.button`
    position: absolute;
    width: 48px;
    height: 48px;
    left: 1027px;
    top: 309px;

    background: #222831;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 50%;
`;

const Line= styled.div`
    position: absolute;
    width: 600px;
    height: 0px;
    left: 660px;
    top: 250px;

    border: 1px solid #000000;
`;

const Image = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    left: 909px;
    top: 120px;

    background: #C4C4C4;
    border-radius: 50%;
`;


const TittleWrapperStart = styled.h1`
    position: absolute;
    width: 239px;
    height: 42px;
    left: 50px;
    top: 45px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #FFFFFF;
`;

const TextWrapperStart = styled.h1`
    position: absolute;
    width: 661px;
    height: 98px;
    left: 300px;
    top: 65px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    
    color: #FFFFFF;
`;

const ButtonWrapperStart = styled.button`
    position: absolute;
    width: 161px;
    height: 58px;
    left: 1100px;
    top: 65px;

    background: #222431;
    border: 2px solid #00ADB5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
`;

const TextButtonWrapperStart = styled.h1`
    position: absolute;
    width: 137px;
    height: 10px;
    left: 8px;
    top: -4px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #00ADB5;
`;



class Footer extends React.Component {

    render() {
        return (
            <Wrapper>
                <WrapperStart>
                    <TittleWrapperStart>Start a proyect</TittleWrapperStart>
                    <TextWrapperStart>Cras id sodales enim. Suspendisse ac nunc ut nisi vestibulum.</TextWrapperStart>
                    <ButtonWrapperStart>
                        <TextButtonWrapperStart>Contact</TextButtonWrapperStart>
                    </ButtonWrapperStart>
                </WrapperStart>
                <Image></Image>
                <Line></Line>
                <Eclipse1></Eclipse1>
                <Eclipse2></Eclipse2>
                <Eclipse3></Eclipse3>
                <Terms>Terms & Conditions Privacy Policy Copyright © 2020 Walkator Ltd. All rights reserved. Site credit.</Terms>
            </Wrapper>
        );
    }
};



export default Footer;