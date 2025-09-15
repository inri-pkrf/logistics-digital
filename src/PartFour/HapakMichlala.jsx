import React, { useState, useEffect } from 'react';
import './Styles/HapakMichlala.css';
import { useNavigate } from 'react-router-dom';

function HapakMichlala() {
    const navigate = useNavigate();
    const [visitedBtns, setVisitedBtns] = useState({});

    useEffect(() => {
        const savedVisited = JSON.parse(sessionStorage.getItem('visitedBtns')) || {};
        setVisitedBtns(savedVisited);
    }, []);

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
    onClick={() =>
        navigate("/MagnifyPic", {
            state: {
                imagePath: `${process.env.PUBLIC_URL}/assets/imgs/Hapak.png`,
                situation: "hapak"
            }
        })
    }
    alt="חפ״ק מנהלה"
/>


                    <p className='small-text-drop3'> לחצו על התמונה על מנת להגדילה</p>


                    <p className='txt-hapak'>
                        בחפ"ק המנהלה מ"פ המפקדה/קל"ן/קל"ח מבצע הערכות מצב עיתיות ונושאיות לגיבוש תמונת המצב...
                    </p>

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

                    <div className='navigation-btn'>
                        <div onClick={() => navigate("/war")} className='prev'>
                            <p className='text-lable'> הקודם</p>
                            <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="הקודם" />
                        </div>
                        <div onClick={() => navigate("/fields")} className='next'>
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
