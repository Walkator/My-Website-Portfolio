import React, { useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import Logo from "../../images/logo.jpg";
import LogoGitHub from "../../images/github.png"
import LogoLinkedin from "../../images/linkedin.png"
import LogoTwitter from "../../images/twitter.png"


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 370px;
    top: 0px;

    margin: auto;
    background:  #222831;
`;

const WrapperStart = styled.div`
    position: relative;
    width: 85%;
    height: 140px;
    left: 0px;
    top: -60px;

    margin: auto;

    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    background: #222431;
    border-radius: 20px;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;


const TittleWrapperStart = styled.h1`
    position: relative;
    width: 400px;
    height: 30%;
    left: 0%;
    top: 0px;

    margin-left: 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #FFFFFF;
    @media (max-width: 1420px) {
        font-size: 28px;
    }

    @media (max-width: 1200px) {
        margin-left: 0px;
    }

    @media (max-width: 1050px) {
        font-size: 28px;
    }

    @media (max-width: 750px) {
        font-size: 24px;
    }
`;

const TextWrapperStart = styled.h1`
    position: relative;
    width: 80%;
    height: 15%;
    left: 0px;
    top: 0px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;

    @media (max-width: 1420px) {
        font-size: 20px;
    }

    @media (max-width: 1200px) {
        font-size: 18px;
        top: -35px;
    }

    @media (max-width: 550px) {
        font-size: 12px;
        line-height: 20px;
        top: -25px;
    }
`;

const ButtonWrapperStart = styled.button`
    position: relative;
    width: 161px;
    height: 58px;
    left: 0px;
    top: 0px;

    margin-right: 50px;
    background: #222431;
    border: 2px solid #00ADB5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;

    &:hover {
        cursor: pointer;
        border: 2px solid #00d9e3;
    }

    @media (max-width: 1420px) {
        width: 140px;
        height: 38px;
    }

    @media (max-width: 1200px) {
        top: -20px;
        margin-right: 0px;
    }

    @media (max-width: 750px) {
        top: -10px;
    }

`;

const TextButtonWrapperStart = styled.h1`
    position: relative;
    width: 100%;
    height: 100%;
    left: 0px;
    top: -3px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color: #00ADB5;

    &:hover {
        cursor: pointer;
        color: #00d9e3;
    }

    @media (max-width: 1420px) {
        font-size: 20px;
        left: 0px;
        top: -10px;
    }
`;

const Image = styled.img`
    position: relative;
    width: 100px;
    height: 100px;
    left: 0px;
    top: -40px;
    margin: auto;

    border-radius: 50%;
`;

const Line= styled.div`
    position: relative;
    width: 60%;
    left: 0px;
    top: -20px;
    margin: auto;

    border: 1px solid #000000;
`;


const WrapperEclipse = styled.div`
    position: relative;
    width: 100%;
    height: 0px;
    left: 0%;
    top: 30px;

    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Eclipse = styled.button`
    position: relative;
    width: 50px;
    height: 50px;
    left: 0px;
    top: 0px;

    background: #222831;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        border: 1px solid #00d9e3;
    }
`;

const ImageSocialMedia = styled.img`
    position: absolute;
    width: 35px;
    height: 35px;
    left: 6px;
    top: 6px;
`;


const Terms = styled.h1`
    position: relative;
    width: 100%;
    left: 0px;
    top: 70px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: center;

    color: #080a0c;
`;


class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const path = this.props.location.pathname.slice(1);
        return (
            <Wrapper>
                {path != "contact" ? (
                    <WrapperStart>
                        <TittleWrapperStart>Start a proyect</TittleWrapperStart>
                        <TextWrapperStart>Cras id sodales enim. Suspendisse ac nunc ut nisi vestibulum.</TextWrapperStart>
                        <Link to='/contact'>
                            <ButtonWrapperStart><TextButtonWrapperStart>Contact</TextButtonWrapperStart></ButtonWrapperStart>
                        </Link>
                    </WrapperStart>
                ) : (
                    <div style={{'height': 140}}></div>
                )}
            
                <Image src={Logo}/>
                <Line/>

                <WrapperEclipse>
                    <a href="https://www.github.com">
                        <Eclipse style={{'left': -33}}><ImageSocialMedia src={LogoGitHub}/></Eclipse>
                    </a>
                    
                    <a href="https://www.linkedin.com">
                        <Eclipse><ImageSocialMedia src={LogoLinkedin}/></Eclipse>
                    </a>
                    
                    <a href="https://www.twitter.com">
                        <Eclipse style={{'left': 33}}><ImageSocialMedia src={LogoTwitter}/></Eclipse>
                    </a>
                </WrapperEclipse>
                <Terms>Terms & Conditions Privacy Policy Copyright © 2020 Walkator Ltd. All rights reserved. Site credit.</Terms>

            </Wrapper>
        );
    }
};



export default withRouter(Footer);
/*

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 370px;
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
    height: 140px;
    left: -685px;
    top: -110px;

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
        width: 400px;
        left: -200px;
    }
`;

