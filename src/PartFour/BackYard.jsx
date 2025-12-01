import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/BackYard.css';

function BackYard() {
    const navigate = useNavigate();
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        function checkOrientation() {
            setIsLandscape(window.innerWidth > window.innerHeight);
        }

        checkOrientation(); // בדיקה ראשונית
        window.addEventListener("resize", checkOrientation);

        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    }, []);

    const imageClass = isLandscape ? 'Yard-back-landscape' : 'Yard-back-portrait';

    const leftButtons = [
        { id: 1, link: "https://drive.google.com/file/d/1BXy2eq68tJr_A2MY7OryyVoarGUX8Hyb/view?usp=drive_link", label: `צמ"ה` },
        { id: 2, link: "https://drive.google.com/file/d/10gHo9_t904jdS4E9L0WF8vJHQiedzTnT/view?usp=drive_link", label: "רפואה" },
        { id: 3, link: "https://drive.google.com/file/d/1GDgfM5tiv2URMKBnpXwlGOuOLh_WfvCu/view?usp=drive_link", label: "שיטור" },
        { id: 4, link: "https://drive.google.com/file/d/1nATHfeekJdDVD7Gm1VEPUmqo0m84Yfbr/view?usp=drive_link", label: `אנו"ח` },
    ];

    const rightButtons = [
        { id: 5, link: "https://drive.google.com/file/d/1GCDv6gQVneAiMDfus029P-oz1W2NbBv6/view?usp=drive_link", label: `חפ"ק המנהלה` },
        { id: 6, link: "https://drive.google.com/file/d/16AXHkSX_S1PEnQRg4KOPDWFZbp0Yp5Ku/view?usp=drive_link", label: "מתחם ההספקה" },
        { id: 7, link: "https://drive.google.com/file/d/1ICfc8SGenFkkoCXE0LT4_BqkEBjn4lQr/view?usp=drive_link", label: `מתחם טנ"א` },
        { id: 8, link: "https://drive.google.com/file/d/1_j6ssXB9RWdMd2vN3wTlYDybGmMEaKdU/view?usp=drive_link", label: "מתחם שהייה" },
    ];

    return (
        <div className="BackYard">
            <div className="yard-close-button" onClick={() => navigate("/backdoor")}>
                <img src={process.env.PUBLIC_URL + '/assets/imgs/xBtnWhite.png'} alt="Close" className="XBtn" />
            </div>

            {/* הודעה אם המסך אנכי */}
            {!isLandscape && (
                <div className="rotate-message">
                    <p className='rotate-txt'> סובבו את המסך למצב אופקי</p>
                </div>
            )}
      <p className="BackYard-orders">לחצו על הכפתורים וצפו בסרטונים</p>
            <img
                src={`${process.env.PUBLIC_URL}/assets/imgs/BackYard.jpg`}
                className={imageClass}
                onClick={() => navigate("/BackYard")}
                alt="Backyard"
            />
      

            <div className="side-buttons left">
                {leftButtons.map(btn => (
                    <a key={btn.id} href={btn.link} className="side-button" target="_blank" rel="noopener noreferrer">
                        {btn.label}
                    </a>
                ))}
            </div>

            <div className="side-buttons right">
                {rightButtons.map(btn => (
                    <a key={btn.id} href={btn.link} className="side-button" target="_blank" rel="noopener noreferrer">
                        {btn.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default BackYard;
