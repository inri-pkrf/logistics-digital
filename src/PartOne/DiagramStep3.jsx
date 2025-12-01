import React, { useState } from 'react';
import './Styles/DiagramStep3.css';
import StepsBtnDiagram from "../componentsJS/StepsBtnDiagram.jsx";
import { useLocation, useNavigate } from 'react-router-dom';
import NafaData from '../Data/NafaData.js';
import GdudData from '../Data/GdudData.js';
import MahozData from '../Data/MahozData.js';
import PikudData from '../Data/PikudData.js';
import PopUp from '../componentsJS/PopUp.jsx';

function DiagramStep3() {
    const location = useLocation();
    const navigate = useNavigate();

    const { subRoleName, selectedOption } = location.state || {};
    const [expandedExplanation, setExpandedExplanation] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({ title: '', content: '' });
    const data = 
    selectedOption === 'נפה' ? NafaData :
    selectedOption === 'גדוד' ? GdudData :
    selectedOption === 'מחוז' ? MahozData :
    selectedOption === 'פיקוד' ? PikudData : null;
    const handleImageClick = () => {
        navigate('/MagnifyPic', { state: { imagePath: subRole.treeSrc, situation: selectedOption } });
    };
    // מציאת ה-subRole לפי השם שהועבר
    const subRole = data?.subRoles.find(subRole => subRole.name === subRoleName);

    const handleToggleExplanation = (index) => {
        setExpandedExplanation(expandedExplanation === index ? null : index);
    };
   const circleClass = selectedOption === 'פיקוד'
    ? 'whiteCircle3-pikud'
    : (
        (subRole.firstRoleName === 'מפקד תא משא"ן' && selectedOption === 'נפה') ||
        selectedOption === 'גדוד'
    )
    ? 'whiteCircle3Dif'
    : 'whiteCircle3';

    
    const handleFirstFrameClick = () => {
        const title = subRole.taskTitle;
        handleBoxClick(title,subRole.taskNote);
    };
    const handleFrameClick = (role) => {
        handleBoxClick(role.popTitle, role.popNote);
    };
    const handleBoxClick = (title, content) => {
        setPopupContent({ title, content });
        setPopupVisible(true);
    };
   
    const closePopup = () => {
        setPopupVisible(false);
    };

    
    return (
        <div className="DiagramStep3">
            <div className={circleClass}>
                <StepsBtnDiagram currentStep={3} selectedOption={selectedOption} />
                
                {subRole.explanation.map((explanation, index) => (
               <div key={index} className="explanation-div-DiagramStep3">
                <div
                    className="explanation-title-wrapper-DiagramStep3"
                    onClick={() => handleToggleExplanation(index)}
                >
                    <div className="explanation-title-DiagramStep3">
                    {explanation.titleExplanation}
                    </div>
                    <img
                    src={`${process.env.PUBLIC_URL}/assets/imgs/nextBlack.png`}
                    className={`arrow-icon-diagram3 ${expandedExplanation === index ? 'rotated' : ''} ${index === 0 ? 'arrow-icon1-diagram3' : ''} ${index === 1 ? 'arrow-icon2-diagram3' : ''}`}
                    alt="Arrow"
                    />
                </div>

                {expandedExplanation === index && (
                    <div className="explanation-text-container3">
                    <div className="explanation-text-scroll3">
                        {Array.isArray(explanation.textExplanation)
                        ? explanation.textExplanation.map((text, idx) => <div key={idx}>{text}</div>)
                        : explanation.textExplanation
                        }
                    </div>
                    <p className='small-text-drop3'>על מנת לקרוא את כל המלל יש לגלול למטה *</p>
                    </div>
                )}
                </div>

            ))}
                <hr className='dotted hr1-step3' />
                <div className="roles-div-DiagramStep3">
                <div
                    key="first-role"
                    className={`role1-container-DiagramStep3 ${selectedOption === "גדוד" ? "active-role" : "inactive-role"}`}
                    onClick={() => {
                    if (selectedOption === "גדוד") {
                        handleFirstFrameClick();
                    }
                    }}
                    style={{ cursor: selectedOption === "גדוד" ? "pointer" : "default" }}
                >
                    <div className="role-DiagramStep3">
                    <img className='first-img-step3' src={subRole.srcSolider}/>

                        {subRole.firstRoleName}                     

                    </div>
                </div>

                {subRole.roles.map(role => (
                <div 
                    key={role.idRole} 
                    className="role-container-DiagramStep3"
                    // onClick={() => handleFrameClick(role)} // מעביר את ה-role שנלחץ
                >
                    <div className="role-DiagramStep3">
                        <img className='seconed-img-step3' src={role.src} />
                        {role.roleName} 
                    </div>
                </div>
            ))}
            </div>
            {/* <hr className='dotted hr2-step3' />
            <img
                src={subRole.treeSrc}
                className="stpe3Img"
                alt="Structure Diagram"
                onClick={handleImageClick}
            />
                 <div className='text3-img'>אפשר להגדיל את עץ המבנה בלחיצה</div> */}
                 <div
                className='btn-prev'
                onClick={() => {
                    navigate('/DiagramStep2', { state: { selectedOption } });
                    window.scrollTo(0, 0);
                }}
            >
                חזרה לבחירת תאים נוספים
            </div>
                <div className='navigation-btn'>
                    <div onClick={() => navigate("/DiagramStep2")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                   
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

export default DiagramStep3;
