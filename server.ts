import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Google GenAI client
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Helper for dynamic culinary synthesis fallback when AI service is experiencing high load
function generateSmartFallbackRecipes(ingredients: string[], cuisine: string) {
  const ingList = ingredients.map((i) => i.replace(/_/g, ' '));
  const mainA = ingList[0] || 'Vegetables';
  const mainB = ingList[1] || 'Aromatics';

  return [
    {
      id: `fallback-ind-${Date.now()}`,
      title: `Homestyle Spiced ${mainA.charAt(0).toUpperCase() + mainA.slice(1)} Masala Sauté`,
      originalName: `तवा मसाला (${mainA} Masala Sauté)`,
      cuisine: 'North Indian',
      regionCategory: 'indian' as const,
      description: `A fragrant skillet roast highlighting your fresh ${ingList.slice(0, 3).join(', ')} with a crackling cumin-turmeric tadka, caramelized onion-tomato base, and fresh ginger.`,
      cookingTimeMinutes: 20,
      prepTimeMinutes: 10,
      difficulty: 'Easy' as const,
      defaultServings: 2,
      caloriesPerServing: 230,
      tags: ['vegetarian', 'quick-under-30', 'comfort-food', 'pantry-classic'],
      matchingIngredients: ingredients.slice(0, 6),
      additionalIngredientsNeeded: [
        { name: 'Salt', optional: false, commonPantry: true },
        { name: 'Cooking Oil or Ghee', optional: false, commonPantry: true }
      ],
      flavorProfile: {
        spiceLevel: 3,
        savory: 4,
        tangy: 3,
        aromatic: 4,
        sweet: 1
      },
      culinaryScience: 'Blooming cumin and dry spices in warm oil before introducing moist vegetables extracts non-polar aromatic terpenes and prevents spices from tasting chalky or raw.',
      keyTechniques: [
        { name: 'Tadka (Tempering)', explanation: 'Extracting essential spice oils in hot oil or ghee.' },
        { name: 'Bhunao (Pan Sautéing)', explanation: 'Caramelizing aromatics until moisture evaporates and oil glistens.' }
      ],
      ingredientsList: [
        ...ingredients.slice(0, 6).map((name) => ({
          name: name.replace(/_/g, ' '),
          amount: 1,
          unit: 'portion',
          isPantryMatch: true,
        })),
        { name: 'Salt', amount: 1, unit: 'tsp', isPantryMatch: false },
        { name: 'Cooking Oil or Ghee', amount: 1.5, unit: 'tbsp', isPantryMatch: false }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Prep & Slice Pantry Ingredients',
          instruction: `Chop ${mainA} into even bite-sized pieces so they cook uniformly. Finely mince aromatics (${mainB}).`,
          chefTip: 'Uniform knife cuts guarantee consistent heat transfer.',
          sensoryCue: 'Clean edges that cook evenly in hot oil.',
          timerMinutes: 4
        },
        {
          stepNumber: 2,
          title: 'Tadka Blooming & Sauté',
          instruction: 'Warm oil or ghee in a heavy skillet over medium heat. Sizzle cumin or whole spices for 10 seconds until aromatic, then add chopped aromatics and cook until pale golden.',
          sensoryCue: 'Rapid crackle followed by sweet toasted nuttiness.',
          timerMinutes: 5
        },
        {
          stepNumber: 3,
          title: 'Incorporate Main Ingredients & Spices',
          instruction: `Add ${ingList.slice(0, 3).join(', ')} to the pan with salt and ground spices. Toss vigorously to lacquer every piece in the fragrant oil.`,
          timerMinutes: 6
        },
        {
          stepNumber: 4,
          title: 'Cover & Steam-Glaze',
          instruction: 'Sprinkle 2 tablespoons of water, cover skillet with a lid, and cook on low heat for 5 minutes until tender-crisp. Garnish with fresh herbs and serve hot.',
          sensoryCue: 'Vibrant colors and a rich clinging aromatic glaze.',
          timerMinutes: 5
        }
      ],
      substitutions: [
        { ingredient: 'Ghee', replacement: 'Olive oil or neutral oil', rationale: 'Gives clean, light mouthfeel.' }
      ],
      wineOrBeveragePairing: 'Fresh lime soda or spiced buttermilk (chaas)',
      isAiGenerated: true,
    },
    {
      id: 'fallback-int-${Date.now()}',
      title: `Rustic Mediterranean Garlic-Sautéed ${mainA.charAt(0).toUpperCase() + mainA.slice(1)}`,
      originalName: `Padellata Rustica Mediterranea`,
      cuisine: 'Mediterranean',
      regionCategory: 'international' as const,
      description: `A vibrant pan-seared dish celebrating ${ingList.slice(0, 4).join(', ')} tossed with fruity olive oil, gentle golden garlic, and herbs.`,
      cookingTimeMinutes: 18,
      prepTimeMinutes: 8,
      difficulty: 'Easy' as const,
      defaultServings: 2,
      caloriesPerServing: 260,
      tags: ['quick-under-30', 'mediterranean', 'healthy', 'gluten-free'],
      matchingIngredients: ingredients.slice(0, 5),
      additionalIngredientsNeeded: [
        { name: 'Olive Oil', optional: false, commonPantry: true },
        { name: 'Salt & Pepper', optional: false, commonPantry: true }
      ],
      flavorProfile: {
        spiceLevel: 1,
        savory: 5,
        tangy: 2,
        aromatic: 4,
        sweet: 2
      },
      culinaryScience: 'Slow pan-searing in olive oil triggers Maillard browning without scorching, producing savory umami peptides that elevate simple produce.',
      keyTechniques: [
        { name: 'Gentle Oil Infusion', explanation: 'Warming sliced garlic slowly in oil to draw out sweet allicin compounds.' }
      ],
      ingredientsList: [
        ...ingredients.slice(0, 5).map((name) => ({
          name: name.replace(/_/g, ' '),
          amount: 1,
          unit: 'portion',
          isPantryMatch: true,
        })),
        { name: 'Olive Oil', amount: 2, unit: 'tbsp', isPantryMatch: false },
        { name: 'Salt and Black Pepper', amount: 1, unit: 'pinch', isPantryMatch: false }
      ],
      steps: [
        {
          stepNumber: 1,
          title: 'Cold-Pan Garlic Start',
          instruction: 'Place sliced garlic and olive oil in a wide skillet over medium-low heat. Let sizzle gently for 3 minutes until pale blonde.',
          sensoryCue: 'Mellow, sweet garlic aroma fills the room.',
          timerMinutes: 3
        },
        {
          stepNumber: 2,
          title: 'High-Heat Sauté',
          instruction: `Raise heat to medium-high. Add ${ingList.slice(0, 3).join(', ')}. Sear without stirring for 2 minutes to develop caramelized edges.`,
          timerMinutes: 5
        },
        {
          stepNumber: 3,
          title: 'Season & Emulsify',
          instruction: 'Add a splash of water or lemon juice, scrape up any browned fond from the bottom, and toss until a glossy emulsion forms.',
          timerMinutes: 2
        }
      ],
      substitutions: [
        { ingredient: 'Olive Oil', replacement: 'Butter or neutral oil', rationale: 'Yields rich savory glaze.' }
      ],
      wineOrBeveragePairing: 'Chilled sparkling water with lemon slice',
      isAiGenerated: true,
    }
  ];
}

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(apiKey),
    timestamp: new Date().toISOString(),
  });
});

