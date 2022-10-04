import React from 'react';
import './pages.css';
import './supportus.css';

function Supportus() {
    return (
        <div>
            <section className="page" id="aboutMe">
                <div className="pageTitle" id="aboutMeTitle">
                    <h1>Socials</h1>
                </div>
                
                {/* <div className="pageContent" id="aboutMeContent">
                    <p>Highly motivated and technically skilled Software Engineer at Nationwide. Has a certificate from the Full-stack Web Development Bootcamp at The Ohio State University and a Bachelor’s degree in Neuroscience from The Ohio State University. Enjoys working with others to solve complex problems using development skills that include HTML, CSS, Javascript, SQL, Git, React.js and others, and possesses soft skills that include conflict resolution, effective communication, flexibility and humility in leadership. These experiences and certifications have given me the drive and analytical skills needed to succeed in my Software Engineering career and beyond.</p>
                </div> */}
                <a href="https://www.instagram.com/cmpsolo" target="_blank" rel='noreferrer'>Instagram</a>
            </section>

            <section className="page" id="aboutMe">
                <div className="pageTitle" id="aboutMeTitle">
                    <h1>Donate</h1>
                </div>
                
                <div className="pageContent" id="aboutMeContent">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="aboutMe">
                <div className="pageTitle" id="aboutMeTitle">
                    <h1>Leave a Review</h1>
                </div>
                
                <div className="pageContent" id="aboutMeContent">
                    <p>Content here</p>
                </div>
            </section>
        </div>
        
    );
}

export default Supportus;
