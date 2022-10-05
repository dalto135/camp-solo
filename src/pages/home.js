import React from 'react';
import './pages.css';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <section className="page" id="aboutUs">
                <div className="pageTitle" id="aboutUsTitle">
                    <h1>About Us</h1>
                </div>
                
                <div className="pageContent" id="aboutUsContent">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="photos">
                <div className="pageTitle" id="photosTitle">
                    <h1>Photos</h1>
                </div>

                <div className="pageContent" id="photosContent">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="stayPackages">
                <div className="pageTitle" id="stayPackagesTitle">
                    <h1>Stay Packages</h1>
                </div>

                <div className="pageContent" id="stayPackagesContent">
                    <Link to='/packages' className="deployedProject">Package Offers</Link>
                </div>
            </section>
        </div>
        
    );
}

export default Home;
