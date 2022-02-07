import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import SectionTitle from "../SectionTitle";
// import { CHANGE_TIMER } from "../../store/actions/actionTypes";

export default function Countdown() {
  // const dispatch = useDispatch();
  const [publicsaledate, setPublicsaledate] = useState(new Date("12 January 2022 16:00:00 UTC").getTime());
  const [timerInterval, setTimerInterval] = useState(null);
  const [publicSale, setPublicSale] = useState(false);
  const [time, setTime] = useState([
    { text: "days", value: 0 },
    { text: "hours", value: 0 },
    { text: "minutes", value: 0 },
    { text: "seconds", value: 0 },
  ]);

  // dispatch({type: CHANGE_TIMER, payload: false});

  useEffect(() => {
    updateTime();
    setTimerInterval(setInterval(updateTime, 1000));
    return () => {
      if (timerInterval !== null) {
        clearInterval(timerInterval);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicsaledate]) 

  const updateTime = () => {
    // console.log(publicsaledate)
    let timeleft = publicsaledate - Date.now();
    if (timeleft > 0) {
      setTime([
        {
          text: "days", 
          value: Math.floor(timeleft / (1000 * 60 * 60 * 24))
        },
        { 
          text: "hours", 
          value: Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) 
        },
        { 
          text: "minutes", 
          value: Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
        },
        { 
          text: "seconds", 
          value: Math.floor((timeleft % (1000 * 60)) / 1000)
        },
      ]);
    }

    if (timeleft < 0) {
      setPublicSale(true);
      setPublicsaledate(new Date("13 January 2022 16:00:00 UTC").getTime())
    }
  }
  return (
    <div className="container">
      <SectionTitle 
        titanium 
        animate 
        large 
        title={publicSale ? `PUBLIC SALE` : `PRE SALE`}
      ></SectionTitle>
      <div data-aos="zoom-in" className="row">
        <div className="col-12 countdown">
          {time.map((block, index) => (
            <div
              key={index}
              className="countdown__block"
            >
              <h4 className="countdown__title text--xxl text--purple">
                { block.value }
              </h4>
              <p className="countdown__subtitle text--teal text--small">
                { block.text }
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}