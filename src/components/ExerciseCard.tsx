import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Exercise } from '../data/workouts';

type ExerciseCardProps = {
  exercise: Exercise;
  onCompleteSet: (setIndex: number) => void;
  progress: {
    sets: { completed: boolean; date: string; }[];
    completed: boolean;
  };
};

export function ExerciseCard({ exercise, onCompleteSet, progress }: ExerciseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${exercise.videoId}`}
          title={exercise.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">{exercise.name}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {exercise.type === 'calisthenics' ? 'Calistenia' : 'Academia'}
          </span>
        </div>
        <p className="text-gray-600 mt-2">
          {exercise.sets} séries x {exercise.reps} repetições
        </p>
        
        <div className="mt-4 grid grid-cols-4 gap-2">
          {Array.from({ length: exercise.sets }).map((_, index) => (
            <button
              key={index}
              onClick={() => onCompleteSet(index)}
              disabled={progress.sets[index]?.completed}
              className={`p-2 rounded-lg flex items-center justify-center ${
                progress.sets[index]?.completed
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {progress.sets[index]?.completed ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                `Série ${index + 1}`
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}