import React, { useState } from 'react';
import { Recipe, NutritionalInfo } from '../types/recipe';
import { fetchRecipeNutrition } from '../utils/nutritionApi';
import { YouTubeVideoModal } from './YouTubeVideoModal';
import {
  Clock,
  ChefHat,
  Bookmark,
  BookmarkCheck,
  Flame,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Utensils,
  Lightbulb,
  Activity,
  Dumbbell,
  Wheat,
  RotateCw,
  Play,
} from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  userIngredients: string[];
  isSaved: boolean;
  onToggleSave: (recipe: Recipe) => void;
  onOpenWalkthrough: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  userIngredients,
  isSaved,
  onToggleSave,
  onOpenWalkthrough,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [nutrition, setNutrition] = useState<NutritionalInfo | null>(
    recipe.nutritionalInfo || (recipe.proteinGrams !== undefined && recipe.fiberGrams !== undefined ? {
      calories: recipe.caloriesPerServing,
      protein: recipe.proteinGrams,
      fiber: recipe.fiberGrams,
      carbs: recipe.carbsGrams,
      fat: recipe.fatGrams,
      summary: (recipe as any).nutritionSummary,
    } : null)
  );
  const [isLoadingNutrition, setIsLoadingNutrition] = useState(false);
  const [showDetailedNutrition, setShowDetailedNutrition] = useState(false);

  const handleFetchNutrition = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isLoadingNutrition) return;
    setIsLoadingNutrition(true);
    try {
      const data = await fetchRecipeNutrition(recipe);
      setNutrition(data);
      recipe.nutritionalInfo = data;
      recipe.caloriesPerServing = data.calories;
      recipe.proteinGrams = data.protein;
      recipe.fiberGrams = data.fiber;
      setShowDetailedNutrition(true);
    } catch (err) {
      console.error('Failed to fetch nutrition:', err);
    } finally {
      setIsLoadingNutrition(false);
    }
  };

  // Compute pantry match metrics
  const totalIngredientsCount = recipe.ingredientsList.length;
  const userIngredientsLower = userIngredients.map((i) => i.toLowerCase().replace(/_/g, ' '));
  const userIngredientsSet = new Set(userIngredients);

  const matchedIngredients = recipe.ingredientsList.filter((ing) => {
    const ingNameLower = ing.name.toLowerCase();
    const isDirectMatch = userIngredientsLower.some(
      (u) => ingNameLower.includes(u) || u.includes(ingNameLower.split(' ')[0])
    );
    const isIdMatch = recipe.matchingIngredients?.some((mId) => {
      const mClean = mId.toLowerCase().replace(/_/g, ' ');
      return userIngredientsSet.has(mId) && ingNameLower.includes(mClean);
    });
    return isDirectMatch || isIdMatch || ing.isPantryMatch;
  });

  const missingIngredients = recipe.ingredientsList.filter((ing) => {
    const ingNameLower = ing.name.toLowerCase();
    // Salt, water, neutral oil are assumed staples
    if (['salt', 'water', 'oil', 'cooking oil'].some((s) => ingNameLower.includes(s))) {
      return false;
    }
    const isDirectMatch = userIngredientsLower.some(
      (u) => ingNameLower.includes(u) || u.includes(ingNameLower.split(' ')[0])
    );
    const isIdMatch = recipe.matchingIngredients?.some((mId) => {
      const mClean = mId.toLowerCase().replace(/_/g, ' ');
      return userIngredientsSet.has(mId) && ingNameLower.includes(mClean);
    });
    return !isDirectMatch && !isIdMatch && !ing.isPantryMatch;
  });

  const matchPercent = Math.min(
    100,
    Math.round(
      ((matchedIngredients.length) / Math.max(1, totalIngredientsCount)) * 100
    )
  );

  const getRegionFlag = (cuisine: string) => {
    const c = cuisine.toLowerCase();
    if (c.includes('biryani')) return '👑';
    if (c.includes('andhra') || c.includes('telugu')) return '🍋';
    if (c.includes('south indian')) return '🥥';
    if (c.includes('indian')) return '🇮🇳';
    if (c.includes('italian')) return '🇮🇹';
    if (c.includes('asian') || c.includes('chinese') || c.includes('japanese')) return '🥢';
    if (c.includes('mexican')) return '🌮';
    if (c.includes('mediterranean') || c.includes('greek')) return '🫒';
    if (c.includes('thai')) return '🍜';
    return '🌎';
  };

  const getRegionBadgeStyle = (cuisine: string) => {
    const c = cuisine.toLowerCase();
    if (c.includes('biryani')) return 'bg-purple-50 text-purple-900 border-purple-200';
    if (c.includes('andhra') || c.includes('telugu') || c.includes('south indian')) return 'bg-emerald-50 text-emerald-900 border-emerald-300';
    if (c.includes('asian') || c.includes('chinese') || c.includes('japanese') || c.includes('thai') || c.includes('korean')) return 'bg-teal-50 text-teal-900 border-teal-200';
    if (c.includes('dessert') || c.includes('sweet')) return 'bg-rose-50 text-rose-900 border-rose-200';
    if (c.includes('indian')) return 'bg-amber-50 text-amber-900 border-amber-300';
    return 'bg-sky-50 text-sky-900 border-sky-200';
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Card Header Top Banner */}
        <div className="p-5 pb-3 border-b border-stone-100 bg-gradient-to-br from-emerald-50/40 via-white to-stone-50/30">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${getRegionBadgeStyle(recipe.cuisine)}`}>
                <span>{getRegionFlag(recipe.cuisine)}</span>
                <span>{recipe.cuisine}</span>
              </span>

              {recipe.isAiGenerated && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-300">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>AI Masterclass</span>
                </span>
              )}

              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border ${
                  recipe.difficulty === 'Easy'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : recipe.difficulty === 'Medium'
                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                    : 'bg-rose-50 text-rose-800 border-rose-300'
                }`}
              >
                {recipe.difficulty}
              </span>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleSave(recipe)}
              className={`p-2 rounded-xl transition-all ${
                isSaved
                  ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                  : 'text-stone-400 hover:text-stone-700 hover:bg-stone-100'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save recipe'}
            >
              {isSaved ? (
                <BookmarkCheck className="w-5 h-5 fill-emerald-700 text-emerald-700" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Titles */}
          <div className="mt-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-stone-900 leading-snug group-hover:text-emerald-800 transition-colors">
              {recipe.title}
            </h3>
            {recipe.originalName && (
              <p className="text-xs font-medium text-emerald-800/80 mt-0.5">
                {recipe.originalName}
              </p>
            )}
          </div>

          <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        </div>

        {/* Pantry Match Indicator */}
        <div className="px-5 py-3 bg-stone-50/80 border-b border-stone-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center font-bold text-stone-900 shadow-2xs">
              {matchPercent}%
            </div>
            <div>
              <div className="font-semibold text-stone-800">Pantry Compatibility</div>
              <div className="text-[11px] text-stone-500">
                {matchedIngredients.length} match &bull; {missingIngredients.length} to supplement
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-stone-500 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>{recipe.cookingTimeMinutes}m</span>
            </span>
            <span className="flex items-center gap-1">
              <Utensils className="w-3.5 h-3.5 text-stone-400" />
              <span>{recipe.defaultServings} serv</span>
            </span>
          </div>
        </div>

        {/* Nutrition Bar (Calories, Protein, Fiber) via AI Endpoint */}
        <div className="px-5 py-2.5 bg-gradient-to-r from-emerald-50/50 via-stone-50 to-teal-50/40 border-b border-stone-100 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500">
              <Activity className="w-3.5 h-3.5 text-emerald-700" />
              <span>Nutrition Facts</span>
              <span className="text-[10px] lowercase font-normal text-stone-400">(per serv)</span>
            </div>

            <button
              onClick={handleFetchNutrition}
              disabled={isLoadingNutrition}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-950 transition-colors disabled:opacity-50 cursor-pointer"
              title="Calculate exact macro breakdown using Gemini AI"
            >
              {isLoadingNutrition ? (
                <>
                  <RotateCw className="w-3 h-3 text-emerald-600 animate-spin" />
                  <span>AI Analyzing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>{nutrition?.isAiGenerated ? 'Recalculate AI' : 'Fetch AI Nutrition'}</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/95 rounded-xl p-2 border border-stone-200/80 shadow-2xs text-center">
              <div className="text-[10px] font-bold text-stone-400 uppercase">Calories</div>
              <div className="text-xs font-extrabold text-stone-900 mt-0.5">
                {nutrition?.calories ?? recipe.caloriesPerServing ?? 320} <span className="text-[10px] font-medium text-stone-500">kcal</span>
              </div>
            </div>

            <div className="bg-white/95 rounded-xl p-2 border border-stone-200/80 shadow-2xs text-center">
              <div className="text-[10px] font-bold text-emerald-600 uppercase flex items-center justify-center gap-0.5">
                <Dumbbell className="w-2.5 h-2.5" />
                <span>Protein</span>
              </div>
              <div className="text-xs font-extrabold text-emerald-950 mt-0.5">
                {nutrition?.protein ?? recipe.proteinGrams ?? (recipe.tags.includes('high-protein') ? 16 : 10)} <span className="text-[10px] font-medium text-emerald-700">g</span>
              </div>
            </div>

            <div className="bg-white/95 rounded-xl p-2 border border-stone-200/80 shadow-2xs text-center">
              <div className="text-[10px] font-bold text-orange-600 uppercase flex items-center justify-center gap-0.5">
                <Wheat className="w-2.5 h-2.5" />
                <span>Fiber</span>
              </div>
              <div className="text-xs font-extrabold text-orange-950 mt-0.5">
                {nutrition?.fiber ?? recipe.fiberGrams ?? 4} <span className="text-[10px] font-medium text-orange-700">g</span>
              </div>
            </div>
          </div>

          {/* AI Nutrition Health Insight Callout (if fetched or available) */}
          {(showDetailedNutrition || nutrition?.summary) && (
            <div className="p-2 rounded-xl bg-amber-100/70 border border-amber-200 text-[11px] text-amber-950 animate-fadeIn flex items-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-900">AI Nutrition Breakdown: </span>
                <span>{nutrition?.summary || 'Balanced macronutrients with wholesome complex grains and vegetables.'}</span>
                {nutrition?.carbs && nutrition?.fat && (
                  <span className="block mt-0.5 text-[10px] text-amber-800 font-semibold">
                    Carbs: {nutrition.carbs}g &bull; Healthy Fat: {nutrition.fat}g
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Key Techniques & Culinary Science Callout */}
        <div className="p-5 space-y-3">
          {recipe.keyTechniques && recipe.keyTechniques.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                Culinary Techniques Taught:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {recipe.keyTechniques.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200"
                    title={t.explanation}
                  >
                    <ChefHat className="w-3 h-3 text-amber-600" />
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Mini Flavor Profile Bars */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1.5 flex items-center justify-between">
              <span>Flavor Balance</span>
              <span className="text-[10px] text-stone-400 lowercase">out of 5</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-[10px]">
              <div>
                <div className="flex justify-between text-stone-600 mb-0.5">
                  <span>Spice</span>
                  <span className="font-bold">{recipe.flavorProfile.spiceLevel}/5</span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full"
                    style={{ width: `${(recipe.flavorProfile.spiceLevel / 5) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-stone-600 mb-0.5">
                  <span>Savory</span>
                  <span className="font-bold">{recipe.flavorProfile.savory}/5</span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-amber-600 h-full rounded-full"
                    style={{ width: `${(recipe.flavorProfile.savory / 5) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-stone-600 mb-0.5">
                  <span>Tangy</span>
                  <span className="font-bold">{recipe.flavorProfile.tangy}/5</span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-full rounded-full"
                    style={{ width: `${(recipe.flavorProfile.tangy / 5) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-stone-600 mb-0.5">
                  <span>Aromatic</span>
                  <span className="font-bold">{recipe.flavorProfile.aromatic}/5</span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full rounded-full"
                    style={{ width: `${(recipe.flavorProfile.aromatic / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Quick Ingredients Overview */}
          <div className="pt-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors py-1"
            >
              <span>View Ingredients &amp; Science</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {isExpanded && (
              <div className="mt-2.5 pt-2.5 border-t border-stone-100 space-y-3 text-xs animate-fadeIn">
                {/* Culinary Science Note */}
                <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-950">
                  <div className="flex items-center gap-1.5 font-bold mb-1 text-amber-900">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                    <span>The Culinary Science ("Why This Works"):</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-amber-900/90">
                    {recipe.culinaryScience}
                  </p>
                </div>

                {/* Ingredients Breakdown */}
                <div>
                  <div className="font-bold text-stone-700 mb-1">Ingredients:</div>
                  <ul className="space-y-1">
                    {recipe.ingredientsList.map((ing, i) => {
                      const isMatch = matchedIngredients.some((m) => m.name === ing.name);
                      return (
                        <li key={i} className="flex items-center justify-between text-[11px]">
                          <span className="flex items-center gap-1.5">
                            {isMatch ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            ) : (
                              <AlertCircle className="w-3 h-3 text-stone-300 shrink-0" />
                            )}
                            <span className={isMatch ? 'font-medium text-stone-900' : 'text-stone-600'}>
                              {ing.amount} {ing.unit} {ing.name}
                            </span>
                          </span>
                          {ing.notes && <span className="text-[10px] text-stone-400">{ing.notes}</span>}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-3 border-t border-stone-100 bg-stone-50/50">
        <div className="flex gap-2">
          <button
            onClick={() => setShowVideoModal(true)}
            className="py-3 px-3.5 rounded-2xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs border border-red-200 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center gap-1.5 shrink-0"
            title="Watch YouTube video tutorial if you prefer visual steps"
          >
            <Play className="w-3.5 h-3.5 fill-red-600 text-red-600" />
            <span>Video Guide</span>
          </button>
          <button
            onClick={() => onOpenWalkthrough(recipe)}
            className="flex-1 py-3 px-4 rounded-2xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-900/15 hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
          >
            <Flame className="w-4 h-4 text-amber-300 group-hover/btn:scale-110 transition-transform" />
            <span>Start Kitchen Mode</span>
          </button>
        </div>
      </div>

      {/* Visual YouTube Video Guide Modal */}
      {showVideoModal && (
        <YouTubeVideoModal
          recipe={recipe}
          onClose={() => setShowVideoModal(false)}
        />
      )}
    </div>
  );
};
