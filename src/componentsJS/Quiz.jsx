import React, { useState, useEffect } from 'react';
import '../componentsCSS/Quiz.css';
import { useLocation } from 'react-router-dom';
import quizData from '../Data/QuizData';
import html2canvas from 'html2canvas';

const Quiz = () => {
  const location = useLocation();
  const { firstName, lastName } = location.state || {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);

  const currentQuestion = quizData[currentIndex];
  const progressWidth = `${((currentIndex + 1) / quizData.length) * 100}%`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex, isSubmitted]);

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = answer;
    setSelectedAnswers(newAnswers);

    const newScore = newAnswers.reduce((acc, ans, i) => acc + (ans === quizData[i].correctAnswer ? 8.5 : 0), 0);
    setScore(Math.min(newScore, 100));
  };

  const nextQuestion = () => {
    if (currentIndex < quizData.length - 1) setCurrentIndex(currentIndex + 1);
    else setIsSubmitted(true);
  };
  const prevQuestion = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);

  const finishQuiz = () => {
    setIsSubmitted(true);
    if (typeof window.reportComplete === "function") window.reportComplete();
    if (typeof window.finishTestSCROM === "function") window.finishTestSCROM(score, 70);
  };

  const retryQuiz = () => {
    setScore(0);
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setIsSubmitted(false);
    setShowMistakes(false);
  };

  const restartLesson = () => {
    sessionStorage.clear();
    localStorage.clear();
    setScore(0);
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setIsSubmitted(false);
    setShowMistakes(false);

    // ניווט ל־Intro ב־HashRouter
    window.location.hash = '/';
  };

  const captureAndShareScreenshot = () => {
    const element = document.querySelector('.results');
    html2canvas(element).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png');
      const byteString = atob(dataUrl.split(',')[1]);
      const arrayBuffer = new ArrayBuffer(byteString.length);
      const uintArray = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) uintArray[i] = byteString.charCodeAt(i);
      const blob = new Blob([uintArray], { type: 'image/png' });
      const file = new File([blob], "screenshot.png", { type: 'image/png' });

      if (navigator.share) navigator.share({ title: 'תוצאת הבוחן', text: 'הנה תוצאת הבוחן שלי!', files: [file] });
      else alert('הדפדפן שלך לא תומך בשיתוף');
    });
  };

  return (
    <div className="quiz-container">
      {!isSubmitted ? (
        <div id="quiz">
          <p className="question-number-q">שאלה {currentIndex + 1} מתוך {quizData.length}</p>
          <div className="progress-bar-container-q">
            <div className="progress-bar-q" style={{ width: progressWidth }}></div>
          </div>
          <p className="question-q">{currentQuestion.question}</p>
          <div className="answers-q">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                className={`answer-button-q ${selectedAnswers[currentIndex] === answer ? 'selected' : ''}`}
              >{answer}</button>
            ))}
          </div>
          <div className="navigation-buttons">
            <button onClick={prevQuestion} disabled={currentIndex === 0} className={currentIndex === 0 ? 'button-disabled' : 'prev-button'}>שאלה קודמת</button>
            <button onClick={currentIndex === quizData.length - 1 ? finishQuiz : nextQuestion} disabled={selectedAnswers[currentIndex] === undefined} className={selectedAnswers[currentIndex] === undefined ? 'button-disabled' : 'next-button'}>
              {currentIndex === quizData.length - 1 ? 'סיים את המשחק' : 'שאלה הבאה'}
            </button>
          </div>
        </div>
      ) : (
        <div className="results">
          <p className='score'>ציון: {score}</p>
          <p className="user-name">שם: {firstName} {lastName}</p>
          <button onClick={retryQuiz} className="try-button">נסו שוב</button>
          <button onClick={restartLesson} className="reset-btn">להתחלת הלומדה מחדש</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
