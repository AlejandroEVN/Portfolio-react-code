import React from 'react';
import Arrow from '../Arrow/Arrow';

const MenuSection = ({sections}) => {
    return Object.keys(sections).map( section => 
        <div key={sections[section].name} 
            className={`nav__item nav__item__${sections[section].positionShort}`}>

            <h2 title="Open Section" className="nav__item__link"
            id={`${sections[section].positionShort}`} >
                {sections[section].name}
            </h2>
                <Arrow />

            <section className={`section container 
                ${sections[section].name === "Projects" ? 
                "container--grid container--extended" : "container--flex"}`}>
                { sections[section].component }
            </section>
            
        </div>
    )
};

export default MenuSection;