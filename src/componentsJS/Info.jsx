import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../componentsCSS/Info.css';

const Info = () => {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate('/menu'); 
  };

  return (
    <div className="homepage-container">

      <h1 className='home-title'>
        עזר דיגיטלי בתחום <br />
        הלוגיסטיקה במפקדות
      </h1>

      {/* קופסה שחורה עם טקסט */}
      <div className="speech-container">
        <p className="speech">
          ברוכים הבאים ללומדה הלוגיסטית במפקדות.
          בעזר זה תוכלו להעמיק וללמוד על מבנה, ייעוד ותפקידי הלוגיסטיקה במפקדות השונות ובעלי התפקידים השונים.
          בנוסף, תלמדו על תהליך הגיוס והוצאת הסבבים השונים, ועל ניהול הלחימה, חצר אחורית, עזר המנהלה והערכות המצב
        </p>
      </div>

      {/* דיב לבן עם לוגואים */}
  <div className='greeting-div'>
    <div className="greeting-logos">
      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/logoMalca.png`}
        className="logo2"
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/logoCollage.png`}
        className="logo1"
      />
    </div>
    <p className="credits">
      עזר זה נבנה בשיתוף פעולה בין מחלקת הלוגיסטיקה והמכללה הלאומית לאיתנות ישראלית
    </p>
  </div>


      {/* כפתור התחלה */}
      <button onClick={goToMenu} className='start-button'>
        התחלה
      </button>

    </div>
  );
};

export default Info;
