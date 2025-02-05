import React, { useState } from 'react';
import '../componentsCSS/DiagramStep2.css';
import StepsBtnDiagram from "./StepsBtnDiagram.js";
import { useLocation, useNavigate } from 'react-router-dom';
import NafaData from '../data/NafaData';
import GdudData from '../data/GdudData';
import MahozData from '../data/MahozData';
import PopUp from './PopUp.js';


function DiagramStep2() {
     const location = useLocation();
    const navigate = useNavigate();
    const [expandedExplanation, setExpandedExplanation] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({ title: '', content: '' });
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

    const handleFirstFrameClick = () => {
        const title = data.comandor.popupTitle;
        handleBoxClick(title, data.comandor.popupText);
    };
    
      const handleBoxClick = (title, content) => {
        setPopupContent({ title, content });
        setPopupVisible(true);
    };
    const closePopup = () => {
        setPopupVisible(false);
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
            <div className='subText-step2'>{data.imgDescription}</div>
            <img
                src={data.imgSrc}
                className="stpe2Img"
                alt="Structure Diagram"
                onClick={handleImageClick}
            />
                        <div className='text-img'>אפשר להגדיל את עץ המבנה בלחיצה</div>
                        <hr className='dotted hr2' />
            <div className='all-diagram'>
            <div className={`line ${
                selectedOption === "גדוד" ? "line-gdud" :
                selectedOption === "נפה" ? "line-nafa" :
                selectedOption === "מחוז" ? "line-mahoz" :
                ""
                }`}>
</div>
                <div className="small-line"></div>
                <div
                    className='first-frame'
                    onClick={handleFirstFrameClick}

                >
                    <img className='first-img' src={data.comandor.src}/>
                    {data.comandor.name}

                </div>
                <div
                    className='second-frame'
                >
                    <img className='seconed-img' src={data.subComandor.src}/>
                    {data.subComandor.name}

                </div>
                {data.subRoles.slice().reverse().map((subRole, index) => (
                <div
                    key={index}
                    className='frame'
                >
                            <img className='third-img' src={subRole.srcSolider}/>

                {subRole.name}
    </div>
))}


{/* 
                <div
                    className='second-frame'
                    style={{ backgroundColor: secondColor }}
                >
                    {selectedData.strings[1]}
                </div>


                {selectedData.strings.slice(2).map((text, index) => (
                    <div
                        key={index}
                        className='frame'
                        style={{ backgroundColor: restColor }}
                        onClick={() => {
                            const targetComponent = selectedOption === 'נפה' ? '/DiagramStep3Nafa' : '/DiagramStep3Mahoz';
                            navigate(targetComponent, { state: { title: text, selectedOption } });
                        }}
                    >
                        {text}
                    
                    </div>
                ))} */}
            </div>
            </div>



            <PopUp
                isVisible={isPopupVisible}
                onClose={closePopup}
                title={popupContent.title}
                content={popupContent.content}
            /> 
</div>
                        
    );
}

export default DiagramStep2;