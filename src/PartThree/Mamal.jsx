import React, { useState } from 'react';
import './Styles/Mamal.css';
import { useNavigate } from 'react-router-dom';

function Mamal() {
    const navigate = useNavigate();
    const [expandedExplanation, setExpandedExplanation] = useState(null);

    const handleToggleExplanation = (index) => {
        setExpandedExplanation(expandedExplanation === index ? null : index);
    };

    const explanations = [
        {
            title:`העקרונות הלוגיסטיים למעמ"ל:`,
            text: (
                <>
                      1. קיצור זמני הנג"ח והמעמ"ל ע"ב ימ"ח מבצעי מהיר – אחסנת האמצעים בריכוז פלוגיתי ע"ב דולבים.<br/>
                    2. התבססות על משאיות עם דופן הרמה הידראולית לקיצור זמני העמסה ופריקה וביצוע סבבים מהירים.<br/>
                    3. מתן עדיפות לסבבים המבצעיים ואחריהם הסבבים המנהלתיים.<br/>
                    4. התאמת שיטת הסבבים לכל גדוד חוד חנית / איתן / יערה / פלוגות מהירות.<br/>
                    5. לבנת היסוד לביצוע המעמ"ל על בסיס הגלמ"ר.<br/>
                    6. התבססות על אמצעי ניוד אורגניים בשלב הגיוס וצמצום התלות ביר"מ.<br/>
                    7. הסד"כ יגיע לשטח הכינוס באופן ישיר והציוד יגיע אל הסד"כ בדחיפה מהימ"ח.<br/>
                    8. שליפת סד"כ מתע"מ בהתאם לפקודת אמ"צ וגיוס מילואים במקביל.<br/>
                    9. עצמאות לוגיסטית מרמת הגדוד בשלב המעמ"ל וב-24 השעות הראשונות להפעלה.<br/>
                    10. מימוש משימת השיטור – שליטה בצירים בשלב המעמ"ל ע"ב סד"כ מ.צ דן.<br/>
                </>
            )
        }
    ];

    return (
        <div className="Maml">
            <div className='white-circle-Maml'>
                <h1 className="titleMaml">עקרונות המעמ"ל</h1>  

                {/* הטקסט הקיים נשאר במקום */}
                <p className='txt-Maml'>
                    שינויים באופי האיומים על ישראל מגדילים את הצורך במוכנות הפיקוד ויחידותיו למעבר מהיר ומסודר בין מצבי תפקוד, תוך מתן מענה לאירועים מבצעיים ולמשימות סיוע אזרחי.  
                    יכולת מחלקת הלוגיסטיקה לעבור ממצב שגרה לחירום מבטיחה עמידה בייעוד ובמשימות הפיקוד.  
                    תכנית המעמ"ל תופעל בכל תרחיש אופרטיבי, בהתאם ללימודי לקחי מלחמות קודמות, בשני אופנים – הפתעה מ-0 עד 100 או גיוס מדורג.
                </p>
                <img className='MaImg' src={`${process.env.PUBLIC_URL}/assets/imgs/maml.jpg`} alt="אימונים" />


                {/* הסבר נפתח מתחת לטקסט הקיים */}
                {explanations.map((item, index) => (
                    <div key={index} className="explanation-div-Maml">
                        <div
                            className="explanation-title-wrapper-Maml"
                            onClick={() => handleToggleExplanation(index)}
                        >
                            <div className="explanation-title-Maml">{item.title}</div>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/imgs/nextBlack.png`}
                                className={`arrow-icon1 ${expandedExplanation === index ? 'rotated' : ''}`}
                                alt="Arrow"
                            />
                        </div>

                        {expandedExplanation === index && (
                            <div className="explanation-text-container">
                                <div className="explanation-text-scroll">{item.text}</div>
                                <p className='small-text-drop'>על מנת לקרוא את כל המלל יש לגלול למטה *</p>
                            </div>
                        )}
                    </div>
                ))}

                <div className='navigation-btn'>
                    <div onClick={() => navigate("/emergency")} className='prev'>
                        <p className='text-lable'>הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="Previous" />
                    </div>
                    <div onClick={() => navigate("/rounds")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="Next" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mamal;
