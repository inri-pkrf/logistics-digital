const mahoz = {
    title:"מחוז",
    pageTitle:`תפקידי בלה בלה`,
    color:'#ff7e00',
    desteny:{
        title:`ייעוד ה במחוז`,
        text:[
            <>
            חסר מידע
            </>
        ]
    },
    tasks:{
        title:`תפקידי ה במחוז`,
        text:[
            <>
            חסר מידע
            </>
        ]
        
       ,
    },
    imgSrc: `${process.env.PUBLIC_URL}/assets/mahoz/mahozFirst.jpg`,
    imgDescription:`לפניכם עץ מבנה למפקדה בנפה.
בהמשך הדף יש לבחור את המכלולים לקבלת פירוט הגדרות ומשימות התפקיד -
`,
    comandor:{
        name:`מפקד מלכ"א`,
        src:`${process.env.PUBLIC_URL}/assets/imgs/mahozComandor.svg`,
        popupTitle:`מפקד מלכ"א`,
        popupText:[
           
              <>
              <b>תפקידי  מפקד מלכ"א  :</b><br /><br />
              1. מייצג את תא המשא"ן ותא הלוגיסטיקה אל מול השולחן המרכזי. <br/><br/>
            2. ייעוץ למפקד הנפה והמטה בתחום הלוגיסטיקה. <br/><br/>
            3. מרכז את עבודת המטה הלוגיסטי בתכנון הסיוע הלוגיסטי והוצאתו לפועל על פי דרישת הגדודים ובתיאום המחוז. <br/><br/>
            4. וידוא כשירות מחסני החירום הנפתיים. <br/><br/>
            5. הנחייה מקצועית של פלוגות המפקדה וגורמי הלוגיסטיקה האחרים ביחידות הנפה, ומתואם מקצועית על ידי קצין הלוגיסטיקה המחוזי. <br/><br/>
          </>
        
        ]

    },
    subComandor:{
        name:`סגן מפקד מלכ"א`,
        src:`${process.env.PUBLIC_URL}/assets/mahoz/subComandor.svg`,
        taskNote: [
            <>
                <b>תפקידי סגן מפקד מלכ"א  :</b><br /><br />
                1. ייעוץ למפקד מכלול האוכלוסייה בתחום ההסברה והדרכת האוכלוסייה.<br /><br />
                2. בקיאות במאפייני האוכלוסייה במרחב הנפה והכרת הקהילות הייחודיות, השפות והאתגרים בתחום ההסברה כפי שאותרו בשגרה.<br /><br />
                3. ניתוח דו"חות מש"קי מידע לציבור ביקל"ר.<br /><br />
                4. קיום שיח שוטף והנחייה מקצועית של מש"קי המידע לציבור ביקל"רים ומדריכות האוכלוסייה לשעת חירום אשר מוכפפות לנפה.<br /><br />
                5. קיום שיח שוטף עם מפקד מכלול ההסברה במחוז.<br /><br />
                6. ניתוח תמונת מצב ומשמעויות בתחום ההסברה במרחב הנפה.<br /><br />
                7. גיבוש המלצות מקצועיות באשר לפעולות הנדרשות לצורך מענה לאתגרים במרחב האזרחי בתחום ההסברה והדרכת האוכלוסייה – דרישה מבצעית לתכנית הסברה.<br /><br />
                8. גיבוש המלצות מקצועיות באשר לאישור החרגות שעלו מהרשויות למדיניות ההתגוננות.<br /><br />
                9. הזנת דו"ח עיתי בתחום ההסברה והדרכת האוכלוסייה ע"ג השו"ב.<br /><br />
                10. אחריות על המענה האוכלוסייתי לאירועים מתפרצים במרחב בתחום ההסברה והנחיית האוכלוסייה.<br /><br />
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: <>סמב"צ לוגיסטיקה </>,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`


            },
            {
                idRole: 2,
                roleName: <>קמב"צ </>,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`


            }
        ],
        srcTree: `${process.env.PUBLIC_URL}/assests/mahoz/mahozSubCom.jpg`
        //לפרק  DiagramStep3SubCom כי אין פה EXPLANTION


    },



    subRoles:[
    {
        id: 1,
        name: "תא הספקה ובינוי",
        firstRoleName:`קה"ס`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskNote: [
            <>
                <b>תפקידי מפקד תא הספקה ובינוי:</b><br /><br />
                חסר מידע
              
            </>
        ],
        roles: [
            {
                idRole: 1,
                roleName: <> ע' קה"ס</>,                
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`


            }
        ],
        srcTree: `${process.env.PUBLIC_URL}/assests/mahoz/mahozBahs.jpg`,
        explanation: [
            {
                titleExplanation: "תפקידי תא הספקה ובינוי",
                textExplanation:
                    [
                        <>
                                1. הנחייה מקצועית של מ"פ המפקדה וסגניהם בגדודים.<br />  
                                2. גיבוש תכנית הספקה נפתית בהתאם לתכנון וצרכי הגדודים.<br />  
                                3. ביצוע ויסות אמצעים בין היחידות בתיאום ואישור אג"ם.<br />  
                                4. תיאום פעולות הבינוי ואחזקת שטחי הכינוס במרחב הנפה.<br />  
                                5. תיאום וניתוח צרכי תשתיות במרחב הנפה.<br />  
                                6. כתיבת נספח הספקה לפקודה הלוגיסטית הנפתית היומית.<br />  
                        </>

                    ]
            }
        ]
    },

    {
        id: 2,
        name: "תא אחזקה",
        firstRoleName:`קט"א`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskNote: [
            <>
                <b>תפקידי מפקד תא קט"א:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: `ע' קט"א`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`


            }
        ],
        src: `${process.env.PUBLIC_URL}/assests/mahoz/mahozKta.jpg`,
        explanation: [
            {
                titleExplanation: "תפקידי תא אחזקה",
                textExplanation:
                    [
                        <>
                            1. אחריות על כשירות כלל הציוד הייעודי, הציוד הצה"לי, רכבי היר"מ והצמ"ה בנפה.<br/>  <br/>  
                            2. תיאום אחזקה בדרג ב' בציוד ייעודי באמצעות פלוגת האחזקה המחוזית.<br/><br/>  
                            3. תיאום אחזקת כלי רכב צבאיים מול המחוז ומול אגד אחזקה.<br/><br/>     
                            4. תיאום אחזקת צמ"ה וציוד ייעודי בדרגים ב' וג' באמצעות אגד אחזקה ומפעלים מרותקים.<br/><br/>    
                            5. כתיבת נספח אחזקה לפקודה הלוגיסטית הנפתית היומית.<br/><br/>    
                        </>

                    ]
            }
        ]
    },

    {
        id: 3,
        name: `תא משא"ן`,
        firstRoleName:`מפקד תא משא"ן`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskNote: [
            <>
                <b>תפקידי מפקד תא משא"ן:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: 'סגן מפקד תא משא"ן',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`
           

            },
            {
                idRole: 2,
                roleName: 'קצין אנו"ח',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`

              
                

            },
            {
                idRole: 3,
                roleName: 'קצין פר"ח',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`

                

            }
           
        ],
        src: `${process.env.PUBLIC_URL}/assests/imgs/mahoz/Mashan.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי תא המאש"ן',
                textExplanation:
                    [
                        <>
                            1. ייעוץ למפקד הנפה בנושאי כוח אדם, בהתאם להיערכות סד"כ הנפה והתוכניות המבצעיות.<br/>  <br/>  
                            2. שליטה בתהליך הזעקת אנשי המילואים באמצעות מרכז הגיוס הפיקודי ופתרון בעיות בגיוס מערך המילואים.<br/>  <br/>  
                            3. ביצוע הערכת מצב כוח אדם והשפעתה על הערכת המצב הנפתית.<br/>  <br/>  
                            4. תכנון צורכי הנפה בכוח אדם, ויסות כוח אדם בין יחידות המשנה בהתאם לתוכנית מפקד הנפה ועל פי הנחיות המחוז.<br/>  <br/>  
                            5. תיאום וארגון הטיפול בנפגעים, לרבות לוויות.<br/>  <br/>  
                            6. תמיכת המאמץ המבצעי בהיבטי רווחת הפרט, החינוך, הרבנות והמורל.<br/>  <br/>  
                            7. תיווך בין הלוגיסטיקה למשא"ן מחוז לשם מימוש אספקת תספיקי פרט ורבנות.<br/>  <br/>  
                            8. ריכוז והכוונת המדיניות לטיפול בנושאי הרבנות ואנו"ח ביחידות הנפה, לרבות תמ"צ טיפול במטופלים על ידי מחלקות האנו"ח ביחידה.<br/> <br/>   
                        </>

                    ]
            },
            {
                titleExplanation:'ייעוד תא המאש"ן',
                textExplanation:
                    [
                        <>
                            1. שליטה בכוח אדם מתפקד ונפגע (לרבות טיפול בחללים).<br/>  <br/> 
                            2. בניית הכוח וארגון הכוח בהתאם למדיניות מפקדת המחוז ולצורכי היחידות.<br/>  <br/> 
                            3. ריכוז הטיפול בנושאי רווחת הפרט והיחידה ואת משימות הרבנות והאנו"ח בגזרת הנפה.<br/>  <br/> 
                        </>
                    ]
            }
        ]
    },

    

    
    ]
}

export default mahoz;