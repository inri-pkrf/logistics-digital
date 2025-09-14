import React, { useState } from 'react';
import './Styles/BackDoor.css';
import { useNavigate } from 'react-router-dom';

function BackDoor() {
    const navigate = useNavigate();
    const [expandedExplanation, setExpandedExplanation] = useState(null);

    const explanations = [
        {
            titleExplanation: "החצר האחורית",
            textExplanation: (
                <>
                    אירועי ההרס במרחב העורף יכולים להיווצר ממחוללים שונים: נשק תלול-מסלול, אסונות טבע, תקלות, כשלים ותאונות, ופעולות טרור. <br />
                    למרות השונות במחולל שגרם להרס המבנה, המענה הלוגיסטי באירוע ההרס הוא דומה במהותו. <br />
                    <br />
                    גודל הסד"כ המטפל באירוע ההרס וכן משך הטיפול באירוע, נקבע במקום ע"י מפקד הכח שהוקפץ לאירוע ובהתאם לגודל ההרס ומורכבותו. <br />
                    המענה הלוגיסטי יושפע אף הוא מגודל הסד"כ המטפל וממשך זמן הטיפול באירוע. <br />
                    <br />
                    התמיכה הלוגיסטית באתר ההרס הינה באמצעות החצר האחורית, אשר בה יימצאו כלל האמצעים לשמירת רציפות בכלל החתכים. <br />
                    החצר האחורית תוקם במעגל החיצוני של אתר ההרס. <br />
                </>
            ),
        },
        {
            titleExplanation: "הקמת החצר האחורית",
            textExplanation: (
                <>
                    מיקום המתחם ייקבע ע"י צוות החלוץ בראשות סמג"ד/מפקד פלס"ם שיגיע בשלבים הראשונים לאתר, <br />
                    יתרשם מנתוני השטח, הסד"כ שיופעל עבור האירוע וכנגזרת, הסד"כ הלוגיסטי שיופעל. <br />
                    המתחם יהיה קרוב מספיק לאתר אך מחוץ לאתר ההרס. <br />
                    <br />
                    <b>מיקום המתחם ייקבע בהתאם לדגשים הבאים:</b> <br />
                    • המצאות צירי הגעה מן החצר האחורית לאזור האירוע. <br />
                    • מתחם הגדול מספיק לטובת פריסת החצר האחורית. <br />
                    <br />
                    <b>בחצר האחורית יימצאו המרכיבים הבאים:</b> <br />
                    • מתחם הספקה הכולל רמות מלאי ציוד, מים, דלק, שמנים וציוד ייעודי. <br />
                    • מתחם אחזקה לטיפול באמצעים לרבות חלקי חילוף. <br />
                    • סניטציה: שירותים ומקלחות (עבור אתר כבד). <br />
                    • מקום לרענון ומנוחת הסד"כ היוצא מן האירוע. <br />
                    • שירותי משא"ן ותספקי פרט. <br />
                </>
            ),
        },
    ];

    const handleToggleExplanation = (index) => {
        setExpandedExplanation(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="BackDoor">
            <div className='white-circle-BackDoor'>
                <h1 className="titleBackD">המענה באתר ההרס</h1>
                <div>
                    {explanations.map((explanation, index) => (
                        <div key={index} className="explanation-div-Back">
                            <div
                                className="explanation-title-wrapper-Back"
                                onClick={() => handleToggleExplanation(index)}
                            >
                                <div className="explanation-title-Back">
                                    {explanation.titleExplanation}
                                </div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/imgs/nextBlack.png`}
                                    className={`arrow-icon-diagram3 ${expandedExplanation === index ? 'rotated' : ''}`}
                                    alt="Arrow"
                                />
                            </div>

                            {expandedExplanation === index && (
                                <div className="explanation-text-container">
                                    <div className="explanation-text-scroll">
                                        {explanation.textExplanation}
                                    </div>
                                    <p className='small-text-drop'>על מנת לקרוא את כל המלל יש לגלול למטה *</p>
                                </div>
                            )}
                        </div>
                    ))}

                    <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/BackYard.jpg`}
                        className="Yard-btn"
                        onClick={() => navigate("/BackYard")}
                        alt="Back Yard"
                    />
                    <p> יש ללחוץ על התמונה על מנת ללמוד עוד</p>
                    <div className='navigation-btn'>
                    <div onClick={() => navigate("/war")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                    <div onClick={() => navigate("/hapakMichlala")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default BackDoor;
