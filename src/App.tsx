import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trophy, X, Dumbbell, Utensils, User } from 'lucide-react';
import { profiles } from './data/workouts';
import { WorkoutCard } from './components/WorkoutCard';
import { ExerciseCard } from './components/ExerciseCard';
import { NutritionCard } from './components/NutritionCard';
import { ProfileStats } from './components/ProfileStats';
import { SettingsMenu } from './components/SettingsMenu';
import { useWorkoutProgress } from './hooks/useWorkoutProgress';
import { nutritionPlans } from './data/nutrition';
import type { WorkoutDay } from './data/workouts';
import type { UserProfile, BodyMeasurements } from './types/profile';
import { Timer } from './components/Timer';

type View = 'workouts' | 'nutrition' | 'profile';

function App() {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutDay | null>(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [currentView, setCurrentView] = useState<View>('workouts');
  const [isScrolled, setIsScrolled] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('userProfile');
    return saved ? JSON.parse(saved) : null;
  });
  
  const selectedWorkoutPlan = profiles.find(p => p.id === userProfile?.gender) || profiles[0];
  const nutritionPlan = nutritionPlans[userProfile?.gender || 'male'];
  
  const { markSetComplete, getExerciseProgress, resetProgress } = useWorkoutProgress();

  useEffect(() => {
    if (!userProfile) {
      setShowWelcomeModal(true);
    }
  }, [userProfile]);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveProfile = (profile: UserProfile) => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setUserProfile(profile);
    setShowWelcomeModal(false);
  };

  const handleUpdateMeasurements = (measurements: BodyMeasurements) => {
    if (userProfile) {
      const updatedProfile = {
        ...userProfile,
        measurements: [measurements, ...(userProfile.measurements || [])]
      };
      localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
      setUserProfile(updatedProfile);
    }
  };

  const handleResetAll = () => {
    localStorage.clear();
    setUserProfile(null);
    resetProgress();
    setShowWelcomeModal(true);
  };

  const isWorkoutCompleted = (workoutId: string) => {
    const workout = selectedWorkoutPlan.workouts.find(w => w.id === workoutId);
    return workout?.exercises.every(e => getExerciseProgress(e.id).completed) || false;
  };

  const renderTips = () => {
    if (selectedWorkoutPlan.id === 'male') {
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
      {showWelcomeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Bem-vindo(a)!</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Idade
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Idade"
                    defaultValue={25}
                    min="14"
                    max="100"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gênero
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    defaultValue="male"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="Peso"
                    defaultValue={70}
                    min="30"
                    max="300"
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    placeholder="Altura"
                    defaultValue={170}
                    min="100"
                    max="250"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Objetivo
                </label>
                <select
                  id="goal"
                  name="goal"
                  defaultValue="general_fitness"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="weight_loss">Perda de peso</option>
                  <option value="muscle_gain">Ganho de massa muscular</option>
                  <option value="general_fitness">Condicionamento geral</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nível de Experiência
                </label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  defaultValue="beginner"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="beginner">Iniciante</option>
                  <option value="intermediate">Intermediário</option>
                  <option value="advanced">Avançado</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => {
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const age = parseInt((document.getElementById('age') as HTMLInputElement).value || '25');
                const gender = (document.getElementById('gender') as HTMLSelectElement).value as 'male' | 'female';
                const weight = parseFloat((document.getElementById('weight') as HTMLInputElement).value || '70');
                const height = parseInt((document.getElementById('height') as HTMLInputElement).value || '170');
                const goal = (document.getElementById('goal') as HTMLSelectElement).value as 'weight_loss' | 'muscle_gain' | 'general_fitness';
                const experienceLevel = (document.getElementById('experienceLevel') as HTMLSelectElement).value as 'beginner' | 'intermediate' | 'advanced';
                
                // Create default measurements to avoid null/undefined
                const defaultMeasurements = {
                  date: new Date().toISOString(),
                  weight: weight,
                  chest: 0,
                  waist: 0,
                  hips: 0,
                  thighs: 0,
                  arms: 0,
                  shoulders: 0,
                  calves: 0
                };
                
                const profile: UserProfile = {
                  name,
                  age,
                  gender,
                  weight,
                  height,
                  goal,
                  experienceLevel,
                  measurements: [defaultMeasurements]
                };
                
                handleSaveProfile(profile);
              }}
              className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Começar
            </button>
          </div>
        </div>
      )}
      
      <header 
        className={`fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-purple-700 text-white transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-6'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center ">
              {selectedWorkout ? (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedWorkout(null)}
                    className="flex items-center gap-2 text-white hover:text-gray-200"
                  >
                    <ArrowLeft className="w-6 h-6" />
                    Voltar
                  </button>
                  <h2 className="text-xl font-semibold">{selectedWorkout.name}</h2>
                </div>
              ) : (
                <>
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Meus Treinos</h1>
                    {userProfile && (
                      <p className="text-sm text-white/90">Olá, {userProfile.name}!</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={resetProgress}
                      className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20"
                    >
                      <Trophy className="w-5 h-5" />
                      <span className="hidden sm:inline">Reiniciar Progresso</span>
                      <span className="sm:hidden">Reiniciar</span>
                    </button>
                    <SettingsMenu
                      currentProfile={userProfile}
                      onSwitchProfile={handleSaveProfile}
                      onDeleteProfile={handleSaveProfile}
                      onResetAll={handleResetAll}
                    />
                  </div>
                </>
              )}
            </div>
            
            {selectedWorkout ? (
              <div className="flex justify-end">
                <Timer />
              </div>
            ) : (
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
                  <button
                    onClick={() => setCurrentView('profile')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      currentView === 'profile'
                        ? 'bg-white text-blue-600'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden sm:inline">Perfil</span>
                    <span className="sm:hidden">Perfil</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className={`max-w-4xl mx-auto px-4 py-8 ${isScrolled ? 'mt-28' : 'mt-40'}`}>
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
            {currentView === 'workouts' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedWorkoutPlan.workouts.map(workout => (
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
            )}
            
            {currentView === 'nutrition' && (
              <div className="grid gap-8">
                {nutritionPlan.map((plan, index) => (
                  <NutritionCard key={index} plan={plan} />
                ))}
              </div>
            )}

            {currentView === 'profile' && userProfile && (
              <ProfileStats
                profile={userProfile}
                onUpdateMeasurements={handleUpdateMeasurements}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;