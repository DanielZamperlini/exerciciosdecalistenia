import type { UserProfile } from '../types/profile';
import { calculateBMR, getCaloriesByGoal } from '../types/profile';

export type MealPlan = {
  title: string;
  calories: string;
  meals: {
    name: string;
    calories: string;
    items: string[];
    image: string;
  }[];
  tips: string[];
};

export const calculateNutritionPlan = (profile: UserProfile): MealPlan[] => {
  const bmr = calculateBMR(profile.weight, profile.height, profile.age, profile.gender);
  const { min: minCalories, max: maxCalories } = getCaloriesByGoal(bmr, profile.goal);
  const avgCalories = Math.round((minCalories + maxCalories) / 2);

  const proteinPerKg = profile.goal === 'muscle_gain' ? 2.2 : 2.0;
  const dailyProtein = Math.round(profile.weight * proteinPerKg);
  
  const mealPlan: MealPlan = {
    title: `Plano Alimentar - ${avgCalories} kcal`,
    calories: `${minCalories}-${maxCalories} kcal/dia`,
    meals: [
      {
        name: 'Café da Manhã',
        calories: `${Math.round(avgCalories * 0.25)} kcal`,
        items: generateBreakfastItems(profile),
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop'
      },
      {
        name: 'Lanche da Manhã',
        calories: `${Math.round(avgCalories * 0.15)} kcal`,
        items: generateSnackItems(profile, 'morning'),
        image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&auto=format&fit=crop'
      },
      {
        name: 'Almoço',
        calories: `${Math.round(avgCalories * 0.3)} kcal`,
        items: generateLunchItems(profile),
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'
      },
      {
        name: 'Lanche da Tarde',
        calories: `${Math.round(avgCalories * 0.15)} kcal`,
        items: generateSnackItems(profile, 'afternoon'),
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop'
      },
      {
        name: 'Jantar',
        calories: `${Math.round(avgCalories * 0.15)} kcal`,
        items: generateDinnerItems(profile),
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop'
      }
    ],
    tips: [
      `Consumir ${dailyProtein}g de proteína por dia`,
      'Beber 35ml de água por kg de peso corporal',
      'Evitar alimentos processados',
      'Priorizar carboidratos complexos',
      profile.goal === 'weight_loss' 
        ? 'Manter déficit calórico de 20%'
        : 'Manter superávit calórico de 10%',
      'Distribuir as refeições a cada 3-4 horas'
    ]
  };

  return [mealPlan];
};

function generateBreakfastItems(profile: UserProfile): string[] {
  const baseItems = [
    profile.goal === 'muscle_gain' ? '4 ovos inteiros' : '3 claras + 1 ovo inteiro',
    'Pão integral ou aveia',
    'Frutas variadas'
  ];

  if (profile.goal === 'muscle_gain') {
    baseItems.push('Pasta de amendoim');
    baseItems.push('Whey protein');
  }

  return baseItems;
}

function generateSnackItems(profile: UserProfile, period: 'morning' | 'afternoon'): string[] {
  const items = [];

  if (period === 'morning') {
    items.push('Iogurte natural');
    items.push('Frutas');
    if (profile.goal === 'muscle_gain') {
      items.push('Granola');
      items.push('Whey protein');
    }
  } else {
    items.push('Mix de oleaginosas');
    items.push('Banana');
    if (profile.goal === 'muscle_gain') {
      items.push('Barra de proteína');
    }
  }

  return items;
}

function generateLunchItems(profile: UserProfile): string[] {
  const proteinAmount = profile.goal === 'muscle_gain' ? '200g' : '150g';
  const items = [
    `${proteinAmount} de frango/peixe/carne magra`,
    'Arroz integral ou batata doce',
    'Legumes variados',
    'Salada verde à vontade'
  ];

  if (profile.goal === 'muscle_gain') {
    items.push('Azeite de oliva extra virgem');
  }

  return items;
}

function generateDinnerItems(profile: UserProfile): string[] {
  const proteinAmount = profile.goal === 'muscle_gain' ? '200g' : '150g';
  return [
    `${proteinAmount} de peixe/frango grelhado`,
    'Legumes cozidos',
    'Salada verde à vontade',
    profile.goal === 'muscle_gain' ? 'Quinoa ou arroz integral' : 'Vegetais variados'
  ];
}