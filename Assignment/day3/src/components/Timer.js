import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Start timer when component mounts
    const timerId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Clean up timer when component unmounts
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container text-center my-4">
      <h1>Timer</h1>
      <p className="display-4">{formatTime(seconds)}</p>
    </div>
  );
};

export default Timer;
