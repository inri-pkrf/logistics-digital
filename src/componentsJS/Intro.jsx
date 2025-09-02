import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../componentsCSS/Intro.css';

const Intro = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [videoSrc, setVideoSrc] = useState(''); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setVideoSrc(`${process.env.PUBLIC_URL}/assets/media/introVidComp.mp4`);
      } else {
        setVideoSrc(`${process.env.PUBLIC_URL}/assets/media/introVid.mp4`);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const videoEndTimeout = setTimeout(() => {
      setIsVideoEnded(true);
    }, 13000); 

    const introTextTimeout = setTimeout(() => {
      setShowIntro(true);
    }, 13050); 

    const skipButtonTimeout = setTimeout(() => {
      setShowSkipButton(true);
    }, 3500); 

    return () => {
      clearTimeout(videoEndTimeout);
      clearTimeout(introTextTimeout);
      clearTimeout(skipButtonTimeout);
    };
  }, []);

  const skipVideo = () => {
    setIsVideoEnded(true);
    setShowIntro(true);
  };

  const goToHome = () => {
    navigate('/home'); 
  };

  return (
    <div id="intro-lomda">
      {!isVideoEnded && (
        <>
          {showSkipButton && (
            <button className="skip" onClick={skipVideo}>
              &lt;&lt; דלג/י
            </button>
          )}
          {videoSrc && ( 
            <video 
              className="video-intro" 
              autoPlay 
              muted 
              playsInline
            >
              <source src={`${process.env.PUBLIC_URL}/assets/media/introVidComp.mp4`} type="video/mp4" />
              הדפדפן שלך לא תומך בתגית VIDEO.
            </video>
          )}
        </>
      )}
      {showIntro && (
        <div className="intro-text-slide-in">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/imgs/whiteLogo.svg`} 
            alt="White Logo" 
            id="logo-white" 
            className="move-to-center" 
          />
         <h1 id="welcome-text-intro"> ברוכים הבאים לעזר ללוגיסטיקה</h1>
             <p id="introduction-sub">ברוכים הבאים ללומדה הלוגיסטית במפקדות.
            בעזר זה תוכלו להעמיק וללמוד על מבנה, ייעוד ותפקידי הלוגיסטיקה במפקדות השונות ובעלי התפקידים השונים.
            בנוסף, תלמדו על תהליך הגיוס והוצאת הסבבים השונים, ועל ניהול הלחימה, חצר אחורית, עזר המנהלה והערכות המצב
            </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/whiteNextBtn.png`}
            className="hpArrow-intro"
            alt="Arrow"
            onClick={goToHome}
          />
        </div>
      )}
    </div>
  );
};

export default Intro;