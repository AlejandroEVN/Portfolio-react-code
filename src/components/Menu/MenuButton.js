import React from 'react';

const MenuButton = (props) => {
    return (
        <button onClick={props.toggleMenu} 
            className="btn__hamburger" 
            aria-label="toggle navigation"
            title="Toggle Menu">
            <span className="hamburger"></span>
        </button>      
    )
};

export default MenuButton;