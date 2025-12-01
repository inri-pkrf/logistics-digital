import React from 'react';
import './Styles/Rounds.css';
import { useNavigate } from 'react-router-dom';
// import StepsBtnDiagram from "./StepsBtnDiagram";

function Rounds() {
    const navigate = useNavigate();
    const units = [
        "גדוד חילוץ - חוד חנית",
        "גדוד חילוץ -איתן",
       "גדוד יערה",
    //   ` פלוגות מהירות`,
        `גדוד אב"כ`,
    ];
    const handleNavigation = (unit) => {
        navigate('/BATTALIONS', { state: { unitName: unit } });
    };

    return (
        <div className="Rounds" >
            {/* <StepsBtnDiagram /> */}
            <div className='white-circle-Rounds'>
                <h1 className="titleRound">סבבי העמסה</h1>
                <p className='explainRound'>  יש ללחוץ על הגדודים על מנת ללמוד עליהם</p>
                <div className='units-buttons'>
                    {units.map((unit, index) => (
                        <button 
                            key={index} 
                            className={`unit-button ${index % 2 === 0 ? 'right' : 'left'}`}
                            onClick={() => handleNavigation(unit)}
                        >
                            {unit}
                        </button>
                    ))}
                </div>
                <div className='navigation-btn'>
                    <div onClick={() => navigate("/emergency")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                    <div onClick={() => navigate("/war")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                </div>

            </div>

      

        </div>
    );
}

export default Rounds;