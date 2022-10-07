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
                <li>{props.cost}</li>
                <li>{props.included}</li>
                <li>{props.layaway}</li>
                <li>
                    {props.addons.length ? (
                        props.addons.map((addon) => {
                            return (
                                <form>
                                    <label>{addon}</label>
                                    <input type="checkbox"/>
                                </form>
                            );
                        })
                    ) : (
                        <h3>No Addons to Display</h3>
                    )}
                </li>
            </ul>
            {/* <Link to='/packages' className="deployedProject">Package Offers</Link> */}
            <button>Add to Cart</button>
        </div>
    );
}

export default Package;