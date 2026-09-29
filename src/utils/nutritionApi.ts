import { NutritionalInfo, Recipe } from '../types/recipe';

export async function fetchRecipeNutrition(recipe: Partial<Recipe> & { title: string }): Promise<NutritionalInfo> {
  const res = await fetch('/api/recipes/nutrition', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: recipe.title,
      cuisine: recipe.cuisine,
      ingredients: recipe.ingredientsList?.map((i) => ({
        name: i.name,
        amount: i.amount,
        unit: i.unit,
      })) || recipe.matchingIngredients || [],
      servings: recipe.defaultServings || 2,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to fetch nutrition from AI endpoint');
  }

  const data = await res.json();
  return {
    calories: Number(data.calories) || 300,
    protein: Number(data.protein) || 10,
    fiber: Number(data.fiber) || 4,
    carbs: Number(data.carbs) || 35,
    fat: Number(data.fat) || 10,
    summary: data.summary || 'Nutrient-rich balanced dish made with wholesome kitchen ingredients.',
    isAiGenerated: true,
  };
}
