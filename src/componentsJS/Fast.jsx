import React from 'react';
import '../componentsCSS/Fast.css';
import { useNavigate } from 'react-router-dom';
// import StepsBtnDiagram from "./StepsBtnDiagram";

function Fast() {
    const navigate = useNavigate();

    return (
        <div className="Fast" >
            {/* <StepsBtnDiagram /> */}
            <div className='white-circle-Fast'>
            <h1 className="titleFast">עקרונות הגיוס המהיר</h1>  

            <img className='fllow' src={`${process.env.PUBLIC_URL}/assets/imgs/fllow.jpg`} />


                <div className='navigation-btn-Fast'>
                    <div onClick={()=>navigate("/emergency")} className='prevFast'>
                        <p> לבחירת נושא</p>
                    <img className="arrow leftFast" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`}/>    
                          </div>
                    <div onClick={()=>navigate("/rounds")} className='nextFast'>
                    <p>לנושא הבא</p>

                    <img className="arrow-fast rightFast" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`}/>    

                    </div>

                </div>

            </div>

      

        </div>
    );
}

export default Fast;