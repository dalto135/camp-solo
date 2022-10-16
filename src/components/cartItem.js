import React from 'react';
import './components.css';
import './cartItem.css';
// import { Link } from 'react-router-dom';

// function removeFromCart(i) {
//     console.log("running remove from cart function");
//     let array = JSON.parse(localStorage.getItem("cart"));
//     array.splice(i, 1);
//     localStorage.setItem("cart", JSON.stringify(array));
//     document.location.replace('/');
// }

function CartItem(props) {
    return (
        <div className="cartItem">
            <h2>{props.festival}</h2>

            <section className="info">
                <p>{props.package}</p>
                {props.addons.length ? (
                    props.addons.map((addon, i) => {
                        return (
                                <p key={i} id={addon}>{addon}</p>
                        );
                    })
                ) : (
                    <p>No Addons Chosen</p>
                )}
                <button 
                // onClick={removeFromCart(props.i)}
                >Remove from Cart</button>
            </section>
        </div>
    );
}

export default CartItem;