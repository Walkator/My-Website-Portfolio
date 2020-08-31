import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    margin: auto;
    width: 90%;
    top: 250px;
    height: 400px;
`;

const Tittle = styled.h1`
    position: relative;
    width: -500px;
    height: 0%;
    left: 0px;
    top: -100px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #222831;
`;

const Description = styled.h1`
    position: relative;
    width: -500px;
    height: 0%;
    left: 0px;
    top: -60px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`;

const WrapperContainers = styled.div`
    position: relative;
    width: 100%;
    height: 450px;
    left: 0%;

    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;


    @media (max-width: 1200px) {
        flex-direction: column;
        height: 1000px;
        top: 50px;
    }
`;

const Container = styled.div`
    position: relative;
    width: 400px;
    height: 350px;
    left: 0%;
    top: 0px;
    margin: 18px;
    
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

const ImageContainer = styled.img`
    position: relative;
    width: 150px;
    height: 150px;
    left: 0px;
    top: 20px;

    &:hover {
        cursor: pointer;
    }
`;

const TitleContainer = styled.h1`
    position: relative;
    width: 100%;
    height: 20px;
    left: 0px;
    top: 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    text-align: center;

    color: #222831;

    &:hover {
        cursor: pointer;
        color: #00d9e3;
    }
`;


const DescriptionContainer = styled.h1`
    position: relative;
    width: 100%;
    height: 150px;
    left: 0px;
    top: 40px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;

    color: #000000;

   
`;


class Jobs extends React.Component {

    render() {
        return (
            <Wrapper>
                <Tittle>Portfolio</Tittle>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Description>
                <WrapperContainers>
                    <Container>
                        <ImageContainer></ImageContainer>
                        <TitleContainer>Prueba Titulo 1</TitleContainer>
                        <DescriptionContainer>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a est elit. Curabitur purus ligula, volutpat at tortor at, sagittis lacinia mi. Morbi egestas quam lectus, id molestie orci sagittis vitae. </DescriptionContainer>
                    </Container>
                    <Container>
                        <ImageContainer></ImageContainer>
                        <TitleContainer>Prueba Titulo 2</TitleContainer>
                        <DescriptionContainer>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a est elit. Curabitur purus ligula, volutpat at tortor at, sagittis lacinia mi. Morbi egestas quam lectus, id molestie orci sagittis vitae. </DescriptionContainer>
                    </Container>
                    <Container>
                        <ImageContainer></ImageContainer>
                        <TitleContainer>Prueba Titulo 3</TitleContainer>
                        <DescriptionContainer>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a est elit. Curabitur purus ligula, volutpat at tortor at, sagittis lacinia mi. Morbi egestas quam lectus, id molestie orci sagittis vitae. </DescriptionContainer>
                    </Container>
                </WrapperContainers>
            </Wrapper>
        )
    }
}


export default Jobs;