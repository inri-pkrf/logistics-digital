import React, { useState, useEffect } from 'react';
import './Styles/Battalions.css';
import { useNavigate, useLocation } from 'react-router-dom';
import units from '../Data/Units';
import StepsBtnBattelions from '../componentsJS/StepsBtnBattelions';

function Battalions() {
    const navigate = useNavigate();
    const location = useLocation();
    const unitName = location.state?.unitName || "";

    // מחפשים את היחידה ב-units
    const unit = units.find(unit => unit.name === unitName);

    const [currentStep, setCurrentStep] = useState(() => {
        const savedStep = sessionStorage.getItem('currentStep');
        return savedStep ? Number(savedStep) : 1;
    });

    // אם לא נמצא unit, מציגים הודעת שגיאה
    if (!unit) {
        return <div>היחידה לא נמצאה</div>;
    }

    // שינוי שלב ושמירה ב-sessionStorage
    const handleStepChange = (stepNumber) => {
        setCurrentStep(stepNumber);
        sessionStorage.setItem('currentStep', stepNumber);
    };

    return (
        <div className="Battalions">
            <div className='white-circle-Battalions'>
                <h1 className="titleBattalions">{unitName}</h1>
                
                    <StepsBtnBattelions
                        numSteps={unit.steps.length}
                        currentStep={currentStep}
                        onStepChange={handleStepChange}
                        unitName={unitName} // ← זה החלק שחסר
                    />

                <div className="card-content">
                    {/* מציגים את המספור של הסבב מתוך unit.stepNumbers */}
                    <h1 className="card-title">
                        {`סבבי העמסה מספר ${unit.stepNumbers[currentStep - 1]}`}
                    </h1>
                    <p className='text-batel'>{unit.steps[currentStep - 1]}</p>
                </div>

                <div className='navigation-btn'>
                    <div onClick={() => navigate("/emergency")} className='prev'>
                        <p className='text-lable'>הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="Previous" />
                    </div>
                    <div onClick={() => navigate("/war")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="Next" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Battalions;
