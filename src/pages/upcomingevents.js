import React from 'react';
import Event from '../components/event';
import './pages.css';
import './upcomingevents.css';

import Okeechobee from '../assets/images/okeechobee.png';
import BeyondWonderland from '../assets/images/beyond-wonderland.jpeg';
import LightningInABottle from '../assets/images/lightning-in-a-bottle.jpg';
import ElectricForest from '../assets/images/electric-forest.jpg';
import LostLands from '../assets/images/lost-lands.jpg';

function Upcomingevents() {

    let events = [
        {
            title: 'Okeechobee 2023',
            link: '../pages/packages',
            screenshot: Okeechobee,
            description: 'The Okeechobee Music and Arts Festival is an annual four-day music and arts festival. It is held at the 600-acre Sunshine Grove property in Okeechobee, Florida.',
        },
        {
            title: 'Beyond Wonderland 2023',
            link: '../pages/packages',
            screenshot: BeyondWonderland,
            description: 'Beyond Wonderland is an electronic dance festival organized by Insomniac Events. The event has been held in various locations across the west coast including Seattle, San Bernardino, and Mountain View spanning either one or two days.',
        },
        {
            title: 'Lightning in a Bottle 2023',
            link: '../pages/packages',
            screenshot: LightningInABottle,
            description: 'Lightning in a Bottle is an annual music festival in the Central Valley region of California first held in 2006. It is presented by The Do LaB, which seeks to promote sustainability, social cohesion, and creative expression.',
        },
        {
            title: 'Electric Forest 2023',
            link: '../pages/packages',
            screenshot: ElectricForest,
            description: 'Electric Forest is a four-day and one-weekend multi-genre event with a focus on electronic music and jam band genres. It is held in Rothbury, Michigan at the Double JJ Resort. The original event debuted in 2008, under the name Rothbury Festival, and focused on jam bands and rock bands.',
        },
        {
            title: 'Lost Lands 2023',
            link: '../pages/packages',
            screenshot: LostLands,
            description: 'Lost Lands Music Festival is an electronic music festival in Thornville, Ohio. Put on by Canadian dubstep legend Excision, the festival has grown to become one of the most respected bass music festivals in the country.',
        },
    ];

    return (
        <section className="page" id="projects">
            <div className="pageTitle" id="projectsTitle">
                <h1>Upcoming Events</h1>
            </div>
            
            <div className="pageContent" id="projectsContent">

                {/* {events.map((Event, i) => 
                    <Event key={i} title={Event.title} link={Event.link} screenshot={Event.screenshot} description={Event.description}/>
                )} */}
                
                {/* Row one events */}
                <div className="projectRow">

                    <Event title={events[0].title} link={events[0].link} screenshot={events[0].screenshot} description={events[0].description}/>

                    <Event title={events[1].title} link={events[1].link} screenshot={events[1].screenshot} description={events[1].description}/>

                </div>
                
                {/* Row two events */}
                <div className="projectRow">

                    <Event title={events[2].title} link={events[2].link} screenshot={events[2].screenshot} description={events[2].description}/>

                    <Event title={events[3].title} link={events[3].link} screenshot={events[3].screenshot} description={events[3].description}/>

                </div>

                {/* Row three events */}
                <div className="projectRow">

                    <Event title={events[4].title} link={events[4].link} screenshot={events[4].screenshot} description={events[4].description}/>

                </div>
            </div>
        </section>
    );
}

export default Upcomingevents;