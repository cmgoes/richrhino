import { useEffect, useState } from "react"

export default function Flipcard({animate, interval}) {
  const [flip, setFlip] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    if (animate) {
      let intervalValue = 1000;
      if (interval !== 0) {
        intervalValue = interval;
      }
      let flipvalue = false;
      setTimerInterval(setInterval(() => {
        flipvalue = !flipvalue;
        setFlip(flipvalue);
      }, intervalValue));
    }
    return () => {
      if (animate) {
        clearInterval(timerInterval);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  } , []);

  return (
    <div className={`flip-card ${flip ? 'flip-card--flip' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/images/png/flipcard/1.png" width="100%" alt="" />
        </div>
        <div className="flip-card-back">
          <img src="/images/png/flipcard/2.png" width="100%" alt="" />
        </div>
      </div>
    </div>
  )
}