import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCSS/FinalScreen.css';

function FinalScreen() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleStartQuiz = () => {
    navigate('/quiz', { state: { firstName, lastName } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // בדיקה אם כל השדות מלאים
    if (firstName.trim() === '' || lastName.trim() === '') {
      setError('יש למלא את כל השדות');
      return;
    }

    // אם הכל מלא – מאפסים שגיאות וממשיכים
    setError('');
    handleStartQuiz();
  };

  return (
    <div id="final-screen">
      <p className="blue-text-final">כל הכבוד<br /> הגעת לסיום הלומדה</p>
      <p className="grey-big-final">שנעבור לבדוק מה הצלחת לזכור?</p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="first-name" className="input-label">שם פרטי:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="הכניסו שם פרטי"
            className="input-field"
          />
        </div>

        <div className="input-container">
          <label htmlFor="last-name" className="input-label">שם משפחה:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="הכניסו שם משפחה"
            className="input-field"
          />
        </div>

{error && <p style={{ color: 'white', fontSize :'7vmin',fontWeight:'bold',fontFamily:'Assistant' }} className="error-message">{error}</p>}

        <button type="submit" className="button-final">
          למבחן
        </button>
      </form>
    </div>
  );
}

export default FinalScreen;
