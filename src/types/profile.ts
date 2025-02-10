export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';
export type Goal = 'weight_loss' | 'muscle_gain' | 'general_fitness';

export type BodyMeasurements = {
  date: string;
  weight: number;
  chest: number;
  waist: number;
  hips: number;
  thighs: number;
  arms: number;
  shoulders: number;
  calves: number;
};

export type UserProfile = {
  name: string;
  age: number;
  gender: 'male' | 'female';
  weight: number; // in kg
  height: number; // in cm
  goal: Goal;
  experienceLevel: ExperienceLevel;
  measurements: BodyMeasurements[];
};

export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100;
  return Number((weight / (heightInMeters * heightInMeters)).toFixed(1));
};

export const calculateBMR = (weight: number, height: number, age: number, gender: 'male' | 'female'): number => {
  // Harris-Benedict Formula
  if (gender === 'male') {
    return Math.round(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));
  }
  return Math.round(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));
};

export const getCaloriesByGoal = (bmr: number, goal: Goal): { min: number; max: number } => {
  const activityFactor = 1.375; // Moderate activity
  const maintenance = Math.round(bmr * activityFactor);
  
  switch (goal) {
    case 'weight_loss':
      return {
        min: Math.round(maintenance * 0.8),
        max: Math.round(maintenance * 0.85)
      };
    case 'muscle_gain':
      return {
        min: Math.round(maintenance * 1.1),
        max: Math.round(maintenance * 1.2)
      };
    default:
      return {
        min: maintenance - 100,
        max: maintenance + 100
      };
  }
};

export const getBMICategory = (bmi: number): string => {
  if (bmi < 18.5) return 'Abaixo do peso';
  if (bmi < 24.9) return 'Peso normal';
  if (bmi < 29.9) return 'Sobrepeso';
  if (bmi < 34.9) return 'Obesidade grau 1';
  if (bmi < 39.9) return 'Obesidade grau 2';
  return 'Obesidade grau 3';
};

export const goalLabels: Record<Goal, string> = {
  weight_loss: 'Perda de peso',
  muscle_gain: 'Ganho de massa muscular',
  general_fitness: 'Condicionamento geral'
};

export const experienceLevelLabels: Record<ExperienceLevel, string> = {
  beginner: 'Iniciante',
  intermediate: 'Intermediário',
  advanced: 'Avançado'
};