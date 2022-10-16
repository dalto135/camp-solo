import React from 'react';
import { Link } from 'react-router-dom';
import Headshot from '../assets/images/camp-solo.png';
import './components.css';
import './header.css';

function Header({toggleTheme}) {

    // const userData = useContext(UserContext);
    // console.log('userData');
    // console.log(userData);

    // function logOut() {
    //     API.logout()
    //     .then(user => {
    //     // console.log(user);
    //     document.location.replace('/');
    //     })
    //     .catch(err => console.log(err.message));
    // }

    let loggedIn = false;

    function logOut(loggedIn) {
        loggedIn = false;
        // document.location.replace('/');
    }

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
                    <Link to='/aboutus'>About Us</Link>
                    <Link to='/contactus'>Contact Us</Link>
                    <Link to='/supportus'>Support Us</Link>
                    <Link to='/photogallery'>Photo Gallery</Link>
                    <Link to='/checkout'>Your Cart</Link>
                    {!loggedIn
                    ? <Link to='/login'>Login/Sign up</Link>
                    : <div>
                        <button onClick={logOut(loggedIn)}>Log out</button>
                        <Link to='/userpage'>Account</Link>
                    </div>}
                    <Link to='/userpage'>My Account</Link>
                </div>

                {/* <div id="lightDark">
                    <button onClick={toggleTheme} id="lightDarkButton">Light/Dark Mode</button>
                </div> */}
            </header>
        </div>
    );
}

export default Header;
