import React from 'react';

const SkillsLogosWrapper = ({skillsGroup}) => {
    const figures = Object.keys(skillsGroup).map(key => {
        if(key==="containerTitle") return <></>;
        return(
            <figure key={skillsGroup[key]} className="icon__skills">
                <img src={skillsGroup[key]} alt={key} />
                <figcaption className="text-center">{key}</figcaption>
            </figure>
        )
    })

    return(
        <div className="container--flex skills__group">
            <h3 className="text-center">{skillsGroup.containerTitle}</h3>
            <div className="bar">
                <div className="bar-background"></div>
                <div className="bar-clip"></div>
                {figures}
            </div>
        </div>
    )
}

export default SkillsLogosWrapper;