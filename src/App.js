import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
     
      <Redirect to="/"/>
    </Switch>
    </>
  )
}

export default App;
