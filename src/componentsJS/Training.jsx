import React from 'react';
import '../componentsCSS/Training.css';
import { useNavigate } from 'react-router-dom';
// import StepsBtnDiagram from "./StepsBtnDiagram";

function Training() {
    const navigate = useNavigate();

    return (
        <div className="Training" >
            {/* <StepsBtnDiagram /> */}
            <div className='white-circle-Training'>
                <h1 className="titleTra"> אימונים  </h1>
                {/* לעצב את הטקסט */}
                <p>   
                    יחד עם העיסוק בעולם כ"א והשליטה באמצעים שבימ"ח, אימוני פלוגת המפקדה למעשה משלימים את תמונת מצב לכשירות היחידה וליכולתה לספק מענה לכוחות הגדוד בחירום.

בשגרה הגדוד מבצע אימונים לוגיסטיים ע"פ מחזוריות תלת שנתית:
אימון מלא - אימון מפקדים - שמיטה

מטרת האימונים הינה לאמוד את כשירות המסגרת לחירום, להעלות ולשמר את כשירות המסגרת לאורך זמן, ולמקד את הצורך בעיסוק במסגרת לאור החוזקות וחולשות העולים מהאימון.

לאור המלחמה ושנות התע"מ 2024-2025, מבצעים הגדודים גם אימונים תו"כ התע"מ – אימון חפ"ק מנהלה ואימון מפקדה חד חילי:
                    
                     </p>

                     {/* פה יש תמונה  */}
כלל האימונים הלוגיסטיים, בשגרה ובתע"מ, מבוצעים לאחר אבחון היחידה בכלל אבני הבניין (אימונים קודמים, כ"א ואמצעים), ולאור האבחון נבנית תכנית אימון מותאמת לקידום היחידה למוכנותה לחירום.

{/* לעשות שזה יפתח עם חץ */}

דגשים למפקד המסגרת הלוגיסטית לבניית תכנית אימון המותאמת לאבחון היחידה:
ביצוע אבחון מוקדם לבע"ת במסגרת הלוגיסטית – ותק בע"ת בתפקיד, נוכחות באימונים ומופעים קודמים, הכשרות, רמת השליטה בתפקיד.
ניתוח יחסי הגומלין של המסגרת הלוגיסטית אל מול גורמים בתוך ומחוץ ליחידה – רמה ממונה, פלוגות מבצעיות, אג"מ, גלמ"ר/אלו"ג.
ניתוח תובנות ולקחים מאימונים קודמים להבנת החוזקות והחולשות של המסגרת. מתוך התובנות יש למקד את העיסוק בתחומים הדורשים חיזוק.
הגדרת הישגים נדרשים למסגרת בנושאי האימון – ביצוע הערכות מצב אפקטיביות, ניתוח והפקת משמעויות מתמונת המצב, תרגולי סד"פ בתרחישים שונים (אתרי הרס, אירועים מבצעיים, צריכה, ניהול כוחות קטנים, משימות לוגיסטיות), ביצוע מש"מ, תרגולים פיזיים במידה וקיימים וכו'.
נילחם כפי שנתאמן - עבודה על השוע"ל כפלטפורמה לשילוח משימות ועל עזר המנהלה כפלטפורמת השו"ב הלוגיסטית.
המפקד הוא המאמן – מעורבות רמה ממונה כגורם המאמן מאפשרת הגברת חניכה וביצוע אימון אפקטיבי.




                {/* <div className='navigation-btn-Tra'>
                    <div onClick={() => navigate("/Ready")} className='prevTra'>
                        <p>לבחירת נושא</p>
                        <img className="arrow leftTra" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`} />
                    </div>
                    <div onClick={() => navigate("/training")} className='nextTra'>
                        <p>לנושא הבא</p>
                        <img className="arrow rightTra" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`} />
                    </div>
                </div> */}

            </div>
        </div>
    );
}

export default Training;