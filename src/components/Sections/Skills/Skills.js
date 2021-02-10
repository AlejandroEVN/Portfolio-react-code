import React from 'react';
import SkillsLogosWrapper from './SkillsLogosWrapper';
import Gears from './Gears';

import './skills.css';

import bootstrap from './images/bootstrap.svg';
import css3 from './images/css3.svg';
import django from './images/django.svg';
import git from './images/git.svg';
import github from './images/github.svg';
import html5 from './images/html5.svg';
import javascript from './images/javascript.svg';
import python from './images/python.svg';
import react from './images/react.svg';
import sass from './images/sass.svg';
import sql from './images/sql.svg';

const HTML = {
    containerTitle: "HTML",
    'HTML5': html5,
    'JSX': react
}

const CSS = {
    containerTitle: "CSS",
    'CCS3': css3,
    'Bootstrap': bootstrap,
    'SASS': sass
}

const JAVASCRIPT = {
    containerTitle: "JavaScript",
    'JavaScript': javascript,
    'React': react,
}

const BACKEND = {
    containerTitle: "Back-End",
    'Python': python,
    'Django': django,
    'SQLite': sql,
}

const TOOLS = {
    containerTitle: 'Tools',
    'GIT': git,
    'GitHub': github,
}

const Skills = () => {
    return (
        <>
            <div className="split">
                <SkillsLogosWrapper skillsGroup={HTML} />
                <SkillsLogosWrapper skillsGroup={CSS} />
                <SkillsLogosWrapper skillsGroup={JAVASCRIPT} />
                <SkillsLogosWrapper skillsGroup={BACKEND} />
                <SkillsLogosWrapper skillsGroup={TOOLS} />
            </div>
            <div className="split">
                <Gears />
            </div>
        </>
    )
}

export default Skills;