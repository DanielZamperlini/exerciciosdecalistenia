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
    const workout = selectedProfile.workouts.find(w => w.id === workoutId);
    return workout?.exercises.every(e => getExerciseProgress(e.id).completed) || false;
  };

  const renderTips = () => {
    if (selectedProfile.id === 'male') {
      return (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Dicas para maximizar os resultados:</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="font-medium mr-2">Progressão de carga:</span>
              Aumente o peso dos halteres ou a dificuldade dos exercícios conforme for evoluindo.
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Descanso:</span>
              Descanse 45 a 60 segundos entre as séries.
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Alimentação:</span>
              Consuma proteínas suficientes (carne, ovos, whey) e carboidratos complexos (arroz, batata, aveia) para recuperação e crescimento muscular.
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Consistência:</span>
              Siga o plano por pelo menos 8 semanas para ver resultados significativos.
            </li>
          </ul>
          <p className="mt-4 font-bold text-blue-600">Bons treinos!</p>
        </div>
      );
    } else {
      return (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Dicas para maximizar os resultados:</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="font-medium mr-2">Progressão:</span>
              Aumente a resistência da faixa elástica ou o peso dos halteres conforme for evoluindo.
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Descanso:</span>
              Descanse 30 a 45 segundos entre as séries.
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Alimentação:</span>
              Mantenha uma dieta equilibrada, com proteínas (ovos, frango, peixe), carboidratos integrais (arroz, batata-doce) e gorduras boas (abacate, castanhas).
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Hidratação:</span>
              Beba água antes, durante e após os treinos.
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">Consistência:</span>
              Siga o plano por pelo menos 8 semanas para ver resultados significativos.
            </li>
          </ul>
          <p className="mt-4 font-bold text-blue-600">Bons treinos!</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between flex-wrap">
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
            <div className="flex items-center gap-4 flex-wrap mt-2">
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

      <footer className="max-w-4xl mx-auto px-4 pb-8">
        {renderTips()}
      </footer>
    </div>
  );
}

export default App;