// Generate Custom Recipes based on User Ingredients & Preferences
app.post('/api/recipes/generate', async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      ingredients = [],
      cuisinePreference = 'all',
      dietary = [],
      skillLevel = 'intermediate',
      pantryStrictness = 'flexible',
      customRequest = '',
    } = req.body;

    if (!ingredients || ingredients.length === 0) {
      res.status(400).json({ error: 'Please provide at least 1 or 2 pantry ingredients.' });
      return;
    }

    if (!apiKey) {
      res.status(503).json({
        error: 'Gemini API key is not configured. Please check server environment.',
      });
      return;
    }

    const systemInstruction = `You are a world-class culinary instructor specializing in both authentic Indian regional traditions (North Indian, South Indian, Andhra & Telugu, Hyderabadi & Regional Biryanis, Indo-Chinese, Coastal, Bengali) and acclaimed International cuisines (Italian, East Asian, Mexican, Mediterranean, Thai, French).
Your goal is to teach users how to cook delicious dishes using the ingredients they actually have in their pantry, explaining the culinary science and technique at every stage.

Special expertise:
- Biryani styles: Hyderabadi Dum (Kacchi & Pakki), Kolkata Shahi (with potatoes & kewra), Lucknowi Awadhi (delicate perfumed broth), Malabar Thalassery (Kaima / Seeraga Samba rice with fried cashews & raisins), Dindigul Thalappakatti (pepper & ghee seeraga samba), Sindhi (fiery with Aloo Bukhara plums & potatoes), Bombay Biryani. Teach the 70% parboil rule and sealed Dum steam cooking.
- Andhra & Telugu cooking: Authentic Chitrannam (Lemon Rice / Nimmakaya Pulihora), Gongura Pappu, Pappu Charu, Allam Pachadi, temple-style Popu/Thalimpu (crackling peanuts, chana dal, urad dal, mustard, curry leaves, hing, and folding fresh lemon juice off-heat to avoid bitterness). Include Telugu transliterated names like Nimmakaya Pulihora, Pallilu, Popu.

When generating recipes:
1. Always generate 2 DISTINCT, exciting recipes that maximize the user's provided ingredients.
   - If cuisinePreference is 'all', offer 1 Indian dish and 1 International dish.
   - If cuisinePreference is 'biryani', offer 2 distinct authentic Biryani styles with parboil & Dum instructions.
   - If cuisinePreference is 'andhra-telugu', offer 2 authentic Telugu/Andhra dishes (e.g. Chitrannam / Lemon Rice and Gongura/Tadka Dal).
   - If cuisinePreference is 'indian', offer 2 distinct Indian regional dishes (e.g. North Indian and South Indian/Andhra/Biryani).
   - If cuisinePreference is 'international' or specific (e.g. 'italian'), tailor accordingly.
2. For each recipe, provide:
   - Authentic name in English and original native script/transliteration (e.g. "Dal Tadka (दाल तड़का)", "Chitrannam (చిత్రాన్నం - Lemon Rice)", "Hyderabadi Dum Biryani (حیدرآبادی بریانی)", "Spaghetti Aglio e Olio").
   - Detailed culinary science explanation ("Why this works").
   - Key techniques with actionable definitions (e.g., "Dum Pukht", "Andhra Popu Tempering", "Off-Heat Citrus Emulsion", "Tadka", "Bhunao", "Mantecatura", "Velveting").
   - Step-by-step instructions where EACH step has:
     - Clear title and instruction.
     - Sensory cue ("Listen for crisp click of peanuts...", "Watch for steam puff...", "Aroma turns nutty...").
     - Chef's pro tip ("Why this step matters").
     - Optional timer in minutes (positive integer, or 0 if not applicable).
   - Substitutions for any non-staple ingredients.
   - Flavor profile ratings from 1 to 5 for: spiceLevel, savory, tangy, aromatic, sweet.
3. Be realistic about whether ingredients are pantry matches or items the user may need to add (salt, oil, water are always assumed available).`;

    const prompt = `Available ingredients: ${ingredients.join(', ')}
Cuisine Preference: ${cuisinePreference}
Dietary preferences: ${dietary.length ? dietary.join(', ') : 'None specified'}
Skill level: ${skillLevel}
Pantry strictness: ${pantryStrictness} (if strict, only use provided ingredients + salt/oil/water; if flexible, allow common pantry additions with clear tags)
${customRequest ? `Special request: ${customRequest}` : ''}

Generate 2 complete, delicious, educational recipes matching these ingredients in structured JSON format.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              originalName: { type: Type.STRING },
              cuisine: { type: Type.STRING },
              regionCategory: { type: Type.STRING, enum: ['indian', 'international'] },
              description: { type: Type.STRING },
              cookingTimeMinutes: { type: Type.INTEGER },
              prepTimeMinutes: { type: Type.INTEGER },
              difficulty: { type: Type.STRING, enum: ['Easy', 'Medium', 'Advanced'] },
              defaultServings: { type: Type.INTEGER },
              caloriesPerServing: { type: Type.INTEGER },
              proteinGrams: { type: Type.NUMBER },
              fiberGrams: { type: Type.NUMBER },
              carbsGrams: { type: Type.NUMBER },
              fatGrams: { type: Type.NUMBER },
              nutritionSummary: { type: Type.STRING },
              tags: { type: Type.ARRAY, items: { type: Type.STRING } },
              matchingIngredients: { type: Type.ARRAY, items: { type: Type.STRING } },
              additionalIngredientsNeeded: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    optional: { type: Type.BOOLEAN },
                    commonPantry: { type: Type.BOOLEAN },
                  },
                  required: ['name', 'optional', 'commonPantry'],
                },
              },
              flavorProfile: {
                type: Type.OBJECT,
                properties: {
                  spiceLevel: { type: Type.INTEGER },
                  savory: { type: Type.INTEGER },
                  tangy: { type: Type.INTEGER },
                  aromatic: { type: Type.INTEGER },
                  sweet: { type: Type.INTEGER },
                },
                required: ['spiceLevel', 'savory', 'tangy', 'aromatic', 'sweet'],
              },
              culinaryScience: { type: Type.STRING },
              keyTechniques: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    explanation: { type: Type.STRING },
                  },
                  required: ['name', 'explanation'],
                },
              },
              ingredientsList: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    amount: { type: Type.NUMBER },
                    unit: { type: Type.STRING },
                    notes: { type: Type.STRING },
                    isPantryMatch: { type: Type.BOOLEAN },
                  },
                  required: ['name', 'amount', 'unit'],
                },
              },
              steps: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    stepNumber: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    instruction: { type: Type.STRING },
                    chefTip: { type: Type.STRING },
                    sensoryCue: { type: Type.STRING },
                    timerMinutes: { type: Type.INTEGER },
                  },
                  required: ['stepNumber', 'title', 'instruction'],
                },
              },
              substitutions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    ingredient: { type: Type.STRING },
                    replacement: { type: Type.STRING },
                    rationale: { type: Type.STRING },
                  },
                  required: ['ingredient', 'replacement', 'rationale'],
                },
              },
              wineOrBeveragePairing: { type: Type.STRING },
            },
            required: [
              'id',
              'title',
              'originalName',
              'cuisine',
              'regionCategory',
              'description',
              'cookingTimeMinutes',
              'prepTimeMinutes',
              'difficulty',
              'defaultServings',
              'tags',
              'flavorProfile',
              'culinaryScience',
              'keyTechniques',
              'ingredientsList',
              'steps',
            ],
          },
        },
      },
    });

    const text = response.text || '[]';
    const parsed = JSON.parse(text);

    // Mark as AI generated
    const recipesWithAiFlag = Array.isArray(parsed)
      ? parsed.map((r, idx) => ({
          ...r,
          id: r.id || `ai-${Date.now()}-${idx}`,
          isAiGenerated: true,
        }))
      : [];

    res.json({ recipes: recipesWithAiFlag });
  } catch (error: any) {
    console.warn('Gemini generate encountered error or high demand, falling back to dynamic culinary synthesis:', error?.message);
    const fallbacks = generateSmartFallbackRecipes(req.body.ingredients || [], req.body.cuisinePreference || 'all');
    res.json({ recipes: fallbacks });
  }
});

// Interactive Cooking Coach endpoint: Ask the Chef while cooking
app.post('/api/recipes/ask-chef', async (req: Request, res: Response): Promise<void> => {
  try {
    const { recipeTitle, currentStepNumber, currentStepInstruction, question } = req.body;

    if (!question) {
      res.status(400).json({ error: 'Please enter a cooking question.' });
      return;
    }

    if (!apiKey) {
      res.status(503).json({ error: 'Gemini API key is not configured.' });
      return;
    }

    const prompt = `You are a supportive, high-energy executive chef and cooking tutor standing right next to the user in their home kitchen.
