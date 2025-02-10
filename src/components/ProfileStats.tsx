import React, { useState } from 'react';
import { UserProfile, BodyMeasurements } from '../types/profile';
import { calculateBMI, getBMICategory, calculateBMR, getCaloriesByGoal } from '../types/profile';
import { User, Scale, Ruler, Target, Dumbbell, Plus, ChevronDown, ChevronUp } from 'lucide-react';

type ProfileStatsProps = {
  profile: UserProfile;
  onUpdateMeasurements: (measurements: BodyMeasurements) => void;
};

export function ProfileStats({ profile, onUpdateMeasurements }: ProfileStatsProps) {
  const [showNewMeasurement, setShowNewMeasurement] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [newMeasurements, setNewMeasurements] = useState<Partial<BodyMeasurements>>({
    date: new Date().toISOString().split('T')[0],
    weight: profile.weight
  });

  const bmi = calculateBMI(profile.weight, profile.height);
  const bmr = calculateBMR(profile.weight, profile.height, profile.age, profile.gender);
  const calories = getCaloriesByGoal(bmr, profile.goal);

  const handleSubmitMeasurements = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMeasurements.weight) {
      onUpdateMeasurements(newMeasurements as BodyMeasurements);
      setShowNewMeasurement(false);
      setNewMeasurements({
        date: new Date().toISOString().split('T')[0],
        weight: profile.weight
      });
    }
  };

  const getMeasurementDiff = (current: number, previous?: number) => {
    if (!previous) return null;
    const diff = current - previous;
    return diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1);
  };

  return (
    <div className="space-y-6">
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
                <p className="text-sm text-gray-500">Peso Atual</p>
                <p className="font-medium">{profile.measurements[0]?.weight || profile.weight} kg</p>
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

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Medidas Corporais</h3>
          <button
            onClick={() => setShowNewMeasurement(!showNewMeasurement)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            <span>Nova Medição</span>
          </button>
        </div>

        {showNewMeasurement && (
          <form onSubmit={handleSubmitMeasurements} className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data
                </label>
                <input
                  type="date"
                  value={newMeasurements.date}
                  onChange={(e) => setNewMeasurements(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newMeasurements.weight}
                  onChange={(e) => setNewMeasurements(prev => ({ ...prev, weight: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Peito (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newMeasurements.chest}
                  onChange={(e) => setNewMeasurements(prev => ({ ...prev, chest: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cintura (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newMeasurements.waist}
                  onChange={(e) => setNewMeasurements(prev => ({ ...prev, waist: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quadril (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newMeasurements.hips}
                  onChange={(e) => setNewMeasurements(prev => ({ ...prev, hips: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Coxas (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newMeasurements.thighs}
                  onChange={(e) => setNewMeasurements(prev => ({ ...prev, thighs: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Braços (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newMeasurements.arms}
                  onChange={(e) => setNewMeasurements(prev => ({ ...prev, arms: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ombros (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newMeasurements.shoulders}
                  onChange={(e) => setNewMeasurements(prev => ({ ...prev, shoulders: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Panturrilhas (cm)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newMeasurements.calves}
                  onChange={(e) => setNewMeasurements(prev => ({ ...prev, calves: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Salvar Medidas
              </button>
            </div>
          </form>
        )}

        <button
          onClick={() => setShowHistory(!showHistory)}
          className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <span>Histórico de Medidas</span>
          {showHistory ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {showHistory && profile.measurements.length > 0 && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Data</th>
                  <th className="px-4 py-2 text-left">Peso</th>
                  <th className="px-4 py-2 text-left">Peito</th>
                  <th className="px-4 py-2 text-left">Cintura</th>
                  <th className="px-4 py-2 text-left">Quadril</th>
                  <th className="px-4 py-2 text-left">Coxas</th>
                  <th className="px-4 py-2 text-left">Braços</th>
                  <th className="px-4 py-2 text-left">Ombros</th>
                  <th className="px-4 py-2 text-left">Panturrilhas</th>
                </tr>
              </thead>
              <tbody>
                {profile.measurements.map((measurement, index) => {
                  const prevMeasurement = profile.measurements[index + 1];
                  return (
                    <tr key={measurement.date} className="border-t">
                      <td className="px-4 py-2">{new Date(measurement.date).toLocaleDateString()}</td>
                      <td className="px-4 py-2">
                        {measurement.weight}
                        {getMeasurementDiff(measurement.weight, prevMeasurement?.weight) && (
                          <span className={`ml-2 text-xs ${
                            getMeasurementDiff(measurement.weight, prevMeasurement?.weight)?.startsWith('+')
                              ? 'text-red-500'
                              : 'text-green-500'
                          }`}>
                            ({getMeasurementDiff(measurement.weight, prevMeasurement?.weight)})
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {measurement.chest}
                        {getMeasurementDiff(measurement.chest, prevMeasurement?.chest) && (
                          <span className={`ml-2 text-xs ${
                            getMeasurementDiff(measurement.chest, prevMeasurement?.chest)?.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}>
                            ({getMeasurementDiff(measurement.chest, prevMeasurement?.chest)})
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {measurement.waist}
                        {getMeasurementDiff(measurement.waist, prevMeasurement?.waist) && (
                          <span className={`ml-2 text-xs ${
                            getMeasurementDiff(measurement.waist, prevMeasurement?.waist)?.startsWith('+')
                              ? 'text-red-500'
                              : 'text-green-500'
                          }`}>
                            ({getMeasurementDiff(measurement.waist, prevMeasurement?.waist)})
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {measurement.hips}
                        {getMeasurementDiff(measurement.hips, prevMeasurement?.hips) && (
                          <span className={`ml-2 text-xs ${
                            getMeasurementDiff(measurement.hips, prevMeasurement?.hips)?.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}>
                            ({getMeasurementDiff(measurement.hips, prevMeasurement?.hips)})
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {measurement.thighs}
                        {getMeasurementDiff(measurement.thighs, prevMeasurement?.thighs) && (
                          <span className={`ml-2 text-xs ${
                            getMeasurementDiff(measurement.thighs, prevMeasurement?.thighs)?.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}>
                            ({getMeasurementDiff(measurement.thighs, prevMeasurement?.thighs)})
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {measurement.arms}
                        {getMeasurementDiff(measurement.arms, prevMeasurement?.arms) && (
                          <span className={`ml-2 text-xs ${
                            getMeasurementDiff(measurement.arms, prevMeasurement?.arms)?.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}>
                            ({getMeasurementDiff(measurement.arms, prevMeasurement?.arms)})
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {measurement.shoulders}
                        {getMeasurementDiff(measurement.shoulders, prevMeasurement?.shoulders) && (
                          <span className={`ml-2 text-xs ${
                            getMeasurementDiff(measurement.shoulders, prevMeasurement?.shoulders)?.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}>
                            ({getMeasurementDiff(measurement.shoulders, prevMeasurement?.shoulders)})
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {measurement.calves}
                        {getMeasurementDiff(measurement.calves, prevMeasurement?.calves) && (
                          <span className={`ml-2 text-xs ${
                            getMeasurementDiff(measurement.calves, prevMeasurement?.calves)?.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}>
                            ({getMeasurementDiff(measurement.calves, prevMeasurement?.calves)})
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}