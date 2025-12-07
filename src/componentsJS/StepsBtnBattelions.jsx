import React from 'react';
import '../componentsCSS/StepsBtnBattelions.css';
import { useNavigate } from 'react-router-dom';
import units from '../Data/Units';

function StepsBtnBattelions({ numSteps, currentStep, onStepChange, unitName }) {
    const navigate = useNavigate();

    const unit = units.find(u => u.name === unitName);
    const stepTexts = unit?.stepNumbers || Array.from({ length: numSteps }, (_, i) => i + 1);

    const handleButtonClick = (step) => {
        if (onStepChange) onStepChange(step);
    };

    const handleFirstButton = () => {
        onStepChange(1);
        navigate("/rounds");
    };

    return (
        <div className="StepsBtnBattelions">
            <p className='order'>לחצו על מספר הסבב על מנת לראות הסבר עליו</p>
            <div className="all-steps-Battelions">
                {Array.from({ length: numSteps }).map((_, index) => (
                    <div
                        key={index}
                        className={`btn-steps-Battelions ${currentStep === index + 1 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(index + 1)}
                    >
                        {stepTexts[index]}
                    </div>
                ))}

                <div className="step1-Battelions" onClick={handleFirstButton}>
                    חזרה לבחירת גדוד
                </div>
            </div>
        </div>
    );
}

export default StepsBtnBattelions;
