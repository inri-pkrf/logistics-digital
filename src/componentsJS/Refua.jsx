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
                <p>הסבר על הימ"ח</p>
                <img
            src={`${process.env.PUBLIC_URL}/assets/imgs/Container.jpg`}
            className="container-btn"
            onClick={()=>navigate("/Yamach")}
          />
            <p>יש ללחוץ על המחסנים על מנת ללמוד </p>

                <h1  className="sub-titleRef">שגרת אחזקה </h1>
                <p>הסבר הסבר הסבר הסבר </p>
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