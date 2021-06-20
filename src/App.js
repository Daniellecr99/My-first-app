import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Contact from '../src/Pages/Contact';
import Home from '../src/Pages/Home';
import Profile from '../src/Pages/Profile';
import Example from './Components/Example';
function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route exact path= "/" component={Home} />
         <Route exact path= "/contactme" component={Contact} />
         <Route exact path= "/aboutme" component={Profile} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
