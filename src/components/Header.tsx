import React from 'react';
import { ChefHat, Flame, BookOpen, Sparkles, Bookmark, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  activeTab: 'pantry' | 'masterclass' | 'spices' | 'saved';
  setActiveTab: (tab: 'pantry' | 'masterclass' | 'spices' | 'saved') => void;
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div
            onClick={() => setActiveTab('pantry')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Flame className="w-7 h-7 text-amber-100 animate-pulse-subtle" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-2xl tracking-tight text-stone-900">
                  Rasoi <span className="text-amber-700">&amp;</span> World Kitchen
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
                  Pantry Chef
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium">
                Learn authentic Indian regional &amp; international cooking from what you have
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-2xl border border-stone-200/80">
            <button
              onClick={() => setActiveTab('pantry')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'pantry'
                  ? 'bg-white text-stone-900 shadow-xs border border-amber-200/60 font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-600" />
              <span>Pantry Studio</span>
              {pantryCount > 0 && (
                <span className="ml-1 px-2 py-0.5 rounded-full text-xs font-bold bg-amber-600 text-white">
                  {pantryCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('masterclass')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'masterclass'
                  ? 'bg-white text-stone-900 shadow-xs border border-amber-200/60 font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              <ChefHat className="w-4 h-4 text-orange-600" />
              <span>Technique Masterclasses</span>
            </button>

            <button
              onClick={() => setActiveTab('spices')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'spices'
                  ? 'bg-white text-stone-900 shadow-xs border border-amber-200/60 font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Spices &amp; Substitutions</span>
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'saved'
                  ? 'bg-white text-stone-900 shadow-xs border border-amber-200/60 font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              <Bookmark className="w-4 h-4 text-amber-600" />
              <span>Saved Dishes</span>
              {savedCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs font-semibold bg-stone-200 text-stone-700">
                  {savedCount}
                </span>
              )}
            </button>
          </nav>

          {/* Quick Right Action / Mobile Nav Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setActiveTab('pantry')}
              className={`p-2.5 rounded-xl border text-sm font-medium ${
                activeTab === 'pantry' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Pantry Studio"
            >
              <UtensilsCrossed className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('masterclass')}
              className={`p-2.5 rounded-xl border text-sm font-medium ${
                activeTab === 'masterclass' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Masterclasses"
            >
              <ChefHat className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('spices')}
              className={`p-2.5 rounded-xl border text-sm font-medium ${
                activeTab === 'spices' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Spices &amp; Substitutions"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`p-2.5 rounded-xl border text-sm font-medium relative ${
                activeTab === 'saved' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-stone-700 border-stone-200'
              }`}
              title="Saved Dishes"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
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
