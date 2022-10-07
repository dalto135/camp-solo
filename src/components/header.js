import React from 'react';
import { Link } from 'react-router-dom';
import Headshot from '../assets/images/camp-solo.png';
import './components.css';
import './header.css';

function Header({toggleTheme}) {
    return (
        <div id='header-div'>
            <header>
                <div id='headshot'>
                    <Link to='/' id="titleLogo">
                        <img src={Headshot} alt='headshot'/>
                    </Link>
                </div>

                <div id="shortcuts">
                    <Link to='/'>Home</Link>
                    <Link to='/upcomingevents'>Upcoming Events</Link>
                    <Link to='/contactus'>Contact Us</Link>
                    <Link to='/supportus'>Support Us</Link>
                    <Link to='/photogallery'>Photo Gallery</Link>
                </div>

                {/* <div id="lightDark">
                    <button onClick={toggleTheme} id="lightDarkButton">Light/Dark Mode</button>
                </div> */}
            </header>
        </div>
    );
}

export default Header;
