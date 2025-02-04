import React, { useState } from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import { profiles } from './data/workouts';
import { WorkoutCard } from './components/WorkoutCard';
import { ExerciseCard } from './components/ExerciseCard';
import { useWorkoutProgress } from './hooks/useWorkoutProgress';
import type { WorkoutDay } from './data/workouts';

function App() {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutDay | null>(null);
  const { markSetComplete, getExerciseProgress, resetProgress } = useWorkoutProgress();

  const isWorkoutCompleted = (workoutId: string) => {
    return selectedWorkout?.exercises.every(e => getExerciseProgress(e.id).completed) || false;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {selectedWorkout ? (
              <button
                onClick={() => setSelectedWorkout(null)}
                className="flex items-center gap-2 text-white hover:text-gray-200"
              >
                <ArrowLeft className="w-6 h-6" />
                Voltar
              </button>
            ) : (
              <h1 className="text-2xl font-bold">Meus Treinos</h1>
            )}
            <div className="flex items-center gap-4">
              {!selectedWorkout && (
                <div className="flex gap-2">
                  {profiles.map(profile => (
                    <button
                      key={profile.id}
                      onClick={() => setSelectedProfile(profile)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        selectedProfile.id === profile.id
                          ? 'bg-white text-blue-600'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <profile.icon className="w-5 h-5" />
                      {profile.name}
                    </button>
                  ))}
                </div>
              )}
              <button
                onClick={resetProgress}
                className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20"
              >
                <Trophy className="w-5 h-5" />
                Reiniciar Progresso
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {selectedWorkout ? (
          <div className="grid gap-6">
            {selectedWorkout.exercises.map(exercise => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onCompleteSet={(setIndex) => markSetComplete(exercise.id, setIndex)}
                progress={getExerciseProgress(exercise.id)}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedProfile.workouts.map(workout => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                onSelect={() => setSelectedWorkout(workout)}
                isCompleted={isWorkoutCompleted(workout.id)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;