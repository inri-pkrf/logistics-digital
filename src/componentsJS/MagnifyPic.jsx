import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../componentsCSS/MagnifyPic.css';

function MagnifyPic() {
    const location = useLocation();
    const navigate = useNavigate();
    const { imagePath, situation } = location.state || {}; // במקרה שאין state, נגדיר ערך ריק

    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        function checkOrientation() {
            if (window.innerWidth > window.innerHeight) {
                setIsLandscape(true);
            } else {
                setIsLandscape(false);
            }
        }

        checkOrientation(); // בדיקה ראשונית
        window.addEventListener("resize", checkOrientation);

        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    }, []);

    if (!imagePath) {
        return <div>Error: No image provided for magnification</div>;
    }

    // קביעת ה-class המתאים לפי כיוון המסך
    const imageClass = isLandscape 
        ? (situation === "נפה" ? "magnified-image-nafa-landscape" :
            situation === "גדוד" ? "magnified-image-gdud-landscape" :
            situation === "מחוז" ? "magnified-image-mahoz-landscape" :
            situation === "הערכת-מצב" ? "magnified-image-validation-landscape" : "")
        : (situation === "נפה" ? "magnified-image-nafa-portrait" :
            situation === "גדוד" ? "magnified-image-gdud-portrait" :
            situation === "מחוז" ? "magnified-image-mahoz-portrait" :
            situation === "הערכת-מצב" ? "magnified-image-validation-portrait" :
                situation === "training" ? "magnified-image-training-portrait" :
                situation === "fast" ? "magnified-image-fast-portrait" :  
                situation === "hapak" ? "magnified-image-hapak-portrait" :""
            );


    // קביעת ה-class לכפתור close
    const closeBtnClass = situation === "נפה" ? "close-btn-nafa" : isLandscape ? "close-btn-landscape" : "close-btn-portrait";

    return (
        <div className="MagnifyPic">

            <img src={process.env.PUBLIC_URL + '/assets/imgs/xBtnWhite.png'} alt="Close" className={`close-btn ${closeBtnClass}`} onClick={() => navigate(-1)}/>

            
            <img src={imagePath} alt="Magnified" className={imageClass} />
        </div>
    );
}  

export default MagnifyPic;
