import React
// , { useEffect, useState } 
from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import "./pages.css";
import "./login.css";
// import API from '../../utils/API';
import { Link } from "react-router-dom";

function Login() {

    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setLoginInfo({...loginInfo, [name]: value });
    // }

    // const [loginInfo, setLoginInfo] = useState({});

    // function login() {
    //     API.login(loginInfo)
    //     .then(res => {
    //         document.location.replace('/');
    //     })
    //     .catch(err => {
    //         console.log( err.message);
    //         alert('Incorrect username or password');
    //     });
    // }      

    return (
        <div className="login-background">
            <div id="white-panel-1" className="pink">
                <h1 className="login-header">Login</h1>

                <form >
                    {/* Username Input */}
                    <div className="form-group">
                        <label className="login-label" for="exampleInputEmail1">Username:</label>
                        <input className="input-field" name='username' 
                        // class="form-control" 
                        id="username-input" aria-describedby="" placeholder="Enter username" size="30" ></input>{" "}
                    </div>

                    {/* Password Input */}
                    <div className="form-group">
                        <label className="login-label" for="exampleInputEmail1">Password:</label>
                        <input className="input-field" type='password' name='password' 
                        // class="form-control" 
                        id="password-input" aria-describedby="" placeholder="Enter password" size="30"></input>{" "}
                    </div>

                    {/* Login and Sign Up Buttons */}
                    <div id="login-div">
                        <button className="material-button" 
                        // onClick={login}
                        >Login</button>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                </form>
            </div>     
        </div>
    );
}

export default Login;