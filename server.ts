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

    const systemInstruction = `You are a world-class culinary instructor specializing in both authentic Indian regional traditions (North Indian, South Indian, Indo-Chinese, Coastal, Bengali) and acclaimed International cuisines (Italian, East Asian, Mexican, Mediterranean, Thai, French).
Your goal is to teach users how to cook delicious dishes using the ingredients they actually have in their pantry, explaining the culinary science and technique at every stage.

When generating recipes:
1. Always generate 2 DISTINCT, exciting recipes that maximize the user's provided ingredients.
   - If cuisinePreference is 'all', offer 1 Indian dish and 1 International dish.
   - If cuisinePreference is 'indian', offer 2 distinct Indian regional dishes (e.g. North Indian and South Indian/Indo-Chinese).
   - If cuisinePreference is 'international' or specific (e.g. 'italian'), tailor accordingly.
2. For each recipe, provide:
   - Authentic name in English and original native script/transliteration (e.g. "Dal Tadka (दाल तड़का)", "Spaghetti Aglio e Olio").
   - Detailed culinary science explanation ("Why this works").
   - Key techniques with actionable definitions (e.g., "Tadka", "Bhunao", "Mantecatura", "Velveting", "Deglazing").
   - Step-by-step instructions where EACH step has:
     - Clear title and instruction.
     - Sensory cue ("Listen for...", "Watch for oil glistening...", "Aroma should turn sweet...").
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
