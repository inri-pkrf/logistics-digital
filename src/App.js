import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Intro from './componentsJS/Intro';
import Info from './componentsJS/Info';
import Menu from './componentsJS/Menu';
import Mivne from './PartOne/Mivne';
import Header from './componentsJS/Header';
import Ready from './PartTwo/Ready';
import Emergency from './PartThree/Emergency';
import War from './PartFour/War';
import Diagram from './PartOne/DiagramStep1';
import DiagramStep2 from './PartOne/DiagramStep2';
import DiagramStep3 from './PartOne/DiagramStep3';
import DiagramStep3Mahoz from './PartOne/DiagramStep3Mahoz';
import MagnifyPic from './componentsJS/MagnifyPic';
import Methods from './PartTwo/Methods';
import Training from './PartTwo/Training';
import People from './PartTwo/People';
import Fast from './PartThree/Fast';
import ExcelMinala from './PartFour/ExcelMinala';
import Rounds from './PartThree/Rounds';
import Battalions from './PartThree/Battalions';
import Fields from './PartFour/Fields';
import FinalScreen from './componentsJS/FinalScreen';
import Quiz from './componentsJS/Quiz';

function App() {
  const [isLandscape, setIsLandscape] = useState(false);
  const location = useLocation();
  const videoRef = useRef(null); // ref לסרטון או תוכן שניתן להגדלה
  const [allowLandscape, setAllowLandscape] = useState(false);

  // רשימה של דפים שמותרים תמיד אופקי
  const excludedRoutes = ["/BackYard", "/MagnifyPic","/Methods","/menu"];

  useEffect(() => {
    function checkOrientation() {
      const isLandscape = window.innerWidth > window.innerHeight;

      setIsLandscape(isLandscape);

      // בדיקה אם מותר אופקי בגלל תוכן גדול (למשל סרטון)
      if (videoRef.current) {
        const contentWidth = videoRef.current.offsetWidth;
        const contentHeight = videoRef.current.offsetHeight;
        setAllowLandscape(contentWidth > contentHeight);
      }
    }

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  const isRestrictedPage = excludedRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Header className="header-fixed" />

      {isLandscape && !isRestrictedPage && !allowLandscape ? (
        <div className="landscape-block">
          <h2 className='warning'>אנא סובבו את המכשיר חזרה למצב אנכי</h2>
          <p className='sorry'>
            אנחנו עדיין מפתחים את התמיכה במצב אופקי, תודה על ההבנה
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
          <Route path="/DiagramStep3Mahoz" element={<DiagramStep3Mahoz />} />
          <Route path="/MagnifyPic" element={<MagnifyPic ref={videoRef} />} /> {/* כאן יש אפשרות אופקי אם גדול */}
          <Route path="/Methods" element={<Methods />} />
          <Route path="/training" element={<Training />} />
          <Route path="/people" element={<People />} />
          <Route path="/fast" element={<Fast />} />
          <Route path="/rounds" element={<Rounds />} />
          <Route path="/BATTALIONS" element={<Battalions />} />
          <Route path="/fields" element={<Fields />} />
          <Route path="/test" element={<FinalScreen />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/excelExplenation" element={<ExcelMinala />} />
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
