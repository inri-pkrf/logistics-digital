import React from 'react';
import './Styles/DiagramStep1.css';
import { useNavigate } from 'react-router-dom';

function DiagramStep1() {
    const navigate = useNavigate();

    return (
        <div className="DiagramStep1">
            <div className='white-circle'>
                <button className='menu-back' onClick={()=> navigate('/menu')}> חזרה לעמוד הבית</button>
                <div className='title-DiagramStep1'>בחר/י במפקדה הרצוייה</div>

                <div className="buttons-diagrm1">
                    <div className='btns-DiagramStep1' id='btn1-DiagramStep1' onClick={() => navigate('/DiagramStep2', { state: { selectedOption: 'פיקוד' } })}>
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/PikudComandor.svg`} className="Nafa-chose" alt="logo" />
                        <p className="text-choose text-pikud">פיקוד</p>
                    </div>

                    <div className='btns-DiagramStep1' id='btn2-DiagramStep1' onClick={() => navigate('/DiagramStep2', { state: { selectedOption: 'מחוז' } })}>
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/MahozComandor.svg`} className="Nafa-chose" alt="logo" />
                        <p className="text-choose text-mahoz">מחוז</p>
                    </div>

                    <div className='btns-DiagramStep1' id='btn3-DiagramStep1' onClick={() => navigate('/DiagramStep2', { state: { selectedOption: 'נפה' } })}>
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/NafaComandor.svg`} className="Nafa-chose" alt="logo" />
                        <p className="text-choose text-nafa">נפה</p>
                    </div>

                    <div className='btns-DiagramStep1' id='btn4-DiagramStep1' onClick={() => navigate('/DiagramStep2', { state: { selectedOption: 'גדוד' } })}>
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/GdudComandor.svg`} className="Nafa-chose" alt="logo" />
                        <p className="text-choose text-gdud">גדוד</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default DiagramStep1;
