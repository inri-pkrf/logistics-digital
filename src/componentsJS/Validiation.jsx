import React from 'react';
import '../componentsCSS/Validiation.css';
import { useNavigate } from 'react-router-dom';
// import StepsBtnDiagram from "./StepsBtnDiagram";

function Validiation() {
    const navigate = useNavigate();

    return (
        <div className="Validiation" >
            {/* <StepsBtnDiagram /> */}
            <div className='white-circle-Validiation'>
                <h1 className="titleVal">הערכת מצב</h1>
                <video className="video-val" controls autoPlay playsInline>
                <source src={`${process.env.PUBLIC_URL}/assets/media/Validiation.mp4`} type="video/mp4" />
                <track 
                default 
                kind="captions" 
                src={`${process.env.PUBLIC_URL}/assets/media/Validiation_subtitles_en.vtt`} 
                srclang="en" 
                label="English" 
                />
                Your browser does not support the video tag.
            </video>
                {/* <div className='navigation-btn'>
                    <div className='prev'>
                        <p>למסך הבית</p>
                    <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`}/>    
                          </div>
                    <div className='next'>
                    <p>לנושא הבא</p>

                    <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`}/>    

                    </div>

                </div> */}

            </div>

      

        </div>
    );
}

export default Validiation;