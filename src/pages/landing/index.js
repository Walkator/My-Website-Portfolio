import React from 'react';
import Header from '../../components/header/index';
import Front from '../../components/front/index';
import Description from '../../components/description/index';
import Drawer from '../../components/drawer/index';
import Footer from '../../components/footer/index';



class LandingPage extends React.Component {

    render() {
        return (
            <>
                <Header></Header>
                <Front></Front>
                <Description></Description>
                <Drawer></Drawer>
                <Footer></Footer>
            </>        
        );
    }
}


export default LandingPage;