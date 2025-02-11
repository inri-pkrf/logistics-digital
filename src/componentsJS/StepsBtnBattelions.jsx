import React from 'react';
import '../componentsCSS/StepsBtnBattelions.css';
import { useNavigate } from 'react-router-dom';

function StepsBtnBattelions({ numSteps, currentStep, onStepChange }) {
    const navigate = useNavigate();

    // טקסטים של הכפתורים
    const buttonTexts = [
        '1',
        '2-3',
        '4',
        '5-9'
    ];

    // פונקציה לשינוי שלב
    const handleButtonClick = (step) => {
        if (onStepChange) {
            onStepChange(step); // עדכון השלב הנוכחי ב-parent
        }
    };

    return (
        <div className="StepsBtnBattelions">
            <div className="all-steps-Battelions">
                {/* הצגת כפתורים בהתאם למספר השלבים */}
                {Array.from({ length: numSteps }).map((_, index) => (
                    <div
                        key={index}
                        className={`btn-steps-Battelions ${currentStep === index + 1 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(index + 1)} // קוראים לפונקציה ששולחת את השלב
                    >
                        {buttonTexts[index] || (index + 1)} {/* אם לא נמצא טקסט, תציג את המספר */}
                    </div>
                ))}

                {/* כפתור חזרה לבחירת גדוד */}
                <div
                    className="step1-Battelions"
                    id="step4-Battelions"
                    onClick={() => navigate("/rounds")}
                >
                    חזרה לבחירת גדוד
                </div>
            </div>
        </div>
    );
}

export default StepsBtnBattelions;
