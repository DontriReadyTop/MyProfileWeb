import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
import { StickyNav } from 'react-js-stickynav';
import AppHeader from './components/AppHeader';
import PageHome from './Page/PageHome';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [themeGithub, setThemeGithub] = useState(theme === "light" ? "/images/github.png" : "images/githubDark.png");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const newThemeGithub = theme === "light" ? "images/githubDark.png" : "/images/github.png";
    setTheme(newTheme);
    setThemeGithub(newThemeGithub);
  }

  return (
    <div className="app" data-theme={theme}>
      <StickyNav>
        {/* <AppHeader /> */}
      </StickyNav>
      <Routes >
        <Route path="/" element={<PageHome switchTheme={switchTheme} setTheme={setTheme} theme={theme} themeGithub={themeGithub} />} />
      </Routes>
    </div>
  );
}

export default App;
