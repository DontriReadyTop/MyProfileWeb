import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
import { Helmet } from "react-helmet";
import HomePage from './Page/HomePage';
import LoginPage from './Page/LoginPage';
import RegisterPage from './Page/RegisterPage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [themeGithub, setThemeGithub] = useState(theme === "light" ? "/images/github.png" : "images/githubDark.png");
  const [styleBody, setStyleBody] = useState(theme === "light" ? "white" : "#121212");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const newThemeGithub = theme === "light" ? "images/githubDark.png" : "/images/github.png";
    const newBody = theme === "light" ? "black" : "white";
    setStyleBody(newBody);
    setTheme(newTheme);
    setThemeGithub(newThemeGithub);
  }



  return (
    <>
      <Helmet>
        <style>{`body { background-color: ${styleBody}; }`}</style>
      </Helmet>
      <div className="background-app" data-theme={theme}>
        <div className="app" data-theme={theme}>
          <Routes >
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HomePage switchTheme={switchTheme} setTheme={setTheme} theme={theme} themeGithub={themeGithub} />} />
          </Routes>
        </div>
      </div>

    </>

  );
}

export default App;
