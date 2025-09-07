const mahoz = {
    title:"מחוז",
    pageTitle:`מבנה ייעוד ותפקידי
 המלכ"א`,
    color:'#1cb5e5',
    desteny:{
        title:`ייעוד המלכ"א במחוז:`,
        text:[
           <>
            גיבוש תמונת מצב לוגיסטית<br/>
            קיום בע"מ מתמשכת ורציפה<br/>
            תכנון, פיקוד, שליטה ובקרה על המענה הלוגיסטי במרחב המחוז
            </>

        ]
    },
    tasks:{
        title:`תפקידי המלכ"א במחוז:
`,
        text:[
            <>
            1. לגבש את תמונת המצב הלוגיסטית בזירת המבצעים המחוזית ולדווח למרכז האג"ם במחוז ומרכז המלכ"א בפיקוד.<br/>
            2. להעריך את צורכי המנהלה הצפויים של המחוז, ולהציגם בעת הערכת המצב המחוזית.<br/>
            3. לתכנן את תכנית הסיוע המנהלתית המחוזית ולהפעיל את המערך המחוזי באופן שישרת את התכנית המבצעית ויממש את משימות המחוז.<br/>
            4. לתכנן, לתאם ולקבל מגורמי הפיקוד וממרכזיו את האפסניה שהוקצתה למחוז, לרבות גיוס של ציוד ואמצעים לשעת חירום.<br/>
            5. לתגבר לפי הצורך את יחידות המחוז באמצעים מגורמי הלוגיסטיקה המחוזיים שהתקבלו ממרכזי אט"ל או מהפיקוד.<br/>
            6. לשלוט בכ"א המתפקד והנפגע ולספק שירותי פרט ורבנות.<br/>
            7. לתכנן את התנועות וההיסעים במרחב המחוז, בתיאום עם מרכז המבצעים ומשל"ט אגד השיטור ולשלוט על הצירים שבמרחב המחוז.<br/>
            8. לשלוט ביחידות הלוגיסטיות המחוזיות.<br/><br/>
            </>
        ]
        
       ,
    },
    imgSrc: `${process.env.PUBLIC_URL}/assets/mahoz/mahozFirst.jpg`,
    imgDescription:`לפניכם עץ מבנה למפקדה במחוז.
בהמשך הדף יש לבחור את המכלולים לקבלת פירוט הגדרות ומשימות התפקיד -
`,
    comandor:{
        name:`מפקד מלכ"א`,
        src:`${process.env.PUBLIC_URL}/assets/imgs/MahozComandor.svg`,
        popupTitle:`מפקד מלכ"א`,
        popupText:[
           
              <>
              <b>תפקידי  מפקד מלכ"א  :</b><br /><br />
           לתכנן, לפקד ולשלוט על הפעלת המאמץ הלוגיסטי הכולל של המחוז באמצעות השולחן המרכזי וציר התכנון.

          </>
        
        ]

    },
    subComandor:{
        name:`סגן מפקד מלכ"א`,
        src:`${process.env.PUBLIC_URL}/assets/mahoz/subComandor.svg`,
        taskTitle:`תפקידי סגן מפקד מלכ"א`,

        taskNote: [
            <>
        
             חסר מידע
            </>

        ]
     


    },
    subMalca:{
        name:`נציג המלכ"א במצפ"מ`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskTitle:`נציג המלכ"א במצפ"מ `,

        taskNote: [
            <>
                1. מייצג את תמונת המצב הלוגיסטית בשולחן המפקד.<br/><br/>
                2. מציג את עיקרי הפעילות הלוגיסטית המחוזית.<br/><br/>
                3. מספק נתונים תומכי אג"מ.<br/><br/>
                4. מעביר למלכ"א תמונת מצב מחוזית – פריסת הסד"כ ואירועים מרכזיים, ומתריע על תפניות והזדמנויות בהתהוות.<br/><br/>
                5. מדווח למלכ"א על הקצאות סד"כ ואמצעים.<br/><br/>
                6. מפיק משמעויות לוגיסטיות מהחלטות המתקבלות בשולחן המפקד.<br/><br/>
                7. מדווח הנחיות מנל"ח/מפקד.<br/><br/>
                8. מספק לשולחן מרכזי נתונים לוגיסטיים המשפיעים על קבלת החלטות מבצעיות ושינוי סד"כ.<br/><br/>


              
            </>],
    },




    subRoles:[
    

    {
        id: 1,
        name: `מנל"ח מלכ"א`,
        firstRoleName:`  מפקד מנל"ח מלכ"א`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskTitle:`תפקידי מפקד מנל"ח מלכ"א   `,
        taskNote: [
            <>
            1. לאשר את תמונת המצב הלוגיסטית במרחב המחוז.<br/>
            2. קיום הע"מ מתמשכת ורציפה והעברת משמעויות למערכים, מפקדות, ציר התכנון והפעלת הכח.<br/>
            3. מימוש הפקודה הלוגיסטית היומית.<br/>
            4. מתן מענה לדרישות ולצרכים בלתי מתוכננים העולים במהלך הלחימה.<br/>
            5. המלצה על הסטת מרכזי כובד לוגיסטיים מחוזיים לאור העערכת מצב מתמשכת.<br/>
            6. אחראי לביצוע הערכות מצב מפקד המלכ"א והערכות מצב עיתיות.<br/>



            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: `קמב"צ`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`


            },
            {
                idRole: 2,
                roleName: `סמב"צ`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`


            }
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/mahoz/mahozManla.jpg`,
        explanation: [
            {
                titleExplanation: `תפקידי מנל"ח מלכ"א`,
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
        id: 2,
        name: `מכלול הספקה`,
        firstRoleName:`מפקד מכלול הספקה`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskTitle:`תפקידי מפקד מכלול הספקה`,

        taskNote: [
            <>
                <b>תפקידי מפקד מכלול הספקה:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: `ס' מ' מכלול הספקה`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName: `נגד נתונים`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
            },
            {
                idRole: 3,
                roleName: `מפקד תא דלק ומזון`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/kDelek.jpg`,
            },
            {
                idRole: 4,
                roleName: `מפקד תא הובלה וניוד`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/KOvala.jpg`,
            },
           
            {
                idRole: 5,
                roleName: `מפקד תא צל"ם ותחמושת`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/KTzelem.jpg`,
            }
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/mahoz/Aspaka.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי מכלול הספקה',
                textExplanation:
                    [
                        <>
                            1. ניתוח נתוני תמונת המצב הלוגיסטית והפקת המשמעויות בתחום ההספקה, בהתאם לפקודת המבצע המחוזית. <br/>  
                            2. ריכוז נתונים, דרישות ודיווחים בתחום ההספקה בזירת המבצעים המחוזית ותרגומם לכדי דרישה מחוזית. <br/>  
                            3. בקרה אחר מיצוי המשאבים המוקצים ליחידות המחוז בתחום ההספקה, מיפוי צרכי מערכים והצגתם במסגרת עבודת המטה במפקדת המחוז. <br/>  
                            4. תכנון, תיאום ומימוש תכנית ההספקה המחוזית בהתאם לפקודת המבצע המחוזית. <br/>  
                            5. הקצאת מלאים ליחידות המחוז על פי תעדוף מחוזי באמצעות הגלמ"ר. <br/>  
                            6. בקרה על שרשרת התספוקת מרמת המחוז ועד לרמת הגדוד. <br/>  
                            7. בקרה על התכניות של היחידות הכפופות בתחום ההספקה ועל רמות המלאי ביחידות המחוז - בטן, דרג, גלמ"ר, מצבורים מחוזיים ועתודות. <br/>  
                            8. קבלת פקודה יומית ממלכ"א פיקוד, ניתוחה ובניית פקודה יומית עבור היחידות הכפופות. <br/>  
                        </>

                    ]
            }
        ]
    },
     {
        id: 3,
        name:`מכלול טנ"א `,
        firstRoleName:`מפקד מכלול טנ"א  `,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskTitle:`תפקידי מפקד מכלול טנ"א`,

        taskNote: [
            <>
                <b>תפקידי מפקד מכלול טנ"א:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName:`סגן מפקד מכלול טנ"א`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName: `ק' קישור לאגד אחזקה `,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,

            },
            {
                idRole: 3,
                roleName:`ק' חלפים ונתונים `,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,

            },
            {
                idRole: 4,
                roleName: `ק' אחזקה`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,

            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/mahoz/Tna.jpg`,
        explanation: [
            {
                titleExplanation:` תפקידי מכלול טנ"א `,
                textExplanation:
                    [
                        <>
                            1. גיבוש תמונת המצב האחזקתית, כחלק מתמונת המצב הלוגיסטית הכוללת. <br/>  
                            2. איסוף נתוני תמונת המצב האחזקתית ביחידות המחוז וניתוח משמעויות המשפיעות על הערכת המצב המחוזית. <br/>  
                            3. גיבוש תכנית אחזקה מחוזית במסגרת תהליך התכנון המחוזי. <br/>  
                            4. תעדוף הקצאת משאבים (ציוד, אמצעים וחלפים) בהתאם להערכת המצב. <br/>  
                            5. ריכוז הדיווחים בתחום האחזקה מהיחידות הכפופות, ניתוח המשמעויות המשפיעות על הערכת המצב המחוזית. <br/>  
                            6. גיבוש דרישה מחוזית מהמפקדה הכללית בתחום האחזקה להמשך הלחימה. <br/>  
                            7. הצגת הדרישה המחוזית בציר המקצועי למלכ"א. <br/>  
                            8. התאמת התכנית המחוזית בתחום האחזקה לאור הקצאת המשאבים הפיקודית ותמונת המצב המחוזית, הפצתה וביצוע התיאומים הנדרשים למימושה. <br/>  
                            9. תיאום הספקת חלפים בדחיפה ובמשיכה ע"ב הפלטא"מ המחוזי. <br/>  
                            10. תיאום הפעלת היחידות המחוזיות לתיאום צל"ם על פי סדר העדיפויות המחוזי שקבע מרכז המבצעים המחוזי. <br/>  
                            11. תיאום פעולות כוחות האחזקה הפיקודיים המוקצים למחוז. <br/>  <br/>
                        </>

                    ]
            }
        ]
    },
     {
        id: 4,
        name: `תא בינוי`,
        firstRoleName:`מפקד תא בינוי`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskTitle:` מפקד תא בינוי`,

        taskNote: [
            <>
                <b>תפקידי מפקד תא בינוי:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: 'סגן מפקד תא בינוי"',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName: 'הנדסאי ',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,

              
                

            }
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/mahoz/Binoi.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי תא בינוי',
                textExplanation:
                    [
                        <>
                            1. איסוף נתוני תמונת מצב בתחום הבינוי, ובכלל זה - מיקומי היחידות, מלאים, אמצעי בינוי ופגיעה במחנות. <br/>  
                            2. ריכוז דרישות היחידות הכפופות בתחום הבינוי והתשתיות. <br/>  
                            3. ריכוז הפערים בתחום הבינוי וגיבושם לכדי דרישה מחוזית, בתיאום עם המלכ"א. <br/>  
                            4. תכנון אופן הפעלת גופי הבינוי במחוז לפי סדר עדיפות, בתיאום עם המלכ"א. <br/>  
                            5. בקרה על הפצת נספח בינוי בפקודה הלוגיסטית המחוזית ולגופים שהוקצו על ידי המלכ"א בתחום הבינוי ועל קבלתה. <br/>  
                        </>

                    ]
            }
        ]
    },
    
    {
        id: 5,
        name:`מכלול שיטור `,
        firstRoleName:`מפקד מכלול שיטור  `,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskTitle:`   תפקידי מפקד מכלול שיטור`,

        taskNote: [
            <>
                <b>תפקידי מפקד מכלול שיטור:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName:`ס' מפקד מכלול שיטור`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName: `ק' קישור למתנ"פ`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,

            },
            {
                idRole: 3,
                roleName:`קמב"צ שיטור`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,

            },
            {
                idRole: 4,
                roleName: `מש"ק מ"צ `,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,

            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/mahoz/Shitoor.jpg`,
        explanation: [
            {
                titleExplanation:` תפקידי מכלול שיטור`,
                textExplanation:
                    [
                        <>
                            1. דיווח, פיקוח, ויסות ושליטה בהיסע במרחב המחוזי. <br/>  
                            2. שליטה בתמונת מצב צירים בגזרת המחוז. <br/>  
                            3. מימוש תכנית ההיסעים הפיקודית בגזרת המחוז. <br/>  
                            4. מתן מענה שיטורי במרכזי הגיוס ובמרכזים הלוגיסטיים שבמרחב המחוז. <br/>  
                            5. גיבוש תמונת מצב שיטורית במרחב המחוז עבור אגד השיטור ומלכ"א פיקוד. <br/>  
                            6. גיבוש תמונת מצב היסעים שבמרחב המחוז עבור מלכ"א פיקוד ועבור מתנ"ל. <br/>  
                            7. סיוע למבצעים מחוז בתכנון הקצאת כוחות שיטור למשימות שיטור עורפיות. <br/> <br/> 
                        </>

                    ]
            }
        ]
    },

    {
        id: 6,
        name: `מכלול משא"ן`,
        firstRoleName:`מפקד מכלול משא"ן`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskTitle:`תפקידי מפקד מכלול משא"ן`,

        taskNote: [
            <>
                <b>תפקידי מפקד תא משא"ן:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: 'סגן מפקד מכלול משא"ן',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/subMashan.jpg`,
                
            },
            {
                idRole: 2,
                roleName: 'קצין ת"ש',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/kTash.jpg`,

              
                

            },
            {
                idRole: 3,
                roleName: 'קצין חינוך',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/kXinooch.jpg`,
            },
            {
                idRole: 4,
                roleName: 'מפקד תא כ"א',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/taKa.jpg`,
            },
           
            {
                idRole: 5,
                roleName: 'מפקד תא נפגעים',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/KNifgaim.jpg`,
            },
           
            {
                idRole: 6,
                roleName: 'מפקד תא אנו"ח',
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/tAnoch.jpg`,
            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/mahoz/Mashan.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי תא המאש"ן',
                textExplanation:
                    [
                        <>
                            1. ייעוץ למפקד המחוז בנושאי כוח אדם בהתאם להיערכות הסד"כ והתוכניות המבצעיות. <br/>  
                            2. שליטה בתהליך הזעקת אנשי מילואים דרך מרכז הגיוס הפיקודי ופתרון בעיות בגיוס. <br/>  
                            3. ביצוע הערכת מצב כוח אדם והשפעתה על הערכת המצב הכללית במחוז. <br/>  
                            4. תכנון ווויסות כוח אדם בין יחידות המשנה בהתאם להנחיות הפיקוד. <br/>  
                            5. תיאום וארגון טיפול בנפגעים, כולל סיוע למשפחות וליווי לוויות. <br/>  
                            6. תמיכה במאמץ הלחימה בהיבטי רווחה, חינוך, רבנות ומורל. <br/>  
                            7. תיאום בין הגלמ"ר ליחידות המחוז בקבלת תגבורות ואספקת ציוד אישי. <br/>  
                            8. ריכוז והכוונת מדיניות הטיפול ברבנות ובאנו"ח, כולל פיקוח על מחלקות האנו"ח היחידתיות. <br/>  <br/>
                        </>

                    ]
            }
        ]
    },
   
   

    {
        id: 7,
        name: `גלמ"ר `,
        firstRoleName:`מפקד מכלול גלמ"ר`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/mahoz/solider.svg`,
        taskTitle:`תפקידי מפקד מכלול גלמ"ר`,

        taskNote: [
            <>
                <b>תפקידי מפקד מכלול הספקה:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: `סמ"פ גלמ"ר`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName:`ק.אג"מ`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
            },
            {
                idRole: 3,
                roleName:`מ"פ פל"מ`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/kDelek.jpg`,
            },
            {
                idRole: 4,
                roleName: `מ"פ פלה"ס`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/KOvala.jpg`,
            },
           
            {
                idRole: 5,
                roleName: `מ"פ פלמ"צ`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/KTzelem.jpg`,
            },
            {
                idRole: 6,
                roleName: `מ"פ פלט"אמ`,
                src:`${process.env.PUBLIC_URL}/assets/mahoz/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/mahoz/KTzelem.jpg`,
            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/mahoz/Aspaka.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי מכלול הספקה',
                textExplanation:
                    [
                        <>
                            1. ניתוח נתוני תמונת המצב הלוגיסטית והפקת המשמעויות בתחום ההספקה, בהתאם לפקודת המבצע המחוזית. <br/>  
                            2. ריכוז נתונים, דרישות ודיווחים בתחום ההספקה בזירת המבצעים המחוזית ותרגומם לכדי דרישה מחוזית. <br/>  
                            3. בקרה אחר מיצוי המשאבים המוקצים ליחידות המחוז בתחום ההספקה, מיפוי צרכי מערכים והצגתם במסגרת עבודת המטה במפקדת המחוז. <br/>  
                            4. תכנון, תיאום ומימוש תכנית ההספקה המחוזית בהתאם לפקודת המבצע המחוזית. <br/>  
                            5. הקצאת מלאים ליחידות המחוז על פי תעדוף מחוזי באמצעות הגלמ"ר. <br/>  
                            6. בקרה על שרשרת התספוקת מרמת המחוז ועד לרמת הגדוד. <br/>  
                            7. בקרה על התכניות של היחידות הכפופות בתחום ההספקה ועל רמות המלאי ביחידות המחוז - בטן, דרג, גלמ"ר, מצבורים מחוזיים ועתודות. <br/>  
                            8. קבלת פקודה יומית ממלכ"א פיקוד, ניתוחה ובניית פקודה יומית עבור היחידות הכפופות. <br/>  
                        </>

                    ]
            }
        ]
    },
    
    ]
}

export default mahoz;