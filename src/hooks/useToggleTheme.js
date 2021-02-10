import { useEffect, useState } from 'react';

export const useToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  const setMode = themeMode => {
    window.localStorage.setItem('theme', themeMode);
    setTheme(theme => themeMode);
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  useEffect( () => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, [])

  return [theme, toggleTheme];

}