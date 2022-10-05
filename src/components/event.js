import React from 'react';
import './components.css';
import './event.css';

function Project(props) {
    return (
        <div className="project">
            <h2>{props.title}</h2>
            <img src={props.screenshot} alt={props.title}/>
            <p>{props.description}</p>
            <a href={props.link} className="deployedProject">Package Offers</a>
        </div>
    );
}

export default Project;