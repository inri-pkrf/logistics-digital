import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Intro from './componentsJS/Intro';
import Info from './componentsJS/Info';
import Menu from './componentsJS/Menu';
import Mivne from './componentsJS/Mivne';
import Header from './componentsJS/Header';
import Ready from './componentsJS/Ready';
import Emergency from './componentsJS/Emergency';
import War from './componentsJS/War';



function App() {
    return (
        <div className="App">
                <Header className="header-fixed" />

            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/info" element={<Info />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/mivne" element={<Mivne />} />
                <Route path="/ready" element={<Ready />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/war" element={<War />} />
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
