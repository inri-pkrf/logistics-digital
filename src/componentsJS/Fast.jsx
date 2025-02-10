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
            <h1 class="titleFast">עקרונות הגיוס המהיר</h1>  

            <img className='fllow' src={`${process.env.PUBLIC_URL}/assets/imgs/fllow.jpg`} />


                <div className='navigation-btn-Ref'>
                    <div onClick={()=>navigate("/emergency")} className='prevRef'>
                        <p> לבחירת נושא</p>
                    <img className="arrow leftRef" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`}/>    
                          </div>
                    <div onClick={()=>navigate("/round")} className='nextRef'>
                    <p>לנושא הבא</p>

                    <img className="arrow rightRef" src={`${process.env.PUBLIC_URL}/assets/imgs/arrow.svg`}/>    

                    </div>

                </div>

            </div>

      

        </div>
    );
}

export default Fast;