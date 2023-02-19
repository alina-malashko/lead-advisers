import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss';

const Timer = () => {
  const date = new Date('May 31 2023 00:00:00 GMT+03:00');
  const [deadline] = useState(date);
  const [time, setTime] = useState(['00', '00', '00', '00']);
  const [counter, setCounter] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [timerId, setTimerId] = useState(null);
  useEffect(() => {
    const today = new Date();
    let timeLeft = deadline - today;
    if (timeLeft <= 0) {
      setIsTimeout(true);
      return;
    }
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    let seconds = Math.floor((timeLeft / 1000) % 60);
    setTime([
      days,
      hours,
      minutes,
      seconds
    ]);
  }, [counter, deadline]);

  useEffect(() => {
    if (isTimeout) clearInterval(timerId);
  }, [isTimeout, timerId]);

  useEffect(() => {
    const timer = setInterval(() => setCounter(!counter), 1000);
    setTimerId(timer);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className={styles.timer}>
      {time.map((item, index) => {
        if (item < 10) item = '0' + item;
        return <div className={styles.timer__item} key={index}>{item}</div>
      })}
    </div>
  );
};

export default Timer;