import React, { useState } from 'react';
import '../componentsCSS/Fast.css';
import { useNavigate } from 'react-router-dom';

function Fast() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Fast">
            <div className='white-circle-Fast'>
                <h1 className="titleFast">עקרונות הגיוס המהיר</h1>  
                        <img
                            className='fllow'
                            src={`${process.env.PUBLIC_URL}/assets/imgs/fllow.png`}
                            alt="Flow Diagram"
                        />
              {/* <div className="open-img-wrapper-Fast">
                <div className="open-img-title-Fast" onClick={toggleDiv}>
                    <p className='img-title-text'>לחץ להצגת הדיאגרמה</p>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/imgs/nextBlack.png`}
                        className={`arrow-icon-Fast ${isOpen ? 'rotated' : ''}`}
                        alt="Arrow"
                    />
                </div>

                {isOpen && (
                    <div className="img-content-Fast">
                        <img
                            className='fllow'
                            src={`${process.env.PUBLIC_URL}/assets/imgs/fllow.png`}
                            alt="Flow Diagram"
                        />
                    </div>
                )}
            </div> */}



                <div className='navigation-btn'>
                    <div onClick={() => navigate("/emergency")} className='prev'>
                        <p className='text-lable'>הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="Previous" />
                    </div>
                    <div onClick={() => navigate("/rounds")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} alt="Next" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fast;
