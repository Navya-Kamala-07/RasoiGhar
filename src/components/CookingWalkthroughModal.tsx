import React, { useState, useEffect, useRef } from 'react';
import { Recipe, RecipeStep, NutritionalInfo } from '../types/recipe';
import { fetchRecipeNutrition } from '../utils/nutritionApi';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Flame,
  Clock,
  Sparkles,
  MessageSquare,
  Send,
  Eye,
  CheckCircle2,
  Users,
  Lightbulb,
  ChefHat,
  ArrowRight,
  Activity,
  Dumbbell,
  Wheat,
  RotateCw,
  Film,
} from 'lucide-react';
import { YouTubeVideoModal } from './YouTubeVideoModal';
import {
  playKitchenChime,
  speakInstruction,
  stopSpeaking,
  formatScaledAmount,
} from '../utils/kitchenHelpers';

interface CookingWalkthroughModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const CookingWalkthroughModal: React.FC<CookingWalkthroughModalProps> = ({
  recipe,
  onClose,
}) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [servings, setServings] = useState(recipe.defaultServings);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Nutritional information state via AI generation endpoint
  const [nutrition, setNutrition] = useState<NutritionalInfo | null>(
    recipe.nutritionalInfo || (recipe.proteinGrams !== undefined && recipe.fiberGrams !== undefined ? {
      calories: recipe.caloriesPerServing,
      protein: recipe.proteinGrams,
      fiber: recipe.fiberGrams,
      carbs: recipe.carbsGrams,
      fat: recipe.fatGrams,
      summary: (recipe as any).nutritionSummary,
    } : null)
  );
  const [isLoadingNutrition, setIsLoadingNutrition] = useState(false);

  const handleFetchNutrition = async () => {
    if (isLoadingNutrition) return;
    setIsLoadingNutrition(true);
    try {
      const data = await fetchRecipeNutrition(recipe);
      setNutrition(data);
      recipe.nutritionalInfo = data;
      recipe.caloriesPerServing = data.calories;
      recipe.proteinGrams = data.protein;
      recipe.fiberGrams = data.fiber;
    } catch (err) {
      console.error('Failed to fetch nutrition:', err);
    } finally {
      setIsLoadingNutrition(false);
    }
  };

  // Auto-fetch nutrition on modal mount if not present
  useEffect(() => {
    if (!nutrition) {
      handleFetchNutrition();
    }
  }, []);

  // Timer states
  const currentStep: RecipeStep = recipe.steps[currentStepIdx] || recipe.steps[0];
  const initialSeconds = (currentStep.timerMinutes || 0) * 60;
  const [timerSecondsLeft, setTimerSecondsLeft] = useState(initialSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Ask-the-chef interactive assistant states
  const [chefQuestion, setChefQuestion] = useState('');
  const [isChefAsking, setIsChefAsking] = useState(false);
  const [chefConversation, setChefConversation] = useState<
    { sender: 'user' | 'chef'; text: string }[]
  >([]);
  const [isChefDrawerOpen, setIsChefDrawerOpen] = useState(false);

  // Sync timer when step changes
  useEffect(() => {
    setIsTimerRunning(false);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    const secs = (currentStep.timerMinutes || 0) * 60;
    setTimerSecondsLeft(secs);
    stopSpeaking();
    setIsSpeaking(false);
  }, [currentStepIdx, currentStep.timerMinutes]);

  // Handle countdown interval
  useEffect(() => {
    if (isTimerRunning && timerSecondsLeft > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimerSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current as NodeJS.Timeout);
            setIsTimerRunning(false);
            playKitchenChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isTimerRunning, timerSecondsLeft]);

  // Clean up speech synthesis on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  // Keyboard navigation for hands-free cooking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentStepIdx < recipe.steps.length - 1) {
        setCurrentStepIdx((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentStepIdx > 0) {
        setCurrentStepIdx((prev) => prev - 1);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIdx, recipe.steps.length, onClose]);

  const handleToggleTimer = () => {
    if (timerSecondsLeft <= 0 && currentStep.timerMinutes) {
      setTimerSecondsLeft(currentStep.timerMinutes * 60);
    }
    setIsTimerRunning(!isTimerRunning);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSecondsLeft((currentStep.timerMinutes || 0) * 60);
  };

  const handleToggleVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      const textToRead = `Step ${currentStep.stepNumber}: ${currentStep.title}. ${currentStep.instruction}. ${
        currentStep.sensoryCue ? `Sensory cue: ${currentStep.sensoryCue}` : ''
      }`;
      const started = speakInstruction(textToRead, () => setIsSpeaking(false));
      if (started) setIsSpeaking(true);
    }
  };

  const handleAskChef = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chefQuestion.trim() || isChefAsking) return;

    const q = chefQuestion.trim();
    setChefConversation((prev) => [...prev, { sender: 'user', text: q }]);
    setChefQuestion('');
    setIsChefAsking(true);

    try {
      const res = await fetch('/api/recipes/ask-chef', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipeTitle: recipe.title,
          currentStepNumber: currentStep.stepNumber,
          currentStepInstruction: currentStep.instruction,
          question: q,
        }),
      });

      if (!res.ok) throw new Error('Chef response failed');
      const data = await res.json();
      setChefConversation((prev) => [...prev, { sender: 'chef', text: data.answer }]);
    } catch (err: any) {
      setChefConversation((prev) => [
        ...prev,
        {
          sender: 'chef',
          text:
            "Chef's Quick Tip: If heat is too high, pull the pan off the burner immediately! Add a splash of warm water if sticking, or a pinch of salt/acid (lemon) if flavors feel flat.",
        },
      ]);
    } finally {
      setIsChefAsking(false);
    }
  };

  const formatTimerDisplay = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-amber-200 overflow-hidden flex flex-col max-h-[94vh]">
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white border border-white/30">
              <Flame className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-200">
                  Kitchen Walkthrough Mode
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 font-semibold">
                  {recipe.cuisine}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-display font-bold leading-tight truncate max-w-md sm:max-w-xl">
                {recipe.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Servings Scaler */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-xs border border-white/20 text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-amber-200" />
              <span>Servings:</span>
              <div className="flex items-center gap-1 ml-1">
                {[1, 2, 4, 6].map((s) => (
                  <button
                    key={s}
                    onClick={() => setServings(s)}
                    className={`w-6 h-6 rounded-lg text-xs font-bold transition-all ${
                      servings === s ? 'bg-white text-stone-900 shadow-xs' : 'hover:bg-white/20'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Nutrition Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-xs border border-white/20 text-xs font-semibold">
              <Activity className="w-3.5 h-3.5 text-amber-200" />
              <span>
                {Math.round((nutrition?.calories ?? recipe.caloriesPerServing ?? 320) * (servings / recipe.defaultServings))} kcal
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
              title="Exit Walkthrough"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Step Progress Bar */}
        <div className="bg-stone-100 border-b border-stone-200 px-4 py-2.5 flex items-center justify-between gap-4 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {recipe.steps.map((st, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStepIdx(idx)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  currentStepIdx === idx
                    ? 'bg-amber-600 text-white shadow-xs scale-105'
                    : idx < currentStepIdx
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span>Step {st.stepNumber}</span>
                {idx < currentStepIdx && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-stone-500 shrink-0">
            {currentStepIdx + 1} of {recipe.steps.length}
          </div>
        </div>

        {/* Modal Main Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Step Title & Clean Hands Voice Readout */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
                Stage {currentStep.stepNumber} of {recipe.steps.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-stone-900 mt-1">
                {currentStep.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              {/* Clean Hands Voice Assistant Button */}
              <button
                onClick={handleToggleVoice}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  isSpeaking
                    ? 'bg-amber-600 text-white animate-pulse'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300'
                }`}
                title="Reads step instruction aloud so your hands can stay clean"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
                <span>{isSpeaking ? 'Stop Voice' : 'Read Aloud (Clean Hands)'}</span>
              </button>

              {/* YouTube Video Walkthrough Guide for visual learners */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 shadow-xs transition-colors"
                title="Can't understand textually? Watch visual video tutorial with real chef techniques"
              >
                <Film className="w-4 h-4 text-red-600" />
                <span>Watch Video Guide</span>
              </button>

              {/* Ask the Chef Toggle */}
              <button
                onClick={() => setIsChefDrawerOpen(!isChefDrawerOpen)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 shadow-xs transition-colors"
              >
                <ChefHat className="w-4 h-4 text-emerald-800" />
                <span>Ask Chef</span>
              </button>
            </div>
          </div>

          {/* Main Step Instruction - Big, High Contrast text for easy reading from stove */}
          <div className="p-6 rounded-3xl bg-emerald-50/30 border border-emerald-900/10 shadow-xs">
            <p className="text-lg sm:text-xl md:text-2xl text-stone-800 font-medium leading-relaxed tracking-normal">
              {currentStep.instruction}
            </p>
          </div>

          {/* Visual Learner Assistance Prompt */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/90 text-xs">
            <div className="flex items-center gap-2 text-stone-600">
              <Play className="w-4 h-4 text-red-600 fill-current shrink-0" />
              <span>Can't understand this step textually? Watch chef demonstrations &amp; visual cues.</span>
            </div>
            <button
              onClick={() => setShowVideoModal(true)}
              className="font-bold text-red-700 hover:text-red-800 hover:underline inline-flex items-center gap-1 self-start sm:self-auto shrink-0"
            >
              <span>Watch Video For This Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Sensory Cues & Science Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sensory Cue */}
            {currentStep.sensoryCue && (
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300/80">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 mb-1.5">
                  <Eye className="w-4 h-4 text-emerald-700" />
                  <span className="uppercase tracking-wider">Sensory Check (What to see &amp; smell):</span>
                </div>
                <p className="text-sm font-medium text-emerald-950 leading-relaxed">
                  {currentStep.sensoryCue}
                </p>
              </div>
            )}

            {/* Chef Tip / Science */}
            {currentStep.chefTip && (
              <div className="p-4 rounded-2xl bg-amber-100/60 border border-amber-300">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-700" />
                  <span className="uppercase tracking-wider">Chef's Technique Secret:</span>
                </div>
                <p className="text-sm font-medium text-amber-950 leading-relaxed">
                  {currentStep.chefTip}
                </p>
              </div>
            )}
          </div>

          {/* Interactive Kitchen Timer (if this step has duration) */}
          {currentStep.timerMinutes && currentStep.timerMinutes > 0 ? (
            <div className="p-5 rounded-3xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-stone-800">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-amber-400">
                    Step Kitchen Timer
                  </div>
                  <div className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-white mt-0.5">
                    {formatTimerDisplay(timerSecondsLeft)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleTimer}
                  className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md transition-all ${
                    isTimerRunning
                      ? 'bg-amber-500 hover:bg-amber-600 text-stone-950'
                      : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                  }`}
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  <span>{isTimerRunning ? 'Pause Timer' : 'Start Timer'}</span>
                </button>

                <button
                  onClick={handleResetTimer}
                  className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : null}

          {/* Scaled Ingredients Quick Reference for This Recipe */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                Scaled Ingredients for {servings} {servings === 1 ? 'Serving' : 'Servings'}:
              </span>
              <span className="text-xs text-stone-500">Auto-scaled</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
              {recipe.ingredientsList.map((ing, i) => (
                <div key={i} className="p-2 rounded-xl bg-white border border-stone-200 shadow-2xs">
                  <span className="font-bold text-amber-800">
                    {formatScaledAmount(ing.amount, recipe.defaultServings, servings)} {ing.unit}
                  </span>{' '}
                  <span className="text-stone-800">{ing.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI-Generated Nutritional Information Panel (Calories, Protein, Fiber) */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-orange-50/50 border border-amber-200/90 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-200/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center text-amber-700">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 font-display flex items-center gap-1.5">
                    <span>Nutritional Information &amp; Macro Breakdown</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-sans font-bold border border-amber-300">
                      Gemini AI Analyzed
                    </span>
                  </h4>
                  <p className="text-[11px] text-stone-500">
                    Scaled for {servings} {servings === 1 ? 'serving' : 'servings'} &bull; Base: {recipe.defaultServings} servings
                  </p>
                </div>
              </div>

              <button
                onClick={handleFetchNutrition}
                disabled={isLoadingNutrition}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100/80 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-all disabled:opacity-50 self-start sm:self-auto cursor-pointer"
                title="Refresh nutritional analysis with Gemini AI"
              >
                {isLoadingNutrition ? (
                  <>
                    <RotateCw className="w-3.5 h-3.5 text-amber-700 animate-spin" />
                    <span>Analyzing with Gemini...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>Recalculate AI Nutrition</span>
                  </>
                )}
              </button>
            </div>

            {/* Core Metrics: Calories, Protein, Fiber */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Calories Card */}
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
                <div className="flex items-center justify-between text-stone-500 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Calories</span>
                  <Flame className="w-4 h-4 text-orange-600" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-stone-900 font-mono">
                    {Math.round((nutrition?.calories ?? recipe.caloriesPerServing ?? 320) * (servings / recipe.defaultServings))}
                  </span>
                  <span className="text-xs font-semibold text-stone-500">kcal total</span>
                </div>
                <div className="text-[10px] text-stone-400 mt-1">
                  ~{nutrition?.calories ?? recipe.caloriesPerServing ?? 320} kcal per serving
                </div>
              </div>

              {/* Protein Card */}
              <div className="p-3.5 rounded-2xl bg-white border border-emerald-200/80 shadow-2xs">
                <div className="flex items-center justify-between text-emerald-700 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Protein</span>
                  <Dumbbell className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-emerald-950 font-mono">
                    {Math.round(((nutrition?.protein ?? recipe.proteinGrams ?? (recipe.tags.includes('high-protein') ? 16 : 11)) * (servings / recipe.defaultServings)) * 10) / 10}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">g total</span>
                </div>
                <div className="text-[10px] text-emerald-600/80 mt-1">
                  ~{nutrition?.protein ?? recipe.proteinGrams ?? 11}g per serving
                </div>
              </div>

              {/* Fiber Card */}
              <div className="p-3.5 rounded-2xl bg-white border border-orange-200/80 shadow-2xs">
                <div className="flex items-center justify-between text-orange-700 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Dietary Fiber</span>
                  <Wheat className="w-4 h-4 text-orange-600" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-orange-950 font-mono">
                    {Math.round(((nutrition?.fiber ?? recipe.fiberGrams ?? 4.5) * (servings / recipe.defaultServings)) * 10) / 10}
                  </span>
                  <span className="text-xs font-semibold text-orange-700">g total</span>
                </div>
                <div className="text-[10px] text-orange-600/80 mt-1">
                  ~{nutrition?.fiber ?? recipe.fiberGrams ?? 4.5}g per serving
                </div>
              </div>
            </div>

            {/* Additional Macros & AI Health Insights */}
            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-amber-950 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Dietitian Insight:</span>
                </span>
                {nutrition?.carbs && nutrition?.fat && (
                  <div className="flex items-center gap-3 text-[11px] font-semibold text-stone-600">
                    <span>
                      Carbohydrates:{' '}
                      <strong className="text-stone-900">
                        {Math.round((nutrition.carbs * (servings / recipe.defaultServings)) * 10) / 10}g
                      </strong>
                    </span>
                    <span>
                      Healthy Fats:{' '}
                      <strong className="text-stone-900">
                        {Math.round((nutrition.fat * (servings / recipe.defaultServings)) * 10) / 10}g
                      </strong>
                    </span>
                  </div>
                )}
              </div>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                {nutrition?.summary ||
                  'Naturally nourishing recipe packed with wholesome whole foods, aromatic antioxidant herbs, and gut-friendly fiber.'}
              </p>
            </div>
          </div>

          {/* In-Kitchen "Ask the Chef" Drawer */}
          {isChefDrawerOpen && (
            <div className="p-5 rounded-3xl bg-amber-50/80 border border-amber-300 shadow-md space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-amber-700" />
                  <h4 className="text-sm font-bold text-amber-950 font-display">
                    Ask Chef Gemini (Cooking Assistance in Real-Time)
                  </h4>
                </div>
                <button
                  onClick={() => setIsChefDrawerOpen(false)}
                  className="text-stone-400 hover:text-stone-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {chefConversation.length > 0 && (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {chefConversation.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-white border border-stone-200 text-stone-800 ml-8 text-right'
                          : 'bg-amber-100 border border-amber-300 text-amber-950 mr-8'
                      }`}
                    >
                      <div className="font-bold mb-0.5 text-[10px] text-stone-500 uppercase">
                        {msg.sender === 'user' ? 'You' : 'Chef Tutor'}
                      </div>
                      {msg.text}
                    </div>
                  ))}
                </div>
              )}

              <form onSubmit={handleAskChef} className="flex gap-2">
                <input
                  type="text"
                  value={chefQuestion}
                  onChange={(e) => setChefQuestion(e.target.value)}
                  placeholder="e.g., 'My gravy feels too sour', 'Is it supposed to stick to the bottom?'..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  disabled={!chefQuestion.trim() || isChefAsking}
                  className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors shrink-0"
                >
                  {isChefAsking ? (
                    <Sparkles className="w-4 h-4 animate-spin text-amber-200" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isChefAsking ? 'Chef Thinking...' : 'Ask'}</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Modal Navigation Footer */}
        <div className="p-4 sm:p-5 bg-stone-100 border-t border-stone-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => setCurrentStepIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentStepIdx === 0}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 disabled:opacity-40 text-stone-800 border border-stone-300 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          {currentStepIdx < recipe.steps.length - 1 ? (
            <button
              onClick={() => setCurrentStepIdx((prev) => prev + 1)}
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-amber-600/20 transition-all hover:scale-105"
            >
              <span>Next Step ({currentStepIdx + 2} of {recipe.steps.length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all hover:scale-105"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Dish Complete! Bon Appétit</span>
            </button>
          )}
        </div>
      </div>

      {/* Visual YouTube Video Guide Modal */}
      {showVideoModal && (
        <YouTubeVideoModal
          recipe={recipe}
          activeStep={currentStep}
          onClose={() => setShowVideoModal(false)}
        />
      )}
    </div>
  );
};
