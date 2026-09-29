import React, { useState, useMemo } from 'react';
import { Recipe } from '../types/recipe';
import { RecipeCard } from './RecipeCard';
import {
  Sparkles,
  Cake,
  Flame,
  Search,
  Bookmark,
  CheckCircle2,
  ChefHat,
  RotateCw,
  Lightbulb,
} from 'lucide-react';

interface DessertsAndSweetsViewProps {
  allRecipes: Recipe[];
  userIngredients: string[];
  savedRecipes: Recipe[];
  onToggleSave: (recipe: Recipe) => void;
  onOpenWalkthrough: (recipe: Recipe) => void;
  onGenerateAiRecipe: (customPrompt?: string) => void;
  isAiGenerating: boolean;
}

export const DessertsAndSweetsView: React.FC<DessertsAndSweetsViewProps> = ({
  allRecipes,
  userIngredients,
  savedRecipes,
  onToggleSave,
  onOpenWalkthrough,
  onGenerateAiRecipe,
  isAiGenerating,
}) => {
  const [subCategory, setSubCategory] = useState<'all' | 'indian-mithai' | 'asian-sweets' | 'global'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customSweetPrompt, setCustomSweetPrompt] = useState('');

  // Filter recipes for desserts & sweets
  const dessertRecipes = useMemo(() => {
    return allRecipes.filter((r) => {
      const c = r.cuisine.toLowerCase();
      const t = r.tags.map((tag) => tag.toLowerCase());
      const title = r.title.toLowerCase();
      const desc = r.description.toLowerCase();

      const isSweet =
        c.includes('dessert') ||
        c.includes('sweet') ||
        t.includes('dessert') ||
        t.includes('mithai-classic') ||
        title.includes('kheer') ||
        title.includes('payasam') ||
        title.includes('jamun') ||
        title.includes('mysore pak') ||
        title.includes('halwa') ||
        title.includes('sticky rice') ||
        title.includes('tiramisu') ||
        title.includes('shahi tukda') ||
        desc.includes('dessert') ||
        desc.includes('sweet');

      if (!isSweet) return false;

      if (subCategory === 'indian-mithai') {
        return r.regionCategory === 'indian' || c.includes('indian');
      }
      if (subCategory === 'asian-sweets') {
        return c.includes('thai') || c.includes('asian') || title.includes('mango') || title.includes('rice');
      }
      if (subCategory === 'global') {
        return r.regionCategory === 'international' && !c.includes('thai');
      }

      return true;
    });
  }, [allRecipes, subCategory]);

  const filteredDesserts = useMemo(() => {
    if (!searchQuery.trim()) return dessertRecipes;
    const q = searchQuery.toLowerCase();
    return dessertRecipes.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.originalName.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.ingredientsList.some((i) => i.name.toLowerCase().includes(q))
    );
  }, [dessertRecipes, searchQuery]);

  const handleCustomAiSweet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSweetPrompt.trim() && userIngredients.length === 0) return;
    const prompt = customSweetPrompt.trim()
      ? `Create an authentic dessert or sweet dish: ${customSweetPrompt.trim()}`
      : 'Create a delicious authentic dessert or traditional sweet dish using available ingredients.';
    onGenerateAiRecipe(prompt);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-900 to-stone-900 text-white relative overflow-hidden shadow-lg border border-emerald-800/40">
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-3 border border-white/20">
            <Cake className="w-4 h-4 text-pink-300" />
            <span>Mithai &amp; Confectionery Studio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight">
            All Types of Sweets &amp; Desserts
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-200 leading-relaxed">
            Master the culinary science of single-thread sugar syrup, mawa/khoya caramelization,
            and delicate steaming. Explore royal Indian mithai like Gulab Jamun, Mysore Pak, and Gajar Halwa, Bengali Rasgulla, fragrant Thai Mango Sticky Rice, and global patisserie.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Subcategory Navigation & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Subcategory Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All Sweets & Desserts', icon: '🍰' },
            { id: 'indian-mithai', label: 'Royal Indian Mithai', icon: '🍯' },
            { id: 'asian-sweets', label: 'Asian & Tropical Sweets', icon: '🥭' },
            { id: 'global', label: 'Global Patisserie', icon: '☕' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSubCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                subCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sweets (e.g., Gulab Jamun, Halwa, Mango)..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-300 text-xs text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
      </div>

      {/* AI Sweet Chef Prompt Bar */}
      <form
        onSubmit={handleCustomAiSweet}
        className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/90 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-950">AI Sweet Chef Assistant</div>
            <div className="text-[11px] text-emerald-800/80">
              Have leftover milk, bread, fruits, or sugar? Ask Gemini to invent a dessert!
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto flex-1 max-w-md">
          <input
            type="text"
            value={customSweetPrompt}
            onChange={(e) => setCustomSweetPrompt(e.target.value)}
            placeholder="e.g. 'Make a dessert using bread and cardamom', 'Quick 15-min kheer'..."
            className="flex-1 px-3 py-2 rounded-xl border border-emerald-300 bg-white text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <button
            type="submit"
            disabled={isAiGenerating}
            className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold whitespace-nowrap shadow-xs transition-colors flex items-center gap-1.5"
          >
            {isAiGenerating ? <RotateCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
            <span>{isAiGenerating ? 'Crafting...' : 'Invent Sweet'}</span>
          </button>
        </div>
      </form>

      {/* Food Science Tip Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>Sugar Syrup Science (Ek Taar)</span>
          </div>
          <p className="text-[11px] text-stone-600 leading-relaxed">
            Boiling sugar water to 110–112°C creates "Single String" syrup—viscous enough to cling to Gulab Jamun and Jalebi without crystalizing into rock sugar.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>Cardamom &amp; Ghee Synergy</span>
          </div>
          <p className="text-[11px] text-stone-600 leading-relaxed">
            The volatile terpenes in green cardamom (cineole and terpinyl acetate) dissolve instantly into warm ghee, carrying royal aromas throughout the entire confection.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>Glutinous Rice Steam Gelation</span>
          </div>
          <p className="text-[11px] text-stone-600 leading-relaxed">
            Steaming Thai sticky rice ensures high-amylopectin grains stay separate and chewy, ready to drink in sweet coconut cream without turning gluey.
          </p>
        </div>
      </div>

      {/* Desserts Recipe Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-display font-bold text-stone-900 flex items-center gap-2">
            <span>Curated Sweets &amp; Confections</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-sans font-bold border border-amber-300">
              {filteredDesserts.length} Recipes
            </span>
          </h3>
          <span className="text-xs text-stone-500">
            Full nutritional facts (Calories, Protein, Fiber) calculated for each dish
          </span>
        </div>

        {filteredDesserts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDesserts.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                userIngredients={userIngredients}
                isSaved={savedRecipes.some((r) => r.id === recipe.id)}
                onToggleSave={onToggleSave}
                onOpenWalkthrough={onOpenWalkthrough}
              />
            ))}
          </div>
        ) : (
          <div className="p-10 rounded-3xl bg-stone-50 border border-dashed border-stone-300 text-center space-y-3">
            <Cake className="w-10 h-10 text-stone-400 mx-auto" />
            <div className="text-sm font-bold text-stone-700">No desserts match "{searchQuery}"</div>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try searching for "Jamun", "Mysore Pak", "Kheer", "Mango", or click "Invent Sweet" to create one with AI!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
