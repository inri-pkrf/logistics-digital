import React from 'react';
import '../componentsCSS/Refua.css';
import { useNavigate } from 'react-router-dom';
// import StepsBtnDiagram from "./StepsBtnDiagram";

function Refua() {
    const navigate = useNavigate();

    return (
        <div className="Refua" >
            {/* <StepsBtnDiagram /> */}
            <div className='white-circle-Refua'>
                <h1 className="titleRef"> אמצעים  </h1>
                <h1 className="sub-titleRef">ציוד בימ"ח </h1>
                <div className='btn-container'>
                <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/container.png`}
            className="container-btn-blue"
            onClick={()=>navigate("/Yamach")}
          />
            <p className='container-text'>לחצו על מנת ללמוד על ציוד בימ"ח </p>
            </div>
           
                <h1  className="sub-titleRef-R">שגרת אחזקה </h1>
            <div className='btn-Routine'>
                <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/optimizing.png`}
            className="Routine-btn"
            onClick={()=>navigate("/Maintenance")}
          />
            <p className='Routine-text'> לחצו על מנת ללמוד על שגרת אחזקה  </p>
        </div>




                <div className='navigation-btn'>
                    <div onClick={() => navigate("/Ready")} className='prev'>
                        <p className='text-lable'> הקודם</p>
                        <img className="arrow right" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                    <div onClick={() => navigate("/training")} className='next'>
                        <p className='text-lable'>הבא</p>
                        <img className="arrow left" src={`${process.env.PUBLIC_URL}/assets/imgs/nextArrowGrey.png`} />
                    </div>
                </div>

            </div>

      

        </div>
    );
}

export default Refua;