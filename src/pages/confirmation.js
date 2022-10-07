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
                    <p>Festival: {localStorage.getItem("festival")}</p>

                    <p>Packages: {localStorage.getItem("packages")}</p>

                    <p>Addons: {localStorage.getItem("addons")}</p>

                    <p>Layaway Plans: {localStorage.getItem("layawayPlans")}</p>

                    <p>Shipping Address: {localStorage.getItem("shippingAddress")}</p>

                    <p>Billing Address: {localStorage.getItem("billingAddress")}</p>

                    <p>Email: {localStorage.getItem("email")}</p>

                    <p>Phone Number: {localStorage.getItem("phoneNumber")}</p>

                    <p>Preferred method of contact: {localStorage.getItem("preferredContact")}</p>

                    <p>ETA: {localStorage.getItem("ETA")}</p>

                    <p>Food Allergies: {localStorage.getItem("foodAllergies")}</p>

                    <p>Sexual Orientation: {localStorage.getItem("sexualOrientation")}</p>

                    <p>Preferred pronouns or name: {localStorage.getItem("pronounsOrName")}</p>

                    <p>Traumatic Triggers & what helps calm them down if trauma triggers happen: {localStorage.getItem("triggersAndHelp")}</p>

                    <p>Medical Conditions and Emergency Response needed for medical emergencies: {localStorage.getItem("medicalAndResponse")}</p>

                    <p>Talents, Skills, or Other that they would like to contribute to the CAMP SOLO experience: {localStorage.getItem("talentsAndSkills")}</p>
                    
                    <p>Optional extra donation amount: {localStorage.getItem("donationAmount")}</p>
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
