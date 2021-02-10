import { useState, useEffect } from 'react';

export const useToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(isMenuOpen => !isMenuOpen);
    }

    useEffect( () => {
        const menuElement = document.querySelector('.menu');
        const sectionExpanded = document.querySelector('.expand');
        const bodyElement = document.body;
        
        if(isMenuOpen) {bodyElement.classList.add('nav-open')}
        else {
            bodyElement.classList = "";
            if (menuElement && sectionExpanded) {
                menuElement.classList.remove('expanded__section');
                sectionExpanded.classList.remove('expand');
            }
        }
    }, [isMenuOpen]);

    return [isMenuOpen, toggleMenu];
}
