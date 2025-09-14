/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './Styles/Training.css';
import { useNavigate } from 'react-router-dom';

function Training() {
    const navigate = useNavigate();
    const [expandedExplanation, setExpandedExplanation] = useState(null);

    const handleToggleExplanation = (index) => {
        setExpandedExplanation(expandedExplanation === index ? null : index);
    };

    const explanations = [
        {
            title: "דגשים לבניית אימון לוגיסטי",
            text: (
                <>
                    ביצוע אבחון מוקדם לבע"ת במסגרת הלוגיסטית – ותק בע"ת בתפקיד, נוכחות באימונים ומופעים קודמים, הכשרות, רמת השליטה בתפקיד.<br/>
                    ניתוח יחסי הגומלין של המסגרת הלוגיסטית אל מול גורמים בתוך ומחוץ ליחידה – רמה ממונה, פלוגות מבצעיות, אג"מ, גלמ"ר/אלו"ג.<br/>
                    ניתוח תובנות ולקחים מאימונים קודמים להבנת החוזקות והחולשות של המסגרת. מתוך התובנות יש למקד את העיסוק בתחומים הדורשים חיזוק.<br/>
                    הגדרת הישגים נדרשים למסגרת בנושאי האימון – ביצוע הערכות מצב אפקטיביות, ניתוח והפקת משמעויות מתמונת המצב, תרגולי סד"פ בתרחישים שונים (אתרי הרס, אירועים מבצעיים, צריכה, ניהול כוחות קטנים, משימות לוגיסטיות), ביצוע מש"מ, תרגולים פיזיים במידה וקיימים וכו'.<br/>
                    נילחם כפי שנתאמן - עבודה על השוע"ל כפלטפורמה לשילוח משימות ועל עזר המנהלה כפלטפורמת השו"ב הלוגיסטית.<br/>
                    המפקד הוא המאמן – מעורבות רמה ממונה כגורם המאמן מאפשרת הגברת חניכה וביצוע אימון אפקטיבי.
                </>
            )
        }
       
    ];

    return (
        <div className="Training">
            <div className='white-circle-Training'>
                <h1 className="titleTra"> אימונים </h1>
                <p className='txt-training'>   
                    אימוני פלוגת המפקדה משלימים את תמונת המצב לכשירות היחידה וליכולתה לספק מענה לכוחות הגדוד בחירום, לצד ניהול כוח אדם ושליטה באמצעים בימ"ח. בשגרה הגדוד מבצע אימונים לוגיסטיים ע"פ מחזוריות תלת שנתית :<br/> 
                    <b>אימון מלא-אימון מפקדים-שמיטה</b>
                </p>
                <img className='MaImg' src={`${process.env.PUBLIC_URL}/assets/imgs/training.jpg`} alt="אימונים" />
                <p className='txt-training'> 
                    <b>מטרת האימונים:</b> לבחון את כשירות המסגרת לחירום, לשמר ולשפר את רמתה לאורך זמן, ולהתמקד בחוזקות ובחולשות שהתגלו.
                    לאור המלחמה ושנות התע"מ 2024-2025, מבצעים הגדודים גם אימונים תו"כ התע"מ
                </p>

                {/* דרופדאון */}
              {explanations.map((item, index) => (
                    <div key={index} className="explanation-div-Training">
                        <div
                            className="explanation-title-wrapper-Training"
                            onClick={() => handleToggleExplanation(index)}
                        >
                            <div className="explanation-title-Training">
                                {item.title}
                            </div>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/imgs/nextBlack.png`}
                                className={`arrow-icon1 ${expandedExplanation === index ? 'rotated' : ''}`}
                                alt="Arrow"
                            />
                        </div>

                        {expandedExplanation === index && (
                            <div className="explanation-text-container">
                                <div className="explanation-text-scroll">
                                    {Array.isArray(item.text)
                                        ? item.text.map((text, idx) => <div key={idx}>{text}</div>)
                                        : item.text
                                    }
                                </div>
                                <p className='small-text-drop'>על מנת לקרוא את כל המלל יש לגלול למטה *</p>
                            </div>
                        )}
                    </div>
                ))}
                <h2 className="SubtitleTra"> מתווה אימוני פלוגת המפקדה לשנת 2025 </h2>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/training2.jpg`}
                        className='TraImg'
                        onClick={() =>
                            navigate("/MagnifyPic", {
                                state: {
                                    imagePath: `${process.env.PUBLIC_URL}/assets/imgs/training2.jpg`,
                                    situation: "training"   
                                }
                            })
                        }
                    />
                    <p className='small-text-drop'> ניתן ללחוץ על התמונה על מנת להגדילה*</p>


            </div>
               <div className='navigation-btn'>
                    <div onClick={() => navigate("/ready")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                    <div onClick={() => navigate("/people")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                </div>
        </div>
    );
  
}

export default Training;


