import React, { useState, useEffect } from 'react';
import './Styles/HapakMichlala.css';
import { useNavigate } from 'react-router-dom';

function HapakMichlala() {
    const navigate = useNavigate();
    const [clickedBtn, setClickedBtn] = useState(null); // מצב כפתור נלחץ
    const [visitedBtns, setVisitedBtns] = useState({}); // כפתורים שנלחצו בעבר

    // טען את מצב הכפתורים מ-sessionStorage בהתחלה
    useEffect(() => {
        const savedVisited = JSON.parse(sessionStorage.getItem('visitedBtns')) || {};
        setVisitedBtns(savedVisited);
    }, []);

    // שמירת לחיצה ב-sessionStorage וניווט
    const handleClick = (btnName, path) => {
        const updatedVisited = { ...visitedBtns, [btnName]: true };
        setVisitedBtns(updatedVisited);
        sessionStorage.setItem('visitedBtns', JSON.stringify(updatedVisited));
        navigate(path);
    };

    return (
        <div className="HapakMichlala">
            <div className='white-circle-HapakMichlala'>
                <h1 className="titleHapak">חפ"ק המנהלה</h1>
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/Hapak.png`}
                        className="hapkMivne"
                    />
                    <p className='txt-hapak'>
                        בחפ"ק המנהלה מ"פ המפקדה/קל"ן/קל"ח מבצע הערכות מצב עיתיות ונושאיות לגיבוש תמונת המצב, ניהול הלחימה והסקת מסקנות להמשך, תוך שמירה על רציפות התפקוד של הגדוד. המערכת המרכזית מסייעת בגיבוש תמונת המצב ובביצוע הערכות המצב.
                    </p>

                    {/* כפתורים עם סטייל שונה אם נלחצו בעבר */}
                    <button
                        className={`HapakNav ${visitedBtns['status'] ? 'visited' : ''}`}
                        onClick={() => handleClick('status', '/validation')}
                    >
                        הערכת מצב
                    </button>

                    <button
                        className={`HapakNav ${visitedBtns['help'] ? 'visited' : ''}`}
                        onClick={() => handleClick('help', '/excelExplenation')}
                    >
                        עזר חפק מנהלה
                    </button>

                    {/* ניווט קדימה ואחורה */}
                    <div className='navigation-btn'>
                        <div onClick={() => navigate("/war")} className='prev'>
                            <p className='text-lable'> הקודם</p>
                            <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="הקודם" />
                        </div>
                        <div onClick={() => navigate("/hapakMichlala")} className='next'>
                            <p className='text-lable'>הבא</p>
                            <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="הבא" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HapakMichlala;
