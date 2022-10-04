import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import UpcomingEvents from './pages/upcomingevents';
import Contactus from './pages/contactus';
import Supportus from './pages/supportus';
import Photogallery from './pages/photogallery';
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
      <Route exact path='/upcomingevents' component={UpcomingEvents}></Route>
      <Route exact path='/contactus' component={Contactus}></Route>
      <Route exact path='/supportus' component={Supportus}></Route>
      <Route exact path='/photogallery' component={Photogallery}></Route>
      <Footer/>
    </Router>
  );
}

export default App;
