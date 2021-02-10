import React from 'react';
import './social.css';

const SocialIcons = () => {

    return (
        <div className="nav__social">
            <a className="nav__social__icon" 
            href="https://github.com/AlejandroEVN" 
            target="_blank" rel="noreferrer">                
                <div title="GitHub Profile" className="nav__social__icon-wrapper">
                    <svg className="nav__social__icon-svg" viewBox="0 0 24 24">
                        <path className="icon__gh" d="M12,2
                        A10,10 0 0,0 2,12
                        C2,16.42 4.87,20.17 8.84,21.5
                        C9.34,21.58 9.5,21.27 9.5,21
                        C9.5,20.77 9.5,20.14 9.5,19.31
                        C6.73,19.91 6.14,17.97 6.14,17.97
                        C5.68,16.81 5.03,16.5 5.03,16.5
                        C4.12,15.88 5.1,15.9 5.1,15.9
                        C6.1,15.97 6.63,16.93 6.63,16.93
                        C7.5,18.45 8.97,18 9.54,17.76
                        C9.63,17.11 9.89,16.67 10.17,16.42
                        C7.95,16.17 5.62,15.31 5.62,11.5
                        C5.62,10.39 6,9.5 6.65,8.79
                        C6.55,8.54 6.2,7.5 6.75,6.15
                        C6.75,6.15 7.59,5.88 9.5,7.17
                        C10.29,6.95 11.15,6.84 12,6.84
                        C12.85,6.84 13.71,6.95 14.5,7.17
                        C16.41,5.88 17.25,6.15 17.25,6.15
                        C17.8,7.5 17.45,8.54 17.35,8.79
                        C18,9.5 18.38,10.39 18.38,11.5
                        C18.38,15.32 16.04,16.16 13.81,16.41
                        C14.17,16.72 14.5,17.33 14.5,18.26
                        C14.5,19.6 14.5,20.68 14.5,21
                        C14.5,21.27 14.66,21.59 15.17,21.5
                        C19.14,20.16 22,16.42 22,12
                        A10,10 0 0,0 12,2Z" />
                    </svg>
                </div>
            </a>
            
            <a className="nav__social__icon" 
            href="https://www.facebook.com/alejandro.vasconcellos.10/" 
            target="_blank" rel="noreferrer">
                <div title="Facebook Profile" className="nav__social__icon-wrapper">
                    <svg className="nav__social__icon-svg" viewBox="0 0 24 24">
                        <path className="icon__fb" d="M12 2.04
                        C6.5 2.04 2 6.53 2 12.06
                        C2 17.06 5.66 21.21 10.44 21.96
                        V14.96
                        H7.9
                        V12.06
                        H10.44
                        V9.85
                        C10.44 7.34 11.93 5.96 14.22 5.96
                        C15.31 5.96 16.45 6.15 16.45 6.15
                        V8.62
                        H15.19
                        C13.95 8.62 13.56 9.39 13.56 10.18
                        V12.06
                        H16.34
                        L15.89 14.96
                        H13.56
                        V21.96
                        A10 10 0 0 0 22 12.06
                        C22 6.53 17.5 2.04 12 2.04Z" />
                    </svg>
                </div>
            </a>
            
            <a className="nav__social__icon" 
            href="https://www.linkedin.com/in/alejandro-vasconcellos-noailles-6420791b2/" 
            target="_blank" rel="noreferrer">
                <div title="LinkedIn Profile" className="nav__social__icon-wrapper">
                    <svg className="nav__social__icon-svg" viewBox="0 0 24 24">
                    <path className="icon__li" d="M19 3
                    A2 2 0 0 1 21 5
                    V19A2 2 0 0 1 19 21
                    H5A2 2 0 0 1 3 19
                    V5A2 2 0 0 1 5 3
                    H19
                    M18.5 18.5
                    V13.2
                    A3.26 3.26 0 0 0 15.24 9.94
                    C14.39 9.94 13.4 10.46 12.92 11.24
                    V10.13
                    H10.13
                    V18.5
                    H12.92
                    V13.57
                    C12.92 12.8 13.54 12.17 14.31 12.17
                    A1.4 1.4 0 0 1 15.71 13.57
                    V18.5
                    H18.5
                    M6.88 8.56
                    A1.68 1.68 0 0 0 8.56 6.88
                    C8.56 5.95 7.81 5.19 6.88 5.19
                    A1.69 1.69 0 0 0 5.19 6.88
                    C5.19 7.81 5.95 8.56 6.88 8.56
                    M8.27 18.5
                    V10.13
                    H5.5
                    V18.5
                    H8.27Z" />
                </svg>
                </div>
            </a>
            
        </div>
    )
};

export default SocialIcons;