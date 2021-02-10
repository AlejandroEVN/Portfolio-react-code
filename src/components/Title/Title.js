import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Title = props => {
    return(
        <div>            
          <CSSTransition 
            in={!props.isMenuOpen}
            classNames="landing__title-top"
            unmountOnExit
            timeout={750}>
            <h1 className="landing__title-top title"><span className="text-accent">A</span>lejandro</h1>
          </CSSTransition>
          <CSSTransition 
            in={!props.isMenuOpen}
            classNames="landing__title-bottom"
            unmountOnExit
            timeout={750}>
            <h1 className="landing__title-bottom title"><span className="text-accent">V</span>asconcellos</h1>
          </CSSTransition>
          <CSSTransition 
            in={!props.isMenuOpen}
            classNames="subtitle"
            unmountOnExit
            timeout={750}>
            <span className="subtitle text-accent">Web developer</span>
          </CSSTransition>
        </div>
    )
}

export default Title;