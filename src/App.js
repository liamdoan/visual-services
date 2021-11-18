import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom'
import { useLocation } from 'react-router';
import { useLayoutEffect } from 'react';

function App() {
   // force to scroll to top
   const location = useLocation()

   useLayoutEffect(() => {
     window.scrollTo(0, 0);
   }, [location.pathname])
 
  return (
    <>
        <NavBar/>
          <Switch>
            <Route path="/visual-services" exact component={Home}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/sign-up" exact component={SignUp}/>
          </Switch> 
          <Footer/> 
    </>
  );
}

export default App;
