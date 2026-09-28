import React, { useState, useMemo } from 'react';
import {
  INGREDIENT_CATEGORIES,
  INGREDIENTS_DATABASE,
  PANTRY_PRESETS,
  PantryPreset,
} from '../data/ingredients';
import { IngredientItem, CuisineCategory, DietaryPreference } from '../types/recipe';
import {
  Search,
  Plus,
  X,
  Sparkles,
  RotateCcw,
  SlidersHorizontal,
  Flame,
  Check,
  ChevronDown,
  ChevronUp,
  Info,
} from 'lucide-react';

interface PantrySelectorProps {
  selectedIngredients: string[];
  onToggleIngredient: (idOrName: string) => void;
  onClearIngredients: () => void;
  onApplyPreset: (preset: PantryPreset) => void;
  selectedCuisine: CuisineCategory;
  onSelectCuisine: (c: CuisineCategory) => void;
  dietaryFilter: DietaryPreference;
  onSelectDietary: (d: DietaryPreference) => void;
  pantryStrictness: 'flexible' | 'strict';
  onChangeStrictness: (s: 'flexible' | 'strict') => void;
  onGenerateAiRecipe: (customPrompt?: string) => void;
  isAiGenerating: boolean;
  onSelectCustomIngredient: (name: string) => void;
}

