const pikud = {
    title:"פיקוד",
    pageTitle:`מבנה ייעוד ותפקידי
 המלכ"א`,
    color:'#ff7e00',
    desteny:{
        title:`ייעוד המלכ"א בפיקוד:`,
        text:[
            <>
            1.לתכנן, לתאם, להוציא לפועל ולבקר את הפעלת הסיוע המנהלתי (לוגיסטיקה וכוח אדם), כדי להבטיח את רציפות הפעולה של הכוחות הכפופים ברמה הנדרשת להשלמת משימות הפיקוד בשלב הנוכחי, ובו בזמן - לסייע למפקדות הכפופות לעמוד במשימות השלב הבא.<br/>

            2.לשאת באחריות המטה למערך המנהלתי (לוגיסטיקה וכוח אדם) במרחב הפיקוד בזמן מלחמה, בראשו עומד קצין הלוגיסטיקה הפיקודי (הקל"פ).
            <br/>

            </>
        ]
    },
    tasks:{
        title:`תפקידי המלכ"א בפיקוד:
`,
        text:[
            <>
            1. גיבוש תמונת המצב המנהלתית (לוגיסטיקה וכוח אדם) בזירת המבצעים הפיקודית והעברת דיווח עליה למרכז המבצעים (האג"ם) בפיקוד, לאט"ל ולאכ"א.<br/>
            2. גיבוש תמונת כשירות הסד"כ בזירת המבצעים הפיקודית והעברת דיווח עליה לאג"ם בפיקוד.<br/>
            3. תכנון הסיוע המנהלתי הפיקודי והפעלת המערך הלוגיסטי הפיקודי באופן שישרת את התוכנית המבצעית ויממש את משימות הפיקוד.<br/>
            4.הערכת צורכי המנהלה הצפויים של הפיקוד.
            <br/>
            5. שליטה בכ"א המתפקד והנפגע ולספק שירותי פרט ורבנות.<br/>
            6.תכנון, תיאום וקבלה מגורמי אט"ל וממרכזיו את האפסניה שהוקצתה לפיקוד, לרבות גיוס של ציוד ואמצעים לשעת חירום.<br/>
            7. תגבור לפי הצורך את יחידות הפיקוד באמצעים מגורמי הלוגיסטיקה הפיקודיים או באמצעים שיתקבלו ממרכזי אט"ל.<br/>
            8.תכנון התנועות וההיסעים במרחב הפיקוד, בתיאום עם מרכז המבצעים ושליטה על הצירים שבמרחב הפיקוד.
            <br/>
            9.שליטה ביחידות הלוגיסטיות הפיקודיות - באמצעות האגד הלוגיסטי ואגד השיטור.

            <br/><br/>
            </>
        ]
        
       ,
    },
    imgSrc: `${process.env.PUBLIC_URL}/assets/pikud/pikudFirst.jpg`,
    imgDescription:`לפניכם עץ מבנה למפקדה בפיקוד.
בהמשך הדף יש לבחור את המכלולים לקבלת פירוט הגדרות ומשימות התפקיד -
`,
    comandor:{
        name:`מפקד מלכ"א`,
        src:`${process.env.PUBLIC_URL}/assets/imgs/pikudComandor.svg`,
        popupTitle:`מפקד מלכ"א`,
        popupText:[
           
              <>
              <b>תפקידי  מפקד מלכ"א  :</b><br /><br />
            חסר מידע
          </>
        
        ]

    },
    subComandor:{
        name:`סגן מפקד מלכ"א`,
        src:`${process.env.PUBLIC_URL}/assets/pikud/subComandor.svg`,
        taskTitle:`תפקידי סגן מפקד מלכ"א`,

        taskNote: [
            <>
        
             חסר מידע
            </>

        ]
     


    },
    subRoles:[
    

    {
        id: 1,
        name: `מנל"ח שולחן  מרכזי`,
        firstRoleName:`  מפקד מנל"ח מלכ"א`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/pikud/solider.svg`,
        taskTitle:`תפקידי מפקד מנל"ח מלכ"א   `,
        taskNote: [
            <>
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: `ק' אג"ם לוגיסיטקה`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`


            },
            {
                idRole: 2,
                roleName: `תא במאים`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`
            },
            {
                idRole: 3,
                roleName: `תא מבצעים`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`
            },
            {
                idRole: 4,
                roleName: `תא קישור באט"ל`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`
            },
            {
                idRole: 5,
                roleName: `תא דיווח והפצה`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`
            },
            {
                idRole: 6,
                roleName: `תא קישור במצפ"פ `,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`
            },

        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/pikudManla.jpg`,
        explanation: [
            {
                titleExplanation: `תפקידי השולחן המרכזי`,
                textExplanation:
                    [
                        <>
                            1. לתכנן, לפקד ולשלוט על הפעלת המאמץ הלוגיסטי הכולל של פקע"ר בזירת המלחמה.
                            <br/>  <br/>  
                            2. קיום הערכת מצב מתמשכת ורציפה והעברת משמעויות למערכים.
                            <br/><br/>  
                            3. מתן מענה לדרישות ולצרכים בלתי מתוכננים העולים במהלך הלחימה. בכלל זה, מתן הנחיות, הפצת פקודות ועדכונים.
                            <br/><br/>     
                            4.לקיים קשר דיווח ועדכון הדדי עם נציג לוגיסטי במצפ"פ, מחוזות, אט"ל והמכלולים.
                            <br/><br/>    
                        </>

                    ]
            },
            {
                titleExplanation: `ייעוד השולחן המרכזי`,
                textExplanation:
                    [
                        <>
                            1. גיבוש תמונת מצב לוגיסטית בגזרת הפיקוד

                            <br/>  <br/>  
                            2. ביצוע הערכת מצב לוגיסטית מתמשכת (הכוללת את מימוש הפקודה הלוגיסטית הפיקודית ליממה הקרובה והוצאת פקודות למימוש המענה הנדרש בהתאם).
                            <br/><br/>  
                           
                        </>

                    ]
            }
        ]
    },

    {
        id: 2,
        name: `מכלול תכנון`,
        firstRoleName:`מפקד מכלול תכנון`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/pikud/solider.svg`,
        taskTitle:`תפקידי מפקד מכלול תכנון`,

        taskNote: [
            <>
                <b>תפקידי מפקד מכלול תכנון:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: 'סגן מפקד מכלול תכנון',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName: 'תא ימ"חים וכשירויות',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            },
            {
                idRole: 3,
                roleName: 'נציג במכלול התכנון הפיקודי',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            },
            {
                idRole: 4,
                roleName: 'תא תכנון',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            },
            {
                idRole: 5,
                roleName: `ק' קישור למכ"ס`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Tichnun.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי מכלול התכנון',
                textExplanation:
                    [
                        <>
                            1. תכנון אופן הפעלת המערך הלוגיסטי בפיקוד בהערכות מצב המתקיימות עפ"י שעון הלחימה הפיקודי.
                            <br/>  
                            2. גיבוש הפקודה הלוגיסטית היומית, הפצתה לכלל הגורמים הלוגיסטיים הרלוונטיים ובקרה אחר קבלתה.
                            <br/>  
                            3. גיבוש תוכניות לוגיסטיות לתרחישים עתידיים או משימות צפויות, תוך הגדרת עקרונות הביצוע והכתבת משימות 'נצורות' למכלולים, כך שבבוא העת להפעלת תוכנית כזו, היא תותאם ותהפוך לפקודה בדרך הקצרה והיעילה ביותר.
                            <br/>  
                            4.תיאום דרישות המחוזות והיחידות וייצוג הדרישה לפורום סד"כ ומשאבים במכ"ס וייצוג דרישות המחוזות והיחידות.
                            <br/>  
                            5.העברת התוכנית הלוגיסטית שתוכננה ליום הבא לניהול שולחן הלחימה.
                            <br/>  
                            6.גיבוש תמ"ץ פתיחה והוצאת אמצעים מהימ"חים.
                            <br/>  
                            7. ביצוע ביקורות במהלך במערכה בהתאם להנחיות שולחן מרכזי. <br/>  
                            8.הפצת פקודת חזרה לכו"כ וביצוע תהליכי בקרה עד סיומה.
                            <br/>  <br/>
                        </>

                    ]
            },
            {
                titleExplanation:'ייעוד מכלול התכנון',
                textExplanation:
                    [
                        <>
                          להוות גוף תכנון אינטגרטיבי בחתך כלל מערכי הלוגיסטיקה וכ"א בפיקוד: במצבי החירום ובמלחמה, האחראי לריכוז התכנון הלוגיסטי הפיקודי, כנגזרת מהנחיות התכנון באג"ם פיקוד, באט"ל והנחיות קל"פ, תוך תיאום המכלולים המקצועיים בתהליך כתיבה, הגשה לאישור, הפצה ובקרה של הפקודות הלוגיסטיות הפיקודיות

                        </>

                    ]
            }
        ]
    },
    {
        id: 3,
        name: `מכלול הספקה`,
        firstRoleName:`מפקד  מכלול הספקה`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/pikud/solider.svg`,
        taskTitle:`תפקידי מכלול הספקה`,

        taskNote: [
            <>
                <b>תפקידי מפקד מכלול הספקה:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: 'סגן מפקד מכלול הספקה"',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName: `ק' תכנון`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            },
            {
                idRole: 3,
                roleName: `תא דלק ומזון' `,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            },
            {
                idRole: 4,
                roleName: `תא ניוד והובלה`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            }
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Aspaka.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי מכלול הספקה',
                textExplanation:
                    [
                        <>
                            1. תכנון, שליטה ובקרה על עבודת המטה והביצוע בתחומי הצל"ם והתחמושת, הדלק, המזון ואמצעי הניוד וההובלה. <br/>  
                            2. ביצוע הערכות מצב עיתיות ע"פ שעון פעילות ובהתאם לצורך ומתן מענה ליחידות הפיקוד. <br/>  
                            3. הנחייה ומעקב על ביצוע שרשרת התספוקת מרמת המטכ"ל והפיקוד לרמת המחוז או הנפה.
                            <br/>  
                            4.ניהול תמונת מצב לוגיסטית על בסיס מערכות השו"ב.
                            <br/>  
                            5.ניהול ומעקב אחר דרישות והקצאות ע"ב מערכת ה-SAP.
                            <br/>  
                            6.שליטה ברמות מלאי מל"ן פקע"ר.

                            <br/>  
                            7.תכנון משימות מערך ההספקה ל-24 שעות הבאות בשיתוף מפקדי התאים ומפקד שולחן מרכזי במכלול.

                            <br/>  
                            8.קיום ועדת תספוקת יומית.
                            <br/>  
                            9.ריכוז דרישות מהיחידות ומהמחלקות והתאמת המענה בין אם מצה"ל או המרחב האזרחי בתחומי ההספקה.
                            <br/>  
                        </>

                    ]
            },
            {
                titleExplanation:'ייעוד מכלול הספקה',
                textExplanation:
                    [
                        <>
                            הפעלת מערך ההספקה הפיקודי. יהווה מוקד תכנון, שליטה, מענה, בקרה ודיווח לפעילות בכלל תחומי ההספקה, כל זאת על מנת לאפשר את רציפות והמשכיות לכלל הסד"כ המופעל בשטח.

                        </>

                    ]
            }
        ]
    },
    {
        id: 4,
        name:`מכלול טנ"א `,
        firstRoleName:`מפקד מכלול טנ"א  `,
        srcSolider:`${process.env.PUBLIC_URL}/assets/pikud/solider.svg`,
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
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName: `מטל"פ`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
            {
                idRole: 3,
                roleName:`תא יר"ם, יצ"ם וארגוני חירום`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
            {
                idRole: 4,
                roleName: `תא אחזקה וחלפים`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
            {
                idRole: 5,
                roleName: `ק' אג"ם`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
            {
                idRole: 6,
                roleName: `ק' תכנון`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
            {
                idRole: 7,
                roleName: `ק' קישור למלכ"א`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Tna.jpg`,
        explanation: [
            {
                titleExplanation:` תפקידי מכלול טנ"א `,
                textExplanation:
                    [
                        <>
                            1. תכנון מענה אחזקתי והפעלת כוחות האחזקה בהתאם לתוכנית המבצעית וכחלק מתוכנית המענה הלוגיסטי בפיקוד<br/>  
                            2. ריכוז ועיבוד נתונים, שיקוף תמונת מצב אחזקתית מתמשכת כחלק מתמונת המצב הלוגיסטית וביצוע הערכת מצב אחזקתית.<br/>  
                           
                        </>

                    ]
            }
        ]
    }, {
        id: 5,
        name: `מכלול בינוי`,
        firstRoleName:`מפקד מכלול בינוי`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/pikud/solider.svg`,
        taskTitle:`תפקידי מפקד מכלול בינוי`,

        taskNote: [
            <>
                <b>תפקידי מפקד מכלול בינוי:</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: `ס' מ' מכלול בינוי`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName: `מרחב בינוי 564`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            },
            {
                idRole: 3,
                roleName: `נציג קמפוס`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            },
            {
                idRole: 4,
                roleName: `נציגים במלכ"א ובאג"ת`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            },
           
            {
                idRole: 5,
                roleName: `תא הפעלה וביצוע`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
            }
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Binoi.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי מכלול בינוי',
                textExplanation:
                    [
                        <>
                            חסר מידע
                        </>

                    ]
            },
            {
                titleExplanation:'ייעוד מכלול בינוי',
                textExplanation:
                    [
                        <>
                            חסר מידע
                        </>

                    ]
            }
        ]
    },
    {
        id: 5,
        name:`מכלול שיטור `,
        firstRoleName:`מפקד מכלול שיטור ותנועות `,
        srcSolider:`${process.env.PUBLIC_URL}/assets/pikud/solider.svg`,
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
                roleName:`ס' מפקד מכלול משו"ת`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                
            },
            {
                idRole: 2,
                roleName: ` תא קישור לנת"י`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
            {
                idRole: 3,
                roleName:`תא תנועות`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
            {
                idRole: 4,
                roleName:`תא קישור למתנ"ל`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
            {
                idRole: 4,
                roleName:`תא מבצעים`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
            {
                idRole: 5,
                roleName:`גדוד שיטור 794
`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,

            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Shitoor.jpg`,
        explanation: [
            {
                titleExplanation:` תפקידי מכלול שיטור`,
                textExplanation:
                    [
                        <>
                          חסר מידע
                        </>

                    ]
            }
        ]
    },
    
    {
        id: 7,
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
   
    
    

    
    ]
}

export default pikud;