import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Intro from './componentsJS/Intro';
import Info from './componentsJS/Info';
import Menu from './componentsJS/Menu';
import Mivne from './componentsJS/Mivne';
import Header from './componentsJS/Header';
import Ready from './componentsJS/Ready';
import Emergency from './componentsJS/Emergency';
import War from './componentsJS/War';
import Diagram from './componentsJS/DiagramStep1';
import DiagramStep2 from './componentsJS/DiagramStep2';
import DiagramStep3 from './componentsJS/DiagramStep3';
import MagnifyPic from './componentsJS/MagnifyPic';
import DiagramStep3Sub from './componentsJS/DiagramStep3Sub';
import DiagramStep3Mahoz from './componentsJS/DiagramStep3Mahoz';
import Refua from './componentsJS/Refua';
import Fast from './componentsJS/Fast';
import ExcelMinala from './componentsJS/ExcelMinala';
import Rounds from './componentsJS/Rounds';
import Battalions from './componentsJS/Battalions';
import Validiation from './componentsJS/Validiation';
import BackDoor from './componentsJS/BackDoor';
import BackYard from './componentsJS/BackYard';

function App() {
    const [isLandscape, setIsLandscape] = useState(false);
    const location = useLocation();
    const excludedRoutes = ["/BackYard", "/MagnifyPic"]; // רשימה של דפים שאין צורך בהגבלה של המצב האופקי

    useEffect(() => {
        function checkOrientation() {
            if (window.innerWidth > window.innerHeight) {
                setIsLandscape(true);
            } else {
                setIsLandscape(false);
            }
        }

        checkOrientation(); // בדיקה ראשונית
        window.addEventListener("resize", checkOrientation);
        
        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    }, []);

    // אם הנתיב הנוכחי לא נמצא ברשימת הדפים המיוחדים, מונע מצב אופקי
    const isRestrictedPage = excludedRoutes.includes(location.pathname);

    return (
        <div className="App">
            <Header className="header-fixed" />

            {/* אם הדף הנוכחי לא נמצא ברשימה של דפים יוצאי דופן, תציג את ההודעה */}
            {isLandscape && !isRestrictedPage ? (
                <div className="landscape-block">
                    <h2 className='worning'>אנא סובבו את המכשיר חזרה למצב אנכי</h2>
                    <p className='sorry'>אנחנו עדיין מפתחים את התמיכה במצב אופקי תודה על ההבנה
                    </p>
                    <img 
                        src={`${process.env.PUBLIC_URL}/assets/imgs/whiteLogo.svg`} 
                        alt="White Logo" 
                        className="logo-white-app" 
                    />
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/mivne" element={<Mivne />} />
                    <Route path="/ready" element={<Ready />} />
                    <Route path="/emergency" element={<Emergency />} />
                    <Route path="/war" element={<War />} />
                    <Route path="/diagram" element={<Diagram />} />
                    <Route path="/DiagramStep2" element={<DiagramStep2 />} />
                    <Route path="/DiagramStep3" element={<DiagramStep3 />} />
                    <Route path="/DiagramStep3Sub" element={<DiagramStep3Sub />} />
                    <Route path="/MagnifyPic" element={<MagnifyPic />} />
                    <Route path="/DiagramStep3Mahoz" element={<DiagramStep3Mahoz />} />
                    <Route path="/Refua" element={<Refua />} />
                    <Route path="/fast" element={<Fast />} />
                    <Route path="/rounds" element={<Rounds />} />
                    <Route path="/BATTALIONS" element={<Battalions />} />
                    <Route path="/validation" element={<Validiation />} />
                    <Route path="/excelExplenation" element={<ExcelMinala />} />
                    <Route path="/backdoor" element={<BackDoor />} />
                    <Route path="/BackYard" element={<BackYard />} />
                </Routes>
            )}
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
