import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trophy, X, Dumbbell, Utensils } from 'lucide-react';
import { profiles } from './data/workouts';
import { WorkoutCard } from './components/WorkoutCard';
import { ExerciseCard } from './components/ExerciseCard';
import { NutritionCard } from './components/NutritionCard';
import { useWorkoutProgress } from './hooks/useWorkoutProgress';
import { nutritionPlans } from './data/nutrition';
import type { WorkoutDay } from './data/workouts';

type UserPreferences = {
  name: string;
  gender: 'male' | 'female';
};

type View = 'workouts' | 'nutrition';

function App() {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutDay | null>(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [currentView, setCurrentView] = useState<View>('workouts');
  const [userPreferences, setUserPreferences] = useState<UserPreferences>(() => {
    const saved = localStorage.getItem('userPreferences');
    return saved ? JSON.parse(saved) : null;
  });
  
  const selectedProfile = profiles.find(p => p.id === userPreferences?.gender) || profiles[0];
  const nutritionPlan = nutritionPlans[userPreferences?.gender || 'male'];
  
  const { markSetComplete, getExerciseProgress, resetProgress } = useWorkoutProgress();

  useEffect(() => {
    if (!userPreferences) {
      setShowWelcomeModal(true);
    }
  }, [userPreferences]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      if (selectedWorkout) {
        setSelectedWorkout(null);
        window.history.pushState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.history.pushState(null, '', window.location.pathname);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [selectedWorkout]);

  const handleSavePreferences = (name: string, gender: 'male' | 'female') => {
    const preferences = { name, gender };
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    setUserPreferences(preferences);
    setShowWelcomeModal(false);
  };

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

  const WelcomeModal = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState<'male' | 'female'>('male');

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bem-vindo(a)!</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Seu nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Seu gênero
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setGender('male')}
                  className={`px-4 py-2 rounded-lg border ${
                    gender === 'male'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Masculino
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`px-4 py-2 rounded-lg border ${
                    gender === 'female'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Feminino
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => handleSavePreferences(name, gender)}
            disabled={!name}
            className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
          >
            Começar
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {showWelcomeModal && <WelcomeModal />}
      
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              {selectedWorkout ? (
                <button
                  onClick={() => setSelectedWorkout(null)}
                  className="flex items-center gap-2 text-white hover:text-gray-200"
                >
                  <ArrowLeft className="w-6 h-6" />
                  Voltar
                </button>
              ) : (
                <>
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Meus Treinos</h1>
                    {userPreferences && (
                      <p className="text-sm text-white/90">Olá, {userPreferences.name}!</p>
                    )}
                  </div>
                  <button
                    onClick={resetProgress}
                    className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20"
                  >
                    <Trophy className="w-5 h-5" />
                    <span className="hidden sm:inline">Reiniciar Progresso</span>
                    <span className="sm:hidden">Reiniciar</span>
                  </button>
                </>
              )}
            </div>
            
            {!selectedWorkout && (
              <div className="flex justify-end">
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentView('workouts')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      currentView === 'workouts'
                        ? 'bg-white text-blue-600'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Dumbbell className="w-5 h-5" />
                    <span className="hidden sm:inline">Treinos</span>
                    <span className="sm:hidden">Treinar</span>
                  </button>
                  <button
                    onClick={() => setCurrentView('nutrition')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      currentView === 'nutrition'
                        ? 'bg-white text-blue-600'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Utensils className="w-5 h-5" />
                    <span className="hidden sm:inline">Alimentação</span>
                    <span className="sm:hidden">Dieta</span>
                  </button>
                </div>
              </div>
            )}
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
          <>
            {currentView === 'workouts' ? (
              <>
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
                <footer className="mt-8">
                  {renderTips()}
                </footer>
              </>
            ) : (
              <div className="grid gap-8">
                {nutritionPlan.map((plan, index) => (
                  <NutritionCard key={index} plan={plan} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;