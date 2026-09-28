import { IngredientItem } from '../types/recipe';

export const INGREDIENT_CATEGORIES = [
  { id: 'produce', label: 'Fresh Vegetables & Aromatics', icon: '🥦' },
  { id: 'proteins-dairy', label: 'Proteins, Dal & Dairy', icon: '🍗' },
  { id: 'grains-staples', label: 'Grains, Pasta & Staples', icon: '🌾' },
  { id: 'indian-spices', label: 'Indian Spices & Masalas', icon: '🌶️' },
  { id: 'global-seasonings', label: 'Global Herbs & Seasonings', icon: '🌿' },
  { id: 'condiments-oils', label: 'Oils, Sauces & Condiments', icon: '🫒' },
] as const;

export const INGREDIENTS_DATABASE: IngredientItem[] = [
  // Fresh Produce & Aromatics
  { id: 'onion', name: 'Onion', category: 'produce', indianName: 'Pyaz', commonUnits: 'medium', substitutes: ['Shallots', 'Leeks', 'Onion powder'] },
  { id: 'garlic', name: 'Garlic', category: 'produce', indianName: 'Lahsun', commonUnits: 'cloves', substitutes: ['Garlic paste', 'Garlic powder'] },
  { id: 'ginger', name: 'Ginger', category: 'produce', indianName: 'Adrak', commonUnits: 'inch piece', substitutes: ['Ginger paste', 'Dry ginger powder / Saunth'] },
  { id: 'tomato', name: 'Tomato', category: 'produce', indianName: 'Tamatar', commonUnits: 'medium', substitutes: ['Canned tomatoes', 'Tomato puree / Passata'] },
  { id: 'potato', name: 'Potato', category: 'produce', indianName: 'Aloo', commonUnits: 'medium', substitutes: ['Sweet potato', 'Plantain'] },
  { id: 'bell_pepper', name: 'Bell Pepper / Capsicum', category: 'produce', indianName: 'Shimla Mirch', commonUnits: 'medium' },
  { id: 'green_chilli', name: 'Green Chilli', category: 'produce', indianName: 'Hari Mirch', commonUnits: 'pieces', substitutes: ['Jalapeno', 'Serrano', 'Crushed red pepper'] },
  { id: 'spinach', name: 'Spinach', category: 'produce', indianName: 'Palak', commonUnits: 'cups', substitutes: ['Kale', 'Swiss chard', 'Frozen spinach'] },
  { id: 'cauliflower', name: 'Cauliflower', category: 'produce', indianName: 'Gobi', commonUnits: 'head', substitutes: ['Broccoli'] },
  { id: 'green_peas', name: 'Green Peas', category: 'produce', indianName: 'Matar', commonUnits: 'cup', substitutes: ['Edamame', 'Sweet corn'] },
  { id: 'carrots', name: 'Carrot', category: 'produce', indianName: 'Gajar', commonUnits: 'medium' },
  { id: 'cilantro', name: 'Fresh Cilantro / Coriander', category: 'produce', indianName: 'Dhaniya Patta', commonUnits: 'bunch', substitutes: ['Parsley (for global)', 'Culantro'] },
  { id: 'mint', name: 'Fresh Mint', category: 'produce', indianName: 'Pudina', commonUnits: 'leaves', substitutes: ['Basil'] },
  { id: 'lemon', name: 'Lemon / Lime', category: 'produce', indianName: 'Nimbu', commonUnits: 'whole', substitutes: ['Amchur powder', 'White vinegar'] },
  { id: 'curry_leaves', name: 'Curry Leaves', category: 'produce', indianName: 'Kadi Patta', commonUnits: 'sprigs', substitutes: ['Lime zest + basil'] },
  { id: 'mushrooms', name: 'Mushrooms', category: 'produce', indianName: 'Kukurmutta', commonUnits: 'cups sliced', substitutes: ['Tofu', 'Eggplant'] },
  { id: 'eggplant', name: 'Eggplant / Aubergine', category: 'produce', indianName: 'Baingan', commonUnits: 'medium', substitutes: ['Zucchini'] },
  { id: 'zucchini', name: 'Zucchini / Courgette', category: 'produce', commonUnits: 'medium' },
  { id: 'cabbage', name: 'Cabbage', category: 'produce', indianName: 'Patta Gobi', commonUnits: 'cups shredded' },
  { id: 'cucumber', name: 'Cucumber', category: 'produce', indianName: 'Kheera', commonUnits: 'medium' },

  // Proteins, Dal & Dairy
  { id: 'paneer', name: 'Paneer (Indian Cottage Cheese)', category: 'proteins-dairy', indianName: 'Paneer', commonUnits: 'grams', substitutes: ['Extra-firm Tofu', 'Halloumi', 'Ricotta (pressed)'] },
  { id: 'tofu', name: 'Firm Tofu', category: 'proteins-dairy', commonUnits: 'grams', substitutes: ['Paneer', 'Tempeh'] },
  { id: 'chicken_breast', name: 'Chicken Breast / Thighs', category: 'proteins-dairy', indianName: 'Murgh', commonUnits: 'grams', substitutes: ['Paneer', 'Turkey', 'Tofu'] },
  { id: 'eggs', name: 'Eggs', category: 'proteins-dairy', indianName: 'Ande', commonUnits: 'pieces' },
  { id: 'yogurt', name: 'Plain Yogurt / Curd', category: 'proteins-dairy', indianName: 'Dahi', commonUnits: 'cups', substitutes: ['Greek yogurt', 'Sour cream', 'Coconut yogurt'] },
  { id: 'cream', name: 'Heavy Cream / Cooking Cream', category: 'proteins-dairy', indianName: 'Malai', commonUnits: 'tbsp', substitutes: ['Cashew paste + water', 'Coconut cream'] },
  { id: 'toor_dal', name: 'Yellow Pigeon Peas (Toor / Arhar Dal)', category: 'proteins-dairy', indianName: 'Toor Dal', commonUnits: 'cup', substitutes: ['Yellow Moong Dal', 'Red Lentils'] },
  { id: 'moong_dal', name: 'Yellow Moong Dal', category: 'proteins-dairy', indianName: 'Moong Dal', commonUnits: 'cup', substitutes: ['Masoor Dal', 'Split peas'] },
  { id: 'masoor_dal', name: 'Red Lentils (Masoor Dal)', category: 'proteins-dairy', indianName: 'Masoor Dal', commonUnits: 'cup', substitutes: ['Moong Dal', 'Brown lentils'] },
  { id: 'chickpeas', name: 'Chickpeas / Garbanzo Beans', category: 'proteins-dairy', indianName: 'Kabuli Chana', commonUnits: 'can / cup boiled', substitutes: ['White kidney beans', 'Black beans'] },
  { id: 'black_beans', name: 'Black Beans', category: 'proteins-dairy', commonUnits: 'can / cup', substitutes: ['Rajma / Kidney beans', 'Pinto beans'] },
  { id: 'kidney_beans', name: 'Red Kidney Beans', category: 'proteins-dairy', indianName: 'Rajma', commonUnits: 'can / cup boiled' },
  { id: 'parmesan', name: 'Parmesan Cheese', category: 'proteins-dairy', commonUnits: 'grams grated', substitutes: ['Pecorino Romano', 'Nutritional yeast'] },
  { id: 'mozzarella', name: 'Mozzarella Cheese', category: 'proteins-dairy', commonUnits: 'grams shredded' },
  { id: 'fish_fillet', name: 'White Fish / Salmon Fillet', category: 'proteins-dairy', indianName: 'Machli', commonUnits: 'grams', substitutes: ['Shrimp / Prawns'] },
  { id: 'shrimp', name: 'Shrimp / Prawns', category: 'proteins-dairy', indianName: 'Jhinga', commonUnits: 'grams' },

  // Grains, Pasta & Staples
  { id: 'basmati_rice', name: 'Basmati Rice', category: 'grains-staples', indianName: 'Chawal', commonUnits: 'cups', substitutes: ['Jasmine rice', 'Long grain white rice'] },
  { id: 'pasta', name: 'Pasta (Spaghetti, Penne or Rigatoni)', category: 'grains-staples', commonUnits: 'grams' },
  { id: 'rice_noodles', name: 'Rice Noodles / Egg Noodles', category: 'grains-staples', commonUnits: 'grams', substitutes: ['Spaghetti', 'Ramen noodles'] },
  { id: 'wheat_flour', name: 'Whole Wheat Flour (Atta)', category: 'grains-staples', indianName: 'Gehun ka Atta', commonUnits: 'cups', substitutes: ['All-purpose flour'] },
  { id: 'all_purpose_flour', name: 'All-Purpose Flour (Maida)', category: 'grains-staples', indianName: 'Maida', commonUnits: 'cups' },
  { id: 'bread', name: 'Bread Slices / Pav Buns', category: 'grains-staples', indianName: 'Pav / Double Roti', commonUnits: 'pieces' },
  { id: 'coconut_milk', name: 'Coconut Milk', category: 'grains-staples', indianName: 'Nariyal ka Doodh', commonUnits: 'can / cup', substitutes: ['Heavy cream', 'Almond milk + cornstarch'] },
  { id: 'canned_tomatoes', name: 'Canned Crushed Tomatoes / Puree', category: 'grains-staples', commonUnits: 'can', substitutes: ['Fresh blended tomatoes'] },
  { id: 'tortillas', name: 'Flour or Corn Tortillas', category: 'grains-staples', commonUnits: 'pieces', substitutes: ['Chapati / Roti', 'Pita bread'] },
  { id: 'tamarind', name: 'Tamarind Paste / Pulp', category: 'grains-staples', indianName: 'Imli', commonUnits: 'tbsp', substitutes: ['Lemon juice + brown sugar', 'Pomegranate molasses'] },
  { id: 'cornstarch', name: 'Cornstarch / Cornflour', category: 'grains-staples', commonUnits: 'tbsp', substitutes: ['Arrowroot', 'All-purpose flour'] },

  // Indian Spices & Masalas
  { id: 'cumin_seeds', name: 'Cumin Seeds', category: 'indian-spices', indianName: 'Jeera', commonUnits: 'tsp', substitutes: ['Ground cumin', 'Caraway seeds'] },
  { id: 'mustard_seeds', name: 'Black Mustard Seeds', category: 'indian-spices', indianName: 'Rai / Sarson', commonUnits: 'tsp', substitutes: ['Yellow mustard seeds', 'Cumin seeds'] },
  { id: 'turmeric', name: 'Turmeric Powder', category: 'indian-spices', indianName: 'Haldi', commonUnits: 'tsp', substitutes: ['Curry powder (pinch)', 'Saffron'] },
  { id: 'garam_masala', name: 'Garam Masala', category: 'indian-spices', indianName: 'Garam Masala', commonUnits: 'tsp', substitutes: ['Cumin + coriander + cinnamon + cloves blend'] },
  { id: 'coriander_powder', name: 'Coriander Powder', category: 'indian-spices', indianName: 'Dhania Powder', commonUnits: 'tsp', substitutes: ['Crushed coriander seeds'] },
  { id: 'kashmiri_chilli', name: 'Kashmiri Red Chilli Powder (Mild & Vibrant)', category: 'indian-spices', indianName: 'Kashmiri Mirch', commonUnits: 'tsp', substitutes: ['Smoked sweet paprika + pinch cayenne'] },
  { id: 'kasuri_methi', name: 'Dried Fenugreek Leaves', category: 'indian-spices', indianName: 'Kasuri Methi', commonUnits: 'tbsp', substitutes: ['Crushed celery leaves + pinch maple syrup', 'Fenugreek powder (tiny pinch)'] },
  { id: 'cardamom', name: 'Green Cardamom Pods', category: 'indian-spices', indianName: 'Hari Elaichi', commonUnits: 'pods', substitutes: ['Ground cardamom'] },
  { id: 'cinnamon', name: 'Cinnamon Stick', category: 'indian-spices', indianName: 'Dalchini', commonUnits: 'stick', substitutes: ['Ground cinnamon'] },
  { id: 'cloves', name: 'Cloves', category: 'indian-spices', indianName: 'Laung', commonUnits: 'pieces' },
  { id: 'asafoetida', name: 'Asafoetida', category: 'indian-spices', indianName: 'Hing', commonUnits: 'pinch', substitutes: ['Garlic powder + onion powder'] },
  { id: 'chaat_masala', name: 'Chaat Masala', category: 'indian-spices', indianName: 'Chaat Masala', commonUnits: 'tsp', substitutes: ['Amchur powder + black salt (kala namak) + cumin'] },
  { id: 'amchur', name: 'Dry Mango Powder', category: 'indian-spices', indianName: 'Amchur', commonUnits: 'tsp', substitutes: ['Lemon juice', 'Sumac'] },

  // Global Herbs & Seasonings
  { id: 'oregano', name: 'Dried Oregano', category: 'global-seasonings', commonUnits: 'tsp', substitutes: ['Marjoram', 'Thyme'] },
  { id: 'fresh_basil', name: 'Fresh Italian Basil', category: 'global-seasonings', commonUnits: 'leaves', substitutes: ['Fresh mint + oregano', 'Pesto'] },
  { id: 'rosemary', name: 'Fresh or Dried Rosemary', category: 'global-seasonings', commonUnits: 'tsp', substitutes: ['Thyme', 'Sage'] },
  { id: 'thyme', name: 'Thyme', category: 'global-seasonings', commonUnits: 'tsp', substitutes: ['Oregano', 'Rosemary'] },
  { id: 'smoked_paprika', name: 'Smoked Paprika', category: 'global-seasonings', commonUnits: 'tsp', substitutes: ['Chipotle powder', 'Kashmiri chilli powder'] },
  { id: 'red_pepper_flakes', name: 'Crushed Red Pepper Flakes / Chilli Flakes', category: 'global-seasonings', commonUnits: 'tsp' },
  { id: 'bay_leaves', name: 'Bay Leaves', category: 'global-seasonings', indianName: 'Tej Patta', commonUnits: 'leaves' },
  { id: 'sesame_seeds', name: 'White / Black Toasted Sesame Seeds', category: 'global-seasonings', indianName: 'Til', commonUnits: 'tbsp' },

  // Oils, Sauces & Condiments
  { id: 'olive_oil', name: 'Extra Virgin Olive Oil', category: 'condiments-oils', commonUnits: 'tbsp', substitutes: ['Canola oil', 'Sunflower oil'] },
  { id: 'ghee', name: 'Ghee (Clarified Butter)', category: 'condiments-oils', indianName: 'Desi Ghee', commonUnits: 'tbsp', substitutes: ['Unsalted butter', 'Coconut oil'] },
  { id: 'butter', name: 'Butter', category: 'condiments-oils', indianName: 'Makkhan', commonUnits: 'tbsp', substitutes: ['Ghee', 'Olive oil'] },
  { id: 'soy_sauce', name: 'Soy Sauce / Tamari', category: 'condiments-oils', commonUnits: 'tbsp', substitutes: ['Coconut aminos', 'Worcestershire sauce'] },
  { id: 'sesame_oil', name: 'Toasted Sesame Oil', category: 'condiments-oils', commonUnits: 'tsp' },
  { id: 'vinegar', name: 'Vinegar (Apple Cider / White / Rice)', category: 'condiments-oils', indianName: 'Sirka', commonUnits: 'tbsp', substitutes: ['Lemon juice'] },
  { id: 'mustard_oil', name: 'Mustard Oil (Pungent & Authentic)', category: 'condiments-oils', indianName: 'Sarson ka Tel', commonUnits: 'tbsp', substitutes: ['Vegetable oil + drop of wasabi/horseradish'] },
];

export interface PantryPreset {
  id: string;
  name: string;
  cuisine: string;
  flag: string;
  description: string;
  ingredientIds: string[];
}

export const PANTRY_PRESETS: PantryPreset[] = [
  {
    id: 'north-indian-comfort',
    name: 'North Indian Dhaba Pantry',
    cuisine: 'North Indian',
    flag: '🇮🇳',
    description: 'Onion, garlic, ginger, tomato base with warm aromatic spices & paneer or dal.',
    ingredientIds: ['onion', 'tomato', 'garlic', 'ginger', 'paneer', 'cumin_seeds', 'garam_masala', 'turmeric', 'kashmiri_chilli', 'basmati_rice', 'ghee', 'cilantro']
  },
  {
    id: 'south-indian-classic',
    name: 'South Indian Rasam & Sambar',
    cuisine: 'South Indian',
    flag: '🥥',
    description: 'Tempered mustard seeds, curry leaves, tamarind, lentils & steamed rice.',
    ingredientIds: ['toor_dal', 'mustard_seeds', 'curry_leaves', 'tomato', 'tamarind', 'turmeric', 'asafoetida', 'green_chilli', 'basmati_rice', 'ghee']
  },
  {
    id: 'italian-trattoria',
    name: 'Italian Trattoria Essentials',
    cuisine: 'Italian',
    flag: '🇮🇹',
    description: 'Garlic, olive oil, tomato, basil, pasta and parmesan for classic pastas & sauces.',
    ingredientIds: ['pasta', 'olive_oil', 'garlic', 'tomato', 'fresh_basil', 'parmesan', 'red_pepper_flakes', 'oregano']
  },
  {
    id: 'asian-wok-express',
    name: 'East Asian Wok Essentials',
    cuisine: 'East Asian / Stir Fry',
    flag: '🥢',
    description: 'Soy sauce, ginger, garlic, noodles, sesame oil and crisp vegetables.',
    ingredientIds: ['rice_noodles', 'soy_sauce', 'garlic', 'ginger', 'bell_pepper', 'carrots', 'sesame_oil', 'eggs', 'green_chilli']
  },
  {
    id: 'mexican-cantina',
    name: 'Mexican Cantina Staples',
    cuisine: 'Mexican',
    flag: '🌮',
    description: 'Black beans, cilantro, lime, tomatoes, peppers and cumin for vibrant tacos & bowls.',
    ingredientIds: ['black_beans', 'onion', 'garlic', 'tomato', 'bell_pepper', 'cumin_seeds', 'smoked_paprika', 'cilantro', 'lemon', 'tortillas']
  },
  {
    id: 'mediterranean-sun',
    name: 'Mediterranean & Shakshuka',
    cuisine: 'Mediterranean',
    flag: '🫒',
    description: 'Rich tomato simmer, garlic, eggs, olive oil, chickpeas & warm spices.',
    ingredientIds: ['eggs', 'chickpeas', 'tomato', 'onion', 'garlic', 'bell_pepper', 'olive_oil', 'cumin_seeds', 'bread']
  },
  {
    id: 'college-dorm-quick',
    name: 'Minimalist 5-Item Pantry',
    cuisine: 'Fusion & Quick',
    flag: '⚡',
    description: 'Simple everyday ingredients that can be turned into 10+ hearty meals in under 20 mins.',
    ingredientIds: ['onion', 'garlic', 'tomato', 'eggs', 'potato', 'basmati_rice', 'butter']
  }
];
