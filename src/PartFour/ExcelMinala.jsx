import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/ExcelMinala.css';

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
                <button className='back-btn-ex' onClick={()=>navigate("/hapakMichlala")}>חזרה לחפ"ק</button>

                <h1 className="titleExcelMinala">עזר מנהלה</h1>
                <h1 className="excel-Titles">מטרת העזר:</h1>
                <p className="excel-explanations">
                    יצירת תמונת מצב לוגיסטית על היחידות הכפופות כמסייע לקבלת החלטות למפקד
                </p>
                <h1 className="excel-Titles">תוצרים:</h1>
                <p className="excel-explanations">
                    עזר כשירות אינטגרטיבי ואחיד בין כלל יחידות הפיקוד, המוצג בעת הערכת המצב
                </p>
                <h1 className="excel-Titles">עקרונות עבודה:</h1>
                <p className="excel-explanations">
                א. עדכון המערכות יבוצע בשגרה אחת לשבוע, עד ליום ג' לאותו השבוע.
                ב. אחריות ע' לארגון במחוזות על הזנת הנתונים בשוע"ל, אמינות הנתונים וכשירות האמצעים.
                ג. שימוש במערכת באופן שוטף בשגרה, בחירום ובאימונים הן בסדיר והן במסגרות מילואים.
                ד. הצגת הנתונים בהערכות מצב ומופעים שוטפים.
                </p>
                {/* <img
                    src={imgSrc}
                    className="excel2Img"
                    alt="excel Diagram"
                    onClick={handleImageClick}
                />
                <div className='Wartext-img'>אפשר להגדיל את התמונה בלחיצה</div> */}

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
                
                    <div className='navigation-btn'>
                        <div onClick={() => navigate("/hapakMichlala")} className='prev'>
                            <p className='text-lable'> הקודם</p>
                            <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="הקודם" />
                        </div>
                        <div onClick={() => navigate("/validation")} className='next'>
                            <p className='text-lable'>הבא</p>
                            <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="הבא" />
                        </div>
                    </div>

                
            </div>
        </div>
    );
}

export default ExcelMinala;
