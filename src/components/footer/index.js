import React from 'react';
import styled from 'styled-components';
import Logo from "../../images/logo.jpg";

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 500px;
    left: 0px;
    top: 0px;

    background:  #222831;
`;

const Wrapper = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
`;

const Start = styled.div`
    position: absolute;
    width: 1355px;
    height: 200px;
    left: -685px;
    top: -100px;

    background: #222431;
    border-radius: 20px;

    @media (max-width: 1420px) {
        width: 1000px;
        left: -500px;
    }

    @media (max-width: 1050px) {
        width: 700px;
        left: -350px;
    }

    @media (max-width: 750px) {
        width: 500px;
        left: -250px;
    }
`;

const Terms = styled.h1`
    position: absolute;
    width: 494px;
    height: 0%;
    left: -250px;
    top: 400px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #EEEEEE;

    @media (max-width: 750px) {
        font-size: 16px;
    }
`;


const Eclipse = styled.button`
    position: absolute;
    width: 48px;
    height: 48px;
    left: -150px;
    top: 309px;

    background: #222831;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 50%;
`;

const Line= styled.div`
    position: absolute;
    width: 600px;
    height: 0%;
    left: -310px;
    top: 250px;

    border: 1px solid #000000;

    @media (max-width: 750px) {
        left: -160px;
        width: 300px;
    }
`;

const Image = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    left: -60px;
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
    @media (max-width: 1420px) {
        width: 539px;
        top: -15px;
        left: 220px;
    }

    @media (max-width: 1050px) {
        width: 539px;
        top: -15px;
        left: 75px;
        font-size: 28px;
    }

    @media (max-width: 750px) {
        width: 539px;
        left: -20px;
        font-size: 24px;
    }
`;

const TextWrapperStart = styled.h1`
    position: absolute;
    width: 661px;
    height: 98px;
    left: 300px;
    top: 60px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    
    color: #FFFFFF;

    @media (max-width: 1420px) {
        left: 160px;
        top: 40px;
    }

    @media (max-width: 1050px) {
        width: 361px;
        font-size: 18px;
    }

    @media (max-width: 750px) {
        left: 60px;
        font-size: 16px;
    }
`;

const ButtonWrapperStart = styled.button`
    position: absolute;
    width: 161px;
    height: 58px;
    left: 1100px;
    top: 55px;

    background: #222431;
    border: 2px solid #00ADB5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;

    @media (max-width: 1420px) {
        top: 130px;
        left: 410px;
    }

    @media (max-width: 1050px) {
        top: 130px;
        left: 260px;
    }

    @media (max-width: 750px) {
        top: 130px;
        left: 160px;
    }
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
            <Background>
                <Wrapper>
                    <Start>
                        <TittleWrapperStart>Start a proyect</TittleWrapperStart>
                        <TextWrapperStart>Cras id sodales enim. Suspendisse ac nunc ut nisi vestibulum.</TextWrapperStart>
                        <ButtonWrapperStart>
                            <TextButtonWrapperStart>Contact</TextButtonWrapperStart>
                        </ButtonWrapperStart>
                    </Start>
                    <Image src={Logo}></Image>
                    <Line></Line>
                    <Eclipse></Eclipse>
                    <Eclipse style={{'left': -33}}></Eclipse>
                    <Eclipse style={{'left': 84}}></Eclipse>
                    <Terms>Terms & Conditions Privacy Policy Copyright © 2020 Walkator Ltd. All rights reserved. Site credit.</Terms>
                </Wrapper>
            </Background>
        );
    }
};



export default Footer;

/*
<Background>
                <Wrapper>
        
                    <Start>
                        <TittleWrapperStart>Start a proyect</TittleWrapperStart>
                        <TextWrapperStart>Cras id sodales enim. Suspendisse ac nunc ut nisi vestibulum.</TextWrapperStart>
                        <ButtonWrapperStart>
                            <TextButtonWrapperStart>Contact</TextButtonWrapperStart>
                        </ButtonWrapperStart>
                    </Start>
                   
                    <Image src={Logo}></Image>
                    <Line></Line>
                    <Eclipse></Eclipse>
                    <Eclipse style={{'left': -33}}></Eclipse>
                    <Eclipse style={{'left': 84}}></Eclipse>
                    <Terms>Terms & Conditions Privacy Policy Copyright © 2020 Walkator Ltd. All rights reserved. Site credit.</Terms>
                </Wrapper>
            </Background>
*/

/*
const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 500px;
    left: 0px;
    top: 1900px;

    background:  #222831;
    @media (max-width: 1420px) {
        top: 2400px;
    }

    @media (max-width: 1050px) {
        top: 2900px;
    }

    @media (max-width: 750px) {
        top: 3100px;
    }
`;

const Wrapper = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
`;

const Start = styled.div`
    position: absolute;
    width: 1355px;
    height: 200px;
    left: -685px;
    top: -100px;

    background: #222431;
    border-radius: 20px;

    @media (max-width: 1420px) {
        width: 1000px;
        left: -500px;
    }

    @media (max-width: 1050px) {
        width: 700px;
        left: -350px;
    }

    @media (max-width: 750px) {
        width: 500px;
        left: -250px;
    }
`;

const Terms = styled.h1`
    position: absolute;
    width: 494px;
    height: 0%;
    left: -250px;
    top: 400px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #EEEEEE;

    @media (max-width: 750px) {
        font-size: 16px;
    }
`;


const Eclipse = styled.button`
    position: absolute;
    width: 48px;
    height: 48px;
    left: -150px;
    top: 309px;

    background: #222831;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 50%;
`;

const Line= styled.div`
    position: absolute;
    width: 600px;
    height: 0%;
    left: -310px;
    top: 250px;

    border: 1px solid #000000;

    @media (max-width: 750px) {
        left: -160px;
        width: 300px;
    }
`;

const Image = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    left: -60px;
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
    @media (max-width: 1420px) {
        width: 539px;
        top: -15px;
        left: 220px;
    }

    @media (max-width: 1050px) {
        width: 539px;
        top: -15px;
        left: 75px;
        font-size: 28px;
    }

    @media (max-width: 750px) {
        width: 539px;
        left: -20px;
        font-size: 24px;
    }
`;

const TextWrapperStart = styled.h1`
    position: absolute;
    width: 661px;
    height: 98px;
    left: 300px;
    top: 60px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    
    color: #FFFFFF;

    @media (max-width: 1420px) {
        left: 160px;
        top: 40px;
    }

    @media (max-width: 1050px) {
        width: 361px;
        font-size: 18px;
    }

    @media (max-width: 750px) {
        left: 60px;
        font-size: 16px;
    }
`;

const ButtonWrapperStart = styled.button`
    position: absolute;
    width: 161px;
    height: 58px;
    left: 1100px;
    top: 55px;

    background: #222431;
    border: 2px solid #00ADB5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;

    @media (max-width: 1420px) {
        top: 130px;
        left: 410px;
    }

    @media (max-width: 1050px) {
        top: 130px;
        left: 260px;
    }

    @media (max-width: 750px) {
        top: 130px;
        left: 160px;
    }
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

*/