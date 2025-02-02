import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Intro from './componentsJS/Intro';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Intro />} />
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
