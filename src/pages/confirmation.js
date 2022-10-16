import React from 'react';
import './pages.css';
import './confirmation.css';
import { Link } from 'react-router-dom';
import CartItem from '../components/cartItem';

function Confirmation() {
    return (
        <div>
            <section className="page" id="stayPackages">
                <div className="pageTitle" id="stayPackagesTitle">
                    <h1>Order details</h1>
                </div>

                <div className="pageContent" id="enterDetailsContent">
                    <div className="pageContent" id="aboutUsContent">
                        {JSON.parse(localStorage.getItem("cart"))?.length ? (
                            JSON.parse(localStorage.getItem("cart")).map((cartItem) => {
                                return (
                                    <CartItem festival={cartItem.festival} package={cartItem.package} addons={cartItem.addons}/>
                                );
                            })
                        ) : (
                            <p>Your Cart is Empty</p>
                        )}
                    </div>
                    <p>Layaway plan</p>
                    {/* <span>
                        <p>Festival: </p><p className="content">{localStorage.getItem("festival")}</p>
                    </span>
                    
                    <span>
                        <p>Packages: </p><p className="content">{localStorage.getItem("packages")}</p>
                    </span>

                    <span>
                        <p>Addons: </p><p className="content">{localStorage.getItem("addons")}</p>
                    </span>

                    <span>
                        <p>Layaway Plans: </p><p className="content">{localStorage.getItem("layawayPlans")}</p>
                    </span>

                    <span>
                        <p>Shipping Address: </p><p className="content">{localStorage.getItem("shippingAddress")}</p>
                    </span>

                    <span>
                        <p>Billing Address: </p><p className="content">{localStorage.getItem("billingAddress")}</p>
                    </span>

                    <span>
                        <p>Email: </p><p className="content">{localStorage.getItem("email")}</p>
                    </span>

                    <span>
                        <p>Phone Number: </p><p className="content">{localStorage.getItem("phoneNumber")}</p>
                    </span>

                    <span>
                        <p>Preferred method of contact: </p><p className="content">{localStorage.getItem("preferredContact")}</p>
                    </span>

                    <span>
                        <p>ETA: </p><p className="content">{localStorage.getItem("ETA")}</p>
                    </span>

                    <span>
                        <p>Food Allergies: </p><p className="content">{localStorage.getItem("foodAllergies")}</p>
                    </span>

                    <span>
                        <p>Sexual Orientation: </p><p className="content">{localStorage.getItem("sexualOrientation")}</p>
                    </span>

                    <span>
                        <p>Preferred pronouns or name: </p><p className="content">{localStorage.getItem("pronounsOrName")}</p>
                    </span>

                    <span>
                        <p>Traumatic Triggers & what helps calm them down if trauma triggers happen: </p><p className="content">{localStorage.getItem("triggersAndHelp")}</p>
                    </span>

                    <span>
                        <p>Medical Conditions and Emergency Response needed for medical emergencies: </p><p className="content">{localStorage.getItem("medicalAndResponse")}</p>
                    </span>

                    <span>
                        <p>Talents, Skills, or Other that they would like to contribute to the CAMP SOLO experience: </p><p className="content">{localStorage.getItem("talentsAndSkills")}</p>
                    </span>

                    <span>
                        <p>Optional extra donation amount: </p><p className="content">{localStorage.getItem("donationAmount")}</p>
                    </span> */}
                </div>
            </section>

            <section className="page" id="stayPackages">
                <div className="pageContent" id="confirmOrder">
                    <Link to='/' className="deployedProject">Place Order</Link>
                </div>
            </section>
        </div>
    );
}

export default Confirmation;
