import React from 'react';
import MenuSection from './MenuSection';
import MenuButton from './MenuButton';
import { SECTIONS } from '../Sections/sections';

import './menu.css';
import './sections.css';

const Menu = (props) => {
    
    const expandSection = (e) => {
        const menuElement = document.querySelector('.menu');
        const targetedElementId = e.target.getAttribute('id');
        const parentElement = document.querySelector(`.nav__item__${targetedElementId}`);

        

        if (parentElement !== null) {
            parentElement.classList.toggle('expand');
            menuElement.classList.toggle('expanded__section');
        }
    }    

    return (
        <div className="menu">
            <MenuButton 
                isMenuOpen={props.isMenuOpen} 
                toggleMenu={props.toggleMenu} />

            <nav onClick={expandSection}>
                <MenuSection sections={SECTIONS} />
            </nav>
        </div>
    )
};

export default Menu;