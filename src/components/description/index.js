import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    width: 1920px;
    height: 300px;
    left: 0px;
    top: 982px;

    background: #00ADB5;
`;

const Title = styled.h1`
    position: absolute;
    width: 602px;
    height: 21px;
    left: 665px;
    top: 35px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #FFFFFF;
`;

const Text = styled.h1`
    position: absolute;
    width: 936px;
    height: 94.5px;
    left: 498px;
    top: 100px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;
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