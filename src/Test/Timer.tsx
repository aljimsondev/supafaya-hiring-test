import React from "react";

function Timer() {
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState(0);
  const [playing, setTimerPlayState] = React.useState(false);

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
      <div className="inline">
        <span className="mr-1">
          <h3>{minutes} mins </h3>
        </span>
        <span>
          <h3>{seconds} secs</h3>
        </span>
      </div>
      <div className="button2">
        <button className="success mr-1" onClick={handlePlay}>
          Start
        </button>
        <button className="error mr-1" onClick={handleStop}>
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
