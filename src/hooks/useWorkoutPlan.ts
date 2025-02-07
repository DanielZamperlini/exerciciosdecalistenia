import { useState, useEffect } from 'react';
import { profiles } from '../data/workouts';
import { adjustExerciseForLevel } from '../data/workoutLevels';
import type { UserProfile } from '../types/profile';
import type { WorkoutDay, Exercise } from '../data/workouts';

export function useWorkoutPlan(userProfile: UserProfile) {
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutDay[]>([]);

  useEffect(() => {
    const baseProfile = profiles.find(p => p.id === userProfile.gender);
    if (!baseProfile) return;

    const adjustedWorkouts = baseProfile.workouts.map(workout => ({
      ...workout,
      exercises: workout.exercises.map(exercise => 
        adjustExerciseForLevel(exercise, userProfile.experienceLevel)
      )
    }));

    setWorkoutPlan(adjustedWorkouts);
  }, [userProfile]);

  return workoutPlan;
}