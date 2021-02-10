import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

export const SECTIONS = {
    Projects: {
        'name': 'Projects',
        'position': 'top-left',
        'positionShort': 'tl',
        'component': <Projects />
    },
    Skills: {
        'name': 'Skills',
        'position': 'top-right',
        'positionShort': 'tr',
        'component': <Skills />
    },
    AboutMe: {
        'name': 'About',
        'position': 'bottom-left',
        'positionShort': 'bl',
        'component': <About />
    },
    Contact: {
        'name': 'Contact',
        'position': 'bottom-right',
        'positionShort': 'br',
        'component': <Contact />
    },
};