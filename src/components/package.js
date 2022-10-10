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
            <section className="info">
                <p>{props.cost}</p>
                <p>{props.included}</p>
                <p>{props.layaway}</p>
            </section>
                
            <section className="addons">
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
            </section>

            <div className="addToCart">
                <button>Add to Cart</button>
            </div>
            
        </div>
    );
}

export default Package;