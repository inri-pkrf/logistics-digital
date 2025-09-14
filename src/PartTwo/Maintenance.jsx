import React from 'react';
import './Styles/Maintenance.css';
import { useNavigate } from 'react-router-dom';
// import StepsBtnDiagram from "./StepsBtnDiagram";

function Maintenance() {
    const navigate = useNavigate();

    return (
        <div className="Maintenance" >
            <div className='white-circle-Maintenance'>
                <button className='back-btn-Ma' onClick={()=>navigate("/Refua")}>חזרה לאמצעים</button>
               <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/optimizing.png`}
            className="Routine-btn-M"
          />
                <h1 className="titleMa"> שגרת אחזקה </h1>
                <p className='textMa'>
                    האמצעים המאוחסנים בימ"ח עוברים שגרות אחזקה ע"פ התו"ל וההנחיות המקצועיות ע"מ לוודא כשירות מירבית של האמצעים לחירום. באחריות מ.הימ"ח לבנות תכנית עבודה מוסדרת<br/><br/>
                   בכדי לוודא הגעה לכל מסגרת על פי הזמנים המתבקשים: <br/>

                * כלל המסגרת בימ"ח -  2.9 שנים <br/>
                *הח"י – 2.9 שנים<br/>
                *מנות קרב – 24 חודשים<br/>
                *פרטי טקסטיל (מדים, שק"שים וכדומה)- 24 חודשים<br/>
               * שמנים ותזקיקים – 24 חודשים<br/>
               * צר"פ – 18 חודשים<br/>

                </p>
                    <img className='MaImg'
            src={`${process.env.PUBLIC_URL}/assets/imgs/things2.jpg`}
        
          />
            <p className='textMa'>
             כדי לסייע למפקד המסגרת הלוגיסטית לשלוט באמצעים בימ"ח, נגד הימ"ח מחזיק תיק נתונים עם דו"חות, פערים קריטיים וטבלאות רענון וטיפול. בשגרה, המפקד נדרש להכיר את האמצעים ולשלוט בהם דרך ביקורים, ימים אופרטיביים, אימונים ושיח שוטף עם הנגד האחראי.
             </p>

          
                


                <div className='navigation-btn'>
                    <div onClick={() => navigate("/Yamach")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                    <div onClick={() => navigate("/training")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                </div>

            </div>

      

        </div>
    );
}

export default Maintenance;