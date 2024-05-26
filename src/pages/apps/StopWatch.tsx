import { useEffect, useState } from "react";
import AdminSideBar from "../../components/AdminSidebar";

const format = (timeInSeconds: number) => {
  timeInSeconds = Number(timeInSeconds);
  let hour = Math.floor(timeInSeconds / 3600);
  let min = Math.floor((timeInSeconds % 3600) / 60);
  let sec = Math.floor((timeInSeconds % 3600) % 60);

  const hourInString = hour.toString().padStart(2, "0");
  const minInString = min.toString().padStart(2, "0");
  const secInString = sec.toString().padStart(2, "0");

  return `${hourInString} : ${minInString} : ${secInString}`;
};

function StopWatch() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main className="dashboard-app-container">
        <h1>StopWatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{format(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>
              {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StopWatch;
