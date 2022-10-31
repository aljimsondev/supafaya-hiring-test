import React from "react";

function Timer() {
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState(0);
  const [playing, setTimerPlayState] = React.useState(false);
  const timerRef = React.useRef(0);
  const secondsRef = React.useRef<number>(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (!playing) return;
      setSeconds((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      //clean up
      clearInterval(timer);
    };
  }, [playing]);
  React.useEffect(() => {
    if (seconds > 59) {
      setSeconds(0);
      setMinutes((prevCount) => prevCount + 1);
    }
  }, [seconds]);

  const handleReset = () => {
    //add reset
    setSeconds(0);
    setMinutes(0);
    setTimerPlayState(false);
  };
  const handleStop = () => {
    setTimerPlayState(false);
  };
  const handlePlay = () => {
    setTimerPlayState(true);
  };

  return (
    <div>
      <h1>2. Create a Basic Timer</h1>
      <span>{minutes} mins </span>
      <span>{seconds} secs</span>
      <div className="button2">
        <button className="success" onClick={handlePlay}>
          Start
        </button>
        <button className="error" onClick={handleStop}>
          Stop
        </button>
        <button className="yellow" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
