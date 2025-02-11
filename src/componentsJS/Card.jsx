import React from 'react';
import '../componentsCSS/Card.css';

function Card({ content }) {
    return (
        <div className="Card">
            <p>{content}</p> {/* הצגת התוכן שנבחר */}
        </div>
    );
}

export default Card;
