import React, { useEffect } from 'react';
import { useToggleTheme } from '../../hooks/useToggleTheme';

import Dark from './IconDark';
import Light from './IconLight';

import { themes } from './themeVars';

const Theme = () => {
    const [theme, toggleTheme] = useToggleTheme();
    
    const updateRootVars = (theme) => {
        const root = document.documentElement.style;
        if (theme === 'light') {
            Object.keys(themes.light).forEach(property => {
                root.setProperty(`--clr-${property}`, themes.light[property])
            })
        } else{            
            Object.keys(themes.dark).forEach(property => {
                root.setProperty(`--clr-${property}`, themes.dark[property])
            })
        }
    }

    useEffect(() => {
        updateRootVars(theme);
        return () => updateRootVars(theme);
    }, [theme])

    return (
        <>
            {
                theme === 'light' 
                ? <Light toggleTheme={toggleTheme} updateRootVars={updateRootVars} />
                : <Dark toggleTheme={toggleTheme} updateRootVars={updateRootVars} />
            }
        </>
    )
};

export default Theme;