import React from 'react';

const QuizResults = ({ score, totalQuestions }) => {
  const calculateResult = () => {
    const percentage = (score / totalQuestions) * 100;

    if (percentage >= 80) {
      return 'Отличный результат!';
    } else if (percentage >= 60) {
      return 'Хороший результат!';
    } else {
      return 'Неплохой результат!';
    }
  };

  return (
    <div>
      <h3>Викторина завершена!</h3>
      <p>Твой счет: {score} из {totalQuestions}</p>
      <p>Результат: {calculateResult()}</p>
    </div>
  );
};

export default QuizResults;
