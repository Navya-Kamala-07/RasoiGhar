import React, { useState } from 'react';
import { Play, ExternalLink, X, Film, CheckCircle2, Eye, Sparkles, ChefHat, Search } from 'lucide-react';
import { Recipe, RecipeStep } from '../types/recipe';
import { getVideoSuggestionForRecipe, RECOMMENDED_CHANNELS_BY_CUISINE } from '../utils/videoTutorials';

interface YouTubeVideoModalProps {
  recipe: Recipe;
  activeStep?: RecipeStep | null;
  onClose: () => void;
}

export const YouTubeVideoModal: React.FC<YouTubeVideoModalProps> = ({
  recipe,
  activeStep,
  onClose,
}) => {
  const videoRec = getVideoSuggestionForRecipe(recipe);
  const [selectedSearchQuery, setSelectedSearchQuery] = useState(
    activeStep
      ? `${recipe.title} ${activeStep.title} technique tutorial`
      : videoRec.youtubeQuery
  );

  const channelsForCuisine =
    RECOMMENDED_CHANNELS_BY_CUISINE[recipe.cuisine] ||
    RECOMMENDED_CHANNELS_BY_CUISINE[recipe.regionCategory === 'indian' ? 'North Indian' : 'Asian'] ||
    [];

  const currentSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(selectedSearchQuery)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-950/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-emerald-900/10 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200/90 flex items-center justify-between bg-gradient-to-r from-emerald-900 via-emerald-950 to-stone-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-600/90 text-white flex items-center justify-center shadow-md">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-red-500/20 text-red-200 border border-red-400/30">
                  Visual Video Guide
                </span>
                <span className="text-xs text-emerald-200/80">Can't understand textually? Watch here!</span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white line-clamp-1">
                {recipe.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Main Visual Card */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-950 rounded-2xl p-4 sm:p-5 text-white border border-stone-800 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <ChefHat className="w-4 h-4" />
                  <span>{videoRec.curatedSource}</span>
                  {videoRec.durationHint && (
                    <span className="text-stone-400 font-normal">• ~{videoRec.durationHint}</span>
                  )}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-stone-100">
                  {videoRec.title}
                </h4>
              </div>

              <a
                href={currentSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] shrink-0"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Visual Cue Alert */}
            {videoRec.tip && (
              <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700 text-xs text-stone-300 flex items-start gap-2.5">
                <Eye className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-300">Key Visual Cue to Watch For: </span>
                  <span>{videoRec.tip}</span>
                </div>
              </div>
            )}
          </div>

          {/* If an active step was passed, highlight the step tutorial */}
          {activeStep && (
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white text-xs font-bold flex items-center justify-center">
                    {activeStep.stepNumber}
                  </span>
                  <span className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                    Confused by Step {activeStep.stepNumber}?
                  </span>
                </div>
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${recipe.title} ${activeStep.title} step technique`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-1 underline underline-offset-2"
                >
                  <span>Search this exact step on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed mb-2 font-medium">
                "{activeStep.instruction}"
              </p>
              {activeStep.sensoryCue && (
                <p className="text-[11px] text-emerald-800 bg-white/80 p-2 rounded-lg border border-emerald-200/60">
                  <span className="font-bold">Sensory Cue:</span> {activeStep.sensoryCue}
                </p>
              )}
            </div>
          )}

          {/* Quick Step Video Jump */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2 flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-emerald-800" />
              <span>Watch Specific Cooking Steps:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {recipe.steps.map((step) => {
                const stepQuery = `${recipe.title} ${step.title} technique`;
                const stepUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(stepQuery)}`;
                return (
                  <a
                    key={step.stepNumber}
                    href={stepUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-left transition-all group flex items-start justify-between gap-2"
                  >
                    <div>
                      <div className="text-xs font-bold text-stone-800 group-hover:text-emerald-900">
                        Step {step.stepNumber}: {step.title}
                      </div>
                      <div className="text-[11px] text-stone-500 line-clamp-1">
                        {step.instruction}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-700 shrink-0 mt-0.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Recommended Channels for this Cuisine */}
          {channelsForCuisine.length > 0 && (
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Top Recommended Chef Channels for {recipe.cuisine || 'this Cuisine'}:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {channelsForCuisine.map((c, i) => (
                  <a
                    key={i}
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${c.channel} ${recipe.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-stone-200 hover:border-red-300 hover:bg-red-50/30 transition-all text-xs"
                  >
                    <div className="font-bold text-stone-800 flex items-center justify-between">
                      <span>{c.channel}</span>
                      <ExternalLink className="w-3 h-3 text-red-600" />
                    </div>
                    <div className="text-[10px] text-stone-500 line-clamp-2 mt-0.5">
                      {c.reason}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200/90 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-stone-500">
            Clicking any link opens high-resolution video demonstrations in YouTube
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-semibold transition-colors"
          >
            Close Video Guide
          </button>
        </div>
      </div>
    </div>
  );
};
