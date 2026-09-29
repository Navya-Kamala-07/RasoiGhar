import React, { useState, useEffect, useMemo } from 'react';
import { CURATED_RECIPES } from './data/curatedRecipes';
import { PANTRY_PRESETS, PantryPreset } from './data/ingredients';
import { Recipe, CuisineCategory, DietaryPreference } from './types/recipe';
import { Header, NavTab } from './components/Header';
import { PantrySelector } from './components/PantrySelector';
import { RecipeCard } from './components/RecipeCard';
import { CookingWalkthroughModal } from './components/CookingWalkthroughModal';
import { TechniqueMasterclassView } from './components/TechniqueMasterclassView';
import { SpiceAndSubstitutionsView } from './components/SpiceAndSubstitutionsView';
import { SavedRecipesView } from './components/SavedRecipesView';
import { DessertsAndSweetsView } from './components/DessertsAndSweetsView';
import {
  Sparkles,
  Flame,
  ChefHat,
  Filter,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  UtensilsCrossed,
  Search,
  X,
  SlidersHorizontal,
} from 'lucide-react';

export default function App() {
  // Navigation
  const [activeTab, setActiveTab] = useState<NavTab>('explore');

  // Dish Search State
  const [dishSearchQuery, setDishSearchQuery] = useState('');

  // Pantry State (seeded with appetizing defaults)
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([
    'onion',
    'tomato',
    'garlic',
    'ginger',
    'paneer',
    'cumin_seeds',
    'turmeric',
    'kashmiri_chilli',
    'basmati_rice',
    'ghee',
  ]);

  // Filters
  const [selectedCuisine, setSelectedCuisine] = useState<CuisineCategory>('all');
  const [dietaryFilter, setDietaryFilter] = useState<DietaryPreference>('all');
  const [pantryStrictness, setPantryStrictness] = useState<'flexible' | 'strict'>('flexible');

  // AI & Recipes
  const [aiGeneratedRecipes, setAiGeneratedRecipes] = useState<Recipe[]>([]);
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [aiNotification, setAiNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Active cooking modal
  const [walkthroughRecipe, setWalkthroughRecipe] = useState<Recipe | null>(null);

  // Saved recipes with localStorage persistence
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>(() => {
    try {
      const stored = localStorage.getItem('rasoi_saved_recipes');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('rasoi_saved_recipes', JSON.stringify(savedRecipes));
    } catch (err) {
      console.error('Failed to save to localStorage', err);
    }
  }, [savedRecipes]);

  // Toggle ingredient selection
  const handleToggleIngredient = (idOrName: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(idOrName) ? prev.filter((i) => i !== idOrName) : [...prev, idOrName]
    );
  };

  const handleClearIngredients = () => {
    setSelectedIngredients([]);
  };

  const handleApplyPreset = (preset: PantryPreset) => {
    setSelectedIngredients(preset.ingredientIds);
  };

  const handleSelectCustomIngredient = (name: string) => {
    const clean = name.trim();
    if (clean && !selectedIngredients.includes(clean)) {
      setSelectedIngredients((prev) => [...prev, clean]);
    }
  };

  const handleToggleSave = (recipe: Recipe) => {
    setSavedRecipes((prev) => {
      const exists = prev.some((r) => r.id === recipe.id);
      if (exists) {
        return prev.filter((r) => r.id !== recipe.id);
      }
      return [...prev, recipe];
    });
  };

  // Generate Custom Recipe using Gemini AI
  const handleGenerateAiRecipe = async (customPrompt?: string) => {
    if (selectedIngredients.length === 0 || isAiGenerating) return;

    setIsAiGenerating(true);
    setAiNotification(null);

    try {
      const res = await fetch('/api/recipes/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredients: selectedIngredients,
          cuisinePreference: selectedCuisine,
          dietary: dietaryFilter !== 'all' ? [dietaryFilter] : [],
          skillLevel: 'intermediate',
          pantryStrictness: pantryStrictness,
          customRequest: customPrompt || '',
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to generate recipe');
      }

      const data = await res.json();
      if (data.recipes && data.recipes.length > 0) {
        setAiGeneratedRecipes((prev) => [...data.recipes, ...prev]);
        setAiNotification({
          type: 'success',
          message: `Chef Gemini crafted ${data.recipes.length} new authentic dishes tailored to your ingredients!`,
        });
      } else {
        throw new Error('No recipes returned from AI');
      }
    } catch (err: any) {
      console.error(err);
      setAiNotification({
        type: 'error',
        message: err.message || 'Could not connect to Chef AI. Please try again.',
      });
    } finally {
      setIsAiGenerating(false);
    }
  };

  // Combine curated + AI recipes and calculate match scores
  const allRecipes = useMemo(() => {
    return [...aiGeneratedRecipes, ...CURATED_RECIPES];
  }, [aiGeneratedRecipes]);

  const matchedAndFilteredRecipes = useMemo(() => {
    const userIngredientsSet = new Set(selectedIngredients);
    const userIngredientsLower = selectedIngredients.map((i) =>
      i.toLowerCase().replace(/_/g, ' ')
    );

    return allRecipes
      .map((recipe) => {
        // Calculate match percentage
        const totalIng = recipe.ingredientsList.length;
        const matched = recipe.ingredientsList.filter((ing) => {
          const ingLower = ing.name.toLowerCase();
          const isDirectMatch = userIngredientsLower.some(
            (u) => ingLower.includes(u) || u.includes(ingLower.split(' ')[0])
          );
          const isIdMatch = recipe.matchingIngredients?.some((mId) => {
            const mClean = mId.toLowerCase().replace(/_/g, ' ');
            return userIngredientsSet.has(mId) && ingLower.includes(mClean);
          });
          return isDirectMatch || isIdMatch || ing.isPantryMatch;
        });

        const missing = recipe.ingredientsList.filter((ing) => {
          const ingLower = ing.name.toLowerCase();
          if (['salt', 'water', 'oil', 'cooking oil'].some((s) => ingLower.includes(s))) {
            return false;
          }
          const isDirectMatch = userIngredientsLower.some(
            (u) => ingLower.includes(u) || u.includes(ingLower.split(' ')[0])
          );
          const isIdMatch = recipe.matchingIngredients?.some((mId) => {
            const mClean = mId.toLowerCase().replace(/_/g, ' ');
            return userIngredientsSet.has(mId) && ingLower.includes(mClean);
          });
          return !isDirectMatch && !isIdMatch && !ing.isPantryMatch;
        });

        const score = totalIng > 0 ? (matched.length / totalIng) * 100 : 0;

        return {
          recipe,
          score,
          matchedCount: matched.length,
          missingCount: missing.length,
        };
      })
      .filter(({ recipe, missingCount, score }) => {
        // Cuisine filter
        if (selectedCuisine !== 'all') {
          const c = recipe.cuisine.toLowerCase();
          if (
            selectedCuisine === 'desserts-sweets' &&
            !c.includes('dessert') &&
            !c.includes('sweet') &&
            !recipe.tags.includes('dessert') &&
            !recipe.tags.includes('mithai-classic')
          ) {
            return false;
          }
          if (
            selectedCuisine === 'asian' &&
            !c.includes('asian') &&
            !c.includes('thai') &&
            !c.includes('japanese') &&
            !c.includes('korean') &&
            !c.includes('chinese')
          ) {
            return false;
          }
          if (selectedCuisine === 'thai' && !c.includes('thai')) {
            return false;
          }
          if (selectedCuisine === 'japanese' && !c.includes('japanese')) {
            return false;
          }
          if (selectedCuisine === 'korean' && !c.includes('korean')) {
            return false;
          }
          if (selectedCuisine === 'biryani' && !c.includes('biryani')) {
            return false;
          }
          if (
            selectedCuisine === 'andhra-telugu' &&
            !c.includes('andhra') &&
            !c.includes('telugu') &&
            !c.includes('hyderabad')
          ) {
            return false;
          }
          if (selectedCuisine === 'indian' && !recipe.regionCategory.includes('indian')) {
            return false;
          }
          if (selectedCuisine === 'international' && recipe.regionCategory !== 'international') {
            return false;
          }
          if (selectedCuisine === 'north-indian' && !c.includes('north indian')) {
            return false;
          }
          if (selectedCuisine === 'south-indian' && !c.includes('south indian') && !c.includes('andhra')) {
            return false;
          }
          if (selectedCuisine === 'indo-chinese' && !c.includes('indo-chinese')) {
            return false;
          }
          if (selectedCuisine === 'italian' && !c.includes('italian')) {
            return false;
          }
          if (selectedCuisine === 'east-asian' && !c.includes('asian')) {
            return false;
          }
          if (selectedCuisine === 'mexican' && !c.includes('mexican')) {
            return false;
          }
          if (selectedCuisine === 'mediterranean' && !c.includes('mediterranean')) {
            return false;
          }
        }

        // Dietary filter
        if (dietaryFilter !== 'all') {
          if (dietaryFilter === 'vegetarian' && !recipe.tags.includes('vegetarian')) {
            return false;
          }
          if (dietaryFilter === 'vegan' && !recipe.tags.includes('vegan')) {
            return false;
          }
          if (dietaryFilter === 'gluten-free' && !recipe.tags.includes('gluten-free')) {
            return false;
          }
          if (dietaryFilter === 'high-protein' && !recipe.tags.includes('high-protein')) {
            return false;
          }
          if (dietaryFilter === 'quick-under-30' && recipe.cookingTimeMinutes > 30) {
            return false;
          }
        }

        // Strict pantry check
        if (pantryStrictness === 'strict' && missingCount > 1) {
          return false;
        }

        // Dish Search Filter (matches dish title, regional name, cuisine, ingredients, tags)
        if (dishSearchQuery.trim()) {
          const q = dishSearchQuery.trim().toLowerCase();
          const matchesTitle = recipe.title.toLowerCase().includes(q);
          const matchesOriginal = recipe.originalName?.toLowerCase().includes(q);
          const matchesDesc = recipe.description.toLowerCase().includes(q);
          const matchesCuisine = recipe.cuisine.toLowerCase().includes(q);
          const matchesTag = recipe.tags.some((t) => t.toLowerCase().includes(q));
          const matchesIng = recipe.ingredientsList.some((i) => i.name.toLowerCase().includes(q));

          if (!matchesTitle && !matchesOriginal && !matchesDesc && !matchesCuisine && !matchesTag && !matchesIng) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        // AI recipes first if matched, then by match score
        if (a.recipe.isAiGenerated && !b.recipe.isAiGenerated) return -1;
        if (!a.recipe.isAiGenerated && b.recipe.isAiGenerated) return 1;
        return b.score - a.score;
      })
      .map(({ recipe }) => recipe);
  }, [allRecipes, selectedIngredients, selectedCuisine, dietaryFilter, pantryStrictness, dishSearchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/60 text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pantryCount={selectedIngredients.length}
        savedCount={savedRecipes.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">
        {/* Toast / Notification Banner */}
        {aiNotification && (
          <div
            className={`p-4 rounded-2xl flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold transition-all ${
              aiNotification.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                : 'bg-rose-50 text-rose-900 border border-rose-300'
            }`}
          >
            <div className="flex items-center gap-2">
              {aiNotification.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              )}
              <span>{aiNotification.message}</span>
            </div>
            <button
              onClick={() => setAiNotification(null)}
              className="text-stone-400 hover:text-stone-700"
            >
              ✕
            </button>
          </div>
        )}

        {/* Tab 1: Explore Dishes & Pantry Studio */}
        {(activeTab === 'explore' || activeTab === 'pantry') && (
          <div className="space-y-8 animate-fadeIn">
            {/* Pantry Selector component */}
            <PantrySelector
              selectedIngredients={selectedIngredients}
              onToggleIngredient={handleToggleIngredient}
              onClearIngredients={handleClearIngredients}
              onApplyPreset={handleApplyPreset}
              selectedCuisine={selectedCuisine}
              onSelectCuisine={setSelectedCuisine}
              dietaryFilter={dietaryFilter}
              onSelectDietary={setDietaryFilter}
              pantryStrictness={pantryStrictness}
              onChangeStrictness={setPantryStrictness}
              onGenerateAiRecipe={handleGenerateAiRecipe}
              isAiGenerating={isAiGenerating}
              onSelectCustomIngredient={handleSelectCustomIngredient}
            />

            {/* Dedicated Dish Search & Cravings Bar */}
            <div className="bg-white rounded-3xl border border-emerald-900/10 shadow-sm p-4 sm:p-5 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-emerald-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={dishSearchQuery}
                    onChange={(e) => setDishSearchQuery(e.target.value)}
                    placeholder="Search dishes you want to cook (e.g. Biryani, Dal Tadka, Paneer Makhani, Ramen, Gongura Pappu, Pasta)..."
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 transition-all"
                  />
                  {dishSearchQuery && (
                    <button
                      onClick={() => setDishSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                      title="Clear dish search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {dishSearchQuery && (
                  <button
                    onClick={() => setDishSearchQuery('')}
                    className="text-xs font-bold text-red-600 hover:text-red-700 px-3.5 py-2 rounded-xl bg-red-50 border border-red-200 shrink-0"
                  >
                    Clear Search ({matchedAndFilteredRecipes.length} dishes found)
                  </button>
                )}
              </div>

              {/* Quick Popular Dish Cravings Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                <span className="text-stone-400 font-semibold uppercase text-[10px] tracking-wider shrink-0 mr-1">
                  Quick Cravings:
                </span>
                {['Biryani', 'Paneer', 'Dal Tadka', 'Dosa', 'Pasta', 'Ramen', 'Andhra Pappu', 'Gulab Jamun', 'Thai Curry'].map((dish) => (
                  <button
                    key={dish}
                    onClick={() => setDishSearchQuery(dishSearchQuery.toLowerCase() === dish.toLowerCase() ? '' : dish)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                      dishSearchQuery.toLowerCase() === dish.toLowerCase()
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-2xs'
                        : 'bg-stone-50 hover:bg-emerald-50 text-stone-700 border-stone-200/90'
                    }`}
                  >
                    {dish}
                  </button>
                ))}
              </div>
            </div>

            {/* Recipes Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-stone-200">
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 flex items-center gap-2">
                  <span>Authentic Dishes You Can Cook</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 font-sans font-bold border border-emerald-200">
                    {matchedAndFilteredRecipes.length} Found
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Ranked by pantry compatibility &bull; Click "Video Guide" for YouTube chef tutorials or "Kitchen Mode" for step-by-step timers
                </p>
              </div>

              {/* Quick AI Trigger */}
              <button
                onClick={() => handleGenerateAiRecipe()}
                disabled={selectedIngredients.length === 0 || isAiGenerating}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold shadow-xs transition-colors self-start sm:self-auto"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{isAiGenerating ? 'Synthesizing with Gemini...' : 'Craft More Dishes with AI'}</span>
              </button>
            </div>

            {/* Recipes Grid */}
            {matchedAndFilteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedAndFilteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    userIngredients={selectedIngredients}
                    isSaved={savedRecipes.some((r) => r.id === recipe.id)}
                    onToggleSave={handleToggleSave}
                    onOpenWalkthrough={(r) => setWalkthroughRecipe(r)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-3xl bg-white border border-stone-200 space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
                  <UtensilsCrossed className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-stone-900">
                    No Exact Recipe Matches With Current Filters
                  </h4>
                  <p className="text-sm text-stone-500 max-w-md mx-auto mt-1">
                    Try switching Pantry Strictness to "Flexible", picking another cuisine filter, or tapping the button below to have Gemini synthesize a completely custom recipe.
                  </p>
                </div>
                <button
                  onClick={() => handleGenerateAiRecipe()}
                  disabled={selectedIngredients.length === 0 || isAiGenerating}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Generate Custom Dish From These {selectedIngredients.length} Items</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Desserts & Royal Sweets */}
        {activeTab === 'desserts' && (
          <DessertsAndSweetsView
            allRecipes={allRecipes}
            userIngredients={selectedIngredients}
            savedRecipes={savedRecipes}
            onToggleSave={handleToggleSave}
            onOpenWalkthrough={(r) => setWalkthroughRecipe(r)}
            onGenerateAiRecipe={handleGenerateAiRecipe}
            isAiGenerating={isAiGenerating}
          />
        )}

        {/* Tab 3: Technique Masterclasses */}
        {activeTab === 'masterclass' && <TechniqueMasterclassView />}

        {/* Tab 3: Spices & Substitutions */}
        {activeTab === 'spices' && <SpiceAndSubstitutionsView />}

        {/* Tab 4: Saved Recipes */}
        {activeTab === 'saved' && (
          <SavedRecipesView
            savedRecipes={savedRecipes}
            userIngredients={selectedIngredients}
            onToggleSave={handleToggleSave}
            onOpenWalkthrough={(r) => setWalkthroughRecipe(r)}
            onExplorePantry={() => setActiveTab('pantry')}
            onClearAllSaved={() => setSavedRecipes([])}
          />
        )}
      </main>

      {/* Kitchen Cooking Mode Modal */}
      {walkthroughRecipe && (
        <CookingWalkthroughModal
          recipe={walkthroughRecipe}
          onClose={() => setWalkthroughRecipe(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-amber-200/80 bg-white/80 py-8 px-4 sm:px-6 lg:px-8 mt-12 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-bold text-sm text-stone-800">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>Rasoi &amp; World Kitchen</span>
          </div>
          <p>
            Authentic Indian Regional &amp; International Cooking Masterclasses &bull; Zero Food Waste Pantry Cooking
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>North &amp; South Indian</span>
            <span>&bull;</span>
            <span>Italian &amp; Mediterranean</span>
            <span>&bull;</span>
            <span>East Asian &amp; Mexican</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
