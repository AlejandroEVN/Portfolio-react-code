import React from 'react';
import Card from './Card';
import './card.css';
import { cardsContent } from './card-content/cardsContent';

const Projects = () => {
    return (
        <>
        <Card cards={cardsContent} />
        </>
    )
};

export default Projects;