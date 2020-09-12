import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 0%;
    left: 0%;
    top: 56px;

    min-height: 250px;
    margin: auto;
    background: #00ADB5;
`;

const Title = styled.h1`
    position: relative;
    width: 90%;
    height: 20px;
    left: 0px;
    top: 30px;

    margin: auto;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #FFFFFF;

    padding-bottom: 30px;
`;

const Text = styled.h1`
    position: relative;
    width: 45%;
    height: 30%;
    top: 35px;

    margin: auto;

    padding-bottom: 90px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;

    @media (max-width: 1200px) {
        width: 65%;
    }

    @media (max-width: 800px) {
        top: 50px;
    }
`;


class Description extends React.Component {

    render() {
        return (
            <Wrapper>
                <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ex ac lorem maximus efficitur ac eget metus. Curabitur dolor dui, imperdiet nec felis vitae, efficitur pretium turpis. Maecenas tristique, orci cursus gravida gravida, orci diam tempus ipsum, sit amet lobortis velit enim ut arcu. Cras sagittis tincidunt massa vitae tincidunt. Vivamus at luctus tortor, egestas dignissim metus. Nunc semper nec urna vel cursus. Donec sed nisi mauris. Nulla non hendrerit odio. Fusce egestas est vitae mollis viverra. Aenean nec magna mi. Donec vestibulum facilisis ex, sed laoreet erat mattis eu. Fusce porttitor leo risus.</Text>
            </Wrapper>
        );
    }
}



export default Description;