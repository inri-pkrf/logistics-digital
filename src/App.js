import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Intro from './componentsJS/Intro';
import Info from './componentsJS/Info';
import Header from './componentsJS/Header';



function App() {
    return (
        <div className="App">
                <Header className="header-fixed" />

            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
