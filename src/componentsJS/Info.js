import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import '../componentsCSS/Info.css';

const Info = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/menu'); 
  };
//   const goToCredits = () => {
//     console.log("Navigating to Credits");
//     navigate('/Credits'); 
//   };
  return (
    <div className="homepage-container">
      <h1 className='home-title'>  עזר דיגיטלי בתחום <br></br>
        הלוגיסטיקה במפקדות</h1>
        <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/quote.png`}
            className="quote"
           />
        <div class="speech-container">
            <p class="speech">
        מפקדים יקרים,
מאז ה-7 באוקטובר, מצויה ישראל תחת מתקפה משמעותית על העורף האזרחי. <br></br>
 איום זה דורש מאיתנו להיערך לאתרי הרס רבים ופגיעה בתשתיות, כתוצאה מנפילת רקטות וטילים. כחלק מלקחי מלחמת "חרבות ברזל", היערכות פיקוד העורף לתרחיש צפוני או לתרחיש רב-זירתי מחייבת אותנו להגביר את המוכנות וההבנה בכל הקשור לסיוע לוגיסטי הנדרש בתמיכה למאמצי החילוץ. 
 ארגוני החירום והסיוע נדרשים לבצע בפרק זמן קצר מעבר מיידי ממצב שגרה למצב חירום, ולתת מענה לאזרחים שנפגעו, תוך ביצוע משימתנו העליונה – הצלת חיים.<br></br><br></br>
בלומדה זו תתמקדו בשלבים השונים של הנג"ח, המעמ"ל, ריכוז הסד"כ, הצטיידות וההיסעים.
לומדה זו תרכז את המענה השלם באירוע הרס, מרמת מאמצי החילוץ והצלת החיים בשטח, ועד לרמת הפיקוד והשליטה בדרגים השונים, תוך התמקדות במרכיבי הסיוע המנהלתי.
</p>
        </div>
 
<div className='greeting-div'>
    <p className="credits">עזר זה נבנה בשיתוף פעולה בין המלכ"א והמכללה הלאומית לאיתנות ישראלית
    </p>
    
</div>
  {/* <a className="linkCredits" onClick={goToCredits}>
  @קרדיטים
</a> */}
<div className="footer"></div>
    </div>
  );
};

export default Info;