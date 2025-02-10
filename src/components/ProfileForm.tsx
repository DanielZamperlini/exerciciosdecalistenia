import React from 'react';
import type { UserProfile, Goal, ExperienceLevel, BodyMeasurements } from '../types/profile';
import { goalLabels, experienceLevelLabels, calculateBMI, getBMICategory, calculateBMR } from '../types/profile';

type ProfileFormProps = {
  profile: UserProfile;
  onUpdate: (profile: UserProfile) => void;
  onCancel: () => void;
  isNew?: boolean;
};

export function ProfileForm({ profile, onUpdate, onCancel, isNew = false }: ProfileFormProps) {
  const [formData, setFormData] = React.useState<UserProfile>({
    ...profile,
    measurements: profile.measurements || []
  });
  const [bmi, setBmi] = React.useState(calculateBMI(profile.weight, profile.height));
  const [bmr, setBmr] = React.useState(calculateBMR(profile.weight, profile.height, profile.age, profile.gender));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newData = {
      ...formData,
      [name]: name === 'age' || name === 'weight' || name === 'height' 
        ? Number(value) 
        : value
    };
    setFormData(newData);

    // Update BMI and BMR when relevant fields change
    if (['weight', 'height', 'age', 'gender'].includes(name)) {
      const newBmi = calculateBMI(
        name === 'weight' ? Number(value) : formData.weight,
        name === 'height' ? Number(value) : formData.height
      );
      const newBmr = calculateBMR(
        name === 'weight' ? Number(value) : formData.weight,
        name === 'height' ? Number(value) : formData.height,
        name === 'age' ? Number(value) : formData.age,
        name === 'gender' ? value as 'male' | 'female' : formData.gender
      );
      setBmi(newBmi);
      setBmr(newBmr);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const initialMeasurement: BodyMeasurements = {
      date: new Date().toISOString(),
      weight: formData.weight,
      chest: parseFloat((document.getElementById('chest') as HTMLInputElement).value),
      waist: parseFloat((document.getElementById('waist') as HTMLInputElement).value),
      hips: parseFloat((document.getElementById('hips') as HTMLInputElement).value),
      thighs: parseFloat((document.getElementById('thighs') as HTMLInputElement).value),
      arms: parseFloat((document.getElementById('arms') as HTMLInputElement).value),
      shoulders: parseFloat((document.getElementById('shoulders') as HTMLInputElement).value),
      calves: parseFloat((document.getElementById('calves') as HTMLInputElement).value)
    };

    const updatedProfile = {
      ...formData,
      measurements: [initialMeasurement, ...(formData.measurements || [])]
    };

    onUpdate(updatedProfile);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 z-100">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
            name="age"
            value={formData.age || ''}
            onChange={handleChange}
            placeholder="Idade"
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
            name="gender"
            value={formData.gender}
            onChange={handleChange}
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
            name="weight"
            value={formData.weight || ''}
            onChange={handleChange}
            placeholder="Peso"
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
            name="height"
            value={formData.height || ''}
            onChange={handleChange}
            placeholder="Altura"
            min="100"
            max="250"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="bg-blue-50 p-3 rounded-lg space-y-2">
        <p className="text-sm font-medium text-blue-800">
          IMC: {bmi} - {getBMICategory(bmi)}
        </p>
        <p className="text-sm font-medium text-blue-800">
          TMB: {bmr} kcal/dia
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Objetivo
        </label>
        <select
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          {Object.entries(goalLabels).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nível de Experiência
        </label>
        <select
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          {Object.entries(experienceLevelLabels).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Medidas Corporais</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Peito (cm)
            </label>
            <input
              type="number"
              id="chest"
              step="0.1"
              placeholder="Medida do peito"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cintura (cm)
            </label>
            <input
              type="number"
              id="waist"
              step="0.1"
              placeholder="Medida da cintura"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quadril (cm)
            </label>
            <input
              type="number"
              id="hips"
              step="0.1"
              placeholder="Medida do quadril"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coxas (cm)
            </label>
            <input
              type="number"
              id="thighs"
              step="0.1"
              placeholder="Medida das coxas"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Braços (cm)
            </label>
            <input
              type="number"
              id="arms"
              step="0.1"
              placeholder="Medida dos braços"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ombros (cm)
            </label>
            <input
              type="number"
              id="shoulders"
              step="0.1"
              placeholder="Medida dos ombros"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Panturrilhas (cm)
            </label>
            <input
              type="number"
              id="calves"
              step="0.1"
              placeholder="Medida das panturrilhas"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {isNew ? 'Criar Perfil' : 'Salvar Alterações'}
        </button>
      </div>
    </form>
  );
}