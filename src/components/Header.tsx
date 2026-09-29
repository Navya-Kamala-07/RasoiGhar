import React from 'react';
import {
  ChefHat,
  Flame,
  BookOpen,
  Sparkles,
  Bookmark,
  UtensilsCrossed,
  Cake,
  Search,
} from 'lucide-react';

export type NavTab = 'explore' | 'pantry' | 'desserts' | 'masterclass' | 'spices' | 'saved';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  pantryCount: number;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  pantryCount,
  savedCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div
            onClick={() => setActiveTab('explore')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-800 via-teal-700 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-amber-300 animate-pulse-subtle" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-2xl tracking-tight text-stone-900">
                  Rasoi <span className="text-emerald-700">&amp;</span> World Kitchen
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Culinary Studio
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium">
                Search dishes, master regional Indian &amp; world foods, cook with what you have
              </p>
            </div>
          </div>

          {/* Navigation Tabs - New Emerald & Sage Theme */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 bg-stone-100/90 rounded-2xl border border-stone-200/80">
            <button
              onClick={() => setActiveTab('explore')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'explore'
                  ? 'bg-emerald-800 text-white shadow-xs font-bold'
                  : 'text-stone-600 hover:text-emerald-950 hover:bg-white/80'
              }`}
            >
              <Search className={`w-4 h-4 ${activeTab === 'explore' ? 'text-amber-300' : 'text-emerald-600'}`} />
              <span>Search Dishes</span>
            </button>

            <button
              onClick={() => setActiveTab('pantry')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'pantry'
                  ? 'bg-emerald-800 text-white shadow-xs font-bold'
                  : 'text-stone-600 hover:text-emerald-950 hover:bg-white/80'
              }`}
            >
              <UtensilsCrossed className={`w-4 h-4 ${activeTab === 'pantry' ? 'text-amber-300' : 'text-emerald-600'}`} />
              <span>Pantry Match</span>
              {pantryCount > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === 'pantry' ? 'bg-amber-400 text-emerald-950' : 'bg-emerald-600 text-white'
                }`}>
                  {pantryCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('desserts')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'desserts'
                  ? 'bg-emerald-800 text-white shadow-xs font-bold'
                  : 'text-stone-600 hover:text-emerald-950 hover:bg-white/80'
              }`}
            >
              <Cake className={`w-4 h-4 ${activeTab === 'desserts' ? 'text-pink-300' : 'text-rose-500'}`} />
              <span>Sweets &amp; Desserts</span>
            </button>

            <button
              onClick={() => setActiveTab('masterclass')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'masterclass'
                  ? 'bg-emerald-800 text-white shadow-xs font-bold'
                  : 'text-stone-600 hover:text-emerald-950 hover:bg-white/80'
              }`}
            >
              <ChefHat className={`w-4 h-4 ${activeTab === 'masterclass' ? 'text-amber-300' : 'text-emerald-600'}`} />
              <span>Masterclasses</span>
            </button>

            <button
              onClick={() => setActiveTab('spices')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'spices'
                  ? 'bg-emerald-800 text-white shadow-xs font-bold'
                  : 'text-stone-600 hover:text-emerald-950 hover:bg-white/80'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${activeTab === 'spices' ? 'text-amber-300' : 'text-amber-600'}`} />
              <span>Spices &amp; Subs</span>
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'saved'
                  ? 'bg-emerald-800 text-white shadow-xs font-bold'
                  : 'text-stone-600 hover:text-emerald-950 hover:bg-white/80'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${activeTab === 'saved' ? 'text-amber-300' : 'text-emerald-600'}`} />
              <span>Saved</span>
              {savedCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  {savedCount}
                </span>
              )}
            </button>
          </nav>

          {/* Quick Right Action / Mobile Nav Toggle */}
          <div className="flex items-center gap-1.5 lg:hidden overflow-x-auto">
            <button
              onClick={() => setActiveTab('explore')}
              className={`p-2 rounded-xl border text-xs font-semibold ${
                activeTab === 'explore'
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Search Dishes"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('pantry')}
              className={`p-2 rounded-xl border text-xs font-semibold relative ${
                activeTab === 'pantry'
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Pantry Match"
            >
              <UtensilsCrossed className="w-4 h-4" />
              {pantryCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 text-emerald-950 text-[9px] font-bold rounded-full flex items-center justify-center">
                  {pantryCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('desserts')}
              className={`p-2 rounded-xl border text-xs font-semibold ${
                activeTab === 'desserts'
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Sweets & Desserts"
            >
              <Cake className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('masterclass')}
              className={`p-2 rounded-xl border text-xs font-semibold ${
                activeTab === 'masterclass'
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Masterclasses"
            >
              <ChefHat className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('spices')}
              className={`p-2 rounded-xl border text-xs font-semibold ${
                activeTab === 'spices'
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Spices"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`p-2 rounded-xl border text-xs font-semibold relative ${
                activeTab === 'saved'
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Saved Dishes"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 text-emerald-950 text-[9px] font-bold rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
