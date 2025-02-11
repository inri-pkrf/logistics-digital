import React, { useState, useEffect } from 'react';
import '../componentsCSS/Battalions.css';
import { useNavigate, useLocation } from 'react-router-dom';
import units from '../data/Units';
import StepsBtnBattelions from '../componentsJS/StepsBtnBattelions';

function Battalions() {
    const navigate = useNavigate();
    const location = useLocation();
    const unitName = location.state?.unitName || "";

    // כאן אנחנו לא עושים return מראש, אלא שומרים את השלב באחסון
    const unit = units.find(unit => unit.name === unitName);

    const [currentStep, setCurrentStep] = useState(() => {
        // אם יש שלב שמור ב-sessionStorage, נקרא אותו, אחרת נתחיל מ-1
        const savedStep = sessionStorage.getItem('currentStep');
        return savedStep ? Number(savedStep) : 1; // אם אין שלב שמור, מתחילים ב-1
    });

    // אם לא נמצא unit, נציג הודעת שגיאה
    if (!unit) {
        return <div>היחידה לא נמצאה</div>; // שגיאה אם אין יחידה תואמת
    }

    // פונקציה שתשנה את התוכן לפי הצעד שנבחר
    const handleStepChange = (stepNumber) => {
        setCurrentStep(stepNumber); // עדכון השלב הנוכחי
        sessionStorage.setItem('currentStep', stepNumber); // שמירה ב-sessionStorage
    };

    return (
        <div className="Battalions">
            <div className='white-circle-Battalions'>
                <h1 className="titleBattalions">{unitName}</h1>
                <StepsBtnBattelions
                    numSteps={unit.steps.length}
                    currentStep={currentStep} // מעבירים את השלב הנוכחי
                    onStepChange={handleStepChange} // מעבירים את הפונקציה לשינוי שלב
                />
                {/* מציגים את התוכן של השלב הנבחר בתוך div */}
                <div className="step-content">
                    {unit.steps[currentStep - 1]} {/* התוכן עבור הצעד הנבחר */}
                </div>
            </div>
        </div>
    );
}

export default Battalions;
