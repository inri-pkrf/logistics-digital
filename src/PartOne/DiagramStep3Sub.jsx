import React, { useState } from 'react';
import './Styles/DiagramStep3Sub.css';
import StepsBtnDiagram from "../componentsJS/StepsBtnDiagram.jsx";
import { useLocation, useNavigate } from 'react-router-dom';
import NafaData from '../Data/NafaData.js';
import GdudData from '../Data/GdudData.js';
import MahozData from '../Data/MahozData.js';
import PopUp from '../componentsJS/PopUp.jsx';

function DiagramStep3Sub() {
    const location = useLocation();
    const navigate = useNavigate();

    const { subComandorName, selectedOption } = location.state || {};
    const [expandedExplanation, setExpandedExplanation] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState({ title: '', content: '' });
    const data = 
    selectedOption === 'נפה' ? NafaData :
    selectedOption === 'גדוד' ? GdudData :
    selectedOption === 'מחוז' ? MahozData : null;
    const handleImageClick = () => {
        navigate('/MagnifyPic', { state: { imagePath: subComandor.treeSrc, situation: selectedOption } });
    };
    // מציאת ה-subComandor לפי השם שהועבר
    const subComandor = data.subComandor;

   
  
    const handleFirstFrameClick = () => {
        const title = subComandor.taskTitle;
        handleBoxClick(title,subComandor.taskNote);
    };
        
    const handleBoxClick = (title, content) => {
        setPopupContent({ title, content });
        setPopupVisible(true);
    };
    const closePopup = () => {
        setPopupVisible(false);
    };

    
    return (
        <div className="DiagramStep3-sub">
            <div className="whiteCircle3Sub">
                <StepsBtnDiagram currentStep={3} selectedOption={selectedOption} />
                
                        <div className="roles-div-DiagramStep3-sub">
                <div  onClick={handleFirstFrameClick}  key="first-role" className="role1-container-DiagramStep3-sub">
                    <div className="role-DiagramStep3-sub">
                    <img className='first-img-step3' src={subComandor.src}/>

                        {subComandor.name}                     

                    </div>
                </div>

                {subComandor.roles.map(role => (
                    <div key={role.idRole} className="role-container-DiagramStep3-sub">
                        <div className="role-DiagramStep3-sub">
                        <img className='seconed-img-step3' src={role.src}/>

                            {role.roleName} 
                        </div>
                    </div>
                ))}
            </div>
            {/* <hr className='dotted hr2-step3' />
            <img
                src={subComandor.treeSrc}
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

export default DiagramStep3Sub;
