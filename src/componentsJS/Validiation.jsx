import React from 'react';
import '../componentsCSS/Validiation.css';
import { useNavigate } from 'react-router-dom';
import validations from '../data/Validation';
import SlideCards from "./SlideCards";

function Validiation() {
    const navigate = useNavigate();

    return (
        <div className="Validiation" >
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
            <div className="Val-first">
            <h1 className="sub-titleVal">{validations?.[0]?.name}</h1>
            <p className='explanationVal'>יש להחליק שמאל על גבי הכרטיסיה על מנת לעבור למשתתף הבא בהערכת מצב ולהחליק ימינה על מנת לחזור</p>
            <SlideCards people={validations?.[0]?.people} />

            </div>
            <div className="Val-seconed">
            <h1 className="sub-titleVal">{validations?.[1]?.name}</h1>
            <p className='explanationVal'>יש להחליק שמאל על גבי הכרטיסיה על מנת לעבור למשתתף הבא בהערכת מצב ולהחליק ימינה על מנת לחזור</p>
            <SlideCards people={validations?.[1]?.people} />

            </div>



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