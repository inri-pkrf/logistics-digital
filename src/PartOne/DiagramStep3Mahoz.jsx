import React, { useState } from 'react';
import './Styles/DiagramStep3Mahoz.css';
import StepsBtnDiagram from "../componentsJS/StepsBtnDiagram.jsx";
import { useLocation, useNavigate } from 'react-router-dom';
import MahozData from '../Data/MahozData.js';
import PopUp from '../componentsJS/PopUp.jsx';

function DiagramStep3Mahoz() {
    const location = useLocation();
    const navigate = useNavigate();
  

    const { subRoleName, selectedOption } = location.state || {};
    const [expandedExplanation, setExpandedExplanation] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({ title: '', content: '' });
    const data =  MahozData;



    const handleImageClick = () => {
        navigate('/MagnifyPic', { state: { imagePath: subRole.treeSrc, situation: selectedOption } });
    };
    // מציאת ה-subRole לפי השם שהועבר
    const subRole = data.subRoles.find(subRole => subRole.name === subRoleName);
    console.log({subRole});

    const handleToggleExplanation = (index) => {
        setExpandedExplanation(expandedExplanation === index ? null : index);
    };
   
    
    const handleFirstFrameClick = () => {
        const title = subRole.taskTitle;
        handleBoxClick(title,subRole.taskNote);
    };
        
    const handleBoxClick = (title, content) => {
        setPopupContent({ title, content });
        setPopupVisible(true);
    };
    const closePopup = () => {
        setPopupVisible(false);
    };

    
    return (
        <div className="DiagramStep3Mahoz">
            <div className="whiteCircle3Mahoz">
                <StepsBtnDiagram currentStep={3} selectedOption={selectedOption} />
                
                {subRole.explanation.map((explanation, index) => (
                <div key={index} className="explanation-div-DiagramStep3Mahoz">
                    <div
                        className="explanation-title-wrapper-DiagramStep3Mahoz"
                        onClick={() => handleToggleExplanation(index)}
                    >
                        <div className="explanation-title-DiagramStep3Mahoz">
                            {explanation.titleExplanation}
                        </div>
                        <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/nextBlack.png`}
                        className={`arrow-icon ${expandedExplanation === index ? 'rotated' : ''} ${index === 0 ? 'arrow-icon1' : ''} ${index === 1 ? 'arrow-icon2' : ''}`}
                        alt="Arrow"
                    />

                    </div>
                    {expandedExplanation === index && (
                        <div className="explanation-text-DiagramStep3Mahoz">
                            {Array.isArray(explanation.textExplanation)
                                ? explanation.textExplanation.map((text, idx) => <div key={idx}>{text}</div>)
                                : explanation.textExplanation}
                        </div>
                    )}
                </div>
            ))}
                <hr className='dotted hr1-step3' />
                        <div className="roles-div-DiagramStep3Mahoz">
                {/* <div  onClick={handleFirstFrameClick}  key="first-role" className="role1-container-DiagramStep3Mahoz"> */}
                <div  key="first-role" className="role1-container-DiagramStep3Mahoz">
                    <div className="role-DiagramStep3Mahoz">
                    <img className='first-img-step3' src={subRole.srcSolider}/>

                        {subRole.firstRoleName}                     

                    </div>
                </div>

                {subRole.roles.map(role => (
                    <div key={role.idRole} className="role-container-DiagramStep3Mahoz">
                        <div className="role-DiagramStep3Mahoz">
                        <img className='seconed-img-step3' src={role.src}/>

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

export default DiagramStep3Mahoz;
