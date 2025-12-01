const pikud = {
    title:"פיקוד",
    pageTitle:`מבנה ייעוד ותפקידי
 המלכ"א`,
    color:'#ff7e00',
    desteny:{
        title:`ייעוד המלכ"א בפיקוד:`,
        text:[
            <>
           להוות גוף מתכלל ומתאם בין מלכ"א פקע"ר לארגוני ההצלה <br/>(כב"ה, מד"א, מ"י, משרד הפנים ורח"ל לצורך מתן מענה לוגיסטי משלים לכוחות הפועלים בשטח ולרשויות המקומיות במצבי החירום ובמלחמה.

            <br/>

            </>
        ]
    },
    tasks:{
        title:`תפקידי המלכ"א בפיקוד:
`,
        text:[
          <>
            1. לייצג את המערך הלוגיסטי בפקע"ר בארגוני ההצלה (כב"ה, מד"א, מ"י), משרד הפנים ורח"ל ולהוות גוף מקשר למתן פתרונות לוגיסטיים היכן שנתרש בתאום עם המלכ"א.<br/>
            2. להשתתף ולייצג את תחום התווך האזרחי בפיקוד בהערכות המצב המתקיימות ע"פ שעון הלחימה הפיקודי.<br/>
            3. סיוע בפינוי אוכלוסיה ע"י איתור ותאום אתרי שהייה.<br/>
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
        src:`${process.env.PUBLIC_URL}/assets/pikud/MahozComandor.svg`,
        popupTitle:`מפקד מלכ"א`,
        popupText:[
           
              <>
              <b>תפקידי  מפקד מלכ"א  :</b><br /><br />
            לתכנן, לפקד ולשלוט על הפעלת המאמץ הלוגיסטי הכולל של הפיקוד באמצעות השולחן המרכזי וציר התכנון.
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
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:` ק' אג"ם לוגיסטיקה `,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],

            },
            {
                idRole: 2,
                roleName: `תא במאים`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:`תא במאים`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 3,
                roleName: `תא מבצעים`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:`תא מבצעים`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 4,
                roleName: `תא קישור באט"ל`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:`תא קישור באט"ל`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 5,
                roleName: `תא דיווח והפצה`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:`תא דיווח והפצה`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 6,
                roleName: `תא קישור במצפ"פ `,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:`תא קישור במצפ"פ `,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
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
                popTitle:'סגן מפקד מכלול תכנון',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
                
            },
            {
                idRole: 2,
                roleName: 'תא ימ"חים וכשירויות',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:'תא ימ"חים וכשירויות',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 3,
                roleName: 'נציג במכלול התכנון הפיקודי',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:'נציג במכלול התכנון הפיקודי',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 4,
                roleName: 'תא תכנון',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:'תא תכנון',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 5,
                roleName: `ק' קישור למכ"ס`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `ק' קישור למכ"ס`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Tichnun.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי מכלול התכנון',
                textExplanation:
                    [
                       <>
                        1. לתכנן את אופן הפעלת המערך הלוגיסטי בתיאום עם מרכז המבצעים והמלכ"א במצפ"פ, מכלול התכנון באט"ל ובהתאם לתכניות המבצע בפקע"ר ובמטכ"ל.<br/>
                        2. להשתתף ולייצג את תחום התכנון הלוגיסטי בפיקוד בהע"מ המתקיימות עפ"י שעון הלחימה הפיקודי.<br/>
                        3. לגבש את הפקודה הלוגיסטית (הפקודה הלוגיסטית היומית), להפיצה לכלל הגורמים הלוגיסטיים הרלוונטיים ולבקר אחר קבלתן.<br/>
                        4. גיבוש תכניות לוגיסטיות לתרחישים עתידיים ו/או משימות צפויות, תוך הגדרת עקרונות הביצוע והכתבת משימות "נצורות" למכלולים, כך שבבוא העת להפעלת תכנית כזו, היא תותאם ותהפוך לפקודה בדרך הקצרה והיעילה ביותר.<br/>
                        5. סנכרון דרישות המחוזות והיחידות וייצוג הדרישה לפורום סד"כ ומשאבים במכ"ס וייצוג דרישות המחוזות והיחידות.<br/>
                        6. העברת התוכנית הלוגיסטית שתוכננה ליום הבא לניהול שולחן הלחימה.<br/>
                        7. לגבש תמ"צ פתיחת ימ"חים והוצאת אמצעים וסבבים ע"פ קבועי זמן.<br/>
                        8. לבצע ביקורות במהלך המערכה בהתאם להנחיות שולחן מרכזי.<br/>
                        9. להפיץ פקודת חזרה לכו"כ ולבצע תהליכי בקרה עד לסיומה.<br/>
                        </>

                    ]
            },
            {
                titleExplanation:'ייעוד מכלול התכנון',
                textExplanation:
                    [
                        <>
                        להוות גוף תכנון אינטגרטיבי בחתך כלל מערכי הלוגיסטיקה וכ"א בפיקוד במצבי החירום ובמלחמה,<br/>
                        האחראי לריכוז התכנון הלוגיסטי הפיקודי,<br/>
                        כנגזרת מהנחיות התכנון באג"ם פיקוד, באט"ל והנחיות קל"פ,<br/>
                        תוך סנכרון המכלולים המקצועיים בתהליך כתיבה, הגשה לאישור, הפצה ובקרה<br/>
                        של הפקודות הלוגיסטיות הפיקודיות, פקודות נצורות, ופקודות עיתיות<br/>
                        והנחיות העולות ע"פ צורך.<br/>
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
                roleName: 'סגן מפקד מכלול הספקה',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: 'סגן מפקד מכלול הספקה',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 2,
                roleName: `ק' תכנון`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `ק' תכנון`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 3,
                roleName: `תא דלק ומזון `,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `תא דלק ומזון `,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 4,
                roleName: `תא ניוד והובלה`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `תא ניוד והובלה`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 5,
                roleName: `תא ציוד`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `תא ציוד`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            }
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Aspaka.jpg`,
        explanation: [
            {
                titleExplanation:'תפקידי מכלול הספקה',
                textExplanation:
                    [
                       <>
                        1. תכנון, שליטה ובקרה על עבודת המטה והביצוע בתחומי הציוד.<br/>
                        2. ביצוע הערכות מצב עיתיות ע"פ שעון פעילות ובהתאם לצורך ומתן מענה ליחידות הפיקוד.<br/>
                        3. הנחיה ומעקב על ביצוע שרשרת התספוקת מרמת המטכ"ל והפיקוד עד לרמת הגדוד.<br/>
                        4. ניהול תמונת מצ"ב על בסיס מערכות השו"ב.<br/>
                        5. ניהול ומעקב אחר דרישות והקצאות ע"ב מערכות ה־SAP וה־INSTOCK.<br/>
                        6. שליטה ברמות מלאי במל"ן פקע"ר וביחידות.<br/>
                        7. קיום ועדת תספוקת בתדירות משתנה ע"פ צורך (בין פעם ביום לפעם בשבוע).<br/>
                        8. ריכוז דרישות מהיחידות והמחלקות והתאמת המענה בתחומי הציוד.<br/>
                        9. רכש אמצעים אט"ליים וציוד ייעודי מתכלה.<br/>
                        </>


                    ]
            },
            {
                titleExplanation:'ייעוד מכלול הספקה',
                textExplanation:
                    [
                      <>
                        הפעלת תחום הציוד ברמה הפיקודית בחתכים אט"לי, ייעודי, אב"כ וכנו"ת.<br/>
                        יהווה מוקד תכנון, שליטה, מענה, בקרה ודיווח לפעילות בכלל תחומי הציוד,<br/>
                        כל זאת על מנת לאפשר את הרציפות וההמשכיות לכלל הסד"כ הפיקודי המופעל בשטח.<br/>
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
                popTitle: `סגן מפקד מכלול טנ"א`,
                popNote: [
                    <>
                        <b>תפקידי סגן מפקד מכלול טנ"א:</b><br /><br />

                        חסר מידע 
                    </>
        
                ],
                
            },
            {
                idRole: 2,
                roleName: `מטל"פ`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `מטל"פ`,
                popNote: [
                    <>
                       <b>תפקידי מטל"פ:</b><br /><br />
                        חסר מידע 
                    </>
        
                ],

            },
            {
                idRole: 3,
                roleName:`תא יר"ם, יצ"ם וארגוני חירום`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `תא יר"ם, יצ"ם וארגוני חירום`,
                popNote: [
                    <>
                      <b>תפקידים:</b><br /><br />
                        חסר מידע 
                    </>
        
                ],

            },
            {
                idRole: 4,
                roleName: `תא אחזקה וחלפים`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `תא אחזקה וחלפים`,
                popNote: [
                    <>
                        <b>תפקידי תא אחזקה וחלפים:</b><br /><br />

                        חסר מידע 
                    </>
        
                ],

            },
            {
                idRole: 5,
                roleName: `ק' אג"ם`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `ק' אג"ם`,
                popNote: [
                    <>
                    <b>תפקידי קצין אג"ם:</b><br /><br />

                    חסר מידע 
                </>
        
                ],

            },
            {
                idRole: 6,
                roleName: `ק' תכנון`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `ק' תכנון`,
                popNote: [
                    <>
                    <b>תפקידי קצין תכנון:</b><br /><br />

                    חסר מידע 
                </>
        
                ],

            },
            {
                idRole: 7,
                roleName: `ק' קישור למלכ"א`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `ק' קישור למלכ"א`,
                popNote: [
                    <>
                    <b>תפקידי קצין קישור למלכ"א</b><br /><br />
                        חסר מידע 
                    </>
        
                ],

            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Tna.jpg`,
        explanation: [
            {
                titleExplanation:` יעוד מכלול טנ"א `,
                textExplanation:
                    [
                        <>
                           תכנון, ניהול והפעלת מערך האחזקה הפיקודי בהתאם לתכניות האופרטיביות
                           
                        </>

                    ]
            },
              {
                titleExplanation:` תפקידי מכלול טנ"א `,
                textExplanation:
                    [
                      <>
                        1. תכנון מענה אחזקתי והפעלת כוחות האחזקה בפיקוד בהתאם לתוכנית המבצעית וכחלק מתוכנית המענה הלוגיסטי בפיקוד.<br/>
                        2. ריכוז ועיבוד נתונים, שיקוף תמונת מצב אחזקתית מתמשכת כחלק מתמונת המצב הלוגיסטית וביצוע הערכת מצב אחזקתית.<br/>
                        3. הנחיה מקצועית ליחידות הפיקוד בתחום האחזקה וייעוץ מקצועי בתחום האחזקה במפקדת הפיקוד.<br/>
                        4. תיאום בין היחידות הכפופות לפיקוד לבין אט"ל ומרכזיו, החט"ל, מקטנא"ר והפיקודים המרחביים.<br/>
                        5. קביעת תעדוף והשפעה על הקצאת כ"א טנ"א.<br/>
                        6. ויסות וקביעת תעדוף בהקצאת אמצעים.<br/>
                        7. הפעלת יחידת הטנ"א הפיקודית (היטא"פ) בהתאם לתוכנית האחזקה הפיקודית ולהערכת המצב.<br/>
                        8. ביצוע הערכת מצב לפריטים בפיקוח מטה, מתן אישורי ניפוק וויסות חלפים ליחידות וקביעת סדרי עדיפויות.<br/>
                        9. העברת דרישה לריתוק והפעלת מפעלים חיוניים לאחזקת אמצעים ייעודיים ורכישת חלפים.<br/>
                        10. תיאום וקישור לאחזקת רכב, צמ"ה ואמצעים מגויסים על בסיס מוסכים מרותקים בשע"ח.<br/>
                        11. גרירה וחילוץ רכבים צבאיים, מגויסים ורכבי ארגוני החירום ע"ב מערך גרירה עצמאי ת"פ היטא"פ ובסיוע אגד אחזקה ארצי באמצעות מוקד גרירה ארצי 791.<br/>
                        </>


                    ]
            }
        ],
        
       

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
                popTitle: `ס' מ' מכלול בינוי`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
                
            },
            {
                idRole: 2,
                roleName: `מרחב בינוי 564`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:`מרחב בינוי 564`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 3,
                roleName: `נציג קמפוס`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle:`נציג קמפוס`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 4,
                roleName: `נציגים במלכ"א ובאג"ת`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `נציגים במלכ"א ובאג"ת`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
           
            {
                idRole: 5,
                roleName: `תא הפעלה וביצוע`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `תא הפעלה וביצוע`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            }
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Binoi.jpg`,
        explanation: [
            {
                titleExplanation:'ייעוד מכלול בינוי',
                textExplanation:
                    [
                        <>
                        להוות מערך מקצועי הנותן מענה רציף בכל תחומי הבינוי והתשתיות בפקע"ר<br/>
                        ותומך את רציפות והמשכיות המאמץ המלחמתי של הכוחות בכלל הגזרות והמתארים האופרטיביים.<br/>
                        </>


                    ]
            },
            {
                titleExplanation:'תפקידי מכלול בינוי',
                textExplanation:
                    [
                        <>
                        1. לתכנן, לשלוט ולבקר את המענה בתחום הבינוי והתשתיות ליחידות פקע"ר בכלל הגזרות.<br/>
                        2. לרכז את צרכי כלל יחידות הפיקוד בתחום הבינוי ולתת פתרונות עפ"י סד"ע פיקודי.<br/>
                        3. לשמור על רציפות תפקודית במפקדות ובשטחי השהייה באמצעות גנרציה.<br/>
                        4. לתמוך בסד"כ הפיקוד השוהה בתשתיות אזרחיות תוך מתן מענה משלים.<br/>
                        5. לשלוט ולהפעיל את צוותי בינוי פקע"ר עפ"י סד"ע פיקודי.<br/>
                        6. לשלוט ולעדכן באופן שוטף במיקום כוחות בשטחי כינוס, תמ"צ גנרציה ותשתיות תומכות.<br/>
                        7. לכתוב את נספחי הבינוי והתשתיות ופקודות ייעודיות במסגרת הפקודה הלוגיסטית הפיקודית.<br/>
                        8. לנהל ולשלוט בפרוייקטי תשתית בכלל יחידות הפיקוד למול היחידות, מרחבי הבינוי ומחוזות אהו"ב.<br/>
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
                popTitle: `ס' מפקד מכלול משו"ת`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
                
            },
            {
                idRole: 2,
                roleName: ` תא קישור לנת"י`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: ` תא קישור לנת"י`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],

            },
            {
                idRole: 3,
                roleName:`תא תנועות`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `תא תנועות`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],

            },
            {
                idRole: 4,
                roleName:`תא קישור למתנ"ל`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `תא קישור למתנ"ל`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],

            },
            {
                idRole: 4,
                roleName:`תא מבצעים`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `תא מבצעים`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],

            },
            {
                idRole: 5,
                roleName:`גדוד שיטור 794`,
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                popTitle: `גדוד שיטור 794`,
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],

            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Shitoor.jpg`,
        explanation: [
            {
                titleExplanation:` ייעוד מכלול שיטור`,
                textExplanation:
                    [
                          <>
                            הסדרת המענה בפקע"ר למימוש משימות השיטור הפיקודיות ברמת המחוז והפיקוד,<br/>
                            תוך תיאום וסנכרון גופי השיטור במטרה לאפשר לפיקוד לממש את אחריותו<br/>
                            ולתמוך את מאמץ ההגנה.<br/>
                            </>

                    ]
            },
            {
                titleExplanation:` תפקידי מכלול שיטור`,
                textExplanation:
                    [
                       <>
                        1. מתכלל ומרכז את מערך השיטור בפיקוד ואת משימותיו – לשליטה בצירים, מתן מענה שיטורי באירועי מניפה רחבה ומתן מענה שיטורי לאתרי הרס.<br/>
                        2. תיאום בין ארגוני עם השותפים (משטרת ישראל, נת"י, כביש 6).<br/>
                        3. תיאום שיטור עם כוחות השיטור בתווכים השונים.<br/>
                        4. בניית פקודת שיטור יומית למערך השיטור בפקע"ר.<br/>
                        5. ביצוע העמ"צ מתמשכת לגיבוש תמ"צ ושיקופה לרמ"מ.<br/>
                        6. הקצאת כוחות שיטור בהתאם לתיעדוף.<br/>
                        </>


                    ]
            }
        ]
    },
    
    {
        id: 7,
        name: `מכלול משא"ן`,
        firstRoleName:`מפקד מכלול משא"ן`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/pikud/solider.svg`,
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
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/pikud/subMashan.jpg`,
                popTitle:'סגן מפקד מכלול משא"ן',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
                
            },
            {
                idRole: 2,
                roleName: 'מנל"ח',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/pikud/kTash.jpg`,
                popTitle: 'מנל"ח',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
              
                

            },
            {
                idRole: 3,
                roleName: 'תא כ"א',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/pikud/kXinooch.jpg`,
                popTitle:'תא כ"א',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 4,
                roleName: 'תא רבנות',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/pikud/taKa.jpg`,
                popTitle:'תא רבנות',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
           
            {
                idRole: 5,
                roleName: 'תא פר"ח',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/pikud/KNifgaim.jpg`,
                popTitle: 'תא פר"ח',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
           
            {
                idRole: 6,
                roleName: 'תא נפגעים',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/pikud/tAnoch.jpg`,
                popTitle: 'תא נפגעים',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
            {
                idRole: 6,
                roleName: 'תא גיוס',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/pikud/tAnoch.jpg`,
                popTitle:'תא גיוס',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Mashan.jpg`,
        explanation: [
            {
                titleExplanation:'יעוד תא המאש"ן',
                textExplanation:
                    [
                        <>
                        שליטה בכ"א מתפקד ונפגע, בניין הכח וארגונו בהתאם להערכת המצב העיתית והמתמשכת,<br/>
                        בהתייחס לצרכי היחידות ודגשי מפקד הפיקוד.<br/>
                        ריכוז וטיפול בנושאי רווחת הפרט, היחידה והחוסן הנפשי.<br/>
                        </>


                    ]
            },
            {
                titleExplanation:'תפקידי תא המאש"ן',
                textExplanation:
                    [
                       <>
                    1. הזעקת אנשי המילואים באמצעות מרכז גיוס פיקודי.<br/>
                    2. שליטה על כ"א מתפקד ונפגע.<br/>
                    3. גיוס מערך המילואים הפיקודי.<br/>
                    4. בניין כח בחירום – תכנון צרכי הפיקוד בכ"א ווידוא תגבור כ"א ליחידות בהתאם לסד"כ פיקודי.<br/>
                    5. ביצוע הערכת מצב כ"א והשפעה על הערכת המצב הפיקודית.<br/>
                    6. ייעוץ בנושאי כ"א בהתאם להערכות סד"כ הפיקוד והתכניות המבצעיות.<br/>
                    7. קיום בקרה אחר נושאי משטח ומשמעת ומנהל תקין ביחידות.<br/>
                    8. תמיכה במערך הלוחם בהיבטי רווחת הפרט, חינוך, רבנות ומורל.<br/>
                    9. ריכוז נתוני הטיפול בהרוגים המטופלים ע"י האנו"ח ובטיפול בחללים מכוחותינו.<br/>
                    </>


                    ]
            }
        ]
    },
    
    {
        id: 8,
        name:` המכלול לתווך אזרחי`,
        firstRoleName:`מפקד המכלול לתווך אזרחי`,
        srcSolider:`${process.env.PUBLIC_URL}/assets/pikud/solider.svg`,
        taskTitle:`תפקידי מפקד המכלול לתווך אזרחי`,

        taskNote: [
            <>
                <b>תפקידי מפקד המכלול לתווך אזרחי</b><br /><br />
                חסר מידע 
            </>

        ],
        roles: [
            {
                idRole: 1,
                roleName: 'סגן מפקד המכלול לתווך אזרחי',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/pikud/subMashan.jpg`,
                popTitle:  'סגן מפקד המכלול לתווך אזרחי',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],
                
            },
            {
                idRole: 2,
                roleName: 'תפקיד 2',
                src:`${process.env.PUBLIC_URL}/assets/pikud/subSolider.svg`,
                miniTree:`${process.env.PUBLIC_URL}/assets/pikud/kTash.jpg`,
                popTitle: 'תפקיד 2',
                popNote: [
                    <>
                        חסר מידע 
                    </>
        
                ],

              
                

            },
           
        ],
        treeSrc: `${process.env.PUBLIC_URL}/assets/pikud/Meshulavim.jpg`,
        explanation: [
            {
                titleExplanation:'ייעוד מכלול לתווך אזרחי',
                textExplanation:
                    [
                        <>
                    להוות גוף מתכלל ומתאם בין מלכ"א פקע"ר לארגוני ההצלה (כב"ה, מד"א, מ"י, משרד הפנים ורח"ל לצורך מתן מענה לוגיסטי משלים לכוחות הפועלים בשטח ולרשויות המקומיות במצבי החירום ובמלחמה.
                        </>
                    ]
            },
            {
                titleExplanation:'תפקידי המכלול לתווך אזרחי',
                textExplanation:
                    [
                        <>
                        1. ייצוג המערך הלוגיסטי בפקע"ר בארגוני ההצלה (כב"ה, מד"א, מ"י), משרד הפנים ורח"ל והוות גוף מקשר למתן פתרונות לוגיסטיים היכן שנתרש בתאום עם המלכ"א.<br/>
                        2. השתתפות וייצוג תחום התווך האזרחי בפיקוד בהערכות המצב המתקיימות ע"פ שעון הלחימה הפיקודי.<br/>
                        3. סיוע בפינוי אוכלוסיה באמצעות איתור ותאום אתרי שהייה.<br/>
                        4. תמסר במידת הצורך.<br/>
                        </>
                    ]
            }
        ]
    },
   
    
    

    
    ]
}

export default pikud;