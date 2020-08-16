import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './App.css';

import Header from './components/header/index';
import Footer from './components/footer/index';
import LandingPage from './pages/landing/index';
import Portfolio from './pages/portfolio/index';
import Contact from './pages/contact/index';
import styled from 'styled-components';




function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
      <Footer></Footer>


      <Switch>
        <Route path="/">
          
        </Route>

        <Route path="/portfolio">
          <Portfolio></Portfolio>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>

    </div>
    
    </Router>
  );
}

export default App;
