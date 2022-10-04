import React from 'react';
import './pages.css';
import './home.css';

function Home() {
    return (
        <div>
            <section className="page" id="aboutMe">
                <div className="pageTitle" id="aboutMeTitle">
                    <h1>About Us</h1>
                </div>
                
                <div className="pageContent" id="aboutMeContent">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="aboutMe">
                <div className="pageTitle" id="aboutMeTitle">
                    <h1>Photos</h1>
                </div>

                <div className="pageContent" id="aboutMeContent">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="aboutMe">
                <div className="pageTitle" id="aboutMeTitle">
                    <h1>Stay Packages</h1>
                </div>

                <div className="pageContent" id="aboutMeContent">
                    <p>Content here</p>
                </div>
            </section>
        </div>
        
    );
}

export default Home;
