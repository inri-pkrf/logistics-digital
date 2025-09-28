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
      
        <div className="speech-container">
       
            <p className="speech">
           ברוכים הבאים ללומדה הלוגיסטית במפקדות.
            בעזר זה תוכלו להעמיק וללמוד על מבנה, ייעוד ותפקידי הלוגיסטיקה במפקדות השונות ובעלי התפקידים השונים.
            בנוסף, תלמדו על תהליך הגיוס והוצאת הסבבים השונים, ועל ניהול הלחימה, חצר אחורית, עזר המנהלה והערכות המצב
</p>
{/* <p className='speech-credits'>אל"ם אלעד בננו
קל"פ      העורף</p> */}
<div className='greeting-div'>
<img
            src={`${process.env.PUBLIC_URL}/assets/imgs/logoMalca.png`}
            className="logo2"
           />
<img
            src={`${process.env.PUBLIC_URL}/assets/imgs/logoCollage.png`}
            className="logo1"
           />
<p className="credits">עזר זה נבנה בשיתוף פעולה בין מחלקת הלוגיסטיקה והמכללה הלאומית לאיתנות ישראלית
    </p>
</div>
<div className="footer"></div>
    </div>
    <button onClick={()=>goToMenu()} className='start-button'>התחלה</button>
        </div>
  
 



  );
};

export default Info;