import React from 'react';
import './Styles/Yamach.css';
import { useNavigate } from 'react-router-dom';
// import StepsBtnDiagram from "./StepsBtnDiagram";

function Yamach() {
    const navigate = useNavigate();

    return (
        <div className="Yamach" >
            <div className='white-circle-Yamach'>
                <button className='back-btn-yam' onClick={()=>navigate("/Refua")}>חזרה לאמצעים</button>
              
                <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/container.png`}
            className="container-blu"
          />
                <h1 className="titleYam"> ציוד בימ"ח  </h1>
                <p className='textYam'>
                לאור המעבר לתצורת ימ"ח מבצעי מהיר במהלך שנה"ע 2024-2025 בכלל מסגרות הפיקוד, האמצעים בימ"ח מאורגנים בדולבים וברמה פלוגתית.
                בימ"ח ימצאו אמל"ח, אמסל"ח, מיגון אישי, ציוד חילוץ קל וכובד, צר"פ, ציוד אישי, ציוד שהייה, פק"לי רס"פ וכו'.
                כלל הציוד מועמס ע"ג סבבים מוגדרים המחולקים לסבבים מבצעיים ומנהלתיים.
                </p>
                    <img className='YamImg'
            src={`${process.env.PUBLIC_URL}/assets/imgs/things.jpg`}
        
          />
            <p className='textYam'>
             כדי לסייע למפקד המסגרת הלוגיסטית לשלוט באמצעים בימ"ח, נגד הימ"ח מחזיק תיק נתונים עם דו"חות, פערים קריטיים וטבלאות רענון וטיפול. בשגרה, המפקד נדרש להכיר את האמצעים ולשלוט בהם דרך ביקורים, ימים אופרטיביים, אימונים ושיח שוטף עם הנגד האחראי.
             </p>

          
                


                <div className='navigation-btn'>
                    <div onClick={() => navigate("/Refua")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                    <div onClick={() => navigate("/maintenance")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                </div>

            </div>

      

        </div>
    );
}

export default Yamach;