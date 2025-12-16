import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/BackYard.css';

function BackYard() {
    const navigate = useNavigate();

    const topButtons = [
        { id: 1, link: "https://drive.google.com/file/d/1BXy2eq68tJr_A2MY7OryyVoarGUX8Hyb/view?usp=drive_link", label: `צמ"ה` },
        { id: 2, link: "https://drive.google.com/file/d/10gHo9_t904jdS4E9L0WFZJHQiedzTnT/view?usp=drive_link", label: "רפואה" },
        { id: 3, link: "https://drive.google.com/file/d/1GDgfM5tiv2URMKBnpXwlGOuOLh_WfvCu/view?usp=drive_link", label: "שיטור" },
        { id: 4, link: "https://drive.google.com/file/d/1nATHfeekJdDVD7Gm1VEPUmqo0m84Yfbr/view?usp=drive_link", label: `אנו"ח` },
    ];

    const bottomButtons = [
        { id: 5, link: "https://drive.google.com/file/d/1GCDv6gQVneAiMDfus029P-oz1W2NbBv6/view?usp=drive_link", label: `חפ"ק המנהלה` },
        { id: 6, link: "https://drive.google.com/file/d/16AXHkSX_S1PEnQRg4KOPDWFZbp0Yp5Ku/view?usp=drive_link", label: "מתחם ההספקה" },
        { id: 7, link: "https://drive.google.com/file/d/1ICfc8SGenFkkoCXE0LT4_BqkEBjn4lQr/view?usp=drive_link", label: `מתחם טנ"א` },
        { id: 8, link: "https://drive.google.com/file/d/1_j6ssXB9RWdMd2vN3wTlYDybGmMEaKdU/view?usp=drive_link", label: "מתחם שהייה" },
    ];

    return (
        <div className="BackYard">

            {/* כפתור סגירה */}
            <div className="yard-close-button" onClick={() => navigate("/backdoor")}>
                <img src={process.env.PUBLIC_URL + '/assets/imgs/xBtnWhite.png'} alt="Close" className="XBtn" />
            </div>

            {/* כותרת */}
            <p className="BackYard-orders">לחצו על הכפתורים וצפו בסרטונים</p>

            {/* קונטיינר מרכזי לסידור אנכי */}
            <div className="BackYard-content">

                {/* כפתורים עליונים */}
                <div className="buttons-row top-buttons">
                    {topButtons.map(btn => (
                        <a key={btn.id} href={btn.link} className="side-button" target="_blank" rel="noopener noreferrer">
                            {btn.label}
                        </a>
                    ))}
                </div>

                {/* תמונה באמצע */}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/imgs/BackYard.jpg`}
                    className="Yard-back-landscape"
                    alt="Backyard"
                />

                {/* כפתורים תחתונים */}
                <div className="buttons-row bottom-buttons">
                    {bottomButtons.map(btn => (
                        <a key={btn.id} href={btn.link} className="side-button" target="_blank" rel="noopener noreferrer">
                            {btn.label}
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default BackYard;
