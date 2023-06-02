import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'Вопрос 1',
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
      correctAnswerIndex: 0
    },

  ];

  const handleAnswer = (selectedOptionIndex) => {
    const currentQuestionData = questions[currentQuestion];

    if (selectedOptionIndex === currentQuestionData.correctAnswerIndex) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
    }
  };

  return (
    <div>
      <h3>Вопрос {currentQuestion + 1}</h3>
      <p>{questions[currentQuestion].question}</p>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
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
    </div>
  );
};

export default Quiz;
