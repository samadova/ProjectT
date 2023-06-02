import React, { useState } from 'react';
import QuizResults from './QuizResults';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const questions = [
    {
      question: 'Вопрос 1',
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
      correctAnswerIndex: 0
    },
  ];

  const handleAnswer = (selectedOptionIndex) => {
    if (isQuizComplete) {
      return; 
    }

    const currentQuestionData = questions[currentQuestion];

    if (selectedOptionIndex === currentQuestionData.correctAnswerIndex) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizComplete(true);
    }
  };

  const renderQuizContent = () => {
    if (isQuizComplete) {
      return (
        <QuizResults score={score} totalQuestions={questions.length} />
      );
    }

    const currentQuestionData = questions[currentQuestion];

    return (
      <div>
        <h3>Вопрос {currentQuestion + 1}</h3>
        <p>{currentQuestionData.question}</p>
        <ul>
          {currentQuestionData.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswer(index)}
              style={{ cursor: 'pointer', marginBottom: '8px' }}
            >
              {option}
            </li>
          ))}
        </ul>
        <p>Счет: {score}</p>
        <p>Прогресс: {currentQuestion + 1} из {questions.length}</p>
      </div>
    );
  };

  return (
    <div>
      {renderQuizContent()}
    </div>
  );
};

export default Quiz;