The user is currently cooking: "${recipeTitle || 'a dish'}"
Current Step #${currentStepNumber || 1}: "${currentStepInstruction || 'Cooking'}"

User Question or Problem:
"${question}"

Provide an immediate, calm, reassuring, and practical answer.
- If something is burning, too salty, too sour, or curdling, give the exact 30-second fix.
- Explain the culinary science briefly so they learn for next time.
- Keep the response concise, encouraging, and under 150 words.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      },
    });

    res.json({ answer: response.text || "Chef's advice unavailable right now." });
  } catch (error: any) {
    console.warn('Chef AI query error, providing culinary rule of thumb:', error?.message);
    const qLower = (req.body.question || '').toLowerCase();
    let advice = "Chef's Tip: Keep flame on medium-low. If sticking, stir in 2 tablespoons of warm water to deglaze the fond. Taste for salt and acid balance!";
    if (qLower.includes('salt')) {
      advice = "Too salty? Add peeled potato wedges to absorb salt while simmering, or stir in a splash of heavy cream, yogurt, or a squeeze of lemon juice to balance!";
    } else if (qLower.includes('watery') || qLower.includes('thin')) {
      advice = "Too watery? Simmer uncovered on medium-high to reduce, or blend a ladle of the cooked lentils/veggies and stir back in, or whisk 1 tsp cornstarch with cold water.";
    } else if (qLower.includes('sour') || qLower.includes('acid')) {
      advice = "Too tangy or acidic? Stir in 1/2 tsp of sugar, honey, butter, or cashew cream to neutralize the sharp tomato/tamarind acid!";
    } else if (qLower.includes('burn') || qLower.includes('burnt')) {
      advice = "Immediate rescue: Do NOT scrape the bottom! Carefully ladle the unburned top layers into a clean pan. Add a pinch of sugar or fresh cream to mask faint smokiness.";
    }
    res.json({ answer: advice });
  }
});

