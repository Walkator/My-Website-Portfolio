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




function App() {
  return (
    <Router>
      <div className="App">
      
        <LandingPage />

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
