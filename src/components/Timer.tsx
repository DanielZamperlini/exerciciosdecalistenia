import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2">
      <div className="font-mono text-xl">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <button
        onClick={toggleTimer}
        className="p-1 hover:bg-white/10 rounded-full transition-colors"
      >
        {isRunning ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>
      <button
        onClick={reset}
        className="p-1 hover:bg-white/10 rounded-full transition-colors"
      >
        <RotateCcw className="w-5 h-5" />
      </button>
    </div>
  );
}