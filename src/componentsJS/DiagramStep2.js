import React, { useState } from 'react';
import '../componentsCSS/DiagramStep2.css';
import StepsBtnDiagram from "./StepsBtnDiagram.js";
import { useLocation, useNavigate } from 'react-router-dom';
import NafaData from '../data/NafaData';
import GdudData from '../data/GdudData';
import MahozData from '../data/MahozData';



function DiagramStep2() {
     const location = useLocation();
    const navigate = useNavigate();
    const [expandedExplanation, setExpandedExplanation] = useState(null);
    
    const selectedOption = location.state?.selectedOption || '';
    const data = 
    selectedOption === 'נפה' ? NafaData :
    selectedOption === 'גדוד' ? GdudData :
    selectedOption === 'מחוז' ? MahozData : null;
    const imgSrc=data.imgSrc;

    const handleToggleExplanation = (index) => {
        setExpandedExplanation(expandedExplanation === index ? null : index);
    };
    
    const handleImageClick = () => {
        navigate('/MagnifyPic', { state: { imagePath: imgSrc } });
    };
    


    return (
        <div className="DiagramStep2" >
                     <div className="white-circle2">
                     <StepsBtnDiagram currentStep={2} selectedOption />
                     <div className='title-DiagramStep2'>
                          {data.pageTitle}
                          <br></br>
                          <span style={{ color: data.color }}>ב{selectedOption}</span>
                          </div>
                       
                        {['desteny', 'tasks'].map((key, index) => (
                    <div key={index} className="explanation-div-DiagramStep2">
                        <div
                        className="explanation-title-wrapper-DiagramStep2"
                        onClick={() => handleToggleExplanation(index)}
                        >
                        <div className="explanation-title-DiagramStep2">
                            {data[key].title} {/* ניגשים למידע מתוך data */}
                        </div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/imgs/nextBlack.png`}
                            className={`arrow-icon1 ${expandedExplanation === index ? 'rotated' : ''}`}
                            alt="Arrow"
                        />
                        </div>
                        {expandedExplanation === index && (
                        <div className="explanation-text-DiagramStep2">
                            {Array.isArray(data[key].text)
                            ? data[key].text.map((text, idx) => <div key={idx}>{text}</div>)
                            : data[key].text}
                        </div>
                        )}
                    </div>
                    ))}
                                <hr className='dotted hr1' />
            <img
                src={data.imgSrc}
                className="stpe2Img"
                alt="Structure Diagram"
                onClick={handleImageClick}
            />



</div>
                        




        </div>
    );
}

export default DiagramStep2;