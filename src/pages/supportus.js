import React from 'react';
import './pages.css';
import './supportus.css';

function Supportus() {
    return (
        <div>
            <section className="page" id="socials">
                <div className="pageTitle" id="socialsTitle">
                    <h1>Socials</h1>
                </div>

                <address className="pageContent" id="socialsContent">
                    <a href="https://www.tiktok.com/@cmpsolo?lang=en" target="_blank" rel='noreferrer'>TikTok</a>
                    <a href="https://t.snapchat.com/MJqpeWgO" target="_blank" rel='noreferrer'>Snapchat</a>
                    <a href="https://www.youtube.com/channel/UCFcWlVj5gBXIxgu6ZTb-VoQ/featured" target="_blank" rel='noreferrer'>YouTube</a>
                    <a href="https://www.facebook.com/profile.php?id=100086252751243" target="_blank" rel='noreferrer'>Facebook</a>
                    <a href="https://twitter.com/CmpSolo" target="_blank" rel='noreferrer'>Twitter</a>
                    <a href="https://www.instagram.com/cmpsolo" target="_blank" rel='noreferrer'>Instagram</a>
                </address>
            </section>

            <section className="page" id="donate">
                <div className="pageTitle" id="donateTitle">
                    <h1>Donate</h1>
                </div>
                
                <div className="pageContent" id="donateContent">
                    <p>Content here</p>
                </div>
            </section>

            <section className="page" id="review">
                <div className="pageTitle" id="reviewTitle">
                    <h1>Leave a Review</h1>
                </div>
                
                <div className="pageContent" id="reviewContent">
                    <p>Content here</p>
                </div>
            </section>
        </div>
        
    );
}

export default Supportus;
