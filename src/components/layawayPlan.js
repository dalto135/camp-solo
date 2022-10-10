import React from 'react';
import './components.css';
import './layawayPlan.css';
// import { Link } from 'react-router-dom';

function Package(props) {
    return (
        <div className="layawayPlan">
            <h2>{props.title}</h2>

            <section className="info">
                <p>{props.downPayment}</p>
                <p>{props.monthlyPaymentSchedule}</p>
            </section>

            <div className="addToCart">
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default Package;