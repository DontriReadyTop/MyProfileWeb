import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
import { Helmet } from "react-helmet";
import HomePage from './Page/HomePage';
import LoginPage from './Page/LoginPage';
import RegisterPage from './Page/RegisterPage';
import axios from "axios";
import ProtectedRoutes from './ProtectedRoutes';


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

  // const AuthenWeb = () => {

  //   const [authen, setAuthen] = useState(false);


  //   useEffect(async () => {

  //     const response = await axios.post(
  //       "http://localhost:5500/login/authen",
  //       {}
  //       ,
  //       {
  //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //       }
  //     );

  //     if (response.data.status == 'ok') {
  //       setAuthen(true);
  //     } else {
  //       setAuthen(false);
  //     }

  //   }, []);

  //   console.log(authen)

  //   return authen ? <Outlet /> : <Navigate to='/login' />;
  // }

  return (
    <>

      <div className="app" data-theme={theme}>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage switchTheme={switchTheme} setTheme={setTheme} theme={theme} themeGithub={themeGithub} />} />
          </Route>
        </Routes>
      </div>
      <Helmet>
        <style>{`body { background-color: ${styleBody}; }`}</style>
      </Helmet>
    </>

  );
}

export default App;
