import React, { useState } from 'react';
import { Recipe } from '../types/recipe';
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

  // Compute pantry match metrics
  const totalIngredientsCount = recipe.ingredientsList.length;
  const userIngredientsLower = userIngredients.map((i) => i.toLowerCase().replace(/_/g, ' '));

  const matchedIngredients = recipe.ingredientsList.filter((ing) => {
    const ingNameLower = ing.name.toLowerCase();
    return userIngredientsLower.some(
      (u) => ingNameLower.includes(u) || u.includes(ingNameLower.split(' ')[0])
    );
  });

  const missingIngredients = recipe.ingredientsList.filter((ing) => {
    const ingNameLower = ing.name.toLowerCase();
    // Salt, water, neutral oil are assumed staples
    if (['salt', 'water', 'oil', 'cooking oil'].some((s) => ingNameLower.includes(s))) {
      return false;
    }
    return !userIngredientsLower.some(
      (u) => ingNameLower.includes(u) || u.includes(ingNameLower.split(' ')[0])
    );
  });

  const matchPercent = Math.min(
    100,
    Math.round(
      ((matchedIngredients.length + 1) / Math.max(1, totalIngredientsCount)) * 100
    )
  );

  const getRegionFlag = (cuisine: string) => {
    const c = cuisine.toLowerCase();
    if (c.includes('south indian')) return '🥥';
    if (c.includes('indian')) return '🇮🇳';
    if (c.includes('italian')) return '🇮🇹';
    if (c.includes('asian') || c.includes('chinese') || c.includes('japanese')) return '🥢';
    if (c.includes('mexican')) return '🌮';
    if (c.includes('mediterranean') || c.includes('greek')) return '🫒';
    if (c.includes('thai')) return '🍜';
    return '🌎';
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Card Header Top Banner */}
        <div className="p-5 pb-3 border-b border-stone-100 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/20">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-300/80">
                <span>{getRegionFlag(recipe.cuisine)}</span>
                <span>{recipe.cuisine}</span>
              </span>

              {recipe.isAiGenerated && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-300">
                  <Sparkles className="w-3 h-3 text-purple-600" />
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
                  ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                  : 'text-stone-400 hover:text-stone-700 hover:bg-stone-100'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save recipe'}
            >
              {isSaved ? (
                <BookmarkCheck className="w-5 h-5 fill-amber-600 text-amber-600" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Titles */}
          <div className="mt-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-stone-900 leading-snug group-hover:text-amber-700 transition-colors">
              {recipe.title}
            </h3>
            {recipe.originalName && (
              <p className="text-xs font-medium text-amber-800/80 mt-0.5">
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
      <div className="p-5 pt-3 border-t border-stone-100 bg-stone-50/40">
        <button
          onClick={() => onOpenWalkthrough(recipe)}
          className="w-full py-3 px-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md shadow-amber-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
        >
          <Flame className="w-4 h-4 text-amber-200 group-hover/btn:scale-110 transition-transform" />
          <span>Start Kitchen Cooking Mode</span>
        </button>
      </div>
    </div>
  );
};
