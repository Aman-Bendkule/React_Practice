import React from 'react';

function Question({ question, selectedAnswer, onAnswerChange }) {
  return (
    <div className="question">
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option) => (
          <li key={option}>
            <label>
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={selectedAnswer === option}
                onChange={() => onAnswerChange(question.id, option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
