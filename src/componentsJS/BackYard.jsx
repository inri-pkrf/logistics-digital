import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/BackYard.css';

function BackYard() {
    const navigate = useNavigate();
    const [isLandscape, setIsLandscape] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const [modalPosition, setModalPosition] = useState({ top: '0%', left: '0%' });
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [dotColors, setDotColors] = useState(Array(4).fill('')); // מערך צבעים עבור כל הנקודות (מתחילים בלי צבע)
    const [clickedButtons, setClickedButtons] = useState(0); // מספר הלחיצות על כפתורים

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

    useEffect(() => {
        // בדיקה אם יש נתונים ב-sessionStorage על מספר הלחיצות
        const storedClickedButtons = parseInt(sessionStorage.getItem('clickedButtons'), 10);
        if (!isNaN(storedClickedButtons)) {
            setClickedButtons(storedClickedButtons);
        }
    }, []);

    const imageClass = isLandscape ? 'Yard-back-landscape' : 'Yard-back-portrait';

    const handleImageLoad = (e) => {
        const { width, height } = e.target;
        setImageSize({ width, height });
    };

    const buttonsData = [
        { top: '43%', left: '22%', text: 'מתחם טנ"א - מענה אחזקה וחלפים לרכב וציוד ייעודי' },
        { top: '20%', left: '38%', text: 'מפקדת הפל"ם - פו"ש מחלקת משא"ן-שליטה בכ"א' },
        { top: '15%', left: '55%', text: 'מתחם בינוי - שירותים וסניטציה' },
        { top: '33%', left: '70%', text: 'מתחם הספקה - מענה בציוד ייעודי, לוגיסטי, החלפה, מזון, מים, דלקים ושמנים' }
    ];

    const handleDotClick = (e, index, text) => {
        const dotPosition = e.target.getBoundingClientRect();
        const topPercentage = (dotPosition.bottom / imageSize.height) * 100;
        const leftPercentage = (dotPosition.left / imageSize.width) * 100;

        setModalPosition({
            top: `${topPercentage + 10}%`,
            left: `${leftPercentage - 5}%`,
        });
        setModalText(text);
        setShowModal(true);

        // עדכון הצבע של הנקודה שנלחצה
        setDotColors(prevColors => {
            const updatedColors = [...prevColors];
            updatedColors[index] = 'green'; // שינוי צבע רק לנקודה שנבחרה
            return updatedColors;
        });

        // עדכון מספר הלחיצות ב-sessionStorage
        const newClickedButtons = clickedButtons + 1;
        setClickedButtons(newClickedButtons);
        sessionStorage.setItem('clickedButtons', newClickedButtons);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const allButtonsClicked = clickedButtons === buttonsData.length;

    return (
        <div className="BackYard">
            <img
                src={`${process.env.PUBLIC_URL}/assets/imgs/BackYard.jpg`}
                className={imageClass}
                onClick={() => navigate("/BackYard")}
                onLoad={handleImageLoad}
            />

            <p className='yard-orders'>לחצו על הנקודות על מנת ללמוד על החצר האחורית</p>

            <div className="dots-container">
                {buttonsData.map((button, index) => (
                    <button
                        key={index}
                        className={`dot ${dotColors[index] === 'green' ? 'active' : ''}`}
                        style={{ top: button.top, left: button.left }}
                        onClick={(e) => handleDotClick(e, index, button.text)}
                    />
                ))}
            </div>

            {showModal && (
                <div className="modal" style={{ top: modalPosition.top, left: modalPosition.left }}>
                    <div className="modal-content">
                        <button className='close-modal' onClick={handleCloseModal}>x</button>
                        <p className='text-modal'>{modalText}</p>
                    </div>
                </div>
            )}

            {allButtonsClicked && (
                <button className="close-page" onClick={() => navigate(-1)}>
                    x
                </button>
            )}
        </div>
    );
}

export default BackYard;
