import React from 'react';
import './pages.css';
import './confirmation.css';
import { Link } from 'react-router-dom';

function Confirmation() {
    return (
        <div>
            {/* <section className="page" id="aboutUs">
                <div className="pageTitle" id="aboutUsTitle">
                    <h1>Choose payment method</h1>
                </div>
                
                <div className="pageContent" id="aboutUsContent">
                    <p>Debit</p>
                    <p>Credit</p>
                    <p>Crypto?</p>
                </div>
            </section> */}

            <section className="page" id="stayPackages">
                <div className="pageTitle" id="stayPackagesTitle">
                    <h1>Order details</h1>
                </div>

                <div className="pageContent" id="enterDetailsContent">
                    <form>
                        <label>Festival:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Package:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Addons:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Layaway Plan:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Shipping Address:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Billing Address:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Email:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Phone Number:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Preferred method of contact:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>ETA:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Food Allergies:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Sexual Orientation:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Preferred pronouns or name:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Traumatic Triggers & what helps calm them down if trauma triggers happen:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Medical Conditions and Emergency Response needed for medical emergencies:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Talents, Skills, or Other that they would like to contribute to the CAMP SOLO experience:</label>
                        <input type="text"/>
                    </form>

                    <form>
                        <label>Optional extra donation amount:</label>
                        <input type="text"/>
                    </form>
                </div>
            </section>

            {/* <section className="page" id="aboutUs">
                <div className="pageTitle" id="aboutUsTitle">
                    <h1>Layaway Plans</h1>
                </div>
                
                <div className="pageContent" id="aboutUsContent">
                    <p>Debit</p>
                    <p>Credit</p>
                    <p>Crypto?</p>
                </div>
            </section> */}

            <section className="page" id="stayPackages">
                {/* <div className="pageTitle" id="stayPackagesTitle">
                    <h1>Enter details</h1>
                </div> */}

                <div className="pageContent" id="confirmOrder">
                    <Link to='/' className="deployedProject">Confirm Order</Link>
                </div>
            </section>
        </div>
    );
}

export default Confirmation;
