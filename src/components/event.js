import React from 'react';
import './components.css';
import './event.css';
import { Link } from 'react-router-dom';

function Event(props) {
    return (
        <div className="event">
            <h2>{props.title}</h2>
            <img src={props.screenshot} alt={props.title}/>
            <p>{props.description}</p>
            <Link to={props.link} className="deployedProject">Package Offers</Link>
        </div>
    );
}

export default Event;