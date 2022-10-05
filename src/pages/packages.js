import React from 'react';
import './pages.css';
import './packages.css';

function Packages() {
    return (
        <div>
            {/* <h1>{Festival}</h1> */}
            <section className="page" id="aboutMe">
                <div className="pageTitle" id="aboutMeTitle">
                    <h1>Package 1</h1>
                </div>
                
                <div className="pageContent" id="aboutMeContent">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="aboutMe">
                <div className="pageTitle" id="aboutMeTitle">
                    <h1>Package 2</h1>
                </div>

                <div className="pageContent" id="aboutMeContent">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="aboutMe">
                <div className="pageTitle" id="aboutMeTitle">
                    <h1>Package 3</h1>
                </div>

                <div className="pageContent" id="aboutMeContent">
                    <p>Content here</p>
                </div>
            </section>
        </div>
        
    );
}

export default Packages;
