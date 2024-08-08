import React, { useState } from 'react';
import Question from './Question';
import '../assets/css/quiz.css';

const questions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    id: 2,
    text: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    id: 3,
    text: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'J.K. Rowling'],
    answer: 'Harper Lee',
  },
];

function Quiz() {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOption,
    });
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      if (answers[question.id] === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Application</h1>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          selectedAnswer={answers[question.id]}
          onAnswerChange={handleAnswerChange}
        />
      ))}
      <div className="result">
        <h2>Your Score: {calculateScore()} / {questions.length}</h2>
      </div>
    </div>
  );
}

export default Quiz;
