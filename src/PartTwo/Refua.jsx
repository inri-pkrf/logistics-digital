import React, { useState, useEffect } from 'react';
import './Styles/Refua.css';
import { useNavigate } from 'react-router-dom';

function Refua() {
    const navigate = useNavigate();
    const [clickedDiv, setClickedDiv] = useState(null); // איזה דיב נלחץ

    // טען מצב מדיב לחוץ מה-sessionStorage בהתחלה
    useEffect(() => {
        const savedClicked = sessionStorage.getItem('clickedDiv');
        if (savedClicked) setClickedDiv(savedClicked);
    }, []);

    const handleClick = (divName, path) => {
        setClickedDiv(divName);
        sessionStorage.setItem('clickedDiv', divName); // שמירה
        navigate(path);
    };

    return (
        <div className="Refua">
            <div className='white-circle-Refua'>
                <h1 className="titleRef"> אמצעים  </h1>
                <h1 className="sub-titleRef">ציוד בימ"ח </h1>

                <div 
                    className={`btn-container ${clickedDiv === 'yamach' ? 'clickedDiv' : ''}`}
                    onClick={() => handleClick('yamach', '/Yamach')}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/container.png`}
                        className="container-btn-blue"
                        alt="ציוד בימח"
                    />
                    <p className='container-text'>לחצו על מנת ללמוד על ציוד בימ"ח </p>
                </div>

                <h1 className="sub-titleRef-R">שגרת אחזקה</h1>
                <div 
                    className={`btn-Routine ${clickedDiv === 'routine' ? 'clickedDiv' : ''}`}
                    onClick={() => handleClick('routine', '/Maintenance')}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/optimizing.png`}
                        className="Routine-btn"
                        alt="שגרת אחזקה"
                    />
                    <p className='Routine-text'>לחצו על מנת ללמוד על שגרת אחזקה</p>
                </div>

                <div className='navigation-btn'>
                    <div onClick={() => navigate("/Ready")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                    <div onClick={() => navigate("/training")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Refua;
