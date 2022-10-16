import React from 'react';
import './components.css';
import './package.css';
// import { Link } from 'react-router-dom';

// function addToCart(festival, title, addons) {
//     let cart = [];

//     let current = localStorage.getItem("cart");
//     if (current) {
//         cart = JSON.parse(current);
//     }

//     console.log("running add to cart function");
//     cart.push({
//         festival: festival,
//         package: title,
//         addons: []
//     });
    
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

function Package(props) {
    return (
        <div className="package">
            <h2>{props.title}</h2>
            {/* <img src={props.screenshot} alt={props.title}/> */}
            {/* <p>{props.description}</p> */}
            <section className="info">
                <p>{props.cost}</p>
                <p>{props.included}</p>
            </section>

            <section className="addons">
                {props.addons.length ? (
                    props.addons.map((addon, i) => {
                        return (
                            <form key={i} id={addon}>
                                <label>{addon}</label>
                                <input type="checkbox"/>
                            </form>
                        );
                    })
                ) : (
                    <p>No Addons to Display</p>
                )}
            </section>

            <div className="addToCart">
                <button className="addToCartButton" 
                // onClick={addToCart(props.festival, props.title, props.addons)}
                >Add to Cart</button>
            </div>
        </div>
    );
}

export default Package;