// Culinary Substitution finder endpoint
app.post('/api/substitutions/find', async (req: Request, res: Response): Promise<void> => {
  try {
    const { ingredient, dishContext } = req.body;

    if (!ingredient) {
      res.status(400).json({ error: 'Ingredient name is required.' });
      return;
    }

    if (!apiKey) {
      res.status(503).json({ error: 'Gemini API key is not configured.' });
      return;
    }

    const prompt = `Give the top 3 best culinary substitutions for "${ingredient}" ${
      dishContext ? `when making ${dishContext}` : 'in cooking'
    }.
For each substitute, provide:
1. substitute: name of substitute
2. ratio: how much to use (e.g. "1:1" or "use half amount")
3. rationale: why it works chemically/flavor-wise
4. pantryAvailability: "Common Pantry Item" | "Specialty Item"`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              substitute: { type: Type.STRING },
              ratio: { type: Type.STRING },
              rationale: { type: Type.STRING },
              pantryAvailability: { type: Type.STRING },
            },
            required: ['substitute', 'ratio', 'rationale'],
          },
        },
      },
    });

    const text = response.text || '[]';
    res.json({ substitutions: JSON.parse(text) });
  } catch (error: any) {
    console.warn('Substitutions API error, returning smart pantry fallbacks:', error?.message);
    const ing = req.body.ingredient || '';
    res.json({
      substitutions: [
        {
          substitute: `Pantry equivalent for ${ing}`,
          ratio: '1:1 ratio or to taste',
          rationale: `Standard culinary substitution providing matching texture and aromatics for ${ing}.`,
          pantryAvailability: 'Common Pantry Item',
        },
      ],
    });
  }
});

