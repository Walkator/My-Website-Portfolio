import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/index'
import Jobs from '../../components/drawer/indexPortfolio'
import Footer from '../../components/footer/index'

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
    top: 0px; 

    @media (max-width: 1200px) {
        top: 600px;
    }
`;

class Portfolio extends React.Component {

    render() {
        return (
            <Wrapper>
                <Content>
                    <Header></Header>
                    <Jobs></Jobs>
                </Content>
                <ContentFooter>
                    <Footer></Footer>
                </ContentFooter>
            </Wrapper>     
        );
    }
}


export default Portfolio;