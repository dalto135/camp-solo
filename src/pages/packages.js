import React from 'react';
import './pages.css';
import './packages.css';
import Package from '../components/package';
import { Link } from 'react-router-dom';

function Packages() {

    let packages = [
        {
            title: 'Package 1',
            cost: 'Cost',
            included: 'What\'s included',
            layaway: 'Layaway plan details',
            addons: [
                "Addon 1",
                "Addon 2",
                "Addon 3",
                "Addon 4"
            ]
        },
        {
            title: 'Package 2',
            cost: 'Cost',
            included: 'What\'s included',
            layaway: 'Layaway plan details',
            addons: [
                "Addon 1",
                "Addon 2",
                "Addon 3",
                "Addon 4"
            ]
        },
        {
            title: 'Package 3',
            cost: 'Cost',
            included: 'What\'s included',
            layaway: 'Layaway plan details',
            addons: [
                "Addon 1",
                "Addon 2",
                "Addon 3",
                "Addon 4"
            ]
        },
        {
            title: 'Package 4',
            cost: 'Cost',
            included: 'What\'s included',
            layaway: 'Layaway plan details',
            addons: [
                "Addon 1",
                "Addon 2",
                "Addon 3",
                "Addon 4"
            ]
        },
        {
            title: 'Package 5',
            cost: 'Cost',
            included: 'What\'s included',
            layaway: 'Layaway plan details',
            addons: [
                "Addon 1",
                "Addon 2",
                "Addon 3",
                "Addon 4"
            ]
        }
    ];

    return (

        <div>
            <section className="page" id="packages">
                <div className="pageTitle" id="packagesTitle">
                    <h1>Packages</h1>
                </div>
                
                <div className="pageContent" id="packagesContent">

                    {/* {packages.map((project, i) => 
                        <Project key={i} title={project.title} link={project.link} screenshot={project.screenshot} description={project.description}/>
                    )} */}
                    
                    {/* Row one packages */}
                    <div className="projectRow">

                        <Package title={packages[0].title} cost={packages[0].cost} included={packages[0].included} layaway={packages[0].layaway} addons={packages[0].addons}/>

                        <Package title={packages[1].title} cost={packages[1].cost} included={packages[1].included} layaway={packages[1].layaway} addons={packages[1].addons}/>

                    </div>
                    
                    {/* Row two packages */}
                    <div className="projectRow">

                        <Package title={packages[2].title} cost={packages[2].cost} included={packages[2].included} layaway={packages[2].layaway} addons={packages[2].addons}/>

                        <Package title={packages[3].title} cost={packages[3].cost} included={packages[3].included} layaway={packages[3].layaway} addons={packages[3].addons}/>

                    </div>

                    {/* Row two packages */}
                    <div className="projectRow">

                        <Package title={packages[4].title} cost={packages[4].cost} included={packages[4].included} layaway={packages[4].layaway} addons={packages[4].addons}/>

                    </div>
                </div>
                
            </section>

            <section className="page" id="checkout">
                <div>
                    <Link to='/checkout' className="deployedProject">Checkout</Link>
                </div>
            </section>
        </div>
    );
}

export default Packages;