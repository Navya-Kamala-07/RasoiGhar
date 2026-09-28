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
  }
];
