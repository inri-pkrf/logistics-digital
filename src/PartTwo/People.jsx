import React, { useState } from 'react';
import './Styles/People.css';
import { useNavigate } from 'react-router-dom';

function People() {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(null); // overlay פתוח
    const [selectedCards, setSelectedCards] = useState([]); // כרטיסים שנבחרו ושצריכים צבע שונה

    const points = [
        { title: "תיק הנתונים", text: `החזקה בתיק נתונים המכיל – שבצ"ק – תקן מצבה, הכשרות והיתרים נדרשים עבור החיילים, חוגרים בתפקיד מפקדים, נתוני החיילים ועוד.`},
        { title: "אבחון יחידה", text: `כחלק מתיק הנתונים יש להחזיק באבחון יחידה בהיבט כ"א – הכשרות, הסמכות והיתרים קיימים של החיילים והמפקדים בפלוגת המפקדה, השתתפות באימונים ותרגילים קודמים, וכל מידע המשפיע על כשירות כ"א בפלוגה.`},
        { title: "ניתוח מקצועות קריטיים", text: `ניתוח המקצועות הקריטיים בפלוגה והגדרת קוים אדומים לרציפות תפקודית המשפיעים על כשירות הפלוגה – נהגים, טנ"א, צמ"ה, שדרה פיקודית ועוד.` },
        { title: "איוש כוח אדם", text:`עיסוק באיוש כח אדם, מילוי וטיוב השורות – איתור ואיוש חיילים בעבודה מול קל"ן/קל"ח, קל"מ וקישור, מיצוי כ"א הקיים בגדוד – איתור חוגרים איכותיים לשיבוץ כמפקדים ודאגה להכשרות.` },
        { title: `דגשים לאיוש וגריעת כ"א`, text: <>
        מינוי בע"ת לוגיסטיים או גריעה והורדה מהשורה ייעשו בתיאום אל מול מפקד המסגרת הלוגיסטית ברמה הממונה 
       <u> ובאישור רע"ן לוגיסטיקה פיקוד בלבד!</u>
         אין אפשרות לבצע שינוי בשורות כ"א ללא ביצוע תאום, זאת כדי לוודא מינוי אנשים מתאימים וכדי למנוע "בריחת" בע"ת מחוץ ליחידה.   </>}
    ];

    const handleToggle = (index) => {
        setExpanded(index);
        // אם הכרטיס עוד לא נבחר, מוסיפים אותו למערך selectedCards
        if (!selectedCards.includes(index)) {
            setSelectedCards([...selectedCards, index]);
        }
    };    const handleClose = () => setExpanded(null);

    return (
        <div className="People">
            <div className='white-circle-People'>
                <h1 className="titleTra">ניהול כוח אדם</h1>
                <p className='txt-People'>   
                    המרכיב האנושי הנו אחד משלושת אבני הבניין המרכזיות לעמידת הגדוד במשימתו בחירום.
                    לאור כך, על מפקד המסגרת הלוגיסטית בנפה/חטיבת מילואים/בגדוד לעסוק במהלך  <b>השגרה</b> באופן שוטף <b>בבניין הכוח</b>, <b>להפעלת הכח בחירום</b>  
                     בכדי לבנות יכולת מקסימלית.<br/>
                    כדי לנהל ולשלוט בעולם כ"א על מ"פ המפקדה לנהל בשגרה מספר תחומים:

                </p>

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
                    <div onClick={() => navigate("/ready")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                    <div onClick={() => navigate("/Refua")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default People;

