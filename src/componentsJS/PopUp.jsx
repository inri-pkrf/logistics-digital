import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/PopUp.css';

const PopUp = ({ isVisible, onClose, title, content, imgSrc }) => {
    const navigate = useNavigate();

    if (!isVisible) {
        return null;
    }

    const handleImageClick = () => {
        const fullImagePath = `${process.env.PUBLIC_URL}${imgSrc}`;
        navigate('/MagnifyPic', { state: { imagePath: fullImagePath } });
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-close-button" onClick={onClose} >
                    <img src={process.env.PUBLIC_URL + '/assets/imgs/XBtn.png'} alt="Close" className="XBtn" />
                </div>
                <h2 className="popup-title" >{title}</h2>
                <div className="popup-body">
                    {imgSrc && (
                        <img
                            src={`${process.env.PUBLIC_URL}${imgSrc}`}
                            className="img-popUp"
                            alt="Pop-up Image"
                            onClick={handleImageClick}
                        />
                    )}
                    <div className="popup-body-text">
                        {content}
                    </div>
                </div>
                <p className='small-text'> על מנת לקרוא את כל המלל יש לגלול למטה *</p>
            </div>
        </div>
    );
};

export default PopUp;