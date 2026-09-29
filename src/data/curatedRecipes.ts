import { Recipe } from '../types/recipe';

export const CURATED_RECIPES: Recipe[] = [
  {
    id: 'dal-tadka',
    title: 'Dhaba-Style Yellow Dal Tadka',
    originalName: 'दाल तड़का (Dal Tadka)',
    cuisine: 'North Indian',
    regionCategory: 'indian',
    description: 'Creamy simmered yellow pigeon peas and lentils finished with a smoking ghee tempering of cumin, garlic, and Kashmiri red chillies.',
    cookingTimeMinutes: 25,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 4,
    caloriesPerServing: 240,
    tags: ['vegetarian', 'vegan-option', 'gluten-free', 'high-protein', 'comfort-food'],
    matchingIngredients: ['toor_dal', 'moong_dal', 'onion', 'tomato', 'garlic', 'ginger', 'green_chilli', 'cumin_seeds', 'turmeric', 'ghee', 'cilantro'],
    additionalIngredientsNeeded: [
      { name: 'Salt', optional: false, commonPantry: true },
      { name: 'Water', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 3,
      savory: 4,
      tangy: 2,
      aromatic: 5,
      sweet: 1
    },
    culinaryScience: 'Lentils break down into gelatinized starches that thicken into a comforting velvety puree. The smoky tadka at the end works because cumin, garlic, and hing contain non-polar aroma molecules that dissolve only into hot fat. Pouring it sizzling onto the dal suspends these microscopic aromatic oil droplets throughout the broth.',
    keyTechniques: [
      { name: 'Tadka / Tempering', explanation: 'Blooming aromatics in hot ghee to liberate fat-soluble scent molecules.' },
      { name: 'Whisking / Ghotna', explanation: 'Beating cooked lentils with a wooden churner to homogenize starch and water.' }
    ],
    ingredientsList: [
      { name: 'Yellow Toor Dal or Moong Dal', amount: 1, unit: 'cup', notes: 'Rinsed until water runs clear', isPantryMatch: true },
      { name: 'Water', amount: 3, unit: 'cups', notes: 'For pressure cooking or pot simmer' },
      { name: 'Turmeric Powder', amount: 0.5, unit: 'tsp', notes: 'Awakens golden hue during boil', isPantryMatch: true },
      { name: 'Ghee or Neutral Oil', amount: 2, unit: 'tbsp', notes: 'Desi ghee gives authentic aroma', isPantryMatch: true },
      { name: 'Cumin Seeds', amount: 1, unit: 'tsp', notes: 'Must be whole seeds', isPantryMatch: true },
      { name: 'Garlic', amount: 5, unit: 'cloves', notes: 'Thinly sliced or minced', isPantryMatch: true },
      { name: 'Ginger', amount: 1, unit: 'inch', notes: 'Finely julienned', isPantryMatch: true },
      { name: 'Onion', amount: 1, unit: 'medium', notes: 'Finely diced', isPantryMatch: true },
      { name: 'Tomato', amount: 1, unit: 'medium', notes: 'Finely chopped', isPantryMatch: true },
      { name: 'Green Chilli', amount: 1, unit: 'piece', notes: 'Slit lengthwise', isPantryMatch: true },
      { name: 'Kashmiri Red Chilli Powder', amount: 0.5, unit: 'tsp', notes: 'Added to tadka off heat for vibrant color', isPantryMatch: true },
      { name: 'Fresh Cilantro', amount: 2, unit: 'tbsp', notes: 'Finely chopped for finish', isPantryMatch: true },
      { name: 'Salt', amount: 1, unit: 'tsp', notes: 'To taste' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Boil & Churn the Dal',
        instruction: 'Combine rinsed dal, 3 cups of water, turmeric powder, and 1 tsp salt in a pot or pressure cooker. Simmer on medium heat for 18–20 minutes until grains are completely soft and collapsing when pressed between your fingers. Whisk lightly with a whisk or ladle to make it creamy.',
        chefTip: 'Do not add acid (tomatoes or lemon) while boiling raw lentils; acids toughen the pectin in dal skins and delay softening.',
        sensoryCue: 'Dal grains should melt smoothly with no gritty resistance.',
        timerMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Build the Onion-Tomato Base',
        instruction: 'In a separate skillet, warm 1 tbsp ghee over medium flame. Add diced onions and sauté for 5–6 minutes until translucent and edges turn pale golden. Stir in ginger, green chilli, and tomatoes. Cook for 4 minutes until tomatoes break down into a soft jammy paste.',
        chefTip: 'A pinch of salt with onions accelerates moisture evaporation through osmosis.',
        sensoryCue: 'The raw sharpness of onions transforms into sweet, caramelized allium notes.',
        timerMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'Combine & Gentle Simmer',
        instruction: 'Pour the cooked creamy dal into the tomato-onion skillet. Stir well to integrate. If too thick, pour in 1/4 cup boiling water. Simmer together on low heat for 5 minutes so the lentils absorb the savory base.',
        sensoryCue: 'Small gentle bubbles across the surface and a creamy sheen.',
        timerMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'The Showstopper Ghee Tadka',
        instruction: 'In a small tadka pan, heat the remaining 1 tbsp ghee until hot. Add cumin seeds; they will crackle within 5 seconds. Add sliced garlic and cook for 30 seconds until pale golden (watch closely!). Remove from flame, stir in Kashmiri red chilli powder, and immediately pour sizzling ghee over the dal.',
        chefTip: 'Add chilli powder ONLY off the flame; dry red chilli scorches and turns bitter in 2 seconds over direct heat.',
        sensoryCue: 'Loud sizzle as the smoking ghee hits the dal; instant heavenly toasted garlic fragrance.',
        timerMinutes: 2
      },
      {
        stepNumber: 5,
        title: 'Rest & Garnish',
        instruction: 'Cover the pot with a tight lid for 2 minutes to let the trapped aromatic smoke perfume the entire dish. Remove lid, stir gently, and scatter fresh cilantro on top. Serve piping hot with jeera rice or warm rotis.',
        chefTip: 'A squeeze of fresh lemon juice at the table balances the rich ghee.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Toor Dal', replacement: 'Yellow Moong Dal or Red Masoor Dal', rationale: 'Both cook quickly into silky smooth texture.' },
      { ingredient: 'Ghee', replacement: 'Neutral Oil or Mustard Oil', rationale: 'For a 100% vegan dal with crisp roasted aroma.' },
      { ingredient: 'Kashmiri Chilli', replacement: 'Sweet Paprika + pinch Cayenne', rationale: 'Yields the same gorgeous ruby oil without intense heat.' }
    ],
    wineOrBeveragePairing: 'Masala Chaas (Spiced Buttermilk with roasted cumin) or crisp Indian Pale Ale (IPA)'
  },
  {
    id: 'paneer-butter-masala',
    title: 'Restaurant-Style Paneer Butter Masala',
    originalName: 'पनीर बटर मसाला (Paneer Butter Masala)',
    cuisine: 'North Indian',
    regionCategory: 'indian',
    description: 'Tender cubes of fresh paneer bathed in a silky, mildly spiced, velvety tomato-butter gravy infused with crushed kasuri methi and cream.',
    cookingTimeMinutes: 30,
    prepTimeMinutes: 15,
    difficulty: 'Medium',
    defaultServings: 4,
    caloriesPerServing: 380,
    tags: ['vegetarian', 'gluten-free', 'rich-curry', 'restaurant-special'],
    matchingIngredients: ['paneer', 'butter', 'onion', 'tomato', 'garlic', 'ginger', 'kashmiri_chilli', 'garam_masala', 'kasuri_methi', 'cream'],
    additionalIngredientsNeeded: [
      { name: 'Cashews or Cashew Paste (optional for richness)', optional: true, commonPantry: true },
      { name: 'Sugar / Honey', optional: true, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 5,
      tangy: 3,
      aromatic: 5,
      sweet: 3
    },
    culinaryScience: 'Tomatoes are inherently acidic (pH 4.3). Balancing tomato puree with butter and dairy cream neutralizes sharp acidity through milk fats, while emulsifying the lycopene pigments into an iconic bright orange-amber hue.',
    keyTechniques: [
      { name: 'Bhunao & Pureeing', explanation: 'Slow cooking the masala base then blending smooth for velvety restaurant texture.' },
      { name: 'Crushing Kasuri Methi', explanation: 'Friction between palms pulverizes leaves into dust, maximizing surface area.' }
    ],
    ingredientsList: [
      { name: 'Paneer (Cottage Cheese)', amount: 300, unit: 'grams', notes: 'Cut into bite-sized cubes, soaked in warm water', isPantryMatch: true },
      { name: 'Butter', amount: 2, unit: 'tbsp', notes: 'Divided use', isPantryMatch: true },
      { name: 'Oil', amount: 1, unit: 'tbsp', notes: 'Prevents butter from burning', isPantryMatch: true },
      { name: 'Onions', amount: 2, unit: 'medium', notes: 'Roughly chopped for puree', isPantryMatch: true },
      { name: 'Tomatoes', amount: 4, unit: 'ripe medium', notes: 'Roughly chopped (ripe red provides sweetness)', isPantryMatch: true },
      { name: 'Garlic', amount: 6, unit: 'cloves', notes: 'Peeled', isPantryMatch: true },
      { name: 'Ginger', amount: 1.5, unit: 'inch', notes: 'Roughly chopped', isPantryMatch: true },
      { name: 'Kashmiri Red Chilli Powder', amount: 1, unit: 'tbsp', notes: 'Gives the ruby red restaurant glow', isPantryMatch: true },
      { name: 'Garam Masala', amount: 0.5, unit: 'tsp', notes: 'Warm finish', isPantryMatch: true },
      { name: 'Kasuri Methi (Fenugreek Leaves)', amount: 1, unit: 'tbsp', notes: 'Lightly toasted on dry pan', isPantryMatch: true },
      { name: 'Heavy Cream', amount: 3, unit: 'tbsp', notes: 'Or soaked cashew cream', isPantryMatch: true },
      { name: 'Sugar or Honey', amount: 0.5, unit: 'tsp', notes: 'To round out tomato sharpness' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Soak the Paneer for Cloud-Soft Texture',
        instruction: 'Cut paneer into 1-inch cubes and immerse them in a bowl of warm, lightly salted water for 15 minutes while preparing the gravy.',
        chefTip: 'Never fry paneer on high heat until it turns rubbery! Soaking in warm salted water hydrates the milk proteins, keeping them velvety and melt-in-the-mouth.',
        timerMinutes: 15
      },
      {
        stepNumber: 2,
        title: 'Sauté the Makhani Masala Base',
        instruction: 'Heat 1 tbsp oil and 1 tbsp butter in a pot. Add chopped onions, ginger, and garlic. Sauté for 5 minutes until onions soften. Add chopped tomatoes, 1/2 tsp salt, and 1/2 cup water. Cover and simmer on medium heat for 10 minutes until tomatoes are mushy.',
        sensoryCue: 'Tomatoes should break down completely into a soft pulp.',
        timerMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Blend to Silky Smoothness',
        instruction: 'Let the mixture cool for 5 minutes, then transfer to a blender and blend until completely satin-smooth. Pour through a fine mesh strainer back into the pot for that ultra-refined restaurant makhani texture.',
        chefTip: 'Straining removes tomato seeds and skins, yielding true silk velvet mouthfeel.',
        timerMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Simmer & Season the Silk Gravy',
        instruction: 'Return the strained puree to the pot on low flame. Add Kashmiri chilli powder, garam masala, sugar, and remaining 1 tbsp butter. Simmer for 6–8 minutes until the gravy thickens and oil dots glisten on top.',
        timerMinutes: 7
      },
      {
        stepNumber: 5,
        title: 'Incorporate Paneer & Aromatic Flourish',
        instruction: 'Drain the paneer cubes and gently slide them into the simmering gravy. Stir in heavy cream. Rub the toasted kasuri methi between your dry palms to crumble into fine dust directly over the pot. Simmer gently for 2 minutes and turn off heat.',
        sensoryCue: 'Distinctive sweet-savory perfume fills the room; gravy clings to the back of a spoon.',
        timerMinutes: 3
      }
    ],
    substitutions: [
      { ingredient: 'Paneer', replacement: 'Extra-Firm Tofu', rationale: 'Press tofu dry; absorbs the spiced makhani gravy beautifully for a vegan version.' },
      { ingredient: 'Heavy Cream', replacement: 'Soaked Cashew Milk / Paste', rationale: 'Traditional Mughlai technique yielding nutty natural creaminess.' },
      { ingredient: 'Kasuri Methi', replacement: 'Pinch of dried crushed celery leaves + touch of maple', rationale: 'Replicates the sweet-savory fenugreek aroma profile.' }
    ],
    wineOrBeveragePairing: 'Mango Lassi or slightly off-dry Gewürztraminer'
  },
  {
    id: 'pasta-aglio-e-olio',
    title: 'Authentic Spaghetti Aglio e Olio',
    originalName: 'Spaghetti Aglio, Olio e Peperoncino',
    cuisine: 'Italian',
    regionCategory: 'international',
    description: 'The supreme test of Italian minimalism: al dente spaghetti coated in an emulsion of golden garlic-infused extra virgin olive oil, chilli, and starchy pasta water.',
    cookingTimeMinutes: 15,
    prepTimeMinutes: 5,
    difficulty: 'Easy',
    defaultServings: 2,
    caloriesPerServing: 420,
    tags: ['vegetarian', 'vegan', 'quick-under-30', 'italian-classic'],
    matchingIngredients: ['pasta', 'olive_oil', 'garlic', 'red_pepper_flakes', 'cilantro'],
    additionalIngredientsNeeded: [
      { name: 'Kosher Salt (for pasta boiling water)', optional: false, commonPantry: true },
      { name: 'Water', optional: false, commonPantry: true },
      { name: 'Parsley (traditional, or Cilantro/Basil)', optional: true, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 4,
      tangy: 1,
      aromatic: 5,
      sweet: 1
    },
    culinaryScience: 'Mantecatura is pure chemistry: high-molecular-weight amylose starches leached from pasta into the boiling water act as surfactant stabilizers. When vigorously tossed with warm olive oil, they trap microscopic oil droplets in water, forming a creamy emulsion without a drop of dairy.',
    keyTechniques: [
      { name: 'Gentle Garlic Infusion', explanation: 'Cooking sliced garlic slowly in cold oil so it sweetens without crisping bitter.' },
      { name: 'Pasta Water Emulsion', explanation: 'Tossing starchy water and olive oil vigorously off heat for a clinging glaze.' }
    ],
    ingredientsList: [
      { name: 'Spaghetti or Linguine', amount: 200, unit: 'grams', notes: 'Bronze-die cut pasta creates the starchiest water', isPantryMatch: true },
      { name: 'Extra Virgin Olive Oil', amount: 4, unit: 'tbsp', notes: 'Use your finest fruity olive oil', isPantryMatch: true },
      { name: 'Garlic', amount: 6, unit: 'cloves', notes: 'Thinly and evenly sliced', isPantryMatch: true },
      { name: 'Red Pepper Flakes (Peperoncino)', amount: 0.75, unit: 'tsp', notes: 'Adjust to heat preference', isPantryMatch: true },
      { name: 'Fresh Italian Parsley or Basil', amount: 3, unit: 'tbsp', notes: 'Finely minced', isPantryMatch: true },
      { name: 'Salt for Pasta Water', amount: 1.5, unit: 'tbsp', notes: 'Water should taste like gentle sea water' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Boil Pasta in Salted Water',
        instruction: 'Bring 3 liters of water to a vigorous boil. Add 1.5 tbsp salt. Drop spaghetti and cook until 2 minutes before the package al dente time (it will finish cooking in the oil skillet).',
        chefTip: 'Never rinse pasta in cold water! Rinsing strips the microscopic starch grains needed to create your sauce emulsion.',
        timerMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Cold-Start the Garlic Infusion',
        instruction: 'While pasta boils, combine sliced garlic and 4 tbsp olive oil in a cold skillet. Turn heat to medium-low. Allow garlic to gently sizzle and turn a very pale blonde straw color (approx 3–4 minutes).',
        chefTip: 'If garlic turns dark brown, it turns bitter; immediately remove skillet from heat when it reaches pale blonde!',
        sensoryCue: 'A sweet, toasted, mellow garlic perfume fills the kitchen without any acrid sharpness.',
        timerMinutes: 4
      },
      {
        stepNumber: 3,
        title: 'Bloom the Chilli & Add Pasta Water',
        instruction: 'Add red pepper flakes to the garlic oil and sizzle for 20 seconds. Ladle 1/2 cup of boiling cloudy pasta water directly into the skillet. It will violently bubble and foam as water meets the hot oil.',
        sensoryCue: 'Active bubbling and emulsifying into an opaque golden liquid.',
        timerMinutes: 1
      },
      {
        stepNumber: 4,
        title: 'The Mantecatura (Toss & Glaze)',
        instruction: 'Use tongs to transfer spaghetti directly into the bubbling skillet. Toss vigorously over medium heat for 60 seconds as the noodles drink in the garlic-infused broth. Add another splash of pasta water if it looks dry.',
        sensoryCue: 'A distinct slurping, creamy sound as noodles roll against the skillet.',
        timerMinutes: 2
      },
      {
        stepNumber: 5,
        title: 'Finish & Serve',
        instruction: 'Remove from heat. Toss in minced fresh parsley or basil and a final drizzle of fresh raw olive oil. Serve immediately on warmed plates.',
        chefTip: 'Pasta waits for no one—eat within 2 minutes of plating for peak emulsification.',
        timerMinutes: 1
      }
    ],
    substitutions: [
      { ingredient: 'Parsley', replacement: 'Fresh Basil or Cilantro', rationale: 'Offers bright, fresh herbal contrast.' },
      { ingredient: 'Spaghetti', replacement: 'Linguine, Angel Hair, or Penne', rationale: 'Long strands offer maximum surface area for emulsion.' }
    ],
    wineOrBeveragePairing: 'Crisp Pinot Grigio or dry sparkling water with fresh lemon'
  },
  {
    id: 'south-indian-tomato-rasam',
    title: 'Authentic South Indian Tomato Pepper Rasam',
    originalName: 'தக்காளி ரசம் (Tomato Milagu Rasam)',
    cuisine: 'South Indian',
    regionCategory: 'indian',
    description: 'A comforting, tangy, peppery South Indian digestive soup with ripe crushed tomatoes, freshly crushed black pepper, cumin, tamarind, and a sizzling mustard-curry leaf tadka.',
    cookingTimeMinutes: 20,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 4,
    caloriesPerServing: 90,
    tags: ['vegetarian', 'vegan', 'gluten-free', 'immunity-booster', 'quick-under-30'],
    matchingIngredients: ['tomato', 'garlic', 'curry_leaves', 'mustard_seeds', 'cumin_seeds', 'turmeric', 'asafoetida', 'coriander_powder', 'cilantro', 'ghee'],
    additionalIngredientsNeeded: [
      { name: 'Black Peppercorns (coarsely ground)', optional: false, commonPantry: true },
      { name: 'Tamarind Paste or Lemon juice', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 3,
      savory: 4,
      tangy: 5,
      aromatic: 5,
      sweet: 1
    },
    culinaryScience: 'Piperine in black pepper combines with curcumin in turmeric to enhance nutrient bio-availability by up to 2000%. Gentle simmering extracts the bright glutamate acidity from tomatoes without over-extracting bitter seed tannins.',
    keyTechniques: [
      { name: 'Hand-Mashing Tomatoes', explanation: 'Crushing fresh tomatoes by hand preserves cellular integrity and rustic texture compared to pureeing.' },
      { name: 'Foam-Point Simmer', explanation: 'Turning off heat the precise moment frothy white foam rises, preserving delicate volatile herbal notes.' }
    ],
    ingredientsList: [
      { name: 'Ripe Red Tomatoes', amount: 3, unit: 'medium', notes: 'Crushed thoroughly with fingers', isPantryMatch: true },
      { name: 'Garlic', amount: 5, unit: 'cloves', notes: 'Crushed with skin on in mortar', isPantryMatch: true },
      { name: 'Black Peppercorns', amount: 1, unit: 'tsp', notes: 'Coarsely crushed in mortar', isPantryMatch: true },
      { name: 'Cumin Seeds', amount: 1, unit: 'tsp', notes: 'Crushed with peppercorns', isPantryMatch: true },
      { name: 'Tamarind Pulp', amount: 1, unit: 'tbsp', notes: 'Dissolved in 1 cup warm water (or lemon juice at end)', isPantryMatch: true },
      { name: 'Curry Leaves', amount: 10, unit: 'leaves', notes: 'Fresh sprig', isPantryMatch: true },
      { name: 'Turmeric Powder', amount: 0.25, unit: 'tsp', isPantryMatch: true },
      { name: 'Asafoetida (Hing)', amount: 0.125, unit: 'tsp', notes: 'Digestive allium flavor', isPantryMatch: true },
      { name: 'Mustard Seeds', amount: 0.75, unit: 'tsp', isPantryMatch: true },
      { name: 'Ghee or Sesame/Coconut Oil', amount: 1, unit: 'tbsp', isPantryMatch: true },
      { name: 'Fresh Cilantro', amount: 2, unit: 'tbsp', notes: 'Finely chopped with stems', isPantryMatch: true },
      { name: 'Salt', amount: 1, unit: 'tsp', notes: 'To taste' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Crush the Rasam Aromatics',
        instruction: 'In a stone mortar and pestle, coarsely crush cumin seeds and black peppercorns into a coarse powder. Add the unpeeled garlic cloves and crush lightly to break the skin and release essential oils.',
        sensoryCue: 'Invigorating peppery citrus punch as black pepper breaks.',
        timerMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Hand-Crush Tomatoes & Simmer Broth',
        instruction: 'In a deep vessel, mash the chopped tomatoes with your clean hands until pulpy. Add 2 cups water, tamarind extract, turmeric, half of the curry leaves, and salt. Bring to a gentle boil and simmer for 8 minutes until raw tamarind taste disappears.',
        timerMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Add Crushed Spice Blend & Watch the Foam',
        instruction: 'Add the crushed pepper-cumin-garlic mixture and cilantro stems. Lower the heat. Do NOT boil vigorously! Watch the surface carefully: within 3–4 minutes, creamy white aromatic foam will begin to rise across the pot. Turn off the heat immediately.',
        chefTip: 'If rasam boils rapidly after adding pepper and garlic, the aroma turns bitter and flat. Always stop the flame as soon as it foams!',
        sensoryCue: 'Thick creamy frothy head forms on the surface like an espresso crema.',
        timerMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Sizzling South Indian Tadka',
        instruction: 'In a small tadka ladle, heat 1 tbsp ghee or coconut oil. Add mustard seeds. When they pop vigorously, add remaining curry leaves and a pinch of asafoetida. Pour immediately over the rasam and cover with lid.',
        sensoryCue: 'Crackling mustard seeds followed by the sweet floral sizzle of curry leaves.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Tamarind', replacement: 'Fresh Lemon Juice', rationale: 'Add lemon juice off-heat at the very end to avoid bitterness.' },
      { ingredient: 'Curry Leaves', replacement: 'Lime zest + fresh basil leaf', rationale: 'Replicates citrus herbal top notes.' }
    ],
    wineOrBeveragePairing: 'Sipped directly from a warm tumbler or poured over hot steamed rice with a dollop of ghee'
  },
  {
    id: 'mediterranean-shakshuka',
    title: 'Rich Mediterranean Shakshuka',
    originalName: 'شكشوكة (Shakshuka)',
    cuisine: 'Mediterranean',
    regionCategory: 'international',
    description: 'Fresh farm eggs gently poached in a simmering, smoky, spiced tomato-bell pepper ragout with garlic, cumin, smoked paprika, and crusty bread for dipping.',
    cookingTimeMinutes: 25,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 3,
    caloriesPerServing: 280,
    tags: ['vegetarian', 'high-protein', 'one-pan', 'brunch-favorite'],
    matchingIngredients: ['eggs', 'tomato', 'onion', 'garlic', 'bell_pepper', 'olive_oil', 'cumin_seeds', 'smoked_paprika', 'cilantro', 'bread'],
    additionalIngredientsNeeded: [
      { name: 'Feta Cheese (optional garnish)', optional: true, commonPantry: true },
      { name: 'Salt & Black Pepper', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 5,
      tangy: 4,
      aromatic: 4,
      sweet: 2
    },
    culinaryScience: 'Poaching eggs directly in an acidic tomato sauce keeps the egg whites firm and coagulated at lower temperatures (around 62–65°C / 144°F) while keeping the yolks liquid, luscious, and jammy.',
    keyTechniques: [
      { name: 'Low-Heat Steam Poaching', explanation: 'Covering the skillet so radiant trapped steam cooks whites evenly without overcooking yolks.' },
      { name: 'Pepper & Onion Caramelization', explanation: 'Cooking bell peppers until tender and sweet before adding tomatoes.' }
    ],
    ingredientsList: [
      { name: 'Eggs', amount: 4, unit: 'large', notes: 'Room temperature', isPantryMatch: true },
      { name: 'Extra Virgin Olive Oil', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Onion', amount: 1, unit: 'medium', notes: 'Finely sliced', isPantryMatch: true },
      { name: 'Bell Pepper (Red or Yellow)', amount: 1, unit: 'large', notes: 'Thinly sliced strips', isPantryMatch: true },
      { name: 'Garlic', amount: 4, unit: 'cloves', notes: 'Minced', isPantryMatch: true },
      { name: 'Crushed Tomatoes or Canned Passata', amount: 400, unit: 'grams', notes: 'Rich ripe tomatoes', isPantryMatch: true },
      { name: 'Ground Cumin', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Smoked Paprika', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Fresh Cilantro or Parsley', amount: 2, unit: 'tbsp', notes: 'Chopped for garnish', isPantryMatch: true },
      { name: 'Crusty Bread or Pita', amount: 4, unit: 'slices', notes: 'Toasted with olive oil for dipping', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sauté Peppers & Aromatics',
        instruction: 'Heat olive oil in a wide skillet over medium heat. Add sliced onion and bell peppers. Cook for 8 minutes, stirring occasionally, until vegetables are tender and sweet with caramelized edges.',
        timerMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Add Garlic & Bloom the Spices',
        instruction: 'Stir in minced garlic, cumin, smoked paprika, salt, and pepper. Sauté for 60 seconds until fragrant.',
        timerMinutes: 1
      },
      {
        stepNumber: 3,
        title: 'Simmer the Rich Tomato Sauce',
        instruction: 'Pour in the crushed tomatoes and 1/4 cup water. Reduce heat to medium-low and simmer gently for 10 minutes until the sauce thickens and oil glistens on the edges.',
        timerMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Create Wells & Poach the Eggs',
        instruction: 'Use the back of a large spoon to make 4 distinct wells in the sauce. Crack an egg directly into each well. Season each yolk with a pinch of salt. Cover skillet with a lid and cook on low for 5–7 minutes until egg whites are set and opaque, but yolks remain soft and jammy.',
        chefTip: 'Keep a close eye during the last 2 minutes; a shake of the pan should reveal firm white boundaries with gentle jiggling centers.',
        sensoryCue: 'Opaque white blankets surrounding glistening bright golden-orange yolks.',
        timerMinutes: 6
      },
      {
        stepNumber: 5,
        title: 'Garnish & Serve with Crusty Bread',
        instruction: 'Sprinkle fresh herbs (and crumbled feta if you have it) over the pan. Serve straight from the skillet alongside thick toasted bread for scooping up the spiced tomato sauce and molten yolk.',
        timerMinutes: 1
      }
    ],
    substitutions: [
      { ingredient: 'Smoked Paprika', replacement: 'Kashmiri Chilli Powder + pinch cumin', rationale: 'Gives the same smoky warmth and deep crimson color.' },
      { ingredient: 'Eggs', replacement: 'Cubes of Tofu or Paneer', rationale: 'Simmer paneer/tofu in the rich spiced tomato stew for a great egg-free alternative.' }
    ],
    wineOrBeveragePairing: 'Fresh mint tea or light Moroccan spiced tea'
  },
  {
    id: 'asian-garlic-fried-rice',
    title: 'Golden Garlic Wok Fried Rice',
    originalName: '蒜香黄金炒饭 (Golden Garlic Chaofan)',
    cuisine: 'East Asian',
    regionCategory: 'international',
    description: 'High-heat wok-tossed jasmine or basmati rice with crispy toasted garlic flakes, scrambled egg ribbon, soy reduction, and crisp scallions/carrots.',
    cookingTimeMinutes: 15,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 2,
    caloriesPerServing: 360,
    tags: ['quick-under-30', 'comfort-food', 'asian-classic', 'budget-friendly'],
    matchingIngredients: ['basmati_rice', 'garlic', 'ginger', 'carrots', 'bell_pepper', 'eggs', 'soy_sauce', 'sesame_oil', 'green_chilli'],
    additionalIngredientsNeeded: [
      { name: 'Neutral high-smoke oil', optional: false, commonPantry: true },
      { name: 'White pepper or black pepper', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 5,
      tangy: 1,
      aromatic: 5,
      sweet: 1
    },
    culinaryScience: 'Using cold, day-old leftover cooked rice is critical. As cooked rice cools, starches undergo retrogradation, recrystallizing into dry, firm grains. Freshly cooked warm rice releases excess steam, turning mushy and gummy when tossed in a hot wok.',
    keyTechniques: [
      { name: 'Wok Hei / High-Heat Searing', explanation: 'Cooking over blazing high heat so micro-droplets of oil vaporize, creating signature restaurant smoky depth.' },
      { name: 'Two-Stage Garlic', explanation: 'Frying half the garlic until golden crisp as a crunchy garnish, while blooming the rest in the savory sauce.' }
    ],
    ingredientsList: [
      { name: 'Cooked Rice (Basmati or Jasmine)', amount: 3, unit: 'cups', notes: 'Chilled overnight in fridge, grains separated', isPantryMatch: true },
      { name: 'Garlic', amount: 8, unit: 'cloves', notes: 'Divided: half sliced thin, half minced', isPantryMatch: true },
      { name: 'Ginger', amount: 1, unit: 'tsp', notes: 'Finely minced', isPantryMatch: true },
      { name: 'Eggs', amount: 2, unit: 'large', notes: 'Beaten lightly with pinch of salt', isPantryMatch: true },
      { name: 'Carrot', amount: 0.5, unit: 'medium', notes: 'Finely diced into tiny cubes', isPantryMatch: true },
      { name: 'Bell Pepper or Green Peas', amount: 0.5, unit: 'cup', notes: 'Finely diced', isPantryMatch: true },
      { name: 'Soy Sauce', amount: 1.5, unit: 'tbsp', notes: 'Drizzled along wok edge', isPantryMatch: true },
      { name: 'Toasted Sesame Oil', amount: 1, unit: 'tsp', notes: 'Finishing oil', isPantryMatch: true },
      { name: 'High Heat Cooking Oil', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Fry Garlic Crisps',
        instruction: 'Heat 1 tbsp oil in a wide wok or skillet over medium heat. Add thinly sliced garlic and fry for 2 minutes until light golden and crisp. Immediately scoop onto paper towels; they will continue to crisp as they cool.',
        sensoryCue: 'Golden straw chips; remove before dark to prevent bitterness.',
        timerMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Scramble the Soft Egg Cloud',
        instruction: 'Add 1 tsp oil to the hot pan. Pour in beaten eggs; let set for 10 seconds, then swirl with spatula into soft, tender curds. Slide eggs out onto a plate while still soft and glossy.',
        timerMinutes: 1
      },
      {
        stepNumber: 3,
        title: 'Wok-Sear the Vegetables & Minced Garlic',
        instruction: 'Turn heat to high. Add remaining oil. Toss in minced garlic, ginger, diced carrots, and peppers. Stir-fry aggressively for 90 seconds so veggies get blistered but retain vibrant crunch.',
        timerMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Toss Rice & Sizzle the Soy Sauce',
        instruction: 'Add the cold separated rice to the wok. Press down with spatula to break up clumps and sear against the hot metal. Pour soy sauce directly against the sizzling outer wall of the wok (not on the rice directly!) so it caramelizes instantly before tossing through the rice.',
        chefTip: 'Pouring soy sauce around the rim of the blazing pan triggers instant Maillard vaporization, creating restaurant-style wok aroma.',
        sensoryCue: 'A loud sizzling hiss as soy sauce hits the hot metal; rich toasted caramel aroma.',
        timerMinutes: 3
      },
      {
        stepNumber: 5,
        title: 'Fold Eggs & Finish with Sesame Oil',
        instruction: 'Fold the scrambled eggs back into the rice. Turn off heat. Drizzle toasted sesame oil and scatter the reserved crispy garlic chips on top. Toss once and serve immediately.',
        timerMinutes: 1
      }
    ],
    substitutions: [
      { ingredient: 'Eggs', replacement: 'Crumbled or Cubed Firm Tofu', rationale: 'Pan-sear tofu with a pinch of turmeric for color and high protein.' },
      { ingredient: 'Basmati Rice', replacement: 'Jasmine Rice or Brown Rice', rationale: 'Any long-grain chilled leftover rice works wonders.' }
    ],
    wineOrBeveragePairing: 'Chilled Jasmine Green Tea or crisp Japanese Lager'
  },
  {
    id: 'indo-chinese-chilli-paneer',
    title: 'Indo-Chinese Chilli Paneer',
    originalName: 'चिल्ली पनीर (Chilli Paneer)',
    cuisine: 'Indo-Chinese',
    regionCategory: 'indian',
    description: 'Crispy shallow-fried cubes of paneer tossed with crunchy bell peppers, onions, ginger, garlic, soy sauce, and green chillies in a glistening savory-spicy glaze.',
    cookingTimeMinutes: 20,
    prepTimeMinutes: 10,
    difficulty: 'Medium',
    defaultServings: 3,
    caloriesPerServing: 340,
    tags: ['vegetarian', 'indo-chinese', 'street-style', 'bold-flavor'],
    matchingIngredients: ['paneer', 'bell_pepper', 'onion', 'garlic', 'ginger', 'green_chilli', 'soy_sauce', 'cornstarch', 'cilantro'],
    additionalIngredientsNeeded: [
      { name: 'Vinegar or Lemon juice', optional: false, commonPantry: true },
      { name: 'Ketchup or Chilli Sauce (optional)', optional: true, commonPantry: true },
      { name: 'Salt & Black Pepper', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 4,
      savory: 5,
      tangy: 3,
      aromatic: 4,
      sweet: 2
    },
    culinaryScience: 'Coating paneer in cornstarch absorbs exterior surface moisture, creating a microscopic crispy crust when shallow-fried. When subsequently tossed with the hot soy-cornstarch slurry, the starch gelatinizes instantly, binding the glossy glaze tightly to every paneer cube.',
    keyTechniques: [
      { name: 'Cornstarch Crust', explanation: 'Drying protein surface with starch for maximum crunch without deep-frying.' },
      { name: 'Flash Wok-Toss', explanation: 'Keeping bell peppers and onions crunchy and slightly charred rather than soft.' }
    ],
    ingredientsList: [
      { name: 'Paneer', amount: 250, unit: 'grams', notes: 'Cut into 1-inch cubes', isPantryMatch: true },
      { name: 'Cornstarch / Cornflour', amount: 2.5, unit: 'tbsp', notes: 'Divided use', isPantryMatch: true },
      { name: 'Bell Pepper (Capsicum)', amount: 1, unit: 'medium', notes: 'Cut into 1-inch square petals', isPantryMatch: true },
      { name: 'Onion', amount: 1, unit: 'medium', notes: 'Cut into 1-inch layers/petals', isPantryMatch: true },
      { name: 'Garlic', amount: 6, unit: 'cloves', notes: 'Finely minced', isPantryMatch: true },
      { name: 'Ginger', amount: 1, unit: 'tbsp', notes: 'Finely minced', isPantryMatch: true },
      { name: 'Green Chillies', amount: 2, unit: 'pieces', notes: 'Slit diagonally', isPantryMatch: true },
      { name: 'Soy Sauce', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Vinegar', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Cooking Oil', amount: 2, unit: 'tbsp', notes: 'For shallow frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Dust & Crisp the Paneer',
        instruction: 'Toss paneer cubes with 2 tbsp cornstarch, 1/4 tsp salt, and 1/4 tsp black pepper until lightly coated. Heat 1.5 tbsp oil in a non-stick or carbon steel skillet over medium-high heat. Sear paneer cubes for 3–4 minutes, flipping once, until edges are golden and crisp. Drain on plate.',
        timerMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Flash Sauté Aromatics on Blazing Heat',
        instruction: 'In the same hot pan with remaining oil, add minced garlic, ginger, and slit green chillies. Stir-fry for 30 seconds until aromatic. Add square petals of onion and capsicum. Cook on high heat for 2 minutes—they must remain crisp and firm!',
        sensoryCue: 'Intense sizzle with pungent sweet garlic and chilli vapor.',
        timerMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Prepare the Slurry & Glaze',
        instruction: 'In a small bowl, whisk 1/2 tsp cornstarch with 3 tbsp water, soy sauce, and vinegar until dissolved. Pour this liquid into the skillet. It will instantly bubble, darken, and thicken into a glossy syrup within 20 seconds.',
        timerMinutes: 1
      },
      {
        stepNumber: 4,
        title: 'Toss to Coat & Garnish',
        instruction: 'Immediately dump the crispy paneer cubes into the bubbling glaze. Toss rapidly for 30 seconds until every cube is lacquered in the shiny sauce. Turn off heat, scatter fresh cilantro or scallions, and serve immediately.',
        chefTip: 'Serve straight away so the exterior crust stays crunchy against the velvety soft paneer inside.',
        timerMinutes: 1
      }
    ],
    substitutions: [
      { ingredient: 'Paneer', replacement: 'Firm Tofu, Chicken Breast or Mushrooms', rationale: 'All work identically with the cornstarch dusting and wok glaze technique.' }
    ],
    wineOrBeveragePairing: 'Iced lemon soda or crisp wheat beer'
  },
  {
    id: 'punjabi-aloo-gobi',
    title: 'Homestyle Punjabi Aloo Gobi',
    originalName: 'आलू गोभी (Aloo Gobi)',
    cuisine: 'North Indian',
    regionCategory: 'indian',
    description: 'Tender spiced cauliflower florets and golden potatoes pan-roasted with cumin, ginger juliennes, turmeric, and fresh cilantro—never soggy, with crisp edges.',
    cookingTimeMinutes: 25,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 4,
    caloriesPerServing: 210,
    tags: ['vegetarian', 'vegan', 'gluten-free', 'classic-indian'],
    matchingIngredients: ['cauliflower', 'potato', 'onion', 'ginger', 'tomato', 'cumin_seeds', 'turmeric', 'coriander_powder', 'kashmiri_chilli', 'garam_masala', 'cilantro'],
    additionalIngredientsNeeded: [
      { name: 'Mustard oil or Ghee/Cooking oil', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 3,
      savory: 4,
      tangy: 2,
      aromatic: 4,
      sweet: 2
    },
    culinaryScience: 'Cauliflower has a very high water content (92%). If you cover it with liquid immediately, it boils into mush. Shallow pan-roasting in hot oil allows surface water to evaporate rapidly while caramelizing the natural cruciferous sugars.',
    keyTechniques: [
      { name: 'Pan-Roasting (Bhunao)', explanation: 'Roasting florets uncovered first to caramelize edges before gentle steam cooking.' }
    ],
    ingredientsList: [
      { name: 'Cauliflower', amount: 1, unit: 'medium head', notes: 'Cut into bite-sized florets, washed & dried thoroughly', isPantryMatch: true },
      { name: 'Potatoes', amount: 2, unit: 'medium', notes: 'Peeled and cut into 1-inch cubes', isPantryMatch: true },
      { name: 'Cumin Seeds', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Ginger', amount: 1.5, unit: 'inch', notes: 'Half minced, half cut into thin long juliennes', isPantryMatch: true },
      { name: 'Green Chilli', amount: 1, unit: 'piece', notes: 'Slit', isPantryMatch: true },
      { name: 'Turmeric Powder', amount: 0.5, unit: 'tsp', isPantryMatch: true },
      { name: 'Coriander Powder', amount: 1.5, unit: 'tsp', isPantryMatch: true },
      { name: 'Kashmiri Chilli Powder', amount: 0.75, unit: 'tsp', isPantryMatch: true },
      { name: 'Garam Masala', amount: 0.5, unit: 'tsp', isPantryMatch: true },
      { name: 'Cooking Oil or Ghee', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Fresh Cilantro', amount: 3, unit: 'tbsp', notes: 'Chopped', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Dry & Pan-Sear the Cauliflower & Potatoes',
        instruction: 'Pat cauliflower and potato cubes completely dry with a kitchen towel. Heat 2 tbsp oil in a wide heavy-bottomed kadai or skillet over medium-high heat. Add cumin seeds; let crackle for 10 seconds. Add the potatoes and cauliflower florets in a single layer. Fry uncovered for 6–7 minutes, stirring occasionally, until edges develop golden browned spots.',
        chefTip: 'Never put wet cauliflower into the pan! Water creates steam that makes cauliflower soggy instead of roasty.',
        sensoryCue: 'Golden-brown blistering on the floret tips and a sweet roasted nuttiness.',
        timerMinutes: 7
      },
      {
        stepNumber: 2,
        title: 'Infuse Aromatics & Spices',
        instruction: 'Push vegetables to the edges of the pan. In the center, add minced ginger, green chilli, turmeric, coriander powder, Kashmiri chilli, and 1 tsp salt. Stir spices in the residual oil for 30 seconds, then toss all vegetables to coat evenly in the golden spice crust.',
        timerMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Gentle Steam Cook to Perfection',
        instruction: 'Sprinkle 2 tablespoons of water over the vegetables (do not drown them!). Cover with a tight-fitting lid. Turn heat to lowest setting. Let steam undisturbed for 10–12 minutes until a fork slides easily through a potato cube and cauliflower stem without falling apart.',
        timerMinutes: 12
      },
      {
        stepNumber: 4,
        title: 'Finish with Ginger Juliennes & Garam Masala',
        instruction: 'Remove lid. If any moisture remains, cook uncovered on medium for 1 minute. Sprinkle garam masala, fresh ginger juliennes, and generous cilantro. Toss gently without breaking the florets.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Cauliflower', replacement: 'Broccoli or Green Peas', rationale: 'Cooks quickly with lovely roasted crunch.' }
    ],
    wineOrBeveragePairing: 'Fresh mint chaas or warm ginger tea'
  },
  {
    id: 'classic-pasta-pomodoro',
    title: 'Classic Neapolitan Pasta al Pomodoro',
    originalName: 'Pasta al Pomodoro e Basilico',
    cuisine: 'Italian',
    regionCategory: 'international',
    description: 'The cornerstone of Italian cooking: al dente pasta coated in a sweet, unctuous sauce of gently simmered crushed tomatoes, slow-infused garlic, extra virgin olive oil, and sweet torn basil.',
    cookingTimeMinutes: 20,
    prepTimeMinutes: 5,
    difficulty: 'Easy',
    defaultServings: 2,
    caloriesPerServing: 390,
    tags: ['vegetarian', 'vegan', 'quick-under-30', 'comfort-food'],
    matchingIngredients: ['pasta', 'tomato', 'garlic', 'olive_oil', 'fresh_basil', 'parmesan'],
    additionalIngredientsNeeded: [
      { name: 'Salt for pasta water', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 1,
      savory: 4,
      tangy: 3,
      aromatic: 5,
      sweet: 3
    },
    culinaryScience: 'Tomatoes contain high concentrations of natural free glutamic acid (the chemical compound of umami). Simmering ripe tomatoes in fat concentrates this umami and evaporates raw acidity into mellow natural sweetness.',
    keyTechniques: [
      { name: 'Low & Slow Garlic Infusion', explanation: 'Crushing garlic whole and letting it bathe in oil to flavor without burning.' },
      { name: 'Sauce Glaze Finishing', explanation: 'Finishing the pasta directly inside the sauce with starchy water.' }
    ],
    ingredientsList: [
      { name: 'Pasta (Spaghetti, Penne or Rigatoni)', amount: 200, unit: 'grams', isPantryMatch: true },
      { name: 'Ripe Tomatoes or Canned Crushed', amount: 400, unit: 'grams', notes: 'San Marzano or sweet ripe plum tomatoes', isPantryMatch: true },
      { name: 'Garlic', amount: 4, unit: 'cloves', notes: 'Smashed lightly with side of knife', isPantryMatch: true },
      { name: 'Extra Virgin Olive Oil', amount: 3, unit: 'tbsp', isPantryMatch: true },
      { name: 'Fresh Basil', amount: 10, unit: 'leaves', notes: 'Torn by hand, never cut with knife', isPantryMatch: true },
      { name: 'Parmesan Cheese (optional)', amount: 2, unit: 'tbsp', notes: 'Freshly grated', isPantryMatch: true },
      { name: 'Salt', amount: 1, unit: 'tsp' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Infuse Garlic in Olive Oil',
        instruction: 'Place smashed garlic cloves and 3 tbsp olive oil in a wide pan over low heat. Let garlic sizzle very gently for 4–5 minutes until fragrant and golden. Remove the garlic cloves (or leave them in for a rustic punch).',
        timerMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Simmer the Pomodoro Sauce',
        instruction: 'Add the crushed tomatoes and 1/2 tsp salt to the fragrant oil. Stir well. Add 3 basil leaves to perfume the sauce. Simmer on medium-low for 12–15 minutes until sauce thickens, reduces, and oil droplets shine on the surface.',
        timerMinutes: 14
      },
      {
        stepNumber: 3,
        title: 'Boil Pasta & Reserve Starch Water',
        instruction: 'Boil pasta in a pot of generously salted water until 1 minute before al dente. Scoop out 1/2 cup of starchy pasta water before draining.',
        timerMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Marry Pasta & Sauce',
        instruction: 'Transfer hot pasta straight into the simmering pomodoro sauce. Add 1/4 cup pasta water and toss continuously over high heat for 60 seconds as the sauce emulsifies and clings to every ridge of the pasta.',
        sensoryCue: 'The sauce turns glossy, coating noodles rather than pooling in the pan.',
        timerMinutes: 1
      },
      {
        stepNumber: 5,
        title: 'Tear Fresh Basil & Serve',
        instruction: 'Turn off the heat. Tear remaining fresh basil leaves by hand directly over the pasta. Drizzle with extra raw olive oil and grated parmesan. Serve immediately.',
        chefTip: 'Never chop basil with a dull metal knife; it bruises the cells and turns leaves black. Always tear gently with your fingers.',
        timerMinutes: 1
      }
    ],
    substitutions: [
      { ingredient: 'Fresh Basil', replacement: 'Dried Oregano + pinch of fresh parsley', rationale: 'Gives classic Italian herbaceous profile.' }
    ],
    wineOrBeveragePairing: 'Chianti Classico or sparkling San Pellegrino with lemon'
  },
  {
    id: 'mexican-black-bean-fajitas',
    title: 'Sizzling Mexican Black Bean & Pepper Fajita Skillet',
    originalName: 'Fajitas de Frijoles Negros',
    cuisine: 'Mexican',
    regionCategory: 'international',
    description: 'Charred sweet bell peppers and onions tossed with tender black beans, toasted cumin, smoked paprika, lime juice, and fresh cilantro served with warm tortillas.',
    cookingTimeMinutes: 18,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 3,
    caloriesPerServing: 310,
    tags: ['vegetarian', 'vegan', 'gluten-free', 'high-fiber', 'quick-under-30'],
    matchingIngredients: ['black_beans', 'bell_pepper', 'onion', 'garlic', 'tomato', 'cumin_seeds', 'smoked_paprika', 'lemon', 'cilantro', 'tortillas'],
    additionalIngredientsNeeded: [
      { name: 'Olive or Avocado Oil', optional: false, commonPantry: true },
      { name: 'Salt & Pepper', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 4,
      tangy: 4,
      aromatic: 4,
      sweet: 2
    },
    culinaryScience: 'Cast-iron searing caramelizes natural fructose in sweet peppers at 160°C, producing smokiness. The bright citric acid in lime juice balances the rich starch of the black beans and cuts through the char.',
    keyTechniques: [
      { name: 'Cast-Iron Blistering', explanation: 'Cooking sliced peppers in a smoking hot dry/lightly oiled skillet without moving them for 2 minutes to produce blistering.' }
    ],
    ingredientsList: [
      { name: 'Cooked or Canned Black Beans', amount: 1.5, unit: 'cups', notes: 'Rinsed and drained', isPantryMatch: true },
      { name: 'Bell Peppers (Assorted colors)', amount: 2, unit: 'medium', notes: 'Sliced into thin strips', isPantryMatch: true },
      { name: 'Red or Yellow Onion', amount: 1, unit: 'medium', notes: 'Cut into strips', isPantryMatch: true },
      { name: 'Garlic', amount: 3, unit: 'cloves', notes: 'Minced', isPantryMatch: true },
      { name: 'Ground Cumin', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Smoked Paprika', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Lime or Lemon', amount: 1, unit: 'whole', notes: 'Cut into wedges', isPantryMatch: true },
      { name: 'Fresh Cilantro', amount: 3, unit: 'tbsp', notes: 'Chopped', isPantryMatch: true },
      { name: 'Tortillas or Roti/Chapati', amount: 4, unit: 'pieces', isPantryMatch: true },
      { name: 'Oil', amount: 1.5, unit: 'tbsp' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Blister the Peppers & Onions',
        instruction: 'Heat a heavy skillet or cast iron until smoking hot. Add 1 tbsp oil. Drop the sliced peppers and onions. Do not touch or stir for 90 seconds! Let the bottoms blister and char. Then toss and cook for another 3 minutes until tender-crisp.',
        sensoryCue: 'Pleasant smoky char marks without vegetables turning limp.',
        timerMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Spice & Warm the Black Beans',
        instruction: 'Lower heat to medium. Add minced garlic, cumin, smoked paprika, and salt. Sauté for 45 seconds. Stir in black beans and 2 tbsp water or broth. Simmer for 3 minutes until beans are piping hot and coated in smoky spices.',
        timerMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Warm the Tortillas',
        instruction: 'In a dry pan or directly over an open gas flame with tongs for 10 seconds per side, warm tortillas until puffed and toasted.',
        timerMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Brighten with Lime & Assemble',
        instruction: 'Squeeze half a lime directly over the sizzling bean and pepper skillet. Scatter cilantro. Spoon generous heaps into warm tortillas and enjoy.',
        timerMinutes: 1
      }
    ],
    substitutions: [
      { ingredient: 'Black Beans', replacement: 'Chickpeas or Red Kidney Beans (Rajma)', rationale: 'Great hearty legumes that absorb smoky Mexican spices.' },
      { ingredient: 'Tortillas', replacement: 'Indian Roti / Chapati or Pita bread', rationale: 'Fresh wheat flatbreads wrap fillings comfortably.' }
    ],
    wineOrBeveragePairing: 'Fresh lime agua fresca or crisp lager with lime wedge'
  },
  {
    id: 'andhra-lemon-rice',
    title: 'Authentic Andhra Lemon Rice (Chitrannam / Nimmakaya Pulihora)',
    originalName: 'చిత్రాన్నం / నిమ్మకాయ పులిహోర (Nimmakaya Pulihora)',
    cuisine: 'Andhra & Telugu',
    regionCategory: 'indian',
    description: 'The beloved Andhra temple and festival rice. Fluffy separated grains of rice folded in a crackling golden tempering of roasted peanuts (pallilu), chana dal, urad dal, mustard seeds, fresh curry leaves, ginger, slit green chillies, and freshly squeezed lemon juice (nimmakaya).',
    cookingTimeMinutes: 15,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 3,
    caloriesPerServing: 280,
    tags: ['vegetarian', 'vegan', 'gluten-free', 'quick-under-30', 'comfort-food', 'andhra-special', 'temple-food'],
    matchingIngredients: ['basmati_rice', 'lemon', 'peanuts', 'chana_dal', 'urad_dal', 'mustard_seeds', 'curry_leaves', 'green_chilli', 'dry_red_chillies', 'ginger', 'turmeric', 'asafoetida', 'ghee'],
    additionalIngredientsNeeded: [
      { name: 'Salt', optional: false, commonPantry: true },
      { name: 'Cooking Oil or Sesame Oil', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 4,
      tangy: 5,
      aromatic: 4,
      sweet: 1
    },
    culinaryScience: 'Thermal denaturation of citrus: Squeezing lemon juice over direct fire or boiling oil converts limonin and natural flavanones into bitter compounds. Lemon juice must ALWAYS be folded into warm (not scorching) rice off heat. Cooling cooked rice beforehand with 1 tsp oil triggers amylose retrogradation, preventing grains from turning mushy when tossed.',
    keyTechniques: [
      { name: 'Pop & Crisp Dal Tempering', explanation: 'Frying chana dal, urad dal, and raw peanuts in medium oil until golden and crunchy before adding aromatics.' },
      { name: 'Off-Heat Citrus Emulsion', explanation: 'Whisking fresh lemon juice with turmeric and warm seasoned oil off heat for vibrant yellow color without bitterness.' }
    ],
    ingredientsList: [
      { name: 'Cooked Rice (Basmati or Sona Masoori)', amount: 3, unit: 'cups', notes: 'Cooled completely to room temp with grains separated', isPantryMatch: true },
      { name: 'Fresh Lemon Juice (Nimmakaya Rasam)', amount: 3, unit: 'tbsp', notes: 'Squeezed fresh from 2 juicy lemons', isPantryMatch: true },
      { name: 'Raw Peanuts / Groundnuts (Pallilu)', amount: 3, unit: 'tbsp', notes: 'Gives classic festive crunch', isPantryMatch: true },
      { name: 'Chana Dal (Senaga Pappu)', amount: 1, unit: 'tbsp', notes: 'For golden nutty bite', isPantryMatch: true },
      { name: 'Urad Dal (Minapa Pappu)', amount: 1, unit: 'tsp', notes: 'Split white lentils', isPantryMatch: true },
      { name: 'Black Mustard Seeds (Avalu)', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Curry Leaves (Karivepaku)', amount: 15, unit: 'leaves', notes: 'Fresh sprig', isPantryMatch: true },
      { name: 'Green Chillies (Pasi Mirapakayalu)', amount: 2, unit: 'pieces', notes: 'Slit lengthwise', isPantryMatch: true },
      { name: 'Dried Red Chillies (Endu Mirapakayalu)', amount: 2, unit: 'pieces', notes: 'Broken in halves', isPantryMatch: true },
      { name: 'Fresh Ginger (Allam)', amount: 1, unit: 'tsp', notes: 'Finely minced or grated', isPantryMatch: true },
      { name: 'Turmeric Powder (Pasupu)', amount: 0.5, unit: 'tsp', notes: 'For bright auspicious temple yellow', isPantryMatch: true },
      { name: 'Asafoetida (Inguva)', amount: 0.25, unit: 'tsp', isPantryMatch: true },
      { name: 'Cooking Oil or Sesame Oil', amount: 2, unit: 'tbsp' },
      { name: 'Salt', amount: 1, unit: 'tsp', notes: 'To taste' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cool & Season the Rice',
        instruction: 'Spread 3 cups of cooked fluffy rice onto a wide plate or parat. Drizzle 1 tsp oil, half the turmeric powder, and 1 tsp salt over the rice. Gently toss with your fingers or a flat spatula to coat without mashing the grains. Let it cool to lukewarm.',
        chefTip: 'Never add hot tadka directly to steaming hot wet rice, or it will steam-cook into sticky porridge. Cool grains hold their shape.',
        sensoryCue: 'Rice grains separate cleanly with an even soft golden glow.',
        timerMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Roast the Crunchy Peanuts & Dals',
        instruction: 'Heat 2 tbsp oil in a heavy kadai or pan over medium-low flame. Add the raw peanuts (pallilu) first and fry for 2 minutes until light pink and fragrant. Add chana dal and urad dal; fry for 1 minute until all dals turn golden brown and nutty.',
        sensoryCue: 'Peanuts crackle lightly and aroma of roasted lentils fills the kitchen.',
        timerMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'The Sizzling Andhra Karivepaku Tadka',
        instruction: 'Add mustard seeds (avalu) to the oil; let them pop and crackle vigorously. Toss in broken dried red chillies, slit green chillies, minced ginger, curry leaves (karivepaku), and asafoetida (inguva). Stir for 30 seconds until curry leaves turn crisp and fragrant.',
        chefTip: 'Adding ginger and curry leaves towards the end prevents burning while releasing essential citrus-terpene oils.',
        sensoryCue: 'Curry leaves sizzle loudly and turn translucent dark emerald.',
        timerMinutes: 1
      },
      {
        stepNumber: 4,
        title: 'Infuse Turmeric & Combine Off-Heat',
        instruction: 'Turn off the stove! Stir in the remaining turmeric powder into the warm oil. Pour the entire hot sizzling tempering directly over the cooled rice. Let sit for 1 minute so the oil scents the rice.',
        timerMinutes: 1
      },
      {
        stepNumber: 5,
        title: 'Fold Lemon Juice (Nimmakaya Rasam) & Rest',
        instruction: 'Pour 3 tbsp fresh lemon juice evenly over the rice. Gently fold from the edges towards the center using a flat silicone spatula until every grain is glistening yellow and speckled with green chillies, crunchy nuts, and curry leaves. Let rest for 10 minutes before serving so flavors marry.',
        chefTip: 'Chitrannam tastes even better 20 minutes after resting as the lemon juice penetrates the rice grains.',
        sensoryCue: 'Tangy, zesty citrus punch balanced by nutty roasted dals and warm ginger.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Lemon Juice', replacement: 'Tamarind pulp (for Chintapandu Pulihora) or Raw Mango (Mamidikaya Pulihora)', rationale: 'Both are classic Andhra temple pulihora variations.' },
      { ingredient: 'Peanuts', replacement: 'Roasted Cashews', rationale: 'Gives royal rich festive texture.' }
    ],
    wineOrBeveragePairing: 'Appalam / Papadam, Avakaya pickle, and cooling curd on the side'
  },
  {
    id: 'andhra-gongura-pappu',
    title: 'Andhra Gongura Pappu (Tangy Sorrel Leaves Dal)',
    originalName: 'గోంగూర పప్పు (Andhra Gongura Dal)',
    cuisine: 'Andhra & Telugu',
    regionCategory: 'indian',
    description: 'The undisputed soul of Telugu comfort cuisine. Nutty yellow toor dal (kandi pappu) cooked with tart red-stemmed gongura leaves, green chillies, and garlic, mashed smooth, and crowned with a ghee-fried red chilli, garlic, and mustard tempering.',
    cookingTimeMinutes: 25,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 4,
    caloriesPerServing: 220,
    tags: ['vegetarian', 'vegan-option', 'gluten-free', 'high-protein', 'andhra-special'],
    matchingIngredients: ['toor_dal', 'gongura', 'green_chilli', 'garlic', 'onion', 'mustard_seeds', 'cumin_seeds', 'curry_leaves', 'dry_red_chillies', 'turmeric', 'ghee', 'asafoetida'],
    additionalIngredientsNeeded: [
      { name: 'Water', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 4,
      savory: 4,
      tangy: 5,
      aromatic: 4,
      sweet: 1
    },
    culinaryScience: 'Gongura leaves contain high levels of natural oxalic and hydroxycitric acids. Cooking dal first before thoroughly integrating gongura ensures the dal softens completely, as intense acid inhibits the gelatinization of dal pectins. Ghee tempering with crushed garlic balances the tangy astringency.',
    keyTechniques: [
      { name: 'Pappu Ghotna (Lentil Mashing)', explanation: 'Using a traditional wooden churner (Pappu Gutti) to mash dal and wilted gongura into a thick velvety consistency.' }
    ],
    ingredientsList: [
      { name: 'Toor Dal (Kandi Pappu)', amount: 1, unit: 'cup', notes: 'Rinsed clean', isPantryMatch: true },
      { name: 'Fresh Gongura Leaves (Punti Kura)', amount: 2, unit: 'cups packed', notes: 'Washed and roughly chopped', isPantryMatch: true },
      { name: 'Green Chillies (Pasi Mirapakayalu)', amount: 4, unit: 'pieces', notes: 'Slit (Andhra food loves heat)', isPantryMatch: true },
      { name: 'Garlic Cloves (Vellulli)', amount: 6, unit: 'cloves', notes: 'Lightly crushed with skin', isPantryMatch: true },
      { name: 'Onion (Ullipayalu)', amount: 0.5, unit: 'medium', notes: 'Roughly sliced', isPantryMatch: true },
      { name: 'Turmeric Powder (Pasupu)', amount: 0.5, unit: 'tsp', isPantryMatch: true },
      { name: 'Mustard Seeds (Avalu)', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Cumin Seeds (Jeelakarra)', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Dried Red Chillies (Endu Mirapakayalu)', amount: 2, unit: 'pieces', isPantryMatch: true },
      { name: 'Curry Leaves (Karivepaku)', amount: 10, unit: 'leaves', isPantryMatch: true },
      { name: 'Ghee (Desi Neyyi)', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Asafoetida (Inguva)', amount: 0.25, unit: 'tsp', isPantryMatch: true },
      { name: 'Salt', amount: 1.25, unit: 'tsp', notes: 'Gongura needs good salt to balance tang' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pressure Cook Dal & Gongura',
        instruction: 'In a pressure cooker, add rinsed toor dal, 2.5 cups water, turmeric, sliced onions, slit green chillies, and washed gongura leaves. Pressure cook for 4 whistles on medium heat (or simmer in pot covered for 25 minutes) until dal is completely tender.',
        timerMinutes: 18
      },
      {
        stepNumber: 2,
        title: 'Mash to Velvety Consistency',
        instruction: 'Once pressure releases naturally, open cooker. Add 1.25 tsp salt. Use a wooden masher (pappu gutti) or back of a ladle to mash the cooked dal and gongura into a thick, rustic, velvety paste.',
        sensoryCue: 'The bright green leaves blend into the yellow lentils creating an olive-golden creamy stew.',
        timerMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'The Fiery Andhra Ghee Pop (Thalimpu)',
        instruction: 'Heat 2 tbsp ghee in a small pan. Add mustard seeds; let crackle. Add cumin seeds, crushed garlic cloves, broken dried red chillies, curry leaves, and a generous pinch of asafoetida (inguva). Fry until garlic turns golden brown and intoxicating.',
        sensoryCue: 'Golden toasted garlic sizzle followed by intense aroma of ghee and curry leaves.',
        timerMinutes: 2
      },
      {
        stepNumber: 4,
        title: 'Pour Tempering & Serve over Rice',
        instruction: 'Pour the sizzling thalimpu directly into the mashed gongura pappu. Mix well and cover for 2 minutes. Serve hot poured over steamed white rice with an extra spoonful of melted desi ghee (neyyi) and papad.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Gongura Leaves', replacement: 'Spinach + 2 tbsp lemon juice or raw mango', rationale: 'Recreates the leafy texture with bright natural tang.' },
      { ingredient: 'Toor Dal', replacement: 'Yellow Moong Dal (Pesara Pappu)', rationale: 'Lighter on the stomach with faster cooking time.' }
    ],
    wineOrBeveragePairing: 'Steamed rice with a dollop of ghee and Andhra Avakaya (mango pickle)'
  },
  {
    id: 'hyderabadi-dum-biryani',
    title: 'Royal Hyderabadi Nizami Dum Biryani',
    originalName: 'हैदराबादी दम बिरयानी / హైదరాబాదీ దమ్ బిర్యానీ',
    cuisine: 'Hyderabadi Biryani',
    regionCategory: 'indian',
    description: 'The undisputed monarch of Indian biryanis from the Nizams of Hyderabad. Aged long-grain basmati rice parboiled with whole royal spices, layered over a luscious yoghurt marinade with fresh mint, coriander, and paneer/vegetables, crowned with crispy golden birista, saffron-infused milk, and sealed hermetically under dough for gentle Dum Pukht steaming.',
    cookingTimeMinutes: 45,
    prepTimeMinutes: 25,
    difficulty: 'Medium',
    defaultServings: 4,
    caloriesPerServing: 440,
    tags: ['biryani', 'hyderabadi', 'royal-indian', 'special-occasion', 'high-protein'],
    matchingIngredients: ['basmati_rice', 'saffron', 'birista', 'yogurt', 'ghee', 'mint', 'cilantro', 'paneer', 'green_chilli', 'ginger', 'garlic', 'cardamom', 'shahi_jeera', 'kewra_rose_water', 'cloves', 'cinnamon'],
    additionalIngredientsNeeded: [
      { name: 'Milk (warm, for blooming saffron)', optional: false, commonPantry: true },
      { name: 'Wheat flour (Atta) dough for sealed rim', optional: true, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 3,
      savory: 5,
      tangy: 3,
      aromatic: 5,
      sweet: 2
    },
    culinaryScience: 'The 70% Parboil (Kanika rule): Basmati grains must be drained when the grain elongates but the inner core still has a chalky dot (70% cooked). During the sealed dum, trapped steam from the bottom marinade circulates, allowing the parboiled grains to absorb the aromatic moisture and steam expand to maximum length without breaking. Saffron yields crocin (color) and safranal (fragrance) best in warm milk lipids.',
    keyTechniques: [
      { name: 'The 70% Rice Parboil (Kanika Test)', explanation: 'Boiling rice in heavily salted water with whole spices; draining when grain breaks into 3 pieces under fingernail pressure.' },
      { name: 'Dum Pukht Sealed Steaming', explanation: 'Sealing the pot with dough or double-foil over a heavy tawa diffuser so indirect heat circulates steam without scorching the bottom.' },
      { name: 'Birista Onion Browning', explanation: 'Slow-frying onions until mahogany brown and crispy, releasing natural sweet caramelization.' }
    ],
    ingredientsList: [
      { name: 'Extra Long Grain Basmati Rice', amount: 2, unit: 'cups', notes: 'Soaked in cold water for 30 minutes', isPantryMatch: true },
      { name: 'Paneer or Vegetables/Chicken', amount: 300, unit: 'grams', notes: 'Cubed into bite-sized pieces', isPantryMatch: true },
      { name: 'Thick Whisked Yogurt (Curd)', amount: 1, unit: 'cup', notes: 'Forms marinade base', isPantryMatch: true },
      { name: 'Crispy Fried Onions (Birista)', amount: 1, unit: 'cup', notes: 'Divided use', isPantryMatch: true },
      { name: 'Royal Saffron Strands', amount: 1, unit: 'pinch', notes: 'Steeped in 3 tbsp warm milk', isPantryMatch: true },
      { name: 'Desi Ghee', amount: 3, unit: 'tbsp', notes: 'For drizzling through layers', isPantryMatch: true },
      { name: 'Fresh Mint Leaves (Pudina)', amount: 0.5, unit: 'cup', notes: 'Torn fresh', isPantryMatch: true },
      { name: 'Fresh Cilantro', amount: 0.5, unit: 'cup', notes: 'Finely chopped', isPantryMatch: true },
      { name: 'Ginger-Garlic Paste', amount: 1.5, unit: 'tbsp', isPantryMatch: true },
      { name: 'Green Chillies', amount: 3, unit: 'pieces', notes: 'Slit lengthwise', isPantryMatch: true },
      { name: 'Shahi Jeera (Royal Caraway)', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Green Cardamom Pods', amount: 5, unit: 'pods', isPantryMatch: true },
      { name: 'Cloves', amount: 4, unit: 'pieces', isPantryMatch: true },
      { name: 'Cinnamon Stick', amount: 2, unit: 'inches', isPantryMatch: true },
      { name: 'Kewra & Rose Essence Water', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Garam Masala / Biryani Masala', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Turmeric & Kashmiri Chilli', amount: 1, unit: 'tsp each', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Marinate the Filling',
        instruction: 'In a bowl, mix yogurt with ginger-garlic paste, slit green chillies, turmeric, Kashmiri chilli, garam masala, half of the fried onions (birista), half of the mint and cilantro, 1 tbsp ghee, and 1 tsp salt. Toss paneer or vegetables/chicken into this rich marinade. Let rest for 20 minutes.',
        timerMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Parboil the Fragrant Basmati Rice (70% Cook)',
        instruction: 'Bring 6 cups of water to a rolling boil in a wide pot. Add 1.5 tbsp salt (water must taste salty like soup), 1 tsp shahi jeera, 3 cardamom pods, 3 cloves, and 1 cinnamon stick. Add soaked basmati rice. Cook on high heat for exactly 5–6 minutes. Test a grain: it should feel long and tender outside, but firm with an uncooked core inside (breaks in 3 pieces). Drain immediately in a colander.',
        chefTip: 'Never leave drained rice sitting in steam; fluff gently so grains separate like needles.',
        sensoryCue: 'Rice grains lengthen noticeably and float gracefully to the surface.',
        timerMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'Layer the Handi',
        instruction: 'In a heavy-bottomed pot, spread 1 tbsp ghee on the base. Layer the marinated mixture evenly on the bottom. Spread half the warm parboiled rice over the marinade. Scatter a layer of mint, cilantro, and birista. Add the remaining rice on top. Poke 4 gentle holes with a wooden spoon handle through the rice down to the base.',
        timerMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Crown with Saffron Milk & Aromatics',
        instruction: 'Drizzle the golden saffron milk across the rice in stripes. Pour remaining 2 tbsp melted ghee and kewra/rose water through the holes so steam channels carry fragrance throughout. Scatter the remaining crispy birista on top.',
        sensoryCue: 'Rich aroma of saffron, mint, and toasted onions rises from the pot.',
        timerMinutes: 2
      },
      {
        stepNumber: 5,
        title: 'Seal Hermetically & Cook on Dum',
        instruction: 'Cover pot with aluminum foil or roll a coil of wheat dough along the rim; press lid down tightly to seal all steam. Place a heavy flat iron tawa on the stove over medium heat. Place the sealed biryani pot on the tawa (indirect heat). Cook for 10 minutes on medium flame, then reduce to lowest flame for 18 minutes. Turn off heat and let rest undisturbed for 10 minutes.',
        chefTip: 'Do not peek during dum! Breaking the seal lets out the vapor that cooks the top layer.',
        timerMinutes: 28
      },
      {
        stepNumber: 6,
        title: 'The Royal Reveal & Gentle Fluff',
        instruction: 'Unseal the lid. Inhale the billow of royal steam. Using a flat saucing spoon or saucer, gently scoop from the bottom edge upwards to reveal dual-colored white and saffron grains interspersed with rich spiced masala. Serve with chilled Mirchi ka Salan or Onion-Mint Raita.',
        sensoryCue: 'Fluffy, separate grains like pearls, with heady perfume of saffron and cardamom.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Paneer', replacement: 'Chicken or Mutton or Mushrooms/Potatoes', rationale: 'Traditional Hyderabadi meat biryani follows the exact same dum technique.' },
      { ingredient: 'Saffron', replacement: 'Turmeric milk + pinch cardamom', rationale: 'Gives the golden royal hue.' }
    ],
    wineOrBeveragePairing: 'Mirchi ka Salan and chilled Masala Chaas or dry sparkling wine'
  },
  {
    id: 'kolkata-shahi-biryani',
    title: 'Authentic Kolkata Royal Shahi Biryani',
    originalName: 'কলকাতা বিরিয়ানি (Kolkata Dum Biryani)',
    cuisine: 'Kolkata Biryani',
    regionCategory: 'indian',
    description: 'Born when the legendary Nawab Wajid Ali Shah was exiled from Lucknow to Kolkata. Renowned for its melt-in-mouth golden saffron-braised potatoes, hard-boiled eggs, delicate aromatic basmati rice, and subtle perfume of meetha attar, rose water, and green cardamom.',
    cookingTimeMinutes: 45,
    prepTimeMinutes: 20,
    difficulty: 'Medium',
    defaultServings: 4,
    caloriesPerServing: 420,
    tags: ['biryani', 'kolkata-special', 'bengali-mughlai', 'comfort-food'],
    matchingIngredients: ['basmati_rice', 'potato', 'eggs', 'saffron', 'ghee', 'onion', 'garlic', 'ginger', 'yogurt', 'cloves', 'cardamom', 'kewra_rose_water', 'cinnamon'],
    additionalIngredientsNeeded: [
      { name: 'Warm Milk (for saffron infusion)', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 4,
      tangy: 2,
      aromatic: 5,
      sweet: 2
    },
    culinaryScience: 'Slow braising halved potatoes in spiced yakhni stock causes potato starches to absorb glutamate-rich aromatic cooking juices into their cellular walls, turning the potato into the undisputed star of the dish. Meetha attar (edible sweet musk) must be used in microscopic quantities (1-2 drops) to scent the vapor.',
    keyTechniques: [
      { name: 'Saffron-Yakhni Potato Braising', explanation: 'Parboiling and frying large peeled potatoes in spiced ghee broth so they turn golden outside and buttery soft inside.' },
      { name: 'Subtle Meetha Attar Misting', explanation: 'Infusing milk with rose, kewra, and edible attar to achieve the signature delicate Awadhi-Bengali perfume.' }
    ],
    ingredientsList: [
      { name: 'Basmati Rice', amount: 2, unit: 'cups', notes: 'Soaked for 30 minutes', isPantryMatch: true },
      { name: 'Large Potatoes', amount: 3, unit: 'pieces', notes: 'Peeled and cut in halves', isPantryMatch: true },
      { name: 'Hard Boiled Eggs', amount: 4, unit: 'pieces', notes: 'Peeled with tiny slits', isPantryMatch: true },
      { name: 'Onions', amount: 2, unit: 'large', notes: 'Thinly sliced for birista', isPantryMatch: true },
      { name: 'Ginger-Garlic Paste', amount: 1.5, unit: 'tbsp', isPantryMatch: true },
      { name: 'Plain Yogurt', amount: 0.5, unit: 'cup', isPantryMatch: true },
      { name: 'Desi Ghee', amount: 3, unit: 'tbsp', isPantryMatch: true },
      { name: 'Royal Saffron Strands', amount: 1, unit: 'pinch', notes: 'Steeped in 1/4 cup warm milk', isPantryMatch: true },
      { name: 'Kewra & Rose Essence', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Green Cardamom Pods', amount: 5, unit: 'pods', isPantryMatch: true },
      { name: 'Cloves', amount: 4, unit: 'pieces', isPantryMatch: true },
      { name: 'Cinnamon Stick', amount: 2, unit: 'sticks', isPantryMatch: true },
      { name: 'Kashmiri Chilli & Nutmeg Powder', amount: 0.5, unit: 'tsp each', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Braise & Brown the Kolkata Potatoes',
        instruction: 'Boil peeled halved potatoes in salted water with a pinch of turmeric and 1 cardamom for 8 minutes until 70% soft. Drain and pat dry. In a skillet, heat 2 tbsp ghee and fry the potatoes and boiled eggs for 3–4 minutes until golden yellow with crisp blistered skins. Set aside.',
        chefTip: 'The potato is the soul of Kolkata biryani; never skip the saffron water boil before frying.',
        timerMinutes: 12
      },
      {
        stepNumber: 2,
        title: 'Cook Fragrant Mild Awadhi Gravy',
        instruction: 'In the remaining ghee, fry sliced onions until golden brown birista. Remove half for garnish. To the remaining onions, add ginger-garlic paste, yogurt, Kashmiri chilli, pinch of nutmeg, and 1/2 cup water. Simmer for 6 minutes until oil glistens.',
        timerMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'Parboil Basmati to 70%',
        instruction: 'Boil soaked basmati rice in salted water with cloves, cardamom, and cinnamon for 5 minutes. Drain while still having a slight firm bite in the center.',
        timerMinutes: 5
      },
      {
        stepNumber: 4,
        title: 'Assemble Layers with Saffron-Rose Milk',
        instruction: 'In your biryani pot, place the savory gravy base. Arrange the braised golden potatoes and boiled eggs across the base. Spread the parboiled rice over them. Drizzle saffron milk, kewra/rose water, and remaining ghee over the rice. Sprinkle fried onions.',
        timerMinutes: 3
      },
      {
        stepNumber: 5,
        title: 'Sealed Dum Cooking',
        instruction: 'Seal tightly with foil and lid. Place on a heavy tawa over medium-low heat. Cook for 20 minutes on gentle dum. Let rest 10 minutes before gently serving with a flat ladle.',
        sensoryCue: 'Heavenly mild sweet-spiced aroma; potatoes that cut effortlessly like butter.',
        timerMinutes: 20
      }
    ],
    substitutions: [
      { ingredient: 'Eggs', replacement: 'Paneer cubes or chicken', rationale: 'Paneer braised in the same gravy takes on wonderful saffron perfume.' }
    ],
    wineOrBeveragePairing: 'Light Bengali chaas (Ghol) or fresh green salad with lime'
  },
  {
    id: 'thalassery-malabar-biryani',
    title: 'Malabar Coast Thalassery Biryani',
    originalName: 'തലശ്ശേരി ബിരിയാണി (Thalassery Neychoru Biryani)',
    cuisine: 'Malabar Coastal Biryani',
    regionCategory: 'indian',
    description: 'The crowning glory of North Kerala coastal cuisine. Made with fragrant indigenous short-grain Kaima / Jeerakasala rice sautéed in pure ghee (Neychoru), layered with a tangy green-chilli and fennel-spiced masala, and adorned with ghee-fried cashews and golden raisins.',
    cookingTimeMinutes: 40,
    prepTimeMinutes: 20,
    difficulty: 'Medium',
    defaultServings: 4,
    caloriesPerServing: 410,
    tags: ['biryani', 'kerala-special', 'coastal-indian', 'festive-food'],
    matchingIngredients: ['seeraga_samba_rice', 'ghee', 'cashews_raisins', 'fennel_seeds', 'green_chilli', 'onion', 'tomato', 'ginger', 'garlic', 'mint', 'cilantro', 'turmeric'],
    additionalIngredientsNeeded: [
      { name: 'Water', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 3,
      savory: 5,
      tangy: 3,
      aromatic: 5,
      sweet: 2
    },
    culinaryScience: 'Short-grain Kaima rice has a higher amylopectin-to-amylose ratio than long Basmati, which makes each tiny grain tender, plush, and extraordinarily absorbent of the spiced ghee and rich coastal masala. Fennel seeds release anethole, creating an unmistakable coastal aroma that cuts through richness.',
    keyTechniques: [
      { name: 'Neychoru Ghee Rice Sauté', explanation: 'Tossing short-grain rice in warm ghee and spices before adding boiling water until each grain glazes.' },
      { name: 'Malabar Green Chilli & Fennel Paste', explanation: 'Crushing green chillies, ginger, garlic, and fennel seeds together for the signature spicy-citrus coastal profile.' }
    ],
    ingredientsList: [
      { name: 'Kaima / Jeerakasala or Seeraga Samba Rice', amount: 2, unit: 'cups', notes: 'Washed and drained', isPantryMatch: true },
      { name: 'Desi Ghee', amount: 4, unit: 'tbsp', notes: 'Divided use', isPantryMatch: true },
      { name: 'Cashews & Golden Raisins', amount: 3, unit: 'tbsp', notes: 'Ghee fried till golden', isPantryMatch: true },
      { name: 'Onions', amount: 3, unit: 'medium', notes: 'Thinly sliced', isPantryMatch: true },
      { name: 'Tomatoes', amount: 2, unit: 'medium', notes: 'Chopped', isPantryMatch: true },
      { name: 'Fennel Seeds (Saunf)', amount: 1, unit: 'tsp', notes: 'Lightly crushed', isPantryMatch: true },
      { name: 'Green Chillies', amount: 5, unit: 'pieces', notes: 'Crushed with ginger & garlic', isPantryMatch: true },
      { name: 'Ginger & Garlic Paste', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Fresh Mint & Cilantro', amount: 0.5, unit: 'cup', notes: 'Finely chopped', isPantryMatch: true },
      { name: 'Turmeric & Garam Masala', amount: 0.5, unit: 'tsp each', isPantryMatch: true },
      { name: 'Water for Rice', amount: 3.5, unit: 'cups', notes: 'Boiling hot' },
      { name: 'Salt', amount: 1.5, unit: 'tsp' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Fry the Crunchy Garnish',
        instruction: 'Heat 2 tbsp ghee in a pot. Fry cashews and raisins until golden and plump. Remove and set aside. In the same ghee, fry 1 sliced onion until deep golden brown birista. Remove and set aside.',
        timerMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Cook the Neychoru (Aromatic Ghee Rice)',
        instruction: 'In the remaining ghee, add 1 cinnamon stick, 3 cardamom pods, and drained Kaima rice. Sauté rice gently for 2 minutes until glossy. Pour in 3.5 cups of boiling water and 1 tsp salt. Cover and cook on low heat for 8 minutes until water is absorbed and grains are soft and separate.',
        sensoryCue: 'Intoxicating buttery aroma as ghee-coated grains absorb boiling water.',
        timerMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Prepare the Zesty Malabar Masala',
        instruction: 'In a separate skillet with 1 tbsp ghee/oil, sauté remaining sliced onions until soft. Add crushed green chillies, ginger, garlic, and crushed fennel seeds. Cook for 2 minutes. Add chopped tomatoes, turmeric, garam masala, and 1/2 tsp salt. Cook for 6 minutes until tomatoes break down into a thick jammy spiced sauce.',
        timerMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Layer & Steam on Dum',
        instruction: 'In a heavy pot, spread the Malabar masala at the bottom. Layer the fragrant Neychoru ghee rice on top. Scatter fresh mint, cilantro, fried cashews, golden raisins, and brown onions over the rice. Drizzle 1 tbsp melted ghee on top.',
        timerMinutes: 3
      },
      {
        stepNumber: 5,
        title: 'Gentle Coastal Dum',
        instruction: 'Seal with foil and lid. Cook on low heat over a tawa for 15 minutes. Fluff gently before serving hot with Kerala coconut chutney, dates pickle, and crunchy pappadam.',
        timerMinutes: 15
      }
    ],
    substitutions: [
      { ingredient: 'Kaima Rice', replacement: 'Seeraga Samba or Jasmine Rice', rationale: 'Small fragrant grains provide identical tender mouthfeel.' }
    ],
    wineOrBeveragePairing: 'Hot spiced Sulaimani tea with cardamom and fresh mint'
  },
  {
    id: 'dindigul-thalappakatti-biryani',
    title: 'Dindigul Thalappakatti Seeraga Samba Biryani',
    originalName: 'திண்டுக்கல் தலப்பாகட்டி பிரியாணி (Dindigul Biryani)',
    cuisine: 'Dindigul Biryani',
    regionCategory: 'indian',
    description: 'The legendary peppery biryani from southern Tamil Nadu. Cooked exclusively with small-grained aromatic Seeraga Samba rice, stone-pounded black peppercorns, shallots (sambar onions), green chillies, fresh mint, and thick curd.',
    cookingTimeMinutes: 35,
    prepTimeMinutes: 15,
    difficulty: 'Easy',
    defaultServings: 3,
    caloriesPerServing: 380,
    tags: ['biryani', 'south-indian', 'tamil-nadu-special', 'peppery-bold'],
    matchingIngredients: ['seeraga_samba_rice', 'onion', 'yogurt', 'mint', 'cilantro', 'green_chilli', 'garlic', 'ginger', 'ghee', 'cinnamon', 'cloves'],
    additionalIngredientsNeeded: [
      { name: 'Black Peppercorns (coarsely ground)', optional: false, commonPantry: true },
      { name: 'Water', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 4,
      savory: 5,
      tangy: 3,
      aromatic: 4,
      sweet: 1
    },
    culinaryScience: 'Piperine in freshly cracked black pepper produces a warm, slow-blooming sensation that activates salivary enzymes, while the tiny surface area of Seeraga Samba rice absorbs the peppery broth right to the core of every single grain.',
    keyTechniques: [
      { name: 'Stone-Pounded Black Pepper & Mint Paste', explanation: 'Blending shallots, mint, coriander, and coarse black pepper into a rustic green paste.' }
    ],
    ingredientsList: [
      { name: 'Seeraga Samba Rice', amount: 1.5, unit: 'cups', notes: 'Soaked for 20 minutes', isPantryMatch: true },
      { name: 'Shallots / Small Onions (or Red Onion)', amount: 1.5, unit: 'cups', notes: 'Finely sliced', isPantryMatch: true },
      { name: 'Ginger & Garlic Paste', amount: 1.5, unit: 'tbsp', isPantryMatch: true },
      { name: 'Fresh Mint & Coriander Paste', amount: 0.5, unit: 'cup', notes: 'Ground together with 3 green chillies', isPantryMatch: true },
      { name: 'Black Peppercorns', amount: 1, unit: 'tbsp', notes: 'Freshly coarse-ground', isPantryMatch: true },
      { name: 'Thick Curd / Yogurt', amount: 0.5, unit: 'cup', isPantryMatch: true },
      { name: 'Desi Ghee', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Whole Spices (Cardamom, Cloves, Cinnamon)', amount: 1, unit: 'tbsp mixed', isPantryMatch: true },
      { name: 'Water', amount: 2.75, unit: 'cups' },
      { name: 'Salt', amount: 1.25, unit: 'tsp' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sauté Spices & Shallots in Ghee',
        instruction: 'Heat 2 tbsp ghee and 1 tbsp oil in a heavy cooker or pot. Add cinnamon, cardamom, cloves, and sliced shallots. Sauté for 6 minutes until onions are golden and caramelized.',
        timerMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Add Fresh Green Herb Paste & Black Pepper',
        instruction: 'Stir in ginger-garlic paste, the ground mint-coriander-green chilli paste, and coarse black pepper. Cook for 3 minutes until oil separates from the edges.',
        sensoryCue: 'Sharp spicy mint and fresh pepper fragrance wakes up your senses.',
        timerMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Whisk Curd & Bring Broth to Boil',
        instruction: 'Lower heat and whisk in the curd and salt. Pour in 2.75 cups of water. Bring to a rolling boil.',
        timerMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Add Seeraga Samba Rice & Simmer',
        instruction: 'Drain the soaked Seeraga Samba rice and add to the boiling broth. Stir once gently. Cook uncovered on medium heat for 5 minutes until water reduces to the level of the rice grains.',
        timerMinutes: 5
      },
      {
        stepNumber: 5,
        title: 'Dum Cook & Fluff',
        instruction: 'Cover with a tight lid. Reduce heat to lowest setting and cook for 12 minutes (or 1 whistle on low flame in pressure cooker). Turn off heat and let rest 10 minutes. Fluff gently and serve with Onion Thayir Pachadi (Raita).',
        timerMinutes: 12
      }
    ],
    substitutions: [
      { ingredient: 'Shallots', replacement: 'Red Onions finely diced', rationale: 'Gives identical sweet caramelized body.' }
    ],
    wineOrBeveragePairing: 'Onion Thayir Pachadi (Raita) with fresh green chillies and roasted papad'
  },
  {
    id: 'sindhi-spicy-biryani',
    title: 'Zesty Sindhi Dum Biryani with Aloo Bukhara',
    originalName: 'سنڌي برياني / सिंधी दम बिरयानी',
    cuisine: 'Sindhi Biryani',
    regionCategory: 'indian',
    description: 'Renowned as the boldest and zestiest of all biryanis. Layered with tender spiced potatoes, sweet-and-sour dried plums (Aloo Bukhara), tomatoes, green chillies, mint, and long basmati grains with dual-tone saffron and crimson speckles.',
    cookingTimeMinutes: 40,
    prepTimeMinutes: 20,
    difficulty: 'Medium',
    defaultServings: 4,
    caloriesPerServing: 430,
    tags: ['biryani', 'sindhi-special', 'spicy-tangy', 'bold-flavors'],
    matchingIngredients: ['basmati_rice', 'potato', 'tomato', 'yogurt', 'dried_plums', 'green_chilli', 'onion', 'mint', 'cumin_seeds', 'kashmiri_chilli', 'ghee'],
    additionalIngredientsNeeded: [
      { name: 'Salt', optional: false, commonPantry: true },
      { name: 'Water', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 5,
      savory: 5,
      tangy: 5,
      aromatic: 4,
      sweet: 2
    },
    culinaryScience: 'Aloo Bukhara (dried sour plums) soften during the steam dum, releasing concentrated malic and tartaric acids that puncture through the fiery heat of green chillies and heavy spices, creating an addictive sweet-sour-spicy contrast.',
    keyTechniques: [
      { name: 'Aloo Bukhara Plump Simmering', explanation: 'Simmering dried plums in the spicy yogurt gravy so they absorb savory juices while releasing tangy sweetness.' }
    ],
    ingredientsList: [
      { name: 'Basmati Rice', amount: 2, unit: 'cups', notes: 'Soaked for 30 minutes', isPantryMatch: true },
      { name: 'Potatoes', amount: 2, unit: 'large', notes: 'Peeled and quartered', isPantryMatch: true },
      { name: 'Dried Sour Plums (Aloo Bukhara)', amount: 6, unit: 'pieces', notes: 'Crucial for Sindhi tang', isPantryMatch: true },
      { name: 'Tomatoes', amount: 3, unit: 'medium', notes: 'Finely chopped', isPantryMatch: true },
      { name: 'Onions', amount: 2, unit: 'medium', notes: 'Sliced', isPantryMatch: true },
      { name: 'Yogurt', amount: 0.75, unit: 'cup', isPantryMatch: true },
      { name: 'Green Chillies', amount: 4, unit: 'pieces', notes: 'Slit', isPantryMatch: true },
      { name: 'Fresh Mint Leaves', amount: 0.5, unit: 'cup', isPantryMatch: true },
      { name: 'Kashmiri Chilli & Cumin Powder', amount: 1, unit: 'tsp each', isPantryMatch: true },
      { name: 'Ghee or Oil', amount: 3, unit: 'tbsp', isPantryMatch: true },
      { name: 'Salt', amount: 1.5, unit: 'tsp' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Build the Fiery Sindhi Masala with Plums',
        instruction: 'Heat ghee in a pot. Fry sliced onions until golden. Add ginger, garlic, chopped tomatoes, yogurt, potatoes, and dried sour plums (Aloo Bukhara). Add chilli powder, cumin, turmeric, and 1 tsp salt. Simmer covered for 10 minutes until potatoes are almost tender and plums are plump.',
        sensoryCue: 'Vibrant red bubbling gravy with a sharp tangy tomato and plum aroma.',
        timerMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Parboil the Rice',
        instruction: 'Boil basmati rice with whole spices and salt for 5 minutes until 70% cooked. Drain.',
        timerMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Layer with Fresh Mint & Chillies',
        instruction: 'Layer the parboiled rice over the rich plum and potato masala. Scatter lots of fresh mint leaves and slit green chillies across the surface.',
        timerMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Sealed Dum Cooking',
        instruction: 'Cover tightly with foil and lid. Cook on low heat over a tawa for 18 minutes. Let rest for 10 minutes before gently scooping from the base to serve.',
        timerMinutes: 18
      }
    ],
    substitutions: [
      { ingredient: 'Dried Plums (Aloo Bukhara)', replacement: 'Prunes + 1 tbsp fresh lemon juice', rationale: 'Gives the same sour-sweet concentrated fruit balance.' }
    ],
    wineOrBeveragePairing: 'Chilled sweet lassi or cucumber raita to balance the fiery spice'
  },
  {
    id: 'crispy-masala-dosa',
    title: 'Authentic Crispy Masala Dosa with Spiced Potato Mash (Alugadda Masala)',
    originalName: 'మసాలా దోశ (Masala Dosa) / मसाला डोसा',
    cuisine: 'South Indian',
    regionCategory: 'indian',
    description: 'Golden, paper-crisp fermented rice and urad dal crepe folded over a warm, mustard-and-curry-leaf tempered potato onion masala. Served with fresh coconut chutney and hot sambar.',
    cookingTimeMinutes: 20,
    prepTimeMinutes: 15,
    difficulty: 'Medium',
    defaultServings: 3,
    caloriesPerServing: 340,
    proteinGrams: 9.5,
    fiberGrams: 4.8,
    tags: ['vegetarian', 'gluten-free', 'south-indian-special', 'comfort-food', 'high-protein'],
    matchingIngredients: ['idli_rice', 'urad_dal', 'potato', 'onion', 'mustard_seeds', 'curry_leaves', 'ginger', 'green_chilli', 'turmeric', 'ghee'],
    additionalIngredientsNeeded: [
      { name: 'Salt', optional: false, commonPantry: true },
      { name: 'Water & Oil', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 5,
      tangy: 2,
      aromatic: 4,
      sweet: 1
    },
    culinaryScience: 'Lactic acid and wild yeast fermentation breaks down complex starches into lactic acid and carbon dioxide bubbles, giving dosa batter its signature tang and delicate lacy crispness on a seasoned cast iron tawa.',
    keyTechniques: [
      { name: 'Centrifugal Batter Swirl', explanation: 'Pouring batter in the center of a hot seasoned tawa and spiraling outwards in one continuous smooth motion with the base of a ladle.' },
      { name: 'Ghee Crisping', explanation: 'Drizzling ghee along the outer circumference so fat seeps underneath, releasing the crepe cleanly with deep golden Maillard coloration.' }
    ],
    ingredientsList: [
      { name: 'Fermented Dosa Batter (or Idli Rice + Urad Dal)', amount: 2, unit: 'cups', isPantryMatch: true },
      { name: 'Boiled Potatoes (crushed)', amount: 3, unit: 'medium', isPantryMatch: true },
      { name: 'Sliced Onions (Ullipayalu)', amount: 1, unit: 'medium', isPantryMatch: true },
      { name: 'Black Mustard Seeds (Avalu)', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Fresh Curry Leaves (Karivepaku)', amount: 10, unit: 'leaves', isPantryMatch: true },
      { name: 'Minced Ginger & Green Chillies', amount: 1, unit: 'tbsp', isPantryMatch: true },
      { name: 'Turmeric Powder', amount: 0.5, unit: 'tsp', isPantryMatch: true },
      { name: 'Desi Ghee or Butter', amount: 2, unit: 'tbsp', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Temper the Spiced Potato Masala',
        instruction: 'Heat 1 tbsp oil in a skillet. Pop mustard seeds, curry leaves, ginger, and green chillies. Sauté sliced onions until translucent. Stir in turmeric and salt. Add crushed boiled potatoes with 3 tbsp water, mashing lightly into a soft, spreadable masala.',
        sensoryCue: 'Vibrant sunshine-yellow aroma of sweet sautéed onions, ginger, and curry leaves.',
        timerMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Heat and Season the Tawa',
        instruction: 'Heat a heavy cast iron or non-stick tawa over medium-high heat. Splash droplets of water; they should dance and sizzle away immediately. Wipe with a lightly oiled cloth or half an onion.',
        timerMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Swirl the Dosa Crepe',
        instruction: 'Pour 1 ladle of batter into the center. Using the back of the ladle, spread in concentric circles from center outwards to the edges until paper-thin.',
        timerMinutes: 1
      },
      {
        stepNumber: 4,
        title: 'Roast with Ghee & Fill',
        instruction: 'Drizzle 1 tsp ghee around the rim and top. Cook on medium flame until edges curl and underside turns deep roasted golden brown. Place 3 tbsp warm potato masala in the center, fold over like an envelope, and slide onto a plate.',
        sensoryCue: 'Irresistible roasted nutty aroma of toasted rice and ghee.',
        timerMinutes: 3
      }
    ],
    substitutions: [
      { ingredient: 'Dosa Batter', replacement: 'Instant Rava Dosa batter (Sooji + Rice Flour + Yogurt)', rationale: 'Makes an instant lace-crisp crepe without overnight fermentation.' }
    ],
    wineOrBeveragePairing: 'Frothy hot South Indian Filter Coffee (Filter Kaapi)'
  },
  {
    id: 'medu-vada',
    title: 'South Indian Crispy Medu Vada (గారెలు / मेदु वड़ा)',
    originalName: 'గారెలు (Garelu) / Medu Vada',
    cuisine: 'South Indian',
    regionCategory: 'indian',
    description: 'Golden-fried fluffy doughnut-shaped lentil fritters with a glass-like crisp crust and an airy, pillowy interior infused with fresh ginger, peppercorns, curry leaves, and asafoetida.',
    cookingTimeMinutes: 18,
    prepTimeMinutes: 15,
    difficulty: 'Medium',
    defaultServings: 3,
    caloriesPerServing: 260,
    proteinGrams: 11.2,
    fiberGrams: 5.1,
    tags: ['vegetarian', 'vegan', 'gluten-free', 'high-protein', 'south-indian-special'],
    matchingIngredients: ['urad_dal', 'curry_leaves', 'ginger', 'green_chilli', 'asafoetida', 'fresh_coconut'],
    additionalIngredientsNeeded: [
      { name: 'Whole Black Peppercorns', optional: false, commonPantry: true },
      { name: 'Frying Oil', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 5,
      tangy: 1,
      aromatic: 4,
      sweet: 1
    },
    culinaryScience: 'Aeration of urad dal paste: Beating soaked urad dal creates a thick protein-starch foam that traps micro-air bubbles. When submerged in hot oil at 180°C, the moisture inside rapidly converts to steam, expanding the fritter before the starch crust sets, guaranteeing a cloud-soft interior.',
    keyTechniques: [
      { name: 'Float Test Batter Check', explanation: 'Dropping a teaspoon of whipped batter into a bowl of water; if it floats like a cloud without dissolving, the aeration is perfect.' },
      { name: 'Wet-Palm Hole Shaping', explanation: 'Shaping batter on a wet palm and poking a center hole with your wet thumb so hot oil flows through the center for even cooking.' }
    ],
    ingredientsList: [
      { name: 'Whole White Urad Dal (Minapappu)', amount: 1, unit: 'cup', notes: 'Soaked for 3 hours and ground thick with minimal water', isPantryMatch: true },
      { name: 'Finely Minced Ginger', amount: 1, unit: 'tbsp', isPantryMatch: true },
      { name: 'Slit Green Chillies', amount: 2, unit: 'pieces', isPantryMatch: true },
      { name: 'Fresh Curry Leaves (chopped)', amount: 10, unit: 'leaves', isPantryMatch: true },
      { name: 'Cracked Black Peppercorns', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Asafoetida (Hing / Inguva)', amount: 0.25, unit: 'tsp', isPantryMatch: true },
      { name: 'Fresh Coconut Bits', amount: 2, unit: 'tbsp', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whip the Batter to Cloud Consistency',
        instruction: 'Grind soaked drained urad dal using only 2–3 tablespoons of ice water into a thick, fluffy paste. Vigorously beat with a spatula for 3 minutes to incorporate air until light and fluffy. Test by dropping a dollop in water—it must float.',
        timerMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Season with Aromatics',
        instruction: 'Fold in minced ginger, green chillies, cracked peppercorns, curry leaves, coconut bits, asafoetida, and salt.',
        timerMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Shape and Fry',
        instruction: 'Wet your fingers and palm. Take a golf ball of batter, flatten slightly, press a hole through the center, and gently drop into medium-hot oil (180°C / 355°F). Fry in small batches, turning gently until golden and crackling on all sides.',
        sensoryCue: 'Rapid rhythmic bubbling slows down as the crust turns deep bronze.',
        timerMinutes: 6
      }
    ],
    substitutions: [
      { ingredient: 'Urad Dal', replacement: 'Split yellow moong dal', rationale: 'Produces lighter, crispy Moong Dal Vadas.' }
    ],
    wineOrBeveragePairing: 'Fresh tender coconut water or hot South Indian Sambar'
  },
  {
    id: 'kerala-avial',
    title: 'Kerala Sadya Avial (Mixed Vegetables in Coconut Cumin Paste)',
    originalName: 'അവിയൽ (Avial) / అవియల్',
    cuisine: 'South Indian',
    regionCategory: 'indian',
    description: 'The crowning jewel of Kerala Sadya feasts. A vibrant medley of drumsticks, carrots, beans, and raw plantain steamed tender, enveloped in a rich stone-ground coconut, cumin, and green chilli paste, finished with unheated raw coconut oil and bruised curry leaves.',
    cookingTimeMinutes: 22,
    prepTimeMinutes: 15,
    difficulty: 'Easy',
    defaultServings: 4,
    caloriesPerServing: 210,
    proteinGrams: 6.2,
    fiberGrams: 6.5,
    tags: ['vegetarian', 'vegan', 'gluten-free', 'south-indian-special', 'high-protein'],
    matchingIngredients: ['fresh_coconut', 'drumstick', 'carrots', 'curry_leaves', 'cumin_seeds', 'green_chilli', 'yogurt', 'turmeric'],
    additionalIngredientsNeeded: [
      { name: 'Coconut Oil', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 4,
      tangy: 3,
      aromatic: 5,
      sweet: 2
    },
    culinaryScience: 'Avial relies on cold-pressed raw coconut oil poured at the very end off heat. Heating coconut oil destroys volatile lactones; drizzling it raw over steaming hot vegetables captures the intense tropical nuttiness that defines authentic Onam feast cooking.',
    keyTechniques: [
      { name: 'Uniform Baton Cutting', explanation: 'Cutting all vegetables into precise 2-inch batons so they cook at equal rates.' },
      { name: 'Raw Oil & Leaf Infusion', explanation: 'Pouring raw virgin coconut oil over hot curry leaves directly on the finished dish and covering immediately.' }
    ],
    ingredientsList: [
      { name: 'Mixed Vegetables (Drumsticks, Carrots, Beans, Ash Gourd)', amount: 3, unit: 'cups batons', isPantryMatch: true },
      { name: 'Fresh Grated Coconut', amount: 1.5, unit: 'cups', isPantryMatch: true },
      { name: 'Cumin Seeds (Jeelakarra)', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Green Chillies', amount: 3, unit: 'pieces', isPantryMatch: true },
      { name: 'Fresh Curry Leaves', amount: 15, unit: 'leaves', isPantryMatch: true },
      { name: 'Whisked Yogurt or Tamarind', amount: 3, unit: 'tbsp', isPantryMatch: true },
      { name: 'Virgin Coconut Oil', amount: 2, unit: 'tbsp', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Steam the Vegetables',
        instruction: 'Cook the baton vegetables in a shallow pan with 1/2 cup water, turmeric, and 1 tsp salt until tender-crisp (not mushy).',
        timerMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Coarse Coconut-Cumin Grind',
        instruction: 'Pulse grated coconut, cumin seeds, and green chillies into a coarse, thick paste using only 2 tbsp water (do not make a smooth puree).',
        timerMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Combine & Simmer',
        instruction: 'Gently fold the coconut paste into the warm vegetables. Simmer on low heat for 3 minutes until raw aroma mellows. Stir in whisked yogurt off heat.',
        timerMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'The Raw Coconut Oil Seal',
        instruction: 'Turn off the stove. Drizzle 2 tbsp pure coconut oil and fresh curry leaves over the top. Cover with lid for 5 minutes before serving.',
        sensoryCue: 'Intoxicating tropical coconut and fresh curry leaf aroma.',
        timerMinutes: 5
      }
    ],
    substitutions: [
      { ingredient: 'Yogurt', replacement: 'Raw Mango slices (Mamidikaya)', rationale: 'Traditional summer Sadya method providing fruit acidity.' }
    ],
    wineOrBeveragePairing: 'Chilled spiced Sambharam (Kerala salted buttermilk)'
  },
  {
    id: 'royal-gulab-jamun',
    title: 'Royal Shahi Gulab Jamun in Rose-Cardamom Saffron Syrup (गुलाब जामुन)',
    originalName: 'गुलाब जामुन (Gulab Jamun)',
    cuisine: 'Desserts & Sweets',
    regionCategory: 'indian',
    description: 'The king of Indian desserts. Velvety, melt-in-the-mouth milk-solid dumplings gently fried in desi ghee to an even mahogany brown, then soaked in warm, fragrant rose-water, cardamom, and saffron nectar.',
    cookingTimeMinutes: 25,
    prepTimeMinutes: 15,
    difficulty: 'Medium',
    defaultServings: 4,
    caloriesPerServing: 310,
    proteinGrams: 6.5,
    fiberGrams: 1.2,
    tags: ['vegetarian', 'dessert', 'mithai-classic', 'festive'],
    matchingIngredients: ['condensed_milk', 'all_purpose_flour', 'sugar', 'cardamom_powder', 'saffron', 'kewra_rose_water', 'ghee', 'pistachios'],
    additionalIngredientsNeeded: [
      { name: 'Baking Soda', optional: false, commonPantry: true },
      { name: 'Water', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 1,
      savory: 1,
      tangy: 1,
      aromatic: 5,
      sweet: 5
    },
    culinaryScience: 'Osmotic absorption and low-temperature frying: Frying jamuns on low heat (140°C) allows the heat to penetrate to the center without scorching the exterior. Once fried, soaking them in warm (not boiling) single-thread sugar syrup creates an osmotic pressure gradient, drawing syrup deep into the dough matrix without collapsing.',
    keyTechniques: [
      { name: 'Gentle Crack-Free Dough Ball Rolling', explanation: 'Rolling small balls between palms with zero cracks to prevent dumplings from bursting in hot fat.' },
      { name: 'Continuous Oil Swirling', explanation: 'Swirling the hot ghee gently around the dumplings without touching them with the skimmer so they rotate and brown uniformly.' }
    ],
    ingredientsList: [
      { name: 'Mawa / Khoya (or Milk Powder + Cream)', amount: 1, unit: 'cup', isPantryMatch: true },
      { name: 'All-Purpose Flour (Maida)', amount: 3, unit: 'tbsp', isPantryMatch: true },
      { name: 'Baking Soda', amount: 0.125, unit: 'tsp', isPantryMatch: true },
      { name: 'Granulated Sugar', amount: 1.5, unit: 'cups', isPantryMatch: true },
      { name: 'Green Cardamom Powder', amount: 0.5, unit: 'tsp', isPantryMatch: true },
      { name: 'Saffron Strands & Rose Water', amount: 1, unit: 'pinch + 1 tsp', isPantryMatch: true },
      { name: 'Desi Ghee (for deep frying)', amount: 2, unit: 'cups', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Prepare the Aromatic Saffron-Rose Syrup',
        instruction: 'Simmer sugar and 1.5 cups water for 7 minutes until slightly sticky (half-thread consistency). Stir in crushed cardamom powder, saffron strands, and rose water. Keep warm on the lowest flame.',
        sensoryCue: 'Glossy golden nectar with heady floral cardamom steam.',
        timerMinutes: 7
      },
      {
        stepNumber: 2,
        title: 'Knead the Soft Jamun Dough',
        instruction: 'Gently combine mawa, flour, and baking soda with 1-2 tbsp warm milk. Knead softly into a smooth, pliable dough. Roll into 12 small crack-free balls.',
        timerMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Gentle Low-Flame Ghee Frying',
        instruction: 'Heat ghee on low flame (approx 140°C). Gently slide dumplings in. Swirl the ghee with your ladle so the jamuns rotate continuously. Fry for 8 minutes until evenly deep mahogany golden-brown.',
        sensoryCue: 'Dumplings float and expand to double their original size.',
        timerMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Syrup Soaking',
        instruction: 'Transfer hot fried jamuns directly into warm sugar syrup. Let them soak for at least 30 minutes until plump and drenched to the core. Garnish with slivered pistachios.',
        timerMinutes: 30
      }
    ],
    substitutions: [
      { ingredient: 'Mawa / Khoya', replacement: 'Milk Powder (1 cup) + Butter (2 tbsp) + Milk (3 tbsp)', rationale: 'Standard foolproof homemade substitute for fresh milk solids.' }
    ],
    wineOrBeveragePairing: 'Warm cardamom milk or a scoop of velvety vanilla bean ice cream'
  },
  {
    id: 'traditional-mysore-pak',
    title: 'Authentic Royal Mysore Pak (ಮೈಸೂರು ಪಾಕ್ / మైసూర్ పాక్)',
    originalName: 'ಮೈಸೂರು ಪಾಕ್ (Mysore Pak)',
    cuisine: 'Desserts & Sweets',
    regionCategory: 'indian',
    description: 'The celebrated royal confection born in the Mysore Palace kitchens. Crafted from roasted gram flour (besan), piping hot pure desi ghee, and caramelized sugar syrup to achieve a porous, melt-in-the-mouth honeycomb texture.',
    cookingTimeMinutes: 20,
    prepTimeMinutes: 10,
    difficulty: 'Medium',
    defaultServings: 6,
    caloriesPerServing: 380,
    proteinGrams: 5.0,
    fiberGrams: 2.1,
    tags: ['vegetarian', 'gluten-free', 'south-indian-special', 'dessert', 'mithai-classic'],
    matchingIngredients: ['besan', 'ghee', 'sugar', 'cardamom_powder'],
    additionalIngredientsNeeded: [
      { name: 'Water', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 1,
      savory: 2,
      tangy: 1,
      aromatic: 5,
      sweet: 5
    },
    culinaryScience: 'Thermal foam expansion: Ladling smoking-hot ghee into the bubbling besan and sugar syrup creates micro-cavities of steam. As the starch and proteins set around the fat bubbles, it creates the signature airy honeycomb "jali" that melts instantly on the tongue.',
    keyTechniques: [
      { name: 'Continuous Hot Ghee Ladling', explanation: 'Adding hot shimmering ghee in small continuous ladles while stirring vigorously until the mixture froths and pulls away from the pan.' }
    ],
    ingredientsList: [
      { name: 'Besan (Gram Flour / Senaga Pindi)', amount: 1, unit: 'cup', notes: 'Sifted fine and dry-roasted 3 minutes', isPantryMatch: true },
      { name: 'Pure Desi Ghee', amount: 1.25, unit: 'cups', notes: 'Kept hot in a separate pan', isPantryMatch: true },
      { name: 'Granulated Sugar', amount: 1.5, unit: 'cups', isPantryMatch: true },
      { name: 'Cardamom Powder', amount: 0.25, unit: 'tsp', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Single-String Sugar Syrup',
        instruction: 'Boil sugar with 1/2 cup water in a heavy kadai until it reaches 1-string consistency (112°C).',
        timerMinutes: 6
      },
      {
        stepNumber: 2,
        title: 'Incorporate Roasted Besan',
        instruction: 'Lower heat and gradually whisk in sifted besan, ensuring zero lumps.',
        timerMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'The Hot Ghee Frothing Phase',
        instruction: 'Keep melted ghee hot on another burner. Gradually ladle hot ghee into the besan mixture, stirring vigorously. The mixture will froth and absorb the ghee. Continue until the mixture turns frothy and porous like a sponge.',
        sensoryCue: 'Furious golden foaming with a toasted caramelized chickpea aroma.',
        timerMinutes: 8
      },
      {
        stepNumber: 4,
        title: 'Pour and Slice',
        instruction: 'Pour immediately into a greased deep tray. Do not press hard. Let it cool for 15 minutes, then slice into diamond blocks while still warm.',
        timerMinutes: 15
      }
    ],
    substitutions: [
      { ingredient: 'Ghee', replacement: '50% Ghee + 50% Refined Oil', rationale: 'Yields a softer, lighter textured commercial Mysore Pak.' }
    ],
    wineOrBeveragePairing: 'Strong South Indian Kaapi or spiced Darjeeling tea'
  },
  {
    id: 'thai-mango-sticky-rice',
    title: 'Authentic Thai Mango Sticky Rice (ข้าวเหนียวมะม่วง - Khao Niew Mamuang)',
    originalName: 'ข้าวเหนียวมะม่วง (Khao Niew Mamuang)',
    cuisine: 'Desserts & Sweets',
    regionCategory: 'international',
    description: 'The iconic Thai street and royal dessert. Steamed sweet glutinous rice steeped in a warm, salted coconut cream reduction, paired with chilled sweet sliced mango and topped with crunchy toasted sesame seeds.',
    cookingTimeMinutes: 25,
    prepTimeMinutes: 15,
    difficulty: 'Easy',
    defaultServings: 3,
    caloriesPerServing: 320,
    proteinGrams: 4.8,
    fiberGrams: 3.2,
    tags: ['vegetarian', 'vegan', 'gluten-free', 'dessert', 'asian-special', 'comfort-food'],
    matchingIngredients: ['sticky_rice', 'coconut_milk', 'mango', 'sugar', 'sesame_seeds'],
    additionalIngredientsNeeded: [
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 1,
      savory: 2,
      tangy: 3,
      aromatic: 4,
      sweet: 5
    },
    culinaryScience: 'Amylopectin gelation and salt-sugar contrast: Glutinous rice contains almost 100% amylopectin, creating sticky, translucent grains. Steaming rather than boiling preserves grain integrity so hot grains can drink in the sweet coconut infusion. A noticeable pinch of salt is essential to balance and heighten the tropical fruit sweetness.',
    keyTechniques: [
      { name: 'Warm Coconut Steeping', explanation: 'Folding freshly steamed hot sticky rice into warm sweetened coconut cream and covering for 20 minutes so every grain plumps up with coconut nectar.' }
    ],
    ingredientsList: [
      { name: 'Glutinous Sticky Rice', amount: 1, unit: 'cup', notes: 'Soaked for 2 hours', isPantryMatch: true },
      { name: 'Rich Coconut Milk', amount: 1, unit: 'can (400ml)', isPantryMatch: true },
      { name: 'Sugar (Palm or White)', amount: 4, unit: 'tbsp', isPantryMatch: true },
      { name: 'Salt', amount: 0.5, unit: 'tsp', notes: 'Balances sweetness', isPantryMatch: true },
      { name: 'Ripe Sweet Mangoes (sliced)', amount: 2, unit: 'whole', isPantryMatch: true },
      { name: 'Toasted Sesame Seeds or Mung Dal', amount: 1, unit: 'tbsp', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Steam the Glutinous Rice',
        instruction: 'Drain soaked sticky rice. Steam in a steamer basket lined with cheesecloth or parchment for 20 minutes until translucent and tender.',
        timerMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Warm the Coconut Nectar',
        instruction: 'Heat 3/4 cup coconut milk with sugar and salt over low heat until dissolved (do not boil). Reserve 3 tbsp for drizzling.',
        timerMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Infuse the Hot Rice',
        instruction: 'Transfer hot steamed rice into a bowl. Pour the warm coconut milk over it. Gently stir, cover tightly, and let rest for 20 minutes to absorb.',
        timerMinutes: 20
      },
      {
        stepNumber: 4,
        title: 'Plate with Mango',
        instruction: 'Scoop warm coconut rice alongside fresh sliced chilled mango. Drizzle reserved salted coconut cream and scatter toasted sesame seeds.',
        sensoryCue: 'Creamy, sweet, and gently salted coconut paired with floral mango perfume.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Glutinous Sticky Rice', replacement: 'Jasmine rice + 1 tbsp tapioca starch cooked with extra water', rationale: 'Provides similar fragrant chewiness.' }
    ],
    wineOrBeveragePairing: 'Iced Thai tea with coconut milk or chilled jasmine tea'
  },
  {
    id: 'thai-green-curry',
    title: 'Authentic Thai Green Coconut Curry (แกงเขียวหวาน - Gaeng Kiew Wan)',
    originalName: 'แกงเขียวหวาน (Gaeng Kiew Wan)',
    cuisine: 'Asian & Thai',
    regionCategory: 'international',
    description: 'A fragrant, creamy Thai curry featuring a spicy green chilli, lemongrass, and galangal paste simmered in cracked coconut cream with tender tofu/chicken, bamboo shoots, and fresh basil leaves.',
    cookingTimeMinutes: 20,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 3,
    caloriesPerServing: 340,
    proteinGrams: 12.0,
    fiberGrams: 5.5,
    tags: ['vegetarian', 'vegan', 'gluten-free', 'asian-special', 'quick-under-30'],
    matchingIngredients: ['coconut_milk', 'tofu', 'green_chilli', 'lemongrass', 'fresh_basil', 'bell_pepper', 'soy_sauce', 'ginger', 'garlic'],
    additionalIngredientsNeeded: [
      { name: 'Brown Sugar', optional: false, commonPantry: true },
      { name: 'Cooking Oil', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 4,
      savory: 4,
      tangy: 2,
      aromatic: 5,
      sweet: 3
    },
    culinaryScience: 'Cracking the coconut cream: Frying curry paste in the thick coconut cream layer separates the oil from the water emulsion. This blooms fat-soluble green herbal terpenes from lemongrass and kaffir lime at high heat without burning.',
    keyTechniques: [
      { name: 'Coconut Cream Separation', explanation: 'Simmering thick coconut cream until glossy green oil beads rise to the surface before adding broth.' }
    ],
    ingredientsList: [
      { name: 'Firm Tofu (or Chicken)', amount: 250, unit: 'grams cubed', isPantryMatch: true },
      { name: 'Green Curry Paste (Chillies, Lemongrass, Garlic, Ginger)', amount: 3, unit: 'tbsp', isPantryMatch: true },
      { name: 'Full-Fat Coconut Milk', amount: 1, unit: 'can', isPantryMatch: true },
      { name: 'Sliced Bell Peppers & Zucchini', amount: 1.5, unit: 'cups', isPantryMatch: true },
      { name: 'Soy Sauce or Tamari', amount: 1.5, unit: 'tbsp', isPantryMatch: true },
      { name: 'Brown Sugar', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Fresh Basil Leaves', amount: 0.5, unit: 'cup', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Crack the Cream & Bloom Paste',
        instruction: 'Spoon 1/2 cup of the thick coconut cream from the top of the can into a wok over medium-high heat. Simmer for 3 minutes until oil droplets separate. Add green curry paste and stir-fry for 2 minutes until intensely aromatic.',
        sensoryCue: 'Sharp spicy herbal fragrance of lemongrass and sizzling green oil beads.',
        timerMinutes: 5
      },
      {
        stepNumber: 2,
        title: 'Add Protein and Simmer',
        instruction: 'Toss in cubed tofu (or chicken) and sear for 2 minutes. Pour in the remaining coconut milk, 1/2 cup water, soy sauce, and brown sugar. Simmer gently for 8 minutes.',
        timerMinutes: 8
      },
      {
        stepNumber: 3,
        title: 'Finish with Vegetables & Basil',
        instruction: 'Add bell pepper slices and simmer for 3 minutes until tender-crisp. Turn off the flame, toss in fresh basil leaves, and serve with jasmine or basmati rice.',
        timerMinutes: 3
      }
    ],
    substitutions: [
      { ingredient: 'Green Curry Paste', replacement: 'Pound fresh green chillies + ginger + garlic + cumin + cilantro stems', rationale: 'Fresh homemade paste bursting with authentic flavor.' }
    ],
    wineOrBeveragePairing: 'Crisp Riesling or iced lemongrass tea'
  },
  {
    id: 'classic-pad-thai',
    title: 'Bangkok Street-Style Pad Thai Noodles (ผัดไทย)',
    originalName: 'ผัดไทย (Pad Thai)',
    cuisine: 'Asian & Thai',
    regionCategory: 'international',
    description: 'The world-famous Thai street noodle stir-fry. Chewy rice noodles wok-tossed in a sweet, sour, and savory tamarind sauce with pressed tofu, eggs, crunchy bean sprouts, scallions, and crushed roasted peanuts.',
    cookingTimeMinutes: 15,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 2,
    caloriesPerServing: 420,
    proteinGrams: 14.5,
    fiberGrams: 4.2,
    tags: ['vegetarian', 'gluten-free', 'asian-special', 'quick-under-30', 'high-protein'],
    matchingIngredients: ['rice_noodles', 'tofu', 'eggs', 'peanuts', 'tamarind', 'scallions', 'garlic', 'soy_sauce', 'bean_sprouts', 'lemon'],
    additionalIngredientsNeeded: [
      { name: 'Brown Sugar', optional: false, commonPantry: true },
      { name: 'Cooking Oil', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 2,
      savory: 4,
      tangy: 5,
      aromatic: 4,
      sweet: 4
    },
    culinaryScience: 'The holy trinity of Pad Thai sauce: Equal parts tamarind pulp (tart acid), palm sugar (caramellic sweetness), and soy sauce (fermented umami). High heat wok flash-cooking caramelizes the sugars onto the chewy rice noodles without turning them to mush.',
    keyTechniques: [
      { name: 'Al Dente Noodle Soaking', explanation: 'Soaking flat rice noodles in warm water for 30 minutes until pliable rather than boiling, so they absorb sauce in the wok without breaking.' },
      { name: 'The Wok Scramble Push', explanation: 'Pushing noodles to one side of the wok to crack and scramble eggs directly on bare metal before folding together.' }
    ],
    ingredientsList: [
      { name: 'Flat Rice Noodles', amount: 150, unit: 'grams', notes: 'Soaked in warm water until pliable', isPantryMatch: true },
      { name: 'Firm Tofu (cubed small)', amount: 150, unit: 'grams', isPantryMatch: true },
      { name: 'Eggs', amount: 2, unit: 'whole', isPantryMatch: true },
      { name: 'Tamarind Pulp', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Soy Sauce or Tamari', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Brown Sugar', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Crushed Roasted Peanuts (Pallilu)', amount: 3, unit: 'tbsp', isPantryMatch: true },
      { name: 'Scallions & Bean Sprouts', amount: 1, unit: 'cup combined', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whisk the 3-Ingredient Pad Thai Sauce',
        instruction: 'Whisk tamarind pulp, soy sauce, and brown sugar with 2 tbsp warm water until sugar dissolves.',
        timerMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Sear Tofu & Scramble Eggs',
        instruction: 'Heat 2 tbsp oil in a smoking wok. Sear tofu cubes until golden. Push to the side. Crack eggs into the open space and scramble gently for 40 seconds.',
        timerMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Toss Noodles in Sauce',
        instruction: 'Toss in drained soaked rice noodles and pour the tamarind sauce over them. Stir-fry vigorously on high heat for 3 minutes until noodles absorb the sauce and turn glossy and chewy.',
        sensoryCue: 'Caramelizing tamarind aroma and slight wok sizzle.',
        timerMinutes: 3
      },
      {
        stepNumber: 4,
        title: 'Fold in Sprouts & Peanuts',
        instruction: 'Toss in bean sprouts and green scallions for 30 seconds. Serve immediately topped with heaps of crushed roasted peanuts and fresh lime wedges.',
        timerMinutes: 1
      }
    ],
    substitutions: [
      { ingredient: 'Tamarind Pulp', replacement: '1.5 tbsp fresh lime juice + 1 tbsp ketchup', rationale: 'Popular home cooking shortcut giving similar tangy fruit body.' }
    ],
    wineOrBeveragePairing: 'Chilled Singha / crisp lager or sparkling lime water'
  },
  {
    id: 'japanese-shoyu-ramen',
    title: 'Tokyo Shoyu Ramen in Rich Umami Broth (醤油ラーメン)',
    originalName: '醤油ラーメン (Shoyu Ramen)',
    cuisine: 'Asian & Japanese',
    regionCategory: 'international',
    description: 'A comforting, deeply savory Japanese noodle soup featuring chewy springy noodles bathed in an aromatic soy sauce and dashi-style broth enriched with toasted sesame oil, garlic, scallions, soft boiled eggs, and mushrooms.',
    cookingTimeMinutes: 20,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 2,
    caloriesPerServing: 460,
    proteinGrams: 16.5,
    fiberGrams: 4.0,
    tags: ['asian-special', 'comfort-food', 'high-protein'],
    matchingIngredients: ['ramen_noodles', 'soy_sauce', 'sesame_oil', 'eggs', 'mushrooms', 'garlic', 'ginger', 'scallions'],
    additionalIngredientsNeeded: [
      { name: 'Vegetable or Chicken Broth', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 1,
      savory: 5,
      tangy: 2,
      aromatic: 4,
      sweet: 2
    },
    culinaryScience: 'Kansui alkalinity and Tare base: Ramen noodles are made with alkaline mineral water (kansui) which prevents them from disintegrating in boiling hot broth. The soup base is created by layering concentrated "tare" (seasoned soy sauce and sesame oil) with hot broth to preserve top-note aromatics.',
    keyTechniques: [
      { name: 'Tare Bowl Assembly', explanation: 'Pouring hot broth directly over the soy and sesame tare in individual serving bowls rather than boiling everything together.' }
    ],
    ingredientsList: [
      { name: 'Ramen Noodles', amount: 2, unit: 'bundles', isPantryMatch: true },
      { name: 'Soy Sauce', amount: 3, unit: 'tbsp', isPantryMatch: true },
      { name: 'Toasted Sesame Oil', amount: 1, unit: 'tbsp', isPantryMatch: true },
      { name: 'Minced Garlic & Ginger', amount: 1, unit: 'tbsp', isPantryMatch: true },
      { name: 'Sliced Mushrooms', amount: 1, unit: 'cup', isPantryMatch: true },
      { name: 'Soft-Boiled Eggs (halved)', amount: 2, unit: 'whole', isPantryMatch: true },
      { name: 'Finely Sliced Scallions', amount: 0.5, unit: 'cup', isPantryMatch: true },
      { name: 'Rich Vegetable or Chicken Broth', amount: 4, unit: 'cups', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer the Aromatic Broth',
        instruction: 'Warm 1 tsp sesame oil in a pot. Sauté garlic, ginger, and mushrooms for 2 minutes. Pour in broth and soy sauce. Simmer for 10 minutes to extract deep savory umami.',
        timerMinutes: 10
      },
      {
        stepNumber: 2,
        title: 'Boil Ramen Noodles',
        instruction: 'In a separate pot of rapidly boiling water, cook ramen noodles for 2 to 3 minutes until chewy al dente. Drain thoroughly.',
        timerMinutes: 3
      },
      {
        stepNumber: 3,
        title: 'Assemble the Ramen Bowls',
        instruction: 'Divide noodles between two large warmed bowls. Ladle the piping hot broth and mushrooms over the noodles. Top with soft-boiled egg halves, sliced scallions, and a drizzle of toasted sesame oil.',
        sensoryCue: 'Deep, comforting soy umami steam and glistening sesame aroma.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Ramen Noodles', replacement: 'Spaghetti boiled with 1 tbsp baking soda', rationale: 'Baking soda alkalizes pasta water, turning standard wheat spaghetti springy and yellow like ramen.' }
    ],
    wineOrBeveragePairing: 'Hot roasted green tea (Hojicha) or chilled sake'
  },
  {
    id: 'korean-bibimbap',
    title: 'Korean Dolsot Bibimbap with Crispy Sesame Rice & Gochujang (비빔밥)',
    originalName: '비빔밥 (Bibimbap)',
    cuisine: 'Asian & Korean',
    regionCategory: 'international',
    description: 'The celebrated Korean rainbow bowl. Fluffy rice crisped on the bottom with toasted sesame oil, topped with arranged sautéed seasoned vegetables, fried egg, and a fiery-sweet gochujang sauce. Mix vigorously at the table before eating.',
    cookingTimeMinutes: 20,
    prepTimeMinutes: 15,
    difficulty: 'Easy',
    defaultServings: 2,
    caloriesPerServing: 440,
    proteinGrams: 15.2,
    fiberGrams: 6.8,
    tags: ['vegetarian', 'asian-special', 'high-protein'],
    matchingIngredients: ['basmati_rice', 'sesame_oil', 'gochujang', 'soy_sauce', 'carrots', 'mushrooms', 'eggs', 'garlic', 'tofu'],
    additionalIngredientsNeeded: [
      { name: 'Toasted Sesame Seeds', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 3,
      savory: 5,
      tangy: 2,
      aromatic: 4,
      sweet: 3
    },
    culinaryScience: 'Nurungji crust formation: Heating cooked rice in a sesame-oiled hot skillet crystallizes starches on the bottom layer into a crackling, nutty crust ("nurungji") while keeping upper grains soft and ready to coat in gochujang glaze.',
    keyTechniques: [
      { name: 'Individual Namul Sauté', explanation: 'Cooking each colorful vegetable separately with a pinch of garlic and salt to maintain distinct textures and vivid colors.' }
    ],
    ingredientsList: [
      { name: 'Cooked Rice', amount: 3, unit: 'cups', isPantryMatch: true },
      { name: 'Toasted Sesame Oil', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Gochujang (Korean Chili Paste)', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Soy Sauce + Sugar + Vinegar', amount: 1, unit: 'tbsp each', isPantryMatch: true },
      { name: 'Sliced Carrots, Mushrooms & Greens', amount: 2, unit: 'cups', isPantryMatch: true },
      { name: 'Fried Eggs (crispy edges, runny yolk)', amount: 2, unit: 'whole', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whisk the Bibimbap Glaze',
        instruction: 'Combine gochujang, soy sauce, 1 tsp sesame oil, 1 tsp sugar, and 1 tsp vinegar into a smooth glossy sauce.',
        timerMinutes: 2
      },
      {
        stepNumber: 2,
        title: 'Flash Sauté the Toppings',
        instruction: 'Stir-fry carrots, mushrooms, and greens individually in a hot skillet with a touch of garlic and salt for 1-2 minutes so each remains vibrant and crisp.',
        timerMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Crisp the Sesame Rice Base',
        instruction: 'Drizzle 1 tbsp sesame oil into a hot cast-iron skillet or heavy pan. Press cooked rice firmly across the bottom. Let it sizzle undisturbed over medium heat for 4 minutes until a golden crispy crust forms underneath.',
        sensoryCue: 'Crackling sound and intensely nutty roasted sesame fragrance.',
        timerMinutes: 4
      },
      {
        stepNumber: 4,
        title: 'Arrange and Serve',
        instruction: 'Arrange the colorful sautéed toppings over the rice in sections. Place a fried egg with a runny yolk in the center. Spoon gochujang sauce on top. Mix vigorously together right before eating.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Gochujang', replacement: 'Sriracha + 1/2 tsp brown sugar + 1/2 tsp miso', rationale: 'Balances fermented umami, heat, and sweetness.' }
    ],
    wineOrBeveragePairing: 'Cold roasted barley tea (Boricha) or light lager'
  },
  {
    id: 'chettinad-pepper-roast',
    title: 'Chettinad Spicy Black Pepper & Fennel Roast (செட்டிநாடு மசாலா)',
    originalName: 'செட்டிநாடு மிளகு வறுவல் (Chettinad Pepper Roast)',
    cuisine: 'South Indian',
    regionCategory: 'indian',
    description: 'An explosive Tamil Nadu specialty featuring paneer or mushrooms enrobed in a dark, dry-roasted Chettinad masala of black peppercorns, fennel seeds, cinnamon, curry leaves, and shallots.',
    cookingTimeMinutes: 25,
    prepTimeMinutes: 10,
    difficulty: 'Medium',
    defaultServings: 3,
    caloriesPerServing: 290,
    proteinGrams: 14.2,
    fiberGrams: 4.5,
    tags: ['vegetarian', 'south-indian-special', 'spicy-tangy', 'high-protein'],
    matchingIngredients: ['paneer', 'black_pepper', 'fennel_seeds', 'curry_leaves', 'shallots', 'garlic', 'ginger', 'tomato', 'coriander_powder', 'ghee'],
    additionalIngredientsNeeded: [
      { name: 'Coconut Oil or Gingelly Oil', optional: false, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 5,
      savory: 5,
      tangy: 2,
      aromatic: 5,
      sweet: 1
    },
    culinaryScience: 'Dry-roasting whole spices to 160°C causes the essential oil piperine in black pepper to bond with anethole in fennel seeds, generating the intense, woody, lingering throat warmth that distinguishes authentic Chettinad culinary art.',
    keyTechniques: [
      { name: 'Chettinad Spice Bloom', explanation: 'Roasting whole black pepper, coriander seeds, cumin, and fennel on low heat until dark before coarse stone-grinding.' },
      { name: 'Dry-Roast Masala Lacquering', explanation: 'Cooking down the masala until moisture completely evaporates, leaving the protein coated in a dry, intensely aromatic crust.' }
    ],
    ingredientsList: [
      { name: 'Paneer or Portobello Mushrooms (cubed)', amount: 250, unit: 'grams', isPantryMatch: true },
      { name: 'Whole Black Peppercorns', amount: 1.5, unit: 'tbsp', isPantryMatch: true },
      { name: 'Fennel Seeds (Saunf / Sombu)', amount: 1, unit: 'tbsp', isPantryMatch: true },
      { name: 'Fresh Curry Leaves', amount: 2, unit: 'sprigs', isPantryMatch: true },
      { name: 'Small Shallots (Sambar Onions)', amount: 1, unit: 'cup', isPantryMatch: true },
      { name: 'Ginger-Garlic Paste', amount: 1, unit: 'tbsp', isPantryMatch: true },
      { name: 'Tomato (chopped)', amount: 1, unit: 'medium', isPantryMatch: true },
      { name: 'Cold-Pressed Sesame (Gingelly) or Coconut Oil', amount: 2, unit: 'tbsp', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast the Chettinad Spice Blend',
        instruction: 'Dry-roast whole black pepper, fennel seeds, and 1 sprig curry leaves in a pan on medium-low flame for 3 minutes until deeply aromatic and slightly smoky. Coarsely crush in a mortar or spice grinder.',
        timerMinutes: 3
      },
      {
        stepNumber: 2,
        title: 'Sauté Shallots & Aromatics',
        instruction: 'Heat oil in a heavy kadai. Add remaining curry leaves, sliced shallots, and ginger-garlic paste. Sauté until shallots are deep golden brown. Add chopped tomato and cook down until oil beads on the edges.',
        timerMinutes: 5
      },
      {
        stepNumber: 3,
        title: 'Coat and Roast',
        instruction: 'Add the cubed paneer or mushrooms and the freshly pounded Chettinad pepper-fennel powder. Stir-fry vigorously on high heat for 4 minutes until the dark spiced paste clings tightly to every piece with zero watery gravy.',
        sensoryCue: 'Intensely sharp black pepper aroma with herbal fennel sweetness.',
        timerMinutes: 4
      }
    ],
    substitutions: [
      { ingredient: 'Shallots', replacement: 'Red Onion finely diced', rationale: 'Gives the same sweet Maillard undertone.' }
    ],
    wineOrBeveragePairing: 'Cool spiced buttermilk (Neer Mor) or crisp South Indian lager'
  },
  {
    id: 'udupi-sambar-idli',
    title: 'Authentic Udupi Vegetable Sambar & Cloud-Soft Idlis (சாம்பார் இட்லி / సాంబార్ ఇడ్లీ)',
    originalName: 'సాంబార్ ఇడ్లీ (Sambar Idli)',
    cuisine: 'South Indian',
    regionCategory: 'indian',
    description: 'Piping hot, pillowy steamed rice cakes submerged in a fragrant, tangy-sweet Udupi lentil stew spiced with stone-ground coriander, chana dal, fenugreek, shallots, drumsticks, and tamarind.',
    cookingTimeMinutes: 25,
    prepTimeMinutes: 15,
    difficulty: 'Easy',
    defaultServings: 4,
    caloriesPerServing: 230,
    proteinGrams: 8.4,
    fiberGrams: 5.2,
    tags: ['vegetarian', 'vegan', 'gluten-free', 'south-indian-special', 'comfort-food'],
    matchingIngredients: ['toor_dal', 'tamarind', 'mustard_seeds', 'curry_leaves', 'shallots', 'drumstick', 'tomato', 'coriander_powder', 'asafoetida', 'idli_rice'],
    additionalIngredientsNeeded: [
      { name: 'Jaggery (small pinch)', optional: true, commonPantry: true },
      { name: 'Salt', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 3,
      savory: 5,
      tangy: 4,
      aromatic: 5,
      sweet: 2
    },
    culinaryScience: 'The unique Udupi flavor profile balances tartaric acid from tamarind with a touch of jaggery, while the freshly bloomed fenugreek (methi) adds a mellow herbal bitterness that cuts through the starchiness of toor dal.',
    keyTechniques: [
      { name: 'Dual Tempering', explanation: 'Infusing mustard seeds, dried red chillies, and curry leaves in hot ghee at the very end to seal in fresh top notes.' }
    ],
    ingredientsList: [
      { name: 'Toor Dal (Pigeon Peas)', amount: 0.75, unit: 'cup', notes: 'Pressure cooked soft and mashed', isPantryMatch: true },
      { name: 'Tamarind Pulp', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Shallots / Pearl Onions', amount: 10, unit: 'pieces', isPantryMatch: true },
      { name: 'Drumstick & Carrots', amount: 1, unit: 'cup batons', isPantryMatch: true },
      { name: 'Sambar Powder (or Coriander + Cumin + Fenugreek)', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Mustard Seeds & Curry Leaves', amount: 1, unit: 'tsp + 10 leaves', isPantryMatch: true },
      { name: 'Asafoetida (Hing)', amount: 0.25, unit: 'tsp', isPantryMatch: true },
      { name: 'Steamed Soft Idlis', amount: 8, unit: 'pieces', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Vegetables in Tamarind Water',
        instruction: 'Cook shallots, drumsticks, and carrots in 2 cups water with tamarind pulp, turmeric, and 1 tsp salt for 8 minutes until tender.',
        timerMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Combine Dal & Sambar Spices',
        instruction: 'Add the mashed cooked toor dal and sambar powder. Simmer on medium flame for 6 minutes until flavors meld into a rich, fragrant broth.',
        timerMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'Finish with Sizzling Ghee Popu',
        instruction: 'In a small tadka pan, heat 1 tbsp ghee. Crackle mustard seeds, dried red chillies, asafoetida, and curry leaves. Pour immediately into the bubbling sambar. Serve ladled generously over hot steamed idlis.',
        sensoryCue: 'Crackling curry leaves and deep earthy tamarind aroma.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Toor Dal', replacement: 'Yellow Moong Dal or Masoor Dal', rationale: 'Cooks faster and gives a silky smooth broth.' }
    ],
    wineOrBeveragePairing: 'Fresh coconut chutney and South Indian Filter Coffee'
  },
  {
    id: 'delhi-gajar-halwa',
    title: 'Royal Delhi Shahi Gajar Ka Halwa (गाजर का हलवा)',
    originalName: 'गाजर का हलवा (Gajar Ka Halwa)',
    cuisine: 'Desserts & Sweets',
    regionCategory: 'indian',
    description: 'The definitive Indian winter royal sweet. Sweet juicy red carrots slow-simmered in whole milk until condensed, roasted in desi ghee, and folded with cardamom, khoya (mawa), golden fried cashews, and raisins.',
    cookingTimeMinutes: 35,
    prepTimeMinutes: 15,
    difficulty: 'Medium',
    defaultServings: 5,
    caloriesPerServing: 360,
    proteinGrams: 7.2,
    fiberGrams: 3.8,
    tags: ['vegetarian', 'gluten-free', 'dessert', 'mithai-classic', 'comfort-food'],
    matchingIngredients: ['carrots', 'whole_milk', 'sugar', 'ghee', 'cardamom_powder', 'cashews', 'raisins', 'condensed_milk'],
    additionalIngredientsNeeded: [
      { name: 'Water', optional: true, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 1,
      savory: 2,
      tangy: 1,
      aromatic: 5,
      sweet: 5
    },
    culinaryScience: 'Slow reduction of milk bath: Boiling grated carrots directly in whole milk allows lactose sugars to concentrate and caramelize (Maillard reaction), infusing natural dairy sweetness directly into the softening carrot cells without needing excess refined sugar.',
    keyTechniques: [
      { name: 'Ghee Bhunao Finish', explanation: 'Sautéing the reduced carrot milk mixture in hot ghee until the halwa glistens and releases fat from the edges.' }
    ],
    ingredientsList: [
      { name: 'Sweet Red Carrots (Grated)', amount: 4, unit: 'cups (500g)', isPantryMatch: true },
      { name: 'Whole Full-Cream Milk', amount: 3, unit: 'cups', isPantryMatch: true },
      { name: 'Desi Ghee', amount: 3, unit: 'tbsp', isPantryMatch: true },
      { name: 'Granulated Sugar', amount: 0.5, unit: 'cup', isPantryMatch: true },
      { name: 'Green Cardamom Powder', amount: 0.5, unit: 'tsp', isPantryMatch: true },
      { name: 'Cashews & Raisins (Golden fried)', amount: 2, unit: 'tbsp each', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Simmer Carrots in Full Milk',
        instruction: 'Combine grated carrots and milk in a heavy-bottomed kadai. Bring to a boil, then simmer on medium flame for 20 minutes, stirring occasionally, until milk evaporates almost completely.',
        timerMinutes: 20
      },
      {
        stepNumber: 2,
        title: 'Add Sugar & Bhunao with Ghee',
        instruction: 'Add sugar (the halwa will become watery again). Cook on medium-high heat for 6 minutes until moisture evaporates. Add 3 tbsp desi ghee and sauté ("bhunao") vigorously for 5 minutes until deep ruby red and glossy.',
        sensoryCue: 'Intense sweet aroma of caramelized milk solids, toasted ghee, and tender carrots.',
        timerMinutes: 10
      },
      {
        stepNumber: 3,
        title: 'Fold Aromatics & Fried Nuts',
        instruction: 'Stir in freshly ground cardamom powder and roasted cashews and raisins. Serve piping hot or chilled with vanilla ice cream.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Whole Milk', replacement: '1 can Sweetened Condensed Milk + 1 cup water', rationale: 'Cuts cooking time in half for an express 15-minute halwa.' }
    ],
    wineOrBeveragePairing: 'Masala Chai or warm saffron milk'
  },
  {
    id: 'bengali-sponge-rasgulla',
    title: 'Kolkata Shahi Sponge Rasgulla (রসগোল্লা / छेना रसगुल्ला)',
    originalName: 'রসগোল্লা (Roshogolla)',
    cuisine: 'Desserts & Sweets',
    regionCategory: 'indian',
    description: 'Iconic Bengali sweet. Spongy, feather-light spheres of freshly curdled cottage cheese (chhena) simmered in a bubbling, crystal-clear rose and cardamom sugar broth until juicy and bouncy.',
    cookingTimeMinutes: 20,
    prepTimeMinutes: 20,
    difficulty: 'Medium',
    defaultServings: 4,
    caloriesPerServing: 220,
    proteinGrams: 6.8,
    fiberGrams: 0.2,
    tags: ['vegetarian', 'gluten-free', 'dessert', 'mithai-classic'],
    matchingIngredients: ['whole_milk', 'sugar', 'lemon_juice', 'cardamom_powder', 'kewra_rose_water'],
    additionalIngredientsNeeded: [
      { name: 'Water', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 1,
      savory: 1,
      tangy: 1,
      aromatic: 5,
      sweet: 5
    },
    culinaryScience: 'Thermal protein coagulation and steam expansion: Kneading chhena breaks down casein curds into an elastic network. When boiled under high steam in light sugar syrup, steam pockets expand the casein matrix like a sponge, permanently setting its bouncy, juicy texture.',
    keyTechniques: [
      { name: 'Heel-of-Palm Chhena Kneading', explanation: 'Smearing the fresh curd against a plate with the heel of your palm for 5 minutes until silky smooth with zero grittiness.' },
      { name: 'High-Heat Covered Steam Boil', explanation: 'Cooking rasgullas in a rolling boil with the lid tightly on so trapped steam expands the dumplings.' }
    ],
    ingredientsList: [
      { name: 'Fresh Whole Milk (for Chhena)', amount: 1, unit: 'litre', isPantryMatch: true },
      { name: 'Fresh Lemon Juice', amount: 2, unit: 'tbsp', isPantryMatch: true },
      { name: 'Granulated Sugar', amount: 1.25, unit: 'cups', isPantryMatch: true },
      { name: 'Water (for light syrup)', amount: 4, unit: 'cups', isPantryMatch: true },
      { name: 'Crushed Green Cardamoms & Rose Water', amount: 3, unit: 'pods + 1 tsp', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Curdle Milk for Fresh Chhena',
        instruction: 'Bring milk to a boil. Turn off heat, add lemon juice diluted with 2 tbsp water. Gently stir until greenish whey separates cleanly. Strain curds through cheesecloth, rinse with cold water to remove lemon taste, and squeeze dry.',
        timerMinutes: 8
      },
      {
        stepNumber: 2,
        title: 'Knead and Roll Smooth Spheres',
        instruction: 'Knead chhena with the heel of your palm for 5 minutes until soft and grease begins to appear on your hands. Roll into 10 smooth, crack-free marble-sized balls.',
        timerMinutes: 6
      },
      {
        stepNumber: 3,
        title: 'The Rolling Boil Steam Cook',
        instruction: 'Boil sugar and 4 cups water with cardamom pods in a wide pot. Drop the chhena balls into the vigorously boiling syrup. Cover tightly and boil on high heat for 10 minutes without opening the lid.',
        sensoryCue: 'Dumplings expand to double their original size and bounce effortlessly in the bubbling syrup.',
        timerMinutes: 10
      },
      {
        stepNumber: 4,
        title: 'Chill and Serve',
        instruction: 'Remove from heat. Add rose water. Let cool completely in the syrup before chilling in the refrigerator for 2 hours for maximum sponginess.',
        timerMinutes: 15
      }
    ],
    substitutions: [
      { ingredient: 'Lemon Juice', replacement: 'White Vinegar or Yogurt Whey', rationale: 'Curdles milk into equally tender soft chhena.' }
    ],
    wineOrBeveragePairing: 'Chilled sweet lassi or Darjeeling first-flush tea'
  },
  {
    id: 'sichuan-kung-pao',
    title: 'Sichuan Kung Pao Tofu & Peanuts (宫保豆腐 - Gong Bao)',
    originalName: '宫保豆腐 (Kung Pao Tofu)',
    cuisine: 'Asian & Chinese',
    regionCategory: 'international',
    description: 'The world-famous Sichuan street dish. Crispy golden seared tofu cubes flash-fried with dried red chillies, mouth-tingling Sichuan peppercorns, scallions, and crunchy toasted peanuts in a glossy sweet-savory-tangy Kung Pao glaze.',
    cookingTimeMinutes: 18,
    prepTimeMinutes: 10,
    difficulty: 'Easy',
    defaultServings: 3,
    caloriesPerServing: 330,
    proteinGrams: 16.0,
    fiberGrams: 4.8,
    tags: ['vegetarian', 'vegan', 'asian-special', 'high-protein', 'spicy-tangy'],
    matchingIngredients: ['tofu', 'peanuts', 'soy_sauce', 'garlic', 'ginger', 'cornstarch', 'scallions', 'sesame_oil'],
    additionalIngredientsNeeded: [
      { name: 'Sichuan Peppercorns or Black Pepper', optional: false, commonPantry: true },
      { name: 'Dried Red Chillies', optional: false, commonPantry: true },
      { name: 'Vinegar & Sugar', optional: false, commonPantry: true }
    ],
    flavorProfile: {
      spiceLevel: 4,
      savory: 5,
      tangy: 3,
      aromatic: 4,
      sweet: 3
    },
    culinaryScience: 'Mala sensation & Maillard crunch: Hydroxy-alpha-sanshool in Sichuan peppercorn activates tactile touch receptors (50Hz vibration on the tongue) while capsaicin triggers heat. When combined with the high-heat flash sear of peanuts and cornstarch-dusted protein, it yields the coveted "Mala" sensory delight.',
    keyTechniques: [
      { name: 'Kung Pao Sauce Emulsion', explanation: 'Pre-mixing soy sauce, Chinese black vinegar (or balsamic), sugar, and cornstarch before wok-tossing so it glazes instantly upon contact with the hot wok.' }
    ],
    ingredientsList: [
      { name: 'Firm Tofu (cubed)', amount: 300, unit: 'grams', isPantryMatch: true },
      { name: 'Roasted Peanuts', amount: 0.5, unit: 'cup', isPantryMatch: true },
      { name: 'Dried Red Chillies (halved)', amount: 6, unit: 'pieces', isPantryMatch: true },
      { name: 'Sichuan Peppercorns', amount: 1, unit: 'tsp', isPantryMatch: true },
      { name: 'Minced Garlic & Ginger', amount: 1, unit: 'tbsp each', isPantryMatch: true },
      { name: 'Scallions (cut into 1-inch lengths)', amount: 4, unit: 'stalks', isPantryMatch: true },
      { name: 'Soy Sauce + Vinegar + Sugar', amount: 2, unit: 'tbsp each', isPantryMatch: true },
      { name: 'Cornstarch Slurry', amount: 1, unit: 'tsp in 3 tbsp water', isPantryMatch: true }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sear the Tofu Cubes',
        instruction: 'Dust tofu cubes with 1 tbsp cornstarch and salt. Heat 2 tbsp oil in a wok. Fry tofu for 4 minutes until golden and crisp on all sides. Transfer to a plate.',
        timerMinutes: 4
      },
      {
        stepNumber: 2,
        title: 'Bloom Dried Chillies & Sichuan Peppercorns',
        instruction: 'In the remaining oil on medium heat, stir-fry halved dried red chillies and Sichuan peppercorns for 30 seconds until darkened and fragrant (do not burn). Add garlic, ginger, and scallion whites.',
        sensoryCue: 'Pungent smoky chilli vapors and tingly citrus peppercorn aroma.',
        timerMinutes: 2
      },
      {
        stepNumber: 3,
        title: 'Wok Glaze and Peanut Toss',
        instruction: 'Pour in the pre-mixed soy-vinegar-sugar sauce. Let it bubble vigorously into a glossy dark syrup for 30 seconds. Dump in the crispy tofu, roasted peanuts, and scallion greens. Toss rapidly to coat and serve over steamed jasmine rice.',
        timerMinutes: 2
      }
    ],
    substitutions: [
      { ingredient: 'Sichuan Peppercorns', replacement: 'Black Pepper + Lemon Zest', rationale: 'Mimics the citrusy tingling sensation.' }
    ],
    wineOrBeveragePairing: 'Iced Tsingtao beer or chilled plum juice'
  }
];
