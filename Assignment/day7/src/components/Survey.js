import React, { useState } from 'react';

function Survey() {
  // State variables for each survey question
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const responses = {
      question1: question1,
      question2: question2,
      question3: question3,
    };

    console.log('Survey Responses:', responses);
    // You can handle further actions such as sending this data to a server here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question1">What is your favorite color?</label>
        <input
          type="text"
          id="question1"
          value={question1}
          onChange={(e) => setQuestion1(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="question2">What is your favorite food?</label>
        <input
          type="text"
          id="question2"
          value={question2}
          onChange={(e) => setQuestion2(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="question3">What is your favorite hobby?</label>
        <input
          type="text"
          id="question3"
          value={question3}
          onChange={(e) => setQuestion3(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Survey;
