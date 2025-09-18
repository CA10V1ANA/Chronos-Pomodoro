import { useState, useEffect } from 'react';
import styles from './styles.module.css'
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme;
  });
  useEffect(() => {
   document.documentElement.setAttribute('data-theme', theme);
   localStorage.setItem('theme', theme);
  }, [theme]);

  const nextThemeIcon ={
    dark: <SunIcon />,
    light: <MoonIcon />
  }

function handleThemeChange(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
  event.preventDefault();

  setTheme(prevTheme => {
    const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
    return nextTheme;
  });
  
}

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink}
      href="#home"
      aria-label='Ir para a home'
      title='Ir para a Home'>
      <HouseIcon />
      </a>
      <a className={styles.menuLink}
      href="#history"
      aria-label='Ver histórico'
      title='Ver Histórico'>
      <HistoryIcon />
      </a>
      <a className={styles.menuLink}
      href="#settings"
      aria-label='Ir para as configurações'
      title='Ir para as Configurações'>
      <SettingsIcon />
      </a>
      <a className={styles.menuLink}
      href="#"
      aria-label='Mudar Tema'
      title='Mudar Tema'
      onClick={handleThemeChange}
      >
      {nextThemeIcon[theme]}
      </a>
    </nav>
  )
}