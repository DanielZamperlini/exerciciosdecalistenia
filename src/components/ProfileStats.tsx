import React from 'react';
import { UserProfile } from '../types/profile';
import { calculateBMI, getBMICategory, calculateBMR, getCaloriesByGoal } from '../types/profile';
import { User, Scale, Ruler, Target, Dumbbell } from 'lucide-react';

type ProfileStatsProps = {
  profile: UserProfile;
};

export function ProfileStats({ profile }: ProfileStatsProps) {
  const bmi = calculateBMI(profile.weight, profile.height);
  const bmr = calculateBMR(profile.weight, profile.height, profile.age, profile.gender);
  const calories = getCaloriesByGoal(bmr, profile.goal);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Dados do Perfil</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Nome</p>
            <p className="font-medium">{profile.name}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Peso</p>
              <p className="font-medium">{profile.weight} kg</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Ruler className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Altura</p>
              <p className="font-medium">{profile.height} cm</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg space-y-2">
          <p className="text-sm">
            <span className="font-medium">IMC:</span> {bmi} - {getBMICategory(bmi)}
          </p>
          <p className="text-sm">
            <span className="font-medium">TMB:</span> {bmr} kcal/dia
          </p>
          <p className="text-sm">
            <span className="font-medium">Calorias recomendadas:</span>
            <br />
            {calories.min} - {calories.max} kcal/dia
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Target className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Objetivo</p>
            <p className="font-medium">
              {profile.goal === 'weight_loss' && 'Perda de peso'}
              {profile.goal === 'muscle_gain' && 'Ganho de massa muscular'}
              {profile.goal === 'general_fitness' && 'Condicionamento geral'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Dumbbell className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Nível</p>
            <p className="font-medium">
              {profile.experienceLevel === 'beginner' && 'Iniciante'}
              {profile.experienceLevel === 'intermediate' && 'Intermediário'}
              {profile.experienceLevel === 'advanced' && 'Avançado'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}