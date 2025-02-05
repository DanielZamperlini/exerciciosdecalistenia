import React from 'react';

type Meal = {
  name: string;
  calories: string;
  items: string[];
  image: string;
};

type MealPlan = {
  title: string;
  calories: string;
  meals: Meal[];
  tips: string[];
};

type NutritionCardProps = {
  plan: MealPlan;
};

export function NutritionCard({ plan }: NutritionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
        <p className="text-gray-600 mb-4">{plan.calories}</p>
        
        <div className="space-y-6">
          {plan.meals.map((meal, index) => (
            <div key={index} className="border-t pt-4 first:border-t-0 first:pt-0">
              <div className="flex items-start gap-4">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {meal.name} <span className="text-sm text-gray-500">({meal.calories})</span>
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {meal.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <h4 className="font-semibold text-gray-800 mb-2">Dicas Gerais:</h4>
          <ul className="space-y-1">
            {plan.tips.map((tip, index) => (
              <li key={index} className="text-sm text-gray-600">• {tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}