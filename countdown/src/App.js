import React from 'react'
import { useState, useEffect } from 'react';

const App = (props) => {

  const { initialMinute = 5, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [start,setStart]=useState(false);   
  
  const handleStop=()=>{
    setMinutes(initialMinute)
    setSeconds(initialSeconds)
  }

  const handleOnclick=()=>{
    setStart(!start)
  }

  useEffect(() => {
    if (start===true){
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds => seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
           clearInterval(myInterval)
        } else {
          setMinutes(minutes => minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  }
});
 
  return (
    <div className='loading'><div>
      <h2>{minutes}m {seconds}s</h2>
      </div>
      <div>
      <button className="btn" onClick={handleOnclick}>{start ? "Stop":"Start"}</button>
      <button className="btn" onClick={handleStop}>Reset</button>
      </div>
      {/* {minutes === 0 && seconds === 0
        ? null
        : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
      } */}
    </div>
  )
}

export default App