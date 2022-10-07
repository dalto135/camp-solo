import React from 'react';
import './components.css';
import './package.css';
// import { Link } from 'react-router-dom';

function Package(props) {
    return (
        <div className="package">
            <h2>{props.title}</h2>
            {/* <img src={props.screenshot} alt={props.title}/> */}
            {/* <p>{props.description}</p> */}
            <ul>
                <li>{props.downPayment}</li>
                <li>{props.monthlyPaymentSchedule}</li>
            </ul>
            {/* <Link to='/packages' className="deployedProject">Package Offers</Link> */}
            <button>Add to Cart</button>
        </div>
    );
}

export default Package;