import React, { useState } from 'react';
import { SPICES_AND_SEASONINGS, COMMON_SUBSTITUTIONS_MAP } from '../data/spiceGuide';
import {
  Sparkles,
  Search,
  ArrowRight,
  HelpCircle,
  Flame,
  Send,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';

export const SpiceAndSubstitutionsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'substitutes' | 'spices'>('substitutes');
  const [searchQuery, setSearchQuery] = useState('');

  // AI custom substitute search state
  const [customIngredient, setCustomIngredient] = useState('');
  const [dishContext, setDishContext] = useState('');
  const [isSearchingAi, setIsSearchingAi] = useState(false);
  const [aiSubstitutes, setAiSubstitutes] = useState<
    { substitute: string; ratio: string; rationale: string; pantryAvailability?: string }[]
  >([]);

  const handleSearchAiSubstitute = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customIngredient.trim() || isSearchingAi) return;

    setIsSearchingAi(true);
    setAiSubstitutes([]);

    try {
      const res = await fetch('/api/substitutions/find', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredient: customIngredient.trim(),
          dishContext: dishContext.trim(),
        }),
      });

      if (!res.ok) throw new Error('Failed to find substitutions');
      const data = await res.json();
      setAiSubstitutes(data.substitutions || []);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsSearchingAi(false);
    }
  };

  const filteredSpices = SPICES_AND_SEASONINGS.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.hindiName && s.hindiName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (s.teluguName && s.teluguName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      s.flavorNotes.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 text-white relative overflow-hidden shadow-lg">
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3 border border-white/30">
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Pantry Problem Solver</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight">
            Spice Alchemist &amp; Pantry Substitutions
          </h1>
          <p className="mt-2 text-sm md:text-base text-amber-100/90 leading-relaxed">
            Missing an ingredient? Don't stop cooking! Learn how professional chefs swap spices,
            thicken gravies without cream, and bloom aromatics for maximum flavor impact.
          </p>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-3">
        <button
          onClick={() => setActiveTab('substitutes')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'substitutes'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
          }`}
        >
          🔄 Quick Ingredient Substitutes
        </button>
        <button
          onClick={() => setActiveTab('spices')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'spices'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
          }`}
        >
          🌶️ Indian &amp; Global Spice Guide
        </button>
      </div>

      {activeTab === 'substitutes' ? (
        <div className="space-y-8">
          {/* Ask AI for Any Custom Missing Item */}
          <div className="p-6 rounded-3xl bg-white border border-amber-300 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-display font-bold text-stone-900">
                  Missing Any Ingredient? Find Chef-Approved Swaps
                </h3>
                <p className="text-xs text-stone-500">
                  Type what you are missing and our culinary model will calculate the exact culinary ratio and chemical reasoning.
                </p>
              </div>
            </div>

            <form onSubmit={handleSearchAiSubstitute} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-5">
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Missing Ingredient:
                </label>
                <input
                  type="text"
                  value={customIngredient}
                  onChange={(e) => setCustomIngredient(e.target.value)}
                  placeholder="e.g. Saffron, Lemongrass, Buttermilk, Kasuri Methi..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="sm:col-span-5">
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Dish Context (Optional):
                </label>
                <input
                  type="text"
                  value={dishContext}
                  onChange={(e) => setDishContext(e.target.value)}
                  placeholder="e.g. Creamy Paneer Curry, Pasta Sauce, Biryani..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="sm:col-span-2 flex items-end">
                <button
                  type="submit"
                  disabled={!customIngredient.trim() || isSearchingAi}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  {isSearchingAi ? (
                    <Sparkles className="w-4 h-4 animate-spin text-amber-200" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSearchingAi ? 'Finding...' : 'Find Swap'}</span>
                </button>
              </div>
            </form>

            {/* AI Results */}
            {aiSubstitutes.length > 0 && (
              <div className="mt-4 pt-4 border-t border-amber-200/80 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Recommended Culinary Substitutes for "{customIngredient}":
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {aiSubstitutes.map((sub, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300/80 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-900 text-sm">
                          {sub.substitute}
                        </span>
                        {sub.pantryAvailability && (
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-amber-200 text-stone-600">
                            {sub.pantryAvailability}
                          </span>
                        )}
                      </div>
                      <div className="font-semibold text-amber-800">Ratio: {sub.ratio}</div>
                      <p className="text-stone-600 leading-relaxed">{sub.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Curated Master Substitutions Grid */}
          <div>
            <h3 className="text-lg font-display font-bold text-stone-900 mb-3">
              Essential Kitchen Replacement Cheatsheet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(COMMON_SUBSTITUTIONS_MAP).map(([orig, details]) => (
                <div
                  key={orig}
                  className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                      Missing: {orig}
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </div>

                  <div>
                    <div className="font-display font-bold text-stone-900 text-base">
                      {details.substitute}
                    </div>
                    <div className="text-xs font-semibold text-amber-800 mt-0.5">
                      Ratio: {details.ratio}
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                    {details.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Spices Search */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search spices by English, Hindi, or Telugu name (e.g. Jeelakarra, Avalu, Pasupu, Inguva, Shahi Jeera)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Spices Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSpices.map((spice, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-lg text-stone-900">
                      {spice.name}
                    </h3>
                    {(spice.hindiName || spice.teluguName) && (
                      <p className="text-xs font-serif text-amber-800 font-semibold">
                        {[spice.hindiName, spice.teluguName].filter(Boolean).join(' • ')}
                      </p>
                    )}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                    Aroma &amp; Heat
                  </span>
                </div>

                <div className="text-xs space-y-2">
                  <div>
                    <span className="font-bold text-stone-700">Flavor Profile: </span>
                    <span className="text-stone-600">{spice.flavorNotes}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950">
                    <span className="font-bold">How to Bloom Properly: </span>
                    <span>{spice.bloomingMethod}</span>
                  </div>

                  <div>
                    <span className="font-bold text-stone-700">Global Equivalent / Pair: </span>
                    <span className="text-stone-600">{spice.globalEquivalentOrPair}</span>
                  </div>

                  <div>
                    <span className="font-bold text-stone-700">Instant Substitute: </span>
                    <span className="text-stone-600">{spice.substitute}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
