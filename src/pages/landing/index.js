import React from 'react';
import Header from '../../components/header/index';
import Front from '../../components/front/index';
import Description from '../../components/description/index';
import Drawer from '../../components/drawer/index';
import Footer from '../../components/footer/index';
import styled from 'styled-components';

const Wrapper = styled.body`
    display:flex; 
    flex-direction:column; 
`;

const Content = styled.div`
    position: relative;
    min-height: 100vh;
`;

const ContentFooter = styled.div`
    position: relative;
    top: 950px; 

    @media (max-width: 1420px) {
        top: 1420px;
    }

    @media (max-width: 1050px) {
        top: 1900px;
    }

    @media (max-width: 750px) {
        top: 2100px;
    }
`;

class LandingPage extends React.Component {

    render() {
        return (
            <Wrapper>
                <Content>
                    <Header></Header>
                    <Front></Front>
                    <Description></Description>
                    <Drawer></Drawer>
                </Content>
                <ContentFooter>
                    <Footer></Footer>
                </ContentFooter>
            </Wrapper>
        );
    }
}


export default LandingPage;