import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Contactus from './pages/contactus';
import Supportus from './pages/supportus';
import Photogallery from './pages/photogallery';
import OkeechobeePackages from './pages/okeechobeePackages';
import BeyondWonderlandPackages from './pages/beyondWonderlandPackages';
import LightningInABottlePackages from './pages/lightningInABottlePackages';
import ElectricForestPackages from './pages/electricForestPackages';
import LostLandsPackages from './pages/lostLandsPackages';
import Checkout from './pages/checkout';
import Confirmation from './pages/confirmation';
import Footer from './components/footer';
import './style.css';

let parent = document.querySelector("html");

// function setTheme() {
//   let date = new Date();
//   let time = date.getHours();

//   if (time >= 8 && time < 21) {
//     parent.setAttribute("id", "light");
//   }
// }

// setTheme();

function toggleTheme() {
  if (parent.getAttribute("id") === "light") {
    parent.removeAttribute("id");
  }
  else {
    parent.setAttribute("id", "light");
  }
}

function App() {
  return (
    <Router>
      <Header toggleTheme={toggleTheme}/>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/aboutus' component={Aboutus}></Route>
      <Route exact path='/contactus' component={Contactus}></Route>
      <Route exact path='/supportus' component={Supportus}></Route>
      <Route exact path='/photogallery' component={Photogallery}></Route>
      <Route exact path='/okeechobee-packages' component={OkeechobeePackages}></Route>
      <Route exact path='/beyond-wonderland-packages' component={BeyondWonderlandPackages}></Route>
      <Route exact path='/lightning-in-a-bottle-packages' component={LightningInABottlePackages}></Route>
      <Route exact path='/electric-forest-packages' component={ElectricForestPackages}></Route>
      <Route exact path='/lost-lands-packages' component={LostLandsPackages}></Route>
      <Route exact path='/checkout' component={Checkout}></Route>
      <Route exact path='/confirmation' component={Confirmation}></Route>
      <Footer/>
    </Router>
  );
}

export default App;
