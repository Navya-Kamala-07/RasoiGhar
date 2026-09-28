import React from 'react';
import { Recipe } from '../types/recipe';
import { RecipeCard } from './RecipeCard';
import { Bookmark, UtensilsCrossed, Trash2 } from 'lucide-react';

interface SavedRecipesViewProps {
  savedRecipes: Recipe[];
  userIngredients: string[];
  onToggleSave: (recipe: Recipe) => void;
  onOpenWalkthrough: (recipe: Recipe) => void;
  onExplorePantry: () => void;
  onClearAllSaved: () => void;
}

export const SavedRecipesView: React.FC<SavedRecipesViewProps> = ({
  savedRecipes,
  userIngredients,
  onToggleSave,
  onOpenWalkthrough,
  onExplorePantry,
  onClearAllSaved,
}) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
        <div>
          <h2 className="text-2xl font-display font-bold text-stone-900 flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-amber-600 fill-amber-600" />
            <span>Saved Recipes &amp; Cookbooks</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-800 font-sans font-bold">
              {savedRecipes.length}
            </span>
          </h2>
          <p className="text-sm text-stone-500">
            Quickly access your favorite authentic Indian and international recipes for your next meal.
          </p>
        </div>

        {savedRecipes.length > 0 && (
          <button
            onClick={onClearAllSaved}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 hover:border-red-300 text-stone-500 hover:text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Saved List</span>
          </button>
        )}
      </div>

      {savedRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              userIngredients={userIngredients}
              isSaved={true}
              onToggleSave={onToggleSave}
              onOpenWalkthrough={onOpenWalkthrough}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-white border border-dashed border-stone-300 space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <Bookmark className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold text-stone-900">
              No Saved Recipes Yet
            </h3>
            <p className="text-sm text-stone-500 max-w-sm mx-auto mt-1">
              Browse Indian &amp; international dishes in the Pantry Studio and tap the bookmark icon on any dish you love.
            </p>
          </div>
          <button
            onClick={onExplorePantry}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore Pantry Recipes</span>
          </button>
        </div>
      )}
    </div>
  );
};