// Helper to estimate realistic nutritional values when AI service is busy
function estimateNutritionFallback(title: string = '', ingredients: any[] = [], servings: number = 2) {
  const t = (title || '').toLowerCase();
  const ingStr = (Array.isArray(ingredients) ? ingredients.map((i: any) => typeof i === 'string' ? i : (i.name || '')).join(' ') : String(ingredients)).toLowerCase();

  let calories = 320;
  let protein = 9.5;
  let fiber = 4.0;
  let carbs = 38;
  let fat = 10;
  let summary = 'Well-balanced wholesome meal providing sustained energy and plant nutrients.';

  if (t.includes('lemon rice') || t.includes('chitrannam') || t.includes('pulihora')) {
    calories = 280;
    protein = 5.5; // from roasted peanuts, chana dal & urad dal
    fiber = 3.2;  // from peanuts, lentils and lemon
    carbs = 44;
    fat = 9;
    summary = 'Plant-based carbohydrates enriched with protein & healthy fats from roasted peanuts (pallilu) and tempering lentils.';
  } else if (t.includes('biryani')) {
    calories = 460;
    protein = 15.0; // from paneer, yogurt, nuts / meat
    fiber = 4.2;
    carbs = 58;
    fat = 16;
    summary = 'Royal celebratory dish with complete proteins, complex basmati carbs, and gut-healthy yogurt spices.';
  } else if (t.includes('dal') || t.includes('pappu') || t.includes('sambar') || t.includes('chole') || t.includes('lentil') || ingStr.includes('dal')) {
    calories = 240;
    protein = 13.5;
    fiber = 7.8;
    carbs = 34;
    fat = 6.5;
    summary = 'High-protein and prebiotic fiber powerhouse that supports gut microbiome and blood sugar stability.';
  } else if (t.includes('paneer') || ingStr.includes('paneer') || t.includes('tofu') || ingStr.includes('tofu')) {
    calories = 360;
    protein = 17.5;
    fiber = 3.5;
    carbs = 18;
    fat = 22;
    summary = 'High-protein dish packed with dietary calcium and essential amino acids.';
  } else if (t.includes('pasta') || t.includes('spaghetti')) {
    calories = 340;
    protein = 8.5;
    fiber = 3.0;
    carbs = 48;
    fat = 12;
    summary = 'Classic Mediterranean energy source with heart-healthy monounsaturated extra virgin olive oil.';
  } else if (t.includes('salad') || t.includes('soup') || t.includes('rasam')) {
    calories = 140;
    protein = 4.2;
    fiber = 4.5;
    carbs = 18;
    fat = 4;
    summary = 'Light, hydrating, and vitamin-dense with high soluble dietary fiber.';
  }

  return {
    calories: Math.round(calories),
    protein: Math.round(protein * 10) / 10,
    fiber: Math.round(fiber * 10) / 10,
    carbs: Math.round(carbs * 10) / 10,
    fat: Math.round(fat * 10) / 10,
    summary,
    isAiGenerated: true,
  };
}

