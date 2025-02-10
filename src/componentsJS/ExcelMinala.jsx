import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/ExcelMinala.css';

function ExcelMinala() {
    const navigate = useNavigate();
    const imgSrc = `${process.env.PUBLIC_URL}/assets/imgs/excel.png`;

    const handleImageClick = () => {
        navigate('/MagnifyPic', { state: { imagePath: imgSrc, situation: "הערכת-מצב" } });
    };

    // מערך כפתורים עם טקסט וקישורים לפתיחה בחלון חדש
    const buttons = [
        { text: 'ציוד ייעודי', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=2028248870#gid=2028248870' },
        { text: 'תחמושת', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=523534797#gid=523534797' },
        { text: 'מזון', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=433640630#gid=433640630' },
        { text: 'דלק', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=538348602#gid=538348602' },
        { text: 'ניוד', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=2139529790#gid=2139529790' },
        { text: 'טנ"א', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=1906463900#gid=1906463900' },
        { text: 'ציוד שהיה', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=1061139287#gid=1061139287' },
        { text: 'פקל נתק', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=19746556#gid=19746556' },
        { text: 'כוח אדם קריטי', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=2062063032#gid=2062063032' },
        { text: 'אנו"ח', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=222264061#gid=222264061' },
        { text: 'פער', link: 'https://docs.google.com/spreadsheets/d/1nP8Ob4OTI9ydzYqWIP-NKE3FpY6wrPkv/edit?gid=1077980303#gid=1077980303' }
    ];

    return (
        <div className="ExcelMinala">
            <div className='white-circle-ExcelMinala'>
                <h1 className="titleExcelMinala">עזר מנהלה</h1>
                <h1 className="excel-Titles">מטרת העזר:</h1>
                <p className="excel-explanations">
                    יצירת תמונת מצב לוגיסטית על היחידות הכפופות כמסייע לקבלת החלטות למפקד
                </p>
                <h1 className="excel-Titles">תוצרים:</h1>
                <p className="excel-explanations">
                    עזר כשירות אינטגרטיבי ואחיד בין כלל יחידות הפיקוד, המוצג בעת הערכת המצב
                </p>
                <img
                    src={imgSrc}
                    className="excel2Img"
                    alt="excel Diagram"
                    onClick={handleImageClick}
                />
                <div className='Wartext-img'>אפשר להגדיל את התמונה בלחיצה</div>

                <h1 className="excel-Titles">עזר המנהלה טבלת האקסל:</h1>
                <p className="excel-explanations">
                לפניכם/ן רכיבי הטבלה בלחיצה על הרכיבים תעברו לדף אקסל בו תוכלו ללמוד על כל אחד מהם
                </p>

                <div className="buttons-containerExcel">
                    {buttons.map((button, index) => (
                        <button 
                            key={index} 
                            className="excel-btn" 
                            onClick={() => window.open(button.link, '_blank', 'noopener,noreferrer')}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>

                <div className='navigation-btn-Excel'>
                    <div onClick={() => navigate("/war")} className='prevExcel'>
                        <p>לבחירת נושא</p>
                        <img className="arrow leftExcel" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`} />
                    </div>
                    <div onClick={() => navigate("/validation")} className='nextExcel'>
                        <p>לנושא הבא</p>
                        <img className="arrow rightExcel" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExcelMinala;