export const PantrySelector: React.FC<PantrySelectorProps> = ({
  selectedIngredients,
  onToggleIngredient,
  onClearIngredients,
  onApplyPreset,
  selectedCuisine,
  onSelectCuisine,
  dietaryFilter,
  onSelectDietary,
  pantryStrictness,
  onChangeStrictness,
  onGenerateAiRecipe,
  isAiGenerating,
  onSelectCustomIngredient,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('produce');
  const [customInput, setCustomInput] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);

  // Search filter across database items
  const filteredIngredients = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      return INGREDIENTS_DATABASE.filter((item) => item.category === activeCategory);
    }
    return INGREDIENTS_DATABASE.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        (item.indianName && item.indianName.toLowerCase().includes(q)) ||
        (item.substitutes && item.substitutes.some((s) => s.toLowerCase().includes(q)))
    );
  }, [searchQuery, activeCategory]);

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = customInput.trim();
    if (clean) {
      onSelectCustomIngredient(clean);
      setCustomInput('');
    }
  };

  const getIngredientDisplayName = (idOrName: string) => {
    const found = INGREDIENTS_DATABASE.find((i) => i.id === idOrName);
    if (found) {
      return found.indianName ? `${found.name} (${found.indianName})` : found.name;
    }
    return idOrName;
  };

  return (
    <div className="bg-white rounded-3xl border border-amber-200/90 shadow-sm p-5 md:p-7 space-y-6">
      {/* Header & Quick Presets */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-stone-900 flex items-center gap-2">
              <span>Your Kitchen Pantry</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-sans font-bold border border-amber-300">
                {selectedIngredients.length} Items Selected
              </span>
            </h2>
            <p className="text-sm text-stone-500">
              Select what you have in your fridge &amp; spice rack, or choose a culinary pantry preset
            </p>
          </div>

          {selectedIngredients.length > 0 && (
            <button
              onClick={onClearIngredients}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-red-600 transition-colors self-start sm:self-auto px-3 py-1.5 rounded-lg border border-stone-200 hover:border-red-200 hover:bg-red-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Pantry</span>
            </button>
          )}
        </div>

        {/* Preset Chips */}
        <div className="space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            Quick Pantry Presets:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {PANTRY_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => onApplyPreset(preset)}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/90 transition-all hover:scale-[1.02] shadow-2xs"
                title={preset.description}
              >
                <span>{preset.flag}</span>
                <span>{preset.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Ingredients Tray */}
      {selectedIngredients.length > 0 ? (
        <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
          <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-2">
            <span>Ingredients In Your Pan &amp; Pot:</span>
            <span className="text-amber-700/80 font-normal">Click any tag to remove</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedIngredients.map((item) => (
              <span
                key={item}
                onClick={() => onToggleIngredient(item)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-white text-stone-800 border border-amber-300 shadow-2xs cursor-pointer hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-all group"
              >
                <span>{getIngredientDisplayName(item)}</span>
                <X className="w-3.5 h-3.5 text-stone-400 group-hover:text-red-600 transition-colors" />
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-stone-50 border border-dashed border-stone-300 text-center">
          <p className="text-sm font-medium text-stone-600">
            Your pantry is currently empty. Tap items below or click a preset to see what you can cook!
          </p>
        </div>
      )}

      {/* Search & Custom Input Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-8 relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ingredients in English or Hindi (e.g., Paneer, Dal, Basil, Cumin, Tomato, Garlic)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <form onSubmit={handleAddCustom} className="md:col-span-4 flex gap-2">
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Add custom item..."
            className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
          />
          <button
            type="submit"
            disabled={!customInput.trim()}
            className="px-3.5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1 shadow-xs transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </button>
        </form>
      </div>

      {/* Category Tabs (only when not searching) */}
      {!searchQuery && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-stone-200">
          {INGREDIENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-t-xl text-xs font-bold whitespace-nowrap transition-all border-b-2 -mb-px flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'border-amber-600 text-amber-900 bg-amber-50/60'
                  : 'border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-50'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Ingredients Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-h-64 overflow-y-auto pr-1">
        {filteredIngredients.map((item) => {
          const isSelected = selectedIngredients.includes(item.id) || selectedIngredients.includes(item.name);
          return (
            <button
              key={item.id}
              onClick={() => onToggleIngredient(item.id)}
              className={`p-2.5 rounded-xl text-left transition-all border flex items-center justify-between gap-1.5 ${
                isSelected
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs font-bold scale-[0.98]'
                  : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200/90 hover:border-amber-300'
              }`}
            >
              <div className="truncate">
                <div className="text-xs font-semibold truncate leading-tight">{item.name}</div>
                {item.indianName && (
                  <div
                    className={`text-[10px] truncate ${
                      isSelected ? 'text-amber-100' : 'text-stone-400'
                    }`}
                  >
                    {item.indianName}
                  </div>
                )}
              </div>
              <div
                className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                  isSelected
                    ? 'bg-white text-amber-700 border-white'
                    : 'border-stone-300 text-transparent'
                }`}
              >
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            </button>
          );
        })}
      </div>

      {filteredIngredients.length === 0 && (
        <div className="py-8 text-center text-stone-400">
          <p className="text-sm">No ingredients found matching "{searchQuery}".</p>
          <button
            onClick={() => {
              if (searchQuery.trim()) {
                onSelectCustomIngredient(searchQuery.trim());
                setSearchQuery('');
              }
            }}
            className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add "{searchQuery}" as a custom pantry ingredient</span>
          </button>
        </div>
      )}

      {/* Advanced Filters & Preferences Toggle */}
      <div className="pt-2 border-t border-stone-200">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-amber-600" />
            <span>Cuisine &amp; Dietary Preferences</span>
            {showAdvancedFilters ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {/* AI Custom Recipe Generator CTA */}
          <button
            onClick={() => setShowAiModal(true)}
            disabled={selectedIngredients.length === 0 || isAiGenerating}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:opacity-50 text-white text-xs font-bold shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 text-amber-200 animate-spin-slow" />
            <span>{isAiGenerating ? 'Chef is Crafting Dishes...' : 'Ask AI Chef to Create New Recipe'}</span>
          </button>
        </div>

        {/* Collapsible Filter Panel */}
        {showAdvancedFilters && (
          <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/90 space-y-4 text-xs">
            {/* Cuisine Filter */}
            <div>
              <div className="font-bold text-stone-700 mb-2 uppercase tracking-wide">
                Target Cuisine:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Cuisines (Indian & Global)' },
                  { id: 'indian', label: 'All Indian' },
                  { id: 'north-indian', label: 'North Indian (Rich gravies, tandoor)' },
                  { id: 'south-indian', label: 'South Indian (Tadka, curry leaves, tamarind)' },
                  { id: 'indo-chinese', label: 'Indo-Chinese (Chilli, wok-tossed)' },
                  { id: 'italian', label: 'Italian (Pasta, pomodoro, aglio e olio)' },
                  { id: 'east-asian', label: 'East Asian (Stir-fry, fried rice)' },
                  { id: 'mexican', label: 'Mexican (Fajitas, black beans, salsa)' },
                  { id: 'mediterranean', label: 'Mediterranean (Shakshuka, olive oil)' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onSelectCuisine(c.id as CuisineCategory)}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      selectedCuisine === c.id
                        ? 'bg-amber-600 text-white font-bold shadow-xs'
                        : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary Preferences */}
            <div>
              <div className="font-bold text-stone-700 mb-2 uppercase tracking-wide">
                Dietary Preference:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'Any Dietary' },
                  { id: 'vegetarian', label: 'Vegetarian' },
                  { id: 'vegan', label: 'Vegan' },
                  { id: 'high-protein', label: 'High Protein' },
                  { id: 'gluten-free', label: 'Gluten-Free' },
                  { id: 'quick-under-30', label: 'Quick (< 30 Mins)' },
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => onSelectDietary(d.id as DietaryPreference)}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      dietaryFilter === d.id
                        ? 'bg-orange-600 text-white font-bold shadow-xs'
                        : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Strictness Mode */}
            <div className="flex items-center justify-between pt-2 border-t border-stone-200/80">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-stone-400" />
                <span className="font-semibold text-stone-700">Pantry Matching Strictness:</span>
              </div>
              <div className="inline-flex p-1 bg-stone-200/70 rounded-xl">
                <button
                  onClick={() => onChangeStrictness('flexible')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    pantryStrictness === 'flexible'
                      ? 'bg-white text-stone-900 shadow-2xs font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Flexible (Common spices allowed)
                </button>
                <button
                  onClick={() => onChangeStrictness('strict')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    pantryStrictness === 'strict'
                      ? 'bg-white text-stone-900 shadow-2xs font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Strict (Only selected items)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AI Prompt Modal / Drawer */}
      {showAiModal && (
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-50 border border-amber-300 animate-fadeIn space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <h3 className="text-sm font-bold text-stone-900 font-display">
                Create AI Custom Recipe from Your Pantry
              </h3>
            </div>
            <button
              onClick={() => setShowAiModal(false)}
              className="text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-stone-600">
            Gemini AI will synthesize your {selectedIngredients.length} ingredients into 2 gourmet, step-by-step masterclass recipes with sensory cues and culinary science.
          </p>

          <input
            type="text"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="Optional prompt (e.g. 'Make it a quick North Indian gravy' or 'Kid-friendly mild Italian dish')..."
            className="w-full px-3 py-2 text-xs rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowAiModal(false)}
              className="px-3 py-1.5 text-xs font-semibold text-stone-500 hover:text-stone-700"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setShowAiModal(false);
                onGenerateAiRecipe(customPrompt);
              }}
              disabled={isAiGenerating}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <Flame className="w-4 h-4" />
              <span>Generate Recipes Now</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
