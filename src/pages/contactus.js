import React from 'react';
import './pages.css';
import './contactus.css';

function Contactus() {
    return (
        <section className="page" id="contactMe">
            <div className="pageTitle" id="contactMeTitle">
                <h1>Contact Us</h1>
            </div>

            <address className="pageContent" id="contactMeContent">
                {/* <a href="tel:+16142577681">614-257-7681</a> */}
                <a href="mailto:campsolo.contact@gmail.com">campsolo.contact@gmail.com</a>
            </address>
        </section>
    );
}

export default Contactus;