import React from 'react';
import './Styles/Validiation.css';
import { useNavigate } from 'react-router-dom';
import validations from '../Data/Validation';
import SlideCards from "../componentsJS/SlideCards";

function Validiation() {
    const navigate = useNavigate();

    return (
        <div className="Validiation" >
            <div className='white-circle-Validiation'>
                <button className='back-btn-ex' onClick={()=>navigate("/hapakMichlala")}>חזרה לחפ"ק</button>

                <h1 className="titleVal">הערכת מצב</h1>
                <video className="video-val" controls  playsInline>
                <source src={`${process.env.PUBLIC_URL}/assets/media/Validiation.mp4`} type="video/mp4" />
                <track 
                default 
                kind="captions" 
                src={`${process.env.PUBLIC_URL}/assets/media/Validiation_subtitles_en.vtt`} 
                srclang="en" 
                label="English" 
                />
                Your browser does not support the video tag.
            </video>

            <div className="orders-val">
            הערכת המצב הלוגיסטית, מטרתה לנתח את תמונת המצב של הסיוע המנהלתי ביחידה, ויכולותיו להבטיח את רציפות הפעולה והכשירות של הכוחות להשלמת משימות היחידה.

            <br/><br/>

            <b>קיימים שני סוגי הערכת מצב:</b>

            <br/>
            <b>1. הערכת מצב עיתית</b> - הערכת מצב אשר קבועה בשעל"ח ומטרתה לנתח בשגרת הלחימה את הגורמים המשפיעים על משימות הנפה, ניתוח פערים, משמעויות והמלצות לרמה ממונה, ותכנון ל-24 השעות הקרובות עד הערכת המצב הבאה.

            <br/>
            <b>2. הערכת מצב נושאית</b> - זוהי הערכת מצב אשר ממוקדת בנושא מסוים לפי ניהול קרב. הערכת מצב זו מטרתה לנתח את הנושא והמשמעויות הלוגיסטיות הנגזרות ממנו בעקבות אירוע ספציפי (שינוי משימה, הרחבת ג"ג, קבלת כוחות וכדומה).

            </div>
            <div className="Val-first">
            <h1 className="sub-titleVal">{validations?.[0]?.name}</h1>
            <p className='explanationVal'>יש להחליק שמאלה על גבי הכרטיסיה על מנת לעבור למשתתף הבא בהערכת מצב ולהחליק ימינה על מנת לחזור</p>
            <SlideCards people={validations?.[0]?.people} />

            </div>
            <div className="Val-seconed">
            <h1 className="sub-titleVal">{validations?.[1]?.name}</h1>
            <p className='explanationVal'>יש להחליק שמאלה על גבי הכרטיסיה על מנת לעבור למשתתף הבא בהערכת מצב ולהחליק ימינה על מנת לחזור</p>
          
            <SlideCards people={validations?.[1]?.people} />

            </div>
              <div className='navigation-btn'>
                        <div onClick={() => navigate("/hapakMichlala")} className='prev'>
                            <p className='text-lable'> הקודם</p>
                            <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="הקודם" />
                        </div>
                        <div onClick={() => navigate("/fields")} className='next'>
                            <p className='text-lable'>הבא</p>
                            <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="הבא" />
                        </div>
                    </div>
           


                

            </div>

      

        </div>
    );
}

export default Validiation;