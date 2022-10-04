import React from 'react';
import Project from '../components/project';
import './pages.css';
import './upcomingevents.css';

import Screenshot1 from '../assets/images/okeechobee.png';
import Screenshot2 from '../assets/images/life-is-beautiful.jpg';
import Screenshot3 from '../assets/images/electric-forest.jpg';
import Screenshot4 from '../assets/images/lost-lands.jpg';

function Upcomingevents() {

    let projects = [
        {
            title: 'Okeechobee 2023',
            link: 'https://www.google.com',
            screenshot: Screenshot1,
            description: 'Content here',
            github: 'https://github.com/dalto135/bread-exchange'
        },
        {
            title: 'Life is Beautiful 2023',
            link: 'https://www.google.com',
            screenshot: Screenshot2,
            description: 'Content here',
            github: 'https://github.com/Youngin9210/Lost-Found',
        },
        {
            title: 'Electric Forest 2023',
            link: 'https://www.google.com',
            screenshot: Screenshot3,
            description: 'Content here',
            github: 'https://github.com/SarehonTaylor/DineOrDash'
        },
        {
            title: 'Lost Lands 2023',
            link: 'https://www.google.com',
            screenshot: Screenshot4,
            description: 'Content here',
            github: 'https://github.com/dalto135/google-books-search'
        },
    ];

    return (
        <section className="page" id="projects">
            <div className="pageTitle" id="projectsTitle">
                <h1>Upcoming Events</h1>
            </div>
            
            <div className="pageContent" id="projectsContent">

                {/* {projects.map((project, i) => 
                    <Project key={i} title={project.title} link={project.link} screenshot={project.screenshot} description={project.description} github={project.github}/>
                )} */}
                
                {/* Row one projects */}
                <div className="projectRow">

                    <Project title={projects[0].title} link={projects[0].link} screenshot={projects[0].screenshot} description={projects[0].description} github={projects[0].github}/>

                    <Project title={projects[1].title} link={projects[1].link} screenshot={projects[1].screenshot} description={projects[1].description} github={projects[1].github}/>

                </div>
                
                {/* Row two projects */}
                <div className="projectRow">

                    <Project title={projects[2].title} link={projects[2].link} screenshot={projects[2].screenshot} description={projects[2].description} github={projects[2].github}/>

                    <Project title={projects[3].title} link={projects[3].link} screenshot={projects[3].screenshot} description={projects[3].description} github={projects[3].github}/>

                </div>                
            </div>
        </section>
    );
}

export default Upcomingevents;