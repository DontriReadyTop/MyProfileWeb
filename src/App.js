import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { StickyNav } from 'react-js-stickynav';
import AppHeader from './components/AppHeader';
import PageHome from './Page/PageHome';



function App() {


    return (
        <div className="app">
            <StickyNav>
                <AppHeader />
            </StickyNav>
            <Routes >
                <Route path="/" element={<PageHome />} />
            </Routes>
        </div>
    );
}

export default App;
