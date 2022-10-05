import React from 'react';
import Project from '../components/event';
import './pages.css';
import './upcomingevents.css';

import Okeechobee from '../assets/images/okeechobee.png';
import LightningInABottle from '../assets/images/lightning-in-a-bottle.jpg';
import ElectricForest from '../assets/images/electric-forest.jpg';
import LostLands from '../assets/images/lost-lands.jpg';

function Upcomingevents() {

    let projects = [
        {
            title: 'Okeechobee 2023',
            link: '../pages/packages',
            screenshot: Okeechobee,
            description: 'The Okeechobee Music and Arts Festival is an annual four-day music and arts festival. It is held at the 600-acre Sunshine Grove property in Okeechobee, Florida.',
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

                {/* {projects.map((project, i) => 
                    <Project key={i} title={project.title} link={project.link} screenshot={project.screenshot} description={project.description}/>
                )} */}
                
                {/* Row one projects */}
                <div className="projectRow">

                    <Project title={projects[0].title} link={projects[0].link} screenshot={projects[0].screenshot} description={projects[0].description}/>

                    <Project title={projects[1].title} link={projects[1].link} screenshot={projects[1].screenshot} description={projects[1].description}/>

                </div>
                
                {/* Row two projects */}
                <div className="projectRow">

                    <Project title={projects[2].title} link={projects[2].link} screenshot={projects[2].screenshot} description={projects[2].description}/>

                    <Project title={projects[3].title} link={projects[3].link} screenshot={projects[3].screenshot} description={projects[3].description}/>

                </div>
            </div>
        </section>
    );
}

export default Upcomingevents;