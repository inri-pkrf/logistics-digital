import React from 'react';
import '../componentsCSS/StepsBtnDiagram.css';
import { useNavigate, useLocation } from 'react-router-dom';

function StepsBtnDiagram({ currentStep }) {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedOption = location.state?.selectedOption || '';

    const stepTexts = {
        'נפה': ['מכלול', 'תא'],
        'גדוד': ['פלוגה', 'מחלקה'],
        'מחוז': ['מרכז', 'מכלול'],
    };

    const [step2Text, step3Text] = stepTexts[selectedOption] || ['מרכז', 'מכלול'];

    const backgroundColors = {
        'נפה': '#175a85',
        'גדוד': '#499f8a',
        'מחוז': '#1cb5e5',
        'פיקוד': '#ff7e00'
    };

    return (
        <div className="StepsBtnDiagram">
            <div className="all-steps-diagram">
                <div
                    className="step1-diagram"
                    id="step1-diagram"
                    onClick={() => navigate('/diagram')}
                    style={{ backgroundColor: backgroundColors[selectedOption] || '#d9d9d9' }}
                >
                    לבחירת מפקדה
                    {currentStep === 1 && (
                        <div
                            className="arrow-down-diagram"
                            style={{ borderTop: '12px solid #595959' }}
                        ></div>
                    )}
                </div>

                <div
                    className="btn-steps-diagram"
                    id="step2-diagram"
                    style={{ backgroundColor: currentStep >= 2 ? '#595959' : '#d9d9d9' }}
                    onClick={() => {
                        if (currentStep >= 2) {
                            navigate('/DiagramStep2', { state: { selectedOption } });
                        }
                    }}
                >
                    {step2Text}
                    {currentStep === 2 && (
                        <div
                            className="arrow-down-diagram"
                            style={{ borderTop: '12px solid #595959' }}
                        ></div>
                    )}
                </div>

                <div
                    className="btn-steps-diagram"
                    id="step3-diagram"
                    style={{ backgroundColor: currentStep >= 3 ? '#595959' : '#d9d9d9' }}
                >
                    {step3Text}
                    {currentStep === 3 && (
                        <div
                            className="arrow-down-diagram"
                            style={{ borderTop: '12px solid #595959' }}
                        ></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StepsBtnDiagram;
