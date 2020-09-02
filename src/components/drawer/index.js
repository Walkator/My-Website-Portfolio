import React from 'react';
import styled from 'styled-components';
import iconMobile from '../../images/Mobile.svg';
import iconDatabase from '../../images/Database.svg';
import iconTerminal from '../../images/Terminal.svg';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 625px;
    left: 0px;
    top: 40px;

    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    
    @media (max-width: 1200px) {
        flex-direction: column;
        top: 290px;
        margin-bottom: 400px;
    }
`;

const Container = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    left: 0px;
    top: 0px;

    margin: 18px;

    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

const Image = styled.img`
    position: relative;
    width: 150px;
    height: 150px;
    left: 0px;
    top: 0px;

    @media (max-width: 1200px) {
        top: -20px;
    }
`;

const Title = styled.h1`
    position: relative;
    width: 100%;
    height: 21px;
    left: 0px;
    top: -20px;

    margin: auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    text-align: center;

    color: #222831;
    margin: auto;

    @media (max-width: 1200px) {
        top: -50px;
    }
`;


const Description = styled.h1`
    position: relative;
    width: 90%;
    height: 50px;
    left: 0px;
    top: 10px;

    margin: auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #000000;
    margin: auto;

    @media (max-width: 1200px) {
        top: -30px;
    }
`;

const TextPre = styled.h1`
    position: relative;
    width: 100%;
    height: 50px;
    left: 0px;
    top: 50px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #00ADB5;
    margin: auto;

    @media (max-width: 1200px) {
        top: -10px;
    }
`;

const Technologies = styled.h1`
    position: relative;
    width: 80%;
    height: 20px;
    left: 0px;
    top: 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #000000;
    margin: auto;

    @media (max-width: 1200px) {
        top: -30px;
    }
`;


class Drawer extends React.Component {

    render() {
        return (
            <Wrapper>
                <Container>
                    <Image src={iconTerminal} />
                    <Title>Backed Develoment</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam imperdiet lacinia. Mauris eget ligula nisi. Mauris bibendum mauris elit.</Description>
                    <TextPre>Languages & tools I've learned and used:</TextPre>
                    <Technologies>Nullam, efficitur, massa, consequat, porttitor, varius, Aliquam, blandit, accumsan, lacus.</Technologies>
                </Container>
                <Container>
                    <Image src={iconDatabase} />
                    <Title>Database Develoment</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam imperdiet lacinia. Mauris eget ligula nisi. Mauris bibendum mauris elit.</Description>
                    <TextPre>Languages & tools I've learned and used:</TextPre>
                    <Technologies>Nullam, efficitur, massa, consequat, porttitor, varius, Aliquam, blandit, accumsan, lacus.</Technologies>
                </Container>
                <Container>
                    <Image src={iconMobile} />
                    <Title>Mobile Develoment</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam imperdiet lacinia. Mauris eget ligula nisi. Mauris bibendum mauris elit.</Description>
                    <TextPre>Languages & tools I've learned and used:</TextPre>
                    <Technologies>Nullam, efficitur, massa, consequat, porttitor, varius, Aliquam, blandit, accumsan, lacus.</Technologies>
                </Container>
            </Wrapper>
        );
    }
}


export default Drawer;

/**
 *  <Container2 style={{'left' : 736}}>
                    <Image src={iconDatabase} />
                    <Title>Database Develoment</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam imperdiet lacinia. Mauris eget ligula nisi. Mauris bibendum mauris elit.</Description>
                    <TextPre>Languages & tools I've learned and used:</TextPre>
                    <Languages>Nullam, efficitur, massa, consequat, porttitor, varius, Aliquam, blandit, accumsan, lacus.</Languages>
                </Container2>
                <Container3 style={{'left' : 1199}}>
                    <Image src={iconMobile} />
                    <Title>Mobile Develoment</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam imperdiet lacinia. Mauris eget ligula nisi. Mauris bibendum mauris elit.</Description>
                    <TextPre>Languages & tools I've learned and used:</TextPre>
                    <Languages>Nullam, efficitur, massa, consequat, porttitor, varius, Aliquam, blandit, accumsan, lacus.</Languages>
                </Container3>
 */