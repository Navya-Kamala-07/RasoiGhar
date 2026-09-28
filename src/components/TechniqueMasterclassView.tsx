import React, { useState } from 'react';
import { TECHNIQUES_MASTERCLASS } from '../data/techniques';
import { TechniqueMasterclass } from '../types/recipe';
import {
  ChefHat,
  Flame,
  Lightbulb,
  AlertTriangle,
  Eye,
  CheckCircle,
  Utensils,
  BookOpen,
} from 'lucide-react';

export const TechniqueMasterclassView: React.FC = () => {
  const [selectedCuisineFilter, setSelectedCuisineFilter] = useState<'all' | 'Indian' | 'International'>('all');
  const [activeTechniqueId, setActiveTechniqueId] = useState<string>(TECHNIQUES_MASTERCLASS[0].id);

  const filteredTechniques = TECHNIQUES_MASTERCLASS.filter((t) => {
    if (selectedCuisineFilter === 'all') return true;
    return t.cuisine === selectedCuisineFilter;
  });

  const activeTechnique =
    TECHNIQUES_MASTERCLASS.find((t) => t.id === activeTechniqueId) || TECHNIQUES_MASTERCLASS[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Intro Hero Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white relative overflow-hidden shadow-lg border border-amber-900/50">
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold mb-3">
            <ChefHat className="w-4 h-4 text-amber-400" />
            <span>Culinary Fundamentals Masterclass</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight">
            Learn the Science Behind the Flavor
          </h1>
          <p className="mt-2 text-sm md:text-base text-amber-100/80 leading-relaxed">
            Great cooking is not about memorizing recipes—it is about mastering universal techniques.
            Understand how blooming whole spices in ghee, caramelizing onion bases, and emulsifying pasta water transform basic ingredients into culinary magic.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-3">
        {[
          { id: 'all', label: 'All Masterclasses (Indian & Global)' },
          { id: 'Indian', label: '🇮🇳 Indian Techniques (Tadka, Bhunao, Dum)' },
          { id: 'International', label: '🌎 Global Techniques (Mantecatura, Velveting, Deglazing)' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedCuisineFilter(f.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCuisineFilter === f.id
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Technique Explorer Grid & Detail Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Technique Cards List */}
        <div className="lg:col-span-5 space-y-3">
          {filteredTechniques.map((tech) => {
            const isActive = tech.id === activeTechnique.id;
            return (
              <div
                key={tech.id}
                onClick={() => setActiveTechniqueId(tech.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-50/80 border-amber-500 shadow-sm ring-1 ring-amber-500'
                    : 'bg-white border-stone-200 hover:border-amber-300 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      tech.cuisine === 'Indian'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {tech.cuisine}
                  </span>
                  {tech.originalTerm && (
                    <span className="text-xs font-serif italic text-stone-500">
                      {tech.originalTerm}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-stone-900 text-base mt-1.5">
                  {tech.name}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                  {tech.brief}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: In-depth Interactive Masterclass View */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 md:p-8 space-y-6">
          {/* Header */}
          <div className="pb-4 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                {activeTechnique.cuisine} Masterclass
              </span>
              {activeTechnique.originalTerm && (
                <span className="text-xs font-medium text-amber-800">
                  Native term: <strong className="font-serif">{activeTechnique.originalTerm}</strong>
                </span>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900 mt-2">
              {activeTechnique.name}
            </h2>
            <p className="text-sm text-stone-600 mt-1 leading-relaxed">
              {activeTechnique.brief}
            </p>
          </div>

          {/* The Culinary Science */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
              <Lightbulb className="w-4 h-4 text-amber-700" />
              <span>The Culinary Science ("Why This Works Chemically"):</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
              {activeTechnique.whyItMatters}
            </p>
          </div>

          {/* Sensory Check */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-300 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
              <Eye className="w-4 h-4 text-emerald-700" />
              <span>Sensory Cues (What to See, Hear &amp; Smell):</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
              {activeTechnique.sensoryCheck}
            </p>
          </div>

          {/* Step by Step Execution */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Step-by-Step Technique Walkthrough</span>
            </h4>
            <div className="space-y-3">
              {activeTechnique.stepByStep.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex gap-3 text-xs sm:text-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-stone-800 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Pitfalls & Mistakes */}
          <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-900">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Common Pitfalls &amp; How to Avoid Them:</span>
            </div>
            <ul className="space-y-1.5 text-xs text-rose-950">
              {activeTechnique.commonMistakes.map((mistake, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Best Dishes where applied */}
          <div className="pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Master This To Cook:
            </div>
            <div className="flex flex-wrap gap-2">
              {activeTechnique.bestForDishes.map((dish, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200 flex items-center gap-1.5"
                >
                  <Utensils className="w-3 h-3 text-amber-600" />
                  <span>{dish}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
