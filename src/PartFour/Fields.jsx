import React, { useState, useEffect } from 'react';
import './Styles/Fields.css';
import { useNavigate } from 'react-router-dom';

function Fields() {
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
        <div className="Fields">
            <div className='white-circle-Fields'>
                <h1 className="titleHapak">שטחי שהיה</h1>
                <div>
                <p className='txt-fields'>
                בגמר הגיוס, הגדוד יעבור משטח הכינוס אל שטח השהייה המתואם לו לחירום.<br /><br />

                התאום לשטח השהייה מתבצע ע"י המחוז, כולל ניתוח מאפייני השטח – תאי שירותים, מקלחות, נקודות מים, חשמל ועוד.<br /><br />
                לכל שטח שהייה יש להכין בשגרה תיק שטח הפורט הכולל פיקוט אמצעי שהייה (שירותים, מקלחות, נק חשמל וכו'), תצ"א ופרצלציה, אנשי קשר מטעם בעל הנכס. <br/><br/>
                <img className='FieldsImg' src={`${process.env.PUBLIC_URL}/assets/imgs/Fields.jpg`} alt="אימונים" />

                מפקד המסגרת הלוגיסטית (מפ"מ / קל"ן / קל"ח) נדרש להכיר את מקום השהייה ואת הצורך בהשלמה בחירום.<br /><br />

                בעת ההגעה יש לבצע ארגון וסידור השטח לפי סד"כ – מתחמי לינה, מזון, חמ"ל ומיקום אמצעים.<br /><br />

                לכוחות הוגדרו קיטים לוגיסטיים (פק"ל שהייה, פק"לי רס"פ) לצורך עצמאות המסגרת, וכן יגיעו אמצעי שהייה נוספים כגון גנרטורים, מקלחות ושירותים לפי תיאום מוקדם.
                </p>



                    {/* ניווט קדימה ואחורה */}
                    <div className='navigation-btn'>
                        <div onClick={() => navigate("/war")} className='prev'>
                            <p className='text-lable'> הקודם</p>
                            <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="הקודם" />
                        </div>
                        <div onClick={() => navigate("/Fields")} className='next'>
                            <p className='text-lable'>הבא</p>
                            <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="הבא" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fields;
