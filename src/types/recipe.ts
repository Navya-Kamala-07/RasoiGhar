export type CuisineCategory =
  | 'all'
  | 'biryani'
  | 'andhra-telugu'
  | 'south-indian'
  | 'desserts-sweets'
  | 'asian'
  | 'east-asian'
  | 'thai'
  | 'japanese'
  | 'korean'
  | 'indian'
  | 'north-indian'
  | 'indo-chinese'
  | 'coastal-indian'
  | 'bengali'
  | 'international'
  | 'italian'
  | 'mexican'
  | 'mediterranean'
  | 'french';

export type DietaryPreference =
  | 'all'
  | 'vegetarian'
  | 'vegan'
  | 'non-veg'
  | 'gluten-free'
  | 'high-protein'
  | 'quick-under-30'
  | 'dessert';

export interface IngredientItem {
  id: string;
  name: string;
  category: 'produce' | 'proteins-dairy' | 'grains-staples' | 'indian-spices' | 'global-seasonings' | 'condiments-oils';
  indianName?: string;
  teluguName?: string;
  commonUnits: string;
  substitutes?: string[];
  icon?: string;
}

export interface RecipeIngredient {
  name: string;
  amount: number;
  unit: string;
  notes?: string;
  isPantryMatch?: boolean;
}

export interface RecipeStep {
  stepNumber: number;
  title: string;
  instruction: string;
  chefTip?: string;
  sensoryCue?: string; // e.g. "Oil begins to separate from the masala paste"
  timerMinutes?: number;
}

export interface FlavorProfile {
  spiceLevel: number; // 1 - 5
  savory: number;     // 1 - 5
  tangy: number;      // 1 - 5
  aromatic: number;   // 1 - 5
  sweet: number;      // 1 - 5
}

export interface NutritionalInfo {
  calories: number;
  protein: number; // in grams
  fiber: number;   // in grams
  carbs?: number;  // in grams
  fat?: number;    // in grams
  summary?: string;
  isAiGenerated?: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  originalName: string;
  cuisine: string;
  regionCategory: 'indian' | 'international';
  description: string;
  cookingTimeMinutes: number;
  prepTimeMinutes: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  defaultServings: number;
  caloriesPerServing: number;
  proteinGrams?: number;
  fiberGrams?: number;
  carbsGrams?: number;
  fatGrams?: number;
  nutritionalInfo?: NutritionalInfo;
  tags: string[];
  matchingIngredients: string[];
  additionalIngredientsNeeded: {
    name: string;
    optional: boolean;
    commonPantry: boolean;
  }[];
  flavorProfile: FlavorProfile;
  culinaryScience: string;
  keyTechniques: {
    name: string;
    explanation: string;
  }[];
  ingredientsList: RecipeIngredient[];
  steps: RecipeStep[];
  substitutions: {
    ingredient: string;
    replacement: string;
    rationale: string;
  }[];
  wineOrBeveragePairing?: string;
  isAiGenerated?: boolean;
}

export interface TechniqueMasterclass {
  id: string;
  name: string;
  originalTerm?: string;
  cuisine: 'Indian' | 'International' | 'Universal';
  brief: string;
  whyItMatters: string;
  sensoryCheck: string;
  stepByStep: string[];
  commonMistakes: string[];
  bestForDishes: string[];
}

export interface SpiceInfo {
  name: string;
  hindiName?: string;
  teluguName?: string;
  flavorNotes: string;
  bestUsedFor: string;
  bloomingMethod: string;
  globalEquivalentOrPair: string;
  substitute: string;
}
