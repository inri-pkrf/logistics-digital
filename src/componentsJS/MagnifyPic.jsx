import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../componentsCSS/MagnifyPic.css';

function MagnifyPic() {
    const location = useLocation();
    const navigate = useNavigate();
    const { imagePath, situation } = location.state || {}; // במקרה שאין state, נגדיר ערך ריק

    if (!imagePath) {
        return <div>Error: No image provided for magnification</div>;
    }

    return (
        <div className="MagnifyPic" >
            <button className="close-btn" onClick={() => navigate(-1)}>
                x
            </button>
            <img src={imagePath} alt="Magnified" className={`magnified-image ${
            situation === "גדוד" ? "magnified-image-gdud" :
            situation === "נפה" ? "magnified-image-nafa" :
            situation === "מחוז" ? "magnified-image-mahoz" :
            ""
            }`} />
        </div>
    );
}

export default MagnifyPic;