import type { Exercise } from './workouts';

export const getExerciseMultiplier = (level: 'beginner' | 'intermediate' | 'advanced'): number => {
  switch (level) {
    case 'beginner':
      return 1;
    case 'intermediate':
      return 1.5;
    case 'advanced':
      return 2;
    default:
      return 1;
  }
};

export const adjustExerciseForLevel = (exercise: Exercise, level: 'beginner' | 'intermediate' | 'advanced'): Exercise => {
  const multiplier = getExerciseMultiplier(level);
  
  return {
    ...exercise,
    sets: Math.round(exercise.sets * (level === 'advanced' ? 1.5 : 1)),
    reps: exercise.type === 'calisthenics' 
      ? Math.round(exercise.reps * multiplier)
      : exercise.reps,
    description: `${exercise.description} ${getExerciseTip(level, exercise.type)}`
  };
};

const getExerciseTip = (level: 'beginner' | 'intermediate' | 'advanced', type: 'gym' | 'calisthenics'): string => {
  if (type === 'gym') {
    switch (level) {
      case 'beginner':
        return 'Foque na técnica correta antes de aumentar o peso.';
      case 'intermediate':
        return 'Aumente o peso gradualmente mantendo a forma.';
      case 'advanced':
        return 'Utilize técnicas avançadas como séries drop e super-séries.';
    }
  } else {
    switch (level) {
      case 'beginner':
        return 'Faça as repetições de forma controlada.';
      case 'intermediate':
        return 'Experimente variações mais desafiadoras do exercício.';
      case 'advanced':
        return 'Adicione peso extra ou use variações mais complexas.';
    }
  }
};