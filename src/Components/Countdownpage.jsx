import React, { useEffect, useState } from "react";

const Countdownpage = () => {
  // Set initial time (e.g. 20 days in seconds)
  const initialTime = 20 * 24 * 60 * 60; // 20 days in seconds

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert total seconds into days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex justify-center items-center h-screen bg-[linear-gradient(to_bottom,_rgba(30,87,153,1)_0%,_rgba(125,185,232,0)_100%)]">
      <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-lg shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
        <h1 className="text-4xl font-bold mb-6">Coming Soon</h1>
        <div className="flex gap-6 text-3xl font-mono text-white justify-center">
          <div> 
            <span className="text-5xl">{String(days).padStart(2, "0")}</span>
            <div className="text-base">Days</div>
          </div>
          <div>
            <span className="text-5xl">{String(hours).padStart(2, "0")}</span>
            <div className="text-base">Hours</div>
          </div>
          <div>
            <span className="text-5xl">{String(minutes).padStart(2, "0")}</span>
            <div className="text-base">Minutes</div>
          </div>
          <div>
            <span className="text-5xl">{String(seconds).padStart(2, "0")}</span>
            <div className="text-base">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdownpage;
