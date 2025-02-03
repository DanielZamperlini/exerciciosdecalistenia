import { useState, useEffect } from 'react';

type SetProgress = {
  completed: boolean;
  date: string;
};

type Progress = {
  [key: string]: {
    sets: SetProgress[];
    completed: boolean;
    date: string;
  };
};

export function useWorkoutProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem('workoutProgress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('workoutProgress', JSON.stringify(progress));
  }, [progress]);

  const markSetComplete = (exerciseId: string, setIndex: number) => {
    setProgress(prev => {
      const exerciseProgress = prev[exerciseId] || {
        sets: [],
        completed: false,
        date: new Date().toISOString()
      };

      const newSets = [...(exerciseProgress.sets || [])];
      while (newSets.length < setIndex + 1) {
        newSets.push({ completed: false, date: '' });
      }
      newSets[setIndex] = { completed: true, date: new Date().toISOString() };

      return {
        ...prev,
        [exerciseId]: {
          ...exerciseProgress,
          sets: newSets,
          completed: newSets.filter(set => set.completed).length === newSets.length,
          date: new Date().toISOString()
        }
      };
    });
  };

  const resetProgress = () => {
    setProgress({});
  };

  const getExerciseProgress = (exerciseId: string) => {
    return progress[exerciseId] || { sets: [], completed: false, date: '' };
  };

  const isExerciseCompleted = (exerciseId: string) => {
    return progress[exerciseId]?.completed || false;
  };

  return {
    progress,
    markSetComplete,
    resetProgress,
    getExerciseProgress,
    isExerciseCompleted
  };
}