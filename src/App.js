import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './App.css';

import LandingPage from './pages/landing/index';
import Portfolio from './pages/portfolio/index';
import Contact from './pages/contact/index';
require('typeface-roboto')



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/my-website" component={LandingPage} exact />
            <Route path="/portfolio" component={Portfolio} exact />
            <Route path="/contact" component={Contact} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