const Terms = styled.h1`
    position: absolute;
    width: 494px;
    height: 0%;
    left: -250px;
    top: 300px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #EEEEEE;

    @media (max-width: 750px) {
        left: -200px;
        width: 394px;
        font-size: 15px;
    }
`;


const Eclipse = styled.button`
    position: absolute;
    width: 49px;
    height: 49px;
    left: -150px;
    top: 209px;

    background: #222831;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        border: 1px solid #00d9e3;
    }
`;

const Line= styled.div`
    position: absolute;
    width: 600px;
    height: 0%;
    left: -310px;
    top: 180px;

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
    top: 40px;

    border-radius: 50%;
`;


const TittleWrapperStart = styled.h1`
    position: absolute;
    width: 239px;
    height: 42px;
    left: 50px;
    top: 25px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #FFFFFF;
    @media (max-width: 1420px) {
        font-size: 28px;
        width: 539px;
        top: -15px;
        left: 230px;
    }

    @media (max-width: 1050px) {
        width: 539px;
        top: -15px;
        left: 80px;
        font-size: 28px;
    }

    @media (max-width: 750px) {
        width: 539px;
        left: -65px;
        font-size: 24px;
    }
`;

const TextWrapperStart = styled.h1`
    position: absolute;
    width: 661px;
    height: 98px;
    left: 350px;
    top: 45px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    
    color: #FFFFFF;

    @media (max-width: 1420px) {
        font-size: 16px;
        left: 170px;
        top: 40px;
    }

    @media (max-width: 1050px) {
        left: 30px;
        width: 661px;
        font-size: 18px;
    }

    @media (max-width: 750px) {
        width: 400px;
        left: 0px;
        top: 30px;
        font-size: 16px;
    }
`;

const ButtonWrapperStart = styled.button`
    position: absolute;
    width: 161px;
    height: 58px;
    left: 1140px;
    top: 40px;

    background: #222431;
    border: 2px solid #00ADB5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;

    &:hover {
        cursor: pointer;
        border: 2px solid #00d9e3;
    }

    @media (max-width: 1420px) {
        width: 140px;
        height: 38px;
        top: 90px;
        left: 420px;
    }

    @media (max-width: 1050px) {
        top: 90px;
        left: 270px;
    }

    @media (max-width: 750px) {
        top: 100px;
        left: 120px;
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

    &:hover {
        cursor: pointer;
        color: #00d9e3;
    }

    @media (max-width: 1420px) {
        font-size: 20px;
        left: 0px;
        top: -10px;
    }
`;

const ImageSocialMedia = styled.img`
    position: absolute;
    width: 35px;
    height: 35px;
    left: 6px;
    top: 6px;
`;


class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const path = this.props.location.pathname.slice(1);
        return (
            <Background>
                <Wrapper>
                    {path != "contact" ? (
                        <Start>
                            <TittleWrapperStart>Start a proyect</TittleWrapperStart>
                            <TextWrapperStart>Cras id sodales enim. Suspendisse ac nunc ut nisi vestibulum.</TextWrapperStart>
                            <Link to='/contact'>
                                <ButtonWrapperStart><TextButtonWrapperStart>Contact</TextButtonWrapperStart></ButtonWrapperStart>
                            </Link>
                        </Start>
                    ) : null}
                
                    <Image src={Logo}></Image>
                    <Line></Line>

                    <a href="https://www.github.com">
                    
                        <Eclipse><ImageSocialMedia src={LogoGitHub}/></Eclipse>
                    </a>
                    
                    <a href="https://www.linkedin.com">
                        <Eclipse style={{'left': -33}}><ImageSocialMedia src={LogoLinkedin}/></Eclipse>
                    </a>
                    
                    <a href="https://www.twitter.com">
                        <Eclipse style={{'left': 84}}><ImageSocialMedia src={LogoTwitter}/></Eclipse>
                    </a>
                        
                    <Terms>Terms & Conditions Privacy Policy Copyright © 2020 Walkator Ltd. All rights reserved. Site credit.</Terms>

                </Wrapper>
            </Background>
        );
    }
};

*/