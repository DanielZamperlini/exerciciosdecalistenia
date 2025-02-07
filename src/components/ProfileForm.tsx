import React from 'react';
import type { UserProfile, Goal, ExperienceLevel } from '../types/profile';
import { goalLabels, experienceLevelLabels, calculateBMI, getBMICategory, calculateBMR } from '../types/profile';

type ProfileFormProps = {
  profile: UserProfile;
  onUpdate: (profile: UserProfile) => void;
  onCancel: () => void;
  isNew?: boolean;
};

export function ProfileForm({ profile, onUpdate, onCancel, isNew = false }: ProfileFormProps) {
  const [formData, setFormData] = React.useState<UserProfile>(profile);
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
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
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