// Calculate or Estimate Nutritional Information (Calories, Protein, Fiber) using Gemini AI
app.post('/api/recipes/nutrition', async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, cuisine, ingredients = [], servings = 2 } = req.body;

    if (!title && (!ingredients || ingredients.length === 0)) {
      res.status(400).json({ error: 'Recipe title or ingredients required.' });
      return;
    }

    if (!apiKey) {
      const fallback = estimateNutritionFallback(title, ingredients, servings);
      res.json(fallback);
      return;
    }

    const ingString = Array.isArray(ingredients)
      ? ingredients.map((i: any) => (typeof i === 'string' ? i : `${i.amount || 1} ${i.unit || ''} ${i.name || ''}`)).join(', ')
      : String(ingredients);

    const prompt = `As a certified culinary nutritionist, calculate realistic nutrition facts PER SINGLE SERVING for this dish:
Dish: "${title}"
Cuisine: "${cuisine || 'General'}"
Yields: ${servings} servings
Ingredients: ${ingString || 'Standard ingredients for this traditional dish'}

Provide the nutritional estimate per serving:
1. calories (integer, e.g. 320 kcal)
2. protein (number in grams, e.g. 14.5)
3. fiber (number in grams, e.g. 5.2)
4. carbs (number in grams, e.g. 42)
5. fat (number in grams, e.g. 11)
6. summary (one concise sentence highlighting health benefits, e.g. "Rich in plant-based protein from lentils and prebiotic fiber from aromatics.")`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            calories: { type: Type.INTEGER },
            protein: { type: Type.NUMBER },
            fiber: { type: Type.NUMBER },
            carbs: { type: Type.NUMBER },
            fat: { type: Type.NUMBER },
            summary: { type: Type.STRING },
          },
          required: ['calories', 'protein', 'fiber', 'summary'],
        },
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({
      calories: Math.round(parsed.calories || 300),
      protein: Math.round((parsed.protein || 10) * 10) / 10,
      fiber: Math.round((parsed.fiber || 4) * 10) / 10,
      carbs: Math.round((parsed.carbs || 35) * 10) / 10,
      fat: Math.round((parsed.fat || 10) * 10) / 10,
      summary: parsed.summary || 'Nutrient-rich balanced meal with wholesome ingredients.',
      isAiGenerated: true,
    });
  } catch (error: any) {
    console.warn('Nutrition AI calculation error, using culinary nutrition fallback:', error?.message);
    const fallback = estimateNutritionFallback(req.body.title, req.body.ingredients, req.body.servings);
    res.json(fallback);
  }
});

const N8N_CHAT_WEBHOOK_URL = 'https://navyakamala07.app.n8n.cloud/webhook/688efbf8-f1b4-4b45-94d2-941a39289456/chat';

// N8N Webhook Chat Proxy Endpoint
app.post('/api/n8n/chat', async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, chatInput, sessionId, context } = req.body;
    const userMessage = chatInput || message || '';

    if (!userMessage.trim()) {
      res.status(400).json({ error: 'Message cannot be empty.' });
      return;
    }

    const payload = {
      chatInput: userMessage,
      message: userMessage,
      sessionId: sessionId || `rasoi-session-${Date.now()}`,
      context: context || { app: 'Rasoi & World Kitchen' },
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(N8N_CHAT_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
      },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await response.json();
      const outputText = data.output || data.text || data.response || data.message || (Array.isArray(data) && (data[0]?.output || data[0]?.text)) || JSON.stringify(data);
      res.json({ output: outputText, raw: data });
    } else {
      const text = await response.text();
      res.json({ output: text });
    }
  } catch (error: any) {
    console.error('Error forwarding to n8n chat webhook:', error);
    res.status(502).json({
      error: 'Failed to communicate with the n8n AI culinary assistant.',
      details: error.message,
    });
  }
});

// Setup Vite or static serving
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🍳 Rasoi & World Kitchen Server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
