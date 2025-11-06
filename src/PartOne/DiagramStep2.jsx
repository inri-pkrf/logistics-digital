import React, { useState } from 'react';
import './Styles/DiagramStep2.css';
import StepsBtnDiagram from "../componentsJS/StepsBtnDiagram.jsx";
import { useLocation, useNavigate } from 'react-router-dom';
import NafaData from '../Data/NafaData.js';
import GdudData from '../Data/GdudData.js';
import MahozData from '../Data/MahozData.js';
import PikudData from '../Data/PikudData.js';
import PopUp from '../componentsJS/PopUp.jsx';


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
    selectedOption === 'מחוז' ? MahozData :
    selectedOption === 'פיקוד' ? PikudData : null;
    const imgSrc=data.imgSrc;

    const handleToggleExplanation = (index) => {
        setExpandedExplanation(expandedExplanation === index ? null : index);
    };
    
    const handleImageClick = () => {
        navigate('/MagnifyPic', { state: { imagePath: imgSrc, situation: selectedOption } });
    };

    const handleFirstFrameClick = () => {
        const title = data.comandor.popupTitle;
        handleBoxClick(title, data.comandor.popupText);
    };
    const handleSeconedFrameClick = () => {
        const title = data.subComandor.taskTitle;
        handleBoxClick(title, data.subComandor.taskText);
    };
  const handleThirdFrameClick = () => {
    const title = data.subMalca.taskTitle;
 
    handleBoxClick(title, data.subMalca.taskNote);
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
                     <div className={`'whiteCircle2' ${
                selectedOption === "גדוד" ? "whiteCircle2-gdud" :
                selectedOption === "נפה" ? "whiteCircle2-nafa" :
                selectedOption === "מחוז" ? "whiteCircle2-mahoz" :
                 selectedOption === "פיקוד" ? "whiteCircle2-pikud":
                ""
                }`}>
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
                        {data[key].title} 
                        </div>
                        <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/nextBlack.png`}
                        className={`arrow-icon1 ${expandedExplanation === index ? 'rotated' : ''}`}
                        alt="Arrow"
                        />
                    </div>

                    {expandedExplanation === index && (
                        <div className="explanation-text-container">
                        <div className="explanation-text-scroll">
                            {Array.isArray(data[key].text)
                            ? data[key].text.map((text, idx) => <div key={idx}>{text}</div>)
                            : data[key].text
                            }
                        </div>
                        <p className='small-text-drop'>על מנת לקרוא את כל המלל יש לגלול למטה *</p>

                        </div>
                        
                    )}
                    </div>

                    ))}
            <hr className='dotted hr1' />
            {/* <div className='subText-step2'>{data.imgDescription}</div>
            <img
                src={data.imgSrc}
                className="stpe2Img"
                alt="Structure Diagram"
                onClick={handleImageClick}
            />
                        <div className='text-img'>אפשר להגדיל את עץ המבנה בלחיצה</div>
                        <hr className='dotted hr2' /> */}
            <div className='all-diagram'>
            <div className={`line ${
                selectedOption === "גדוד" ? "line-gdud" :
                selectedOption === "נפה" ? "line-nafa" :
                selectedOption === "מחוז" ? "line-mahoz" :
                selectedOption === "פיקוד" ? "line-pikud" :
                ""
                }`}>
            </div>
                {selectedOption !== "פיקוד" && <div className="small-line"></div>}      
                <div
                    className='first-frame'
                    onClick={handleFirstFrameClick}

                >
                    <img className='first-img' src={data.comandor.src}/>
                    {data.comandor.name}

                </div>
          {selectedOption !== "פיקוד" && (
            <div
                className='second-frame'
                onClick={() => {
                    if(selectedOption !== "מחוז" ){
                            handleSeconedFrameClick();
                    }
                    // if (selectedOption === "גדוד") {
                    //     navigate("/DiagramStep3Sub", {
                    //         state: {
                    //             subRoleName: data.subComandor.name,
                    //             selectedOption: selectedOption
                    //         }
                    //     });
                    // } else {
                    //     handleSeconedFrameClick();
                    // }
                }}
            >
                <img className='seconed-img' src={data.subComandor.src} />
                {data.subComandor.name}
            </div>
        )}


                {selectedOption === 'מחוז' && (
                    <div>
                        <div className="small-line2"></div>
                        <div
                        className='third-frame'
                        onClick={() => {
                        handleThirdFrameClick(); 
                        
                    }}
                > <img className='third-img' src={data.subMalca.srcSolider} alt="sub-role"/>
                    {data.subMalca.name}
                    </div>
                    </div>
                )}




                {data.subRoles.slice().map((subRole, index) => (
                <div 
                    onClick={() => {
                        if (selectedOption === "מחוז") {
                            navigate("/DiagramStep3Mahoz", {
                                state: { 
                                    subRoleName: subRole.name,    
                                    selectedOption: selectedOption 
                                }
                            });
                        } else {
                            navigate("/DiagramStep3", {
                                state: { 
                                    subRoleName: subRole.name,    
                                    selectedOption: selectedOption 
                                }
                            });
                        }
                    }}
                    key={index}
                    className='frame'
                >
                    <img className='third-img' src={subRole.srcSolider} alt={subRole.name} />
                    {subRole.name}
                </div>
            ))}
             <div className='navigation-btn'>
                    <div onClick={() => navigate("/diagram")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                   
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

export default DiagramStep2;