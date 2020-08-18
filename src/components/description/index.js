import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 300px;
    left: 0px;
    top: 982px;

    background: #00ADB5;
    @media (max-width: 750px) {
        height: 500px;
    }
`;

const Wrapper = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
`;

const Title = styled.h1`
    position: absolute;
    width: -600px;
    height: 0%;
    left: -380px;
    top: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #FFFFFF;

    @media (max-width: 750px) {
        overflow-wrap: break-word;
        width: 300px;
        left: -160px;
    }
`;

const Text = styled.h1`
    position: absolute;
    width: 1000px;
    height: 0%;
    left:  -500px;
    top: 75px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;

    @media (max-width: 750px) {
        overflow-wrap: break-word;
        width: 400px;
        left: -200px;
        top: 125px;
    }
`;


class Description extends React.Component {

    render() {
        return (
            <Background>
                <Wrapper>
                    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ex ac lorem maximus efficitur ac eget metus. Curabitur dolor dui, imperdiet nec felis vitae, efficitur pretium turpis. Maecenas tristique, orci cursus gravida gravida, orci diam tempus ipsum, sit amet lobortis velit enim ut arcu. Cras sagittis tincidunt massa vitae tincidunt. Vivamus at luctus tortor, egestas dignissim metus. Nunc semper nec urna vel cursus. Donec sed nisi mauris. Nulla non hendrerit odio. Fusce egestas est vitae mollis viverra. Aenean nec magna mi. Donec vestibulum facilisis ex, sed laoreet erat mattis eu. Fusce porttitor leo risus.</Text>
                </Wrapper>
                
            </Background>

            
        );
    }
}



export default Description;