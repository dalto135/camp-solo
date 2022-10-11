import React from 'react';
import './pages.css';
import './checkout.css';
import { Link } from 'react-router-dom';
import LayawayPlan from '../components/layawayPlan';

function Checkout() {

    // function enterDetails() {
    //     let shippingAddress = document.querySelector("#shippingAddress");
    //     localStorage.setItem("shippingAddress", shippingAddress.value);

    //     let billingAddress = document.querySelector("#billingAddress");
    //     localStorage.setItem("billingAddress", billingAddress.value);

    //     let email = document.querySelector("#email");
    //     localStorage.setItem("email", email.value);

    //     let phoneNumber = document.querySelector("#phoneNumber");
    //     localStorage.setItem("phoneNumber", phoneNumber.value);

    //     let preferredContact = document.querySelector("#preferredContact");
    //     localStorage.setItem("preferredContact", preferredContact.value);

    //     let ETA = document.querySelector("#ETA");
    //     localStorage.setItem("ETA", ETA.value);

    //     let foodAllergies = document.querySelector("#foodAllergies");
    //     localStorage.setItem("foodAllergies", foodAllergies.value);

    //     let sexualOrientation = document.querySelector("#sexualOrientation");
    //     localStorage.setItem("sexualOrientation", sexualOrientation.value);

    //     let pronounsOrName = document.querySelector("#pronounsOrName");
    //     localStorage.setItem("pronounsOrName", pronounsOrName.value);

    //     let triggersAndHelp = document.querySelector("#triggersAndHelp");
    //     localStorage.setItem("triggersAndHelp", triggersAndHelp.value);

    //     let medicalAndResponse = document.querySelector("#medicalAndResponse");
    //     localStorage.setItem("medicalAndResponse", medicalAndResponse.value);

    //     let talentsAndSkills = document.querySelector("#talentsAndSkills");
    //     localStorage.setItem("talentsAndSkills", talentsAndSkills.value);

    //     let donationAmount = document.querySelector("#donationAmount");
    //     localStorage.setItem("donationAmount", donationAmount.value);
    // }

    let layawayPlans = [
        {
            title: 'Layaway Plan 1',
            downPayment: 'Down Payment',
            monthlyPaymentSchedule: 'Monthly Payment Schedule'
        },
        {
            title: 'Layaway Plan 2',
            downPayment: 'Down Payment',
            monthlyPaymentSchedule: 'Monthly Payment Schedule'
        },
        {
            title: 'Layaway Plan 3',
            downPayment: 'Down Payment',
            monthlyPaymentSchedule: 'Monthly Payment Schedule'
        },
        {
            title: 'Layaway Plan 4',
            downPayment: 'Down Payment',
            monthlyPaymentSchedule: 'Monthly Payment Schedule'
        },
        {
            title: 'Layaway Plan 5',
            downPayment: 'Down Payment',
            monthlyPaymentSchedule: 'Monthly Payment Schedule'
        }
    ];

    return (
        <div>
            <section className="page" id="aboutUs">
                <div className="pageTitle" id="aboutUsTitle">
                    <h1>Your Cart</h1>
                </div>
                
                <div className="pageContent" id="aboutUsContent">
                    <p>Content here</p>
                </div>
            </section>

            {/* <section className="page" id="aboutUs">
                <div className="pageTitle" id="aboutUsTitle">
                    <h1>Choose payment method</h1>
                </div>
                
                <div className="pageContent" id="aboutUsContent">
                    <p>Debit</p>
                    <p>Credit</p>
                    <p>Crypto?</p>
                </div>
            </section>

            <section className="page" id="stayPackages">
                <div className="pageTitle" id="stayPackagesTitle">
                    <h1>Enter details</h1>
                </div>

                <div className="pageContent" id="enterDetailsContent">
                    <form>
                        <label>Shipping Address:</label>
                        <input type="text" id="shippingAddress"/>
                    </form>

                    <form>
                        <label>Billing Address:</label>
                        <input type="text"id="billingAddress"/>
                    </form>

                    <form>
                        <label>Email:</label>
                        <input type="text" id="email"/>
                    </form>

                    <form>
                        <label>Phone Number:</label>
                        <input type="text" id="phoneNumber"/>
                    </form>

                    <form>
                        <label>Preferred method of contact:</label>
                        <input type="text" id="preferredContact"/>
                    </form>

                    <form>
                        <label>ETA:</label>
                        <input type="text" id="ETA"/>
                    </form>

                    <form>
                        <label>Food Allergies:</label>
                        <input type="text" id="foodAllergies"/>
                    </form>

                    <form>
                        <label>Sexual Orientation:</label>
                        <input type="text" id="sexualOrientation"/>
                    </form>

                    <form>
                        <label>Preferred pronouns or name:</label>
                        <input type="text" id="pronounsOrName"/>
                    </form>

                    <form>
                        <label>Traumatic Triggers & what helps calm them down if trauma triggers happen:</label>
                        <input type="text" id="triggersAndHelp"/>
                    </form>

                    <form>
                        <label>Medical Conditions and Emergency Response needed for medical emergencies:</label>
                        <input type="text" id="medicalAndResponse"/>
                    </form>

                    <form>
                        <label>Talents, Skills, or Other that they would like to contribute to the CAMP SOLO experience:</label>
                        <input type="text" id="talentsAndSkills"/>
                    </form>

                    <form>
                        <label>Optional extra donation amount:</label>
                        <input type="text" id="donationAmount"/>
                    </form>
                </div>
            </section> */}

            <section className="page" id="packages">
                <div className="pageTitle" id="packagesTitle">
                    <h1>Layaway Plans</h1>
                </div>
                
                <div className="pageContent" id="packagesContent">

                    {/* {packages.map((project, i) => 
                        <Project key={i} title={project.title} link={project.link} screenshot={project.screenshot} description={project.description}/>
                    )} */}
                    
                    {/* Row one packages */}
                    <div className="projectRow">

                        <LayawayPlan title={layawayPlans[0].title} downPayment={layawayPlans[0].downPayment} monthlyPaymentSchedule={layawayPlans[0].monthlyPaymentSchedule}/>

                        <LayawayPlan title={layawayPlans[1].title} downPayment={layawayPlans[1].downPayment} monthlyPaymentSchedule={layawayPlans[1].monthlyPaymentSchedule}/>

                    </div>

                    {/* Row two layawayPlans */}
                    <div className="projectRow">

                        <LayawayPlan title={layawayPlans[2].title} downPayment={layawayPlans[2].downPayment} monthlyPaymentSchedule={layawayPlans[2].monthlyPaymentSchedule}/>

                        <LayawayPlan title={layawayPlans[3].title} downPayment={layawayPlans[3].downPayment} monthlyPaymentSchedule={layawayPlans[3].monthlyPaymentSchedule}/>

                    </div>

                    {/* Row two layawayPlans */}
                    <div className="projectRow">

                        <LayawayPlan title={layawayPlans[4].title} downPayment={layawayPlans[4].downPayment} monthlyPaymentSchedule={layawayPlans[4].monthlyPaymentSchedule}/>

                    </div>
                </div>
            </section>

            <section className="page" id="stayPackages">
                {/* <div className="pageTitle" id="stayPackagesTitle">
                    <h1>Enter details</h1>
                </div> */}

                <div className="pageContent" id="next">
                    <Link to='/confirmation' className="deployedProject" id="checkoutLink">Next</Link>
                </div>
            </section>
        </div>
    );
}

export default Checkout;
