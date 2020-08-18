import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    width: 661px;
    height: 832px;
    left: 0px;
    top: 0px;
    line-height: 1.5em;
    height: 3em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
`;

const Title = styled.h1`
    position: absolute;
    width: 264px;
    height: 56px;
    left: 828px;
    top: 150px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: #222831;
`;

class Front extends React.Component {

    render() {
        return (
            <Wrapper>
                <Title>Hello World!</Title>
            </Wrapper>
        );
    }
}


export default Front;