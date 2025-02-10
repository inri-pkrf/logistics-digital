import React from 'react';
import '../componentsCSS/ExcelMinala.css';
import { useNavigate } from 'react-router-dom';

function ExcelMinala() {
    const navigate = useNavigate();
    const imgSrc=`${process.env.PUBLIC_URL}/assets/imgs/excel.png`;
    const handleImageClick = () => {
        navigate('/MagnifyPic', { state: { imagePath: imgSrc, situation: "הערכת-מצב" } });
    };

    return (
        <div className="ExcelMinala" >
            <div className='white-circle-ExcelMinala'>
            <h1 class="titleExcelMinala">עזר מנהלה</h1>  
            <h1 className="excel-Titles">מטרת העזר:</h1>
            <p className="excel-explanations">יצירת תמונת מצב לוגיסטית על היחידות הכפופות כמסייע לקבלת החלטות למפקד
            </p>
            <h1 className="excel-Titles">תוצרים:</h1>
            <p className="excel-explanations"> עזר כשירות אינטגרטיבי ואחיד בין כלל יחידות הפיקוד, המוצג בעת הערכת המצב         
            </p>
            <img
                 src={`${process.env.PUBLIC_URL}/assets/imgs/excel.png`}
                className="excel2Img"
                alt="excel Diagram"
                onClick={handleImageClick}
            />
                        <div className='Wartext-img'>אפשר להגדיל את התמונה בלחיצה</div>



                <div className='navigation-btn-Excel'>
                    <div onClick={()=>navigate("/war")} className='prevExcel'>
                        <p> לבחירת נושא</p>
                    <img className="arrow leftExcel" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`}/>    
                          </div>
                    <div onClick={()=>navigate("/valiadation")} className='nextExcel'>
                    <p>לנושא הבא</p>

                    <img className="arrow rightExcel" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`}/>    

                    </div>

                </div>

            </div>

      

        </div>
    );
}

export default ExcelMinala;