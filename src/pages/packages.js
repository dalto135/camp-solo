import React from 'react';
import './pages.css';
import './packages.css';


function Packages() {
    return (
        <div>
            {/* <h1>{Festival}</h1> */}
            <section className="page" id="package1">
                <div className="pageTitle" id="package1Title">
                    <h1>Package 1</h1>
                </div>
                
                <div className="pageContent" id="package1Content">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="package2">
                <div className="pageTitle" id="package2Title">
                    <h1>Package 2</h1>
                </div>

                <div className="pageContent" id="package2Content">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="package3">
                <div className="pageTitle" id="package3Title">
                    <h1>Package 3</h1>
                </div>

                <div className="pageContent" id="package3Content">
                    <p>Content here</p>
                </div>
            </section>
        </div>
    );
}

export default Packages;