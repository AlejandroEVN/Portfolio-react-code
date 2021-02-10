import React from 'react';
import { useToggleMenu } from './hooks/useToggleMenu';

import Copyright from './components/Copyright/Copyright';
import Title from './components/Title/Title';
import Menu from './components/Menu/Menu';
import Theme from './components/Theme/Theme';
import SocialIcons from './components/Social/SocialIcons';

const App = () => {
  const [isMenuOpen, toggleMenu] = useToggleMenu();
  
  return (
      <>
        <Title isMenuOpen={isMenuOpen} />
        <Theme />
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <SocialIcons />
        <Copyright />
      </>
  )
}

export default App;