import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/BackYard.css';

function BackYard() {
    const navigate = useNavigate();
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

    const imageClass = isLandscape ? 'Yard-back-landscape' : 'Yard-back-portrait';

    return (
        <div className="BackYard">
            <img
                src={`${process.env.PUBLIC_URL}/assets/imgs/BackYard.jpg`}
                className={imageClass}
                onClick={() => navigate("/BackYard")}
            />
             <button className="close-btn" onClick={() => navigate(-1)}>
                x
            </button>
        </div>
    );
}

export default BackYard;
