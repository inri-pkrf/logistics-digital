import React from 'react';
import '../componentsCSS/DiagramStep1.css';
import { useNavigate } from 'react-router-dom';
// import StepsBtnDiagram from "./StepsBtnDiagram";

function DiagramStep1() {
    const navigate = useNavigate();

    return (
        <div className="DiagramStep1" >
            {/* <StepsBtnDiagram /> */}
            <div className='white-circle'>

            <div className='title-DiagramStep1'>בחר/י במפקדה הרצוייה</div>

            <div className='btns-DiagramStep1' id='btn1-DiagramStep1' onClick={() => navigate('/DiagramStep2', { state: { selectedOption: 'נפה' } })}>
            <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/NafaComandor.svg`}
        className="Nafa-chose"
        alt="logo"
      />
      <p className="text-choose text-nafa">נפה</p>
      
            </div>
            <div className='btns-DiagramStep1' id='btn1-DiagramStep2' onClick={() => navigate('/DiagramStep2', { state: { selectedOption: 'גדוד' } })}>
            <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/GdudComandor.svg`}
        className="Nafa-chose"
        alt="logo"
      />
      <p className="text-choose text-gdud">גדוד</p>
            </div>
            <div className='btns-DiagramStep1' id='btn1-DiagramStep3' onClick={() => navigate('/DiagramStep2', { state: { selectedOption: 'מחוז' } })}>
            <img
        src={`${process.env.PUBLIC_URL}/assets/imgs/MahozComandor.svg`}
        className="Nafa-chose"
        alt="logo"
      />
      <p className="text-choose text-mahoz">מחוז</p>
            </div>
            </div>

      

        </div>
    );
}

export default DiagramStep1;