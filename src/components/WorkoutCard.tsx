import React from 'react';
import { Dumbbell, CheckCircle } from 'lucide-react';
import { WorkoutDay } from '../data/workouts';

type WorkoutCardProps = {
  workout: WorkoutDay;
  onSelect: () => void;
  isCompleted: boolean;
};

export function WorkoutCard({ workout, onSelect, isCompleted }: WorkoutCardProps) {
  return (
    <div 
      onClick={onSelect}
      className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${workout.coverImage})`,
          filter: 'brightness(0.3)'
        }}
      />
      <div className="absolute top-4 right-4 z-10">
        {isCompleted && (
          <CheckCircle className="w-8 h-8 text-green-500" />
        )}
      </div>
      <div className="relative z-10 h-40 flex flex-col items-center justify-center text-white">
        <Dumbbell className="w-16 h-16 mb-2" />
        <h3 className="text-xl font-bold text-center">{workout.name}</h3>
        <p className="mt-2">{workout.exercises.length} exercícios</p>
      </div>
    </div>
  );
}