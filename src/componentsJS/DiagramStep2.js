import React, { useState } from 'react';
import '../componentsCSS/DiagramStep2.css';
import StepsBtnDiagram from "./StepsBtnDiagram.js";
import { useLocation, useNavigate } from 'react-router-dom';



function DiagramStep2() {
    const navigate = useNavigate();

    return (
        <div className="DiagramStep2" >
                     <div className="white-circle2">
                     <StepsBtnDiagram currentStep={2} selectedOption />
 
                        </div>


        </div>
    );
}

export default DiagramStep2;