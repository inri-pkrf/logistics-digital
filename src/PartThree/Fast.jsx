import React, { useState } from 'react';
import './Styles/Fast.css';
import { useNavigate } from 'react-router-dom';

function Fast() {
    const navigate = useNavigate();


      const [expanded, setExpanded] = useState(null); 
        const [selectedCards, setSelectedCards] = useState([]);
    
        const points = [
    { 
        title: "ייעול זמן", 
        text: `זמן ההעמסה והפריקה ע"ג דולבים מתקצר לאור שימוש באמצעים תומכים כגון מלגזות ועגלות משטחים וצמצום ידיים עובדות – מאפשר הוצאת סבבים מהירים לשטח הכינוס.` 
    },
    { 
        title: "איכות השינוע", 
        text: `האמצעים נשמרים בצורה טובה יותר ע"ג דולבים סגורים מאשר אריזה ע"ג משטח בידיים.` 
    },
    { 
        title: "שטח אחסנה", 
        text: `האחסנה במרוכז בדולבים מקטינה את נפח הציוד ומסייעת להגברת הסדר והשליטה בציוד בשטח הכינוס ובניהול המלאי.` 
    },
    { 
        title: "שיטת הגיוס", 
        text: `בשל הנפח הנמוך שתופס הציוד, ניתן לנייד יותר אמצעים בפחות סבבים אל שטח הכינוס – מאפשר גיוס מהיר יותר של כמות חיילים גדולה יותר.` 
    },
    { 
        title: "נוחות החייל", 
        text: `לא נדרש להיסחב עם שק חפצים ואין חתימה על ציוד שהחייל לא מתכוון להשתמש בו. בנוסף, בחירת מדים לפי מידה עדיפה על פני קבלת מערום שקי חפצים לפי התפלגות מוגדרת.` 
    }
];

    
        const handleToggle = (index) => {
            setExpanded(index);
            // אם הכרטיס עוד לא נבחר, מוסיפים אותו למערך selectedCards
            if (!selectedCards.includes(index)) {
                setSelectedCards([...selectedCards, index]);
            }
        };    const handleClose = () => setExpanded(null);

    return (
        <div className="Fast">
            <div className='white-circle-Fast'>
                <h1 className="titleFast">עקרונות הגיוס המהיר</h1>  
                       <button 
                        className="fllow-button" 
                        onClick={() =>
                            navigate("/MagnifyPic", {
                            state: {
                                imagePath: `${process.env.PUBLIC_URL}/assets/imgs/fllow.png`,
                                situation: "fast" 
                            }
                            })
                        }
                        >
                    תרשים זרימה עקרונות הגיוס     
                        </button>

                        <p className='txt-fast'>כחלק מתובנות מלחמת 'חרבות ברזל' ולאחר ביצוע תחקיר מקיף בפקע"ר הוחלט על מעבר לשיטת אחסנה לחלק ניכר מהציוד בימ"חים ע"ג דולבים. זאת כדי לייעל את שיטת ההצטיידות ולאפשר מוכנות מהירה לכל תרחיש.
                        </p>

                        <p className='txt-fast'>הציוד שעבר לשיטת האחסנה החדשה ע"ג דולבים:<br/>
                        <b>ציוד אישי</b><br/>
                        <b>מיגון אישי</b><br/>
                        <b> ציוד חילוץ קל</b><br/>
                        <b> ציוד חילוץ ייעודי</b><br/>
                        <b>פק"ל נתק</b>
                        </p>
                        <p className='txt-fast'>יתרונות השיטה ותמיכתה בקיצור זמן הגיוס – TOP5:</p>
                           <div className="cards-container">
                    {points.map((item, index) => (
                        <div
                            key={index}
                            className={`card ${index < 3 ? "first-row" : "second-row"} ${selectedCards.includes(index) ? 'active' : ''}`}
                            onClick={() => handleToggle(index)}
                        >
                            <div className="card-title">{item.title}</div>
                        </div>
                    ))}

                    {expanded !== null && (
                        <div className="overlay">
                            <div className="overlay-content">
                                <img onClick={handleClose} src={process.env.PUBLIC_URL + '/assets/imgs/XBtn.png'} alt="Close" className="XBtn" />
                                <h2>{points[expanded].title}</h2>
                                <p>{points[expanded].text}</p>
                            </div>
                        </div>
                    )}
                </div>


            



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

export default Fast;
