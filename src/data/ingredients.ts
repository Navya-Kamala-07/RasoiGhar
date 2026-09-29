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
  { id: 'onion', name: 'Onion', category: 'produce', indianName: 'Pyaz', teluguName: 'Ullipayalu / Erragadda', commonUnits: 'medium', substitutes: ['Shallots', 'Leeks', 'Onion powder'] },
  { id: 'garlic', name: 'Garlic', category: 'produce', indianName: 'Lahsun', teluguName: 'Vellulli', commonUnits: 'cloves', substitutes: ['Garlic paste', 'Garlic powder'] },
  { id: 'ginger', name: 'Ginger', category: 'produce', indianName: 'Adrak', teluguName: 'Allam', commonUnits: 'inch piece', substitutes: ['Ginger paste', 'Dry ginger powder / Saunth'] },
  { id: 'tomato', name: 'Tomato', category: 'produce', indianName: 'Tamatar', teluguName: 'Tamata', commonUnits: 'medium', substitutes: ['Canned tomatoes', 'Tomato puree / Passata'] },
  { id: 'potato', name: 'Potato', category: 'produce', indianName: 'Aloo', teluguName: 'Bangaladumpa / Aloo', commonUnits: 'medium', substitutes: ['Sweet potato', 'Plantain'] },
  { id: 'bell_pepper', name: 'Bell Pepper / Capsicum', category: 'produce', indianName: 'Shimla Mirch', teluguName: 'Capsicum', commonUnits: 'medium' },
  { id: 'green_chilli', name: 'Green Chilli', category: 'produce', indianName: 'Hari Mirch', teluguName: 'Pasi Mirapakayalu', commonUnits: 'pieces', substitutes: ['Jalapeno', 'Serrano', 'Crushed red pepper'] },
  { id: 'spinach', name: 'Spinach', category: 'produce', indianName: 'Palak', teluguName: 'Palakura', commonUnits: 'cups', substitutes: ['Kale', 'Swiss chard', 'Frozen spinach'] },
  { id: 'gongura', name: 'Fresh Gongura (Roselle / Sorrel Leaves)', category: 'produce', indianName: 'Pitwaa', teluguName: 'Gongura / Punti Kura', commonUnits: 'bunch', substitutes: ['Spinach + Lemon juice', 'Sorrel leaves'] },
  { id: 'cauliflower', name: 'Cauliflower', category: 'produce', indianName: 'Gobi', teluguName: 'Gobi / Puvvugobi', commonUnits: 'head', substitutes: ['Broccoli'] },
  { id: 'green_peas', name: 'Green Peas', category: 'produce', indianName: 'Matar', teluguName: 'Batanilu', commonUnits: 'cup', substitutes: ['Edamame', 'Sweet corn'] },
  { id: 'carrots', name: 'Carrot', category: 'produce', indianName: 'Gajar', teluguName: 'Gajjara Gadda', commonUnits: 'medium' },
  { id: 'cilantro', name: 'Fresh Cilantro / Coriander', category: 'produce', indianName: 'Dhaniya Patta', teluguName: 'Kothimeera', commonUnits: 'bunch', substitutes: ['Parsley (for global)', 'Culantro'] },
  { id: 'mint', name: 'Fresh Mint', category: 'produce', indianName: 'Pudina', teluguName: 'Pudina', commonUnits: 'leaves', substitutes: ['Basil'] },
  { id: 'lemon', name: 'Lemon / Lime (Nimmakaya)', category: 'produce', indianName: 'Nimbu', teluguName: 'Nimmakaya', commonUnits: 'whole', substitutes: ['Amchur powder', 'White vinegar'] },
  { id: 'curry_leaves', name: 'Curry Leaves (Karivepaku)', category: 'produce', indianName: 'Kadi Patta', teluguName: 'Karivepaku', commonUnits: 'sprigs', substitutes: ['Lime zest + basil'] },
  { id: 'mushrooms', name: 'Mushrooms', category: 'produce', indianName: 'Kukurmutta', teluguName: 'Puttagodugulu', commonUnits: 'cups sliced', substitutes: ['Tofu', 'Eggplant'] },
  { id: 'eggplant', name: 'Eggplant / Aubergine', category: 'produce', indianName: 'Baingan', teluguName: 'Vankaya', commonUnits: 'medium', substitutes: ['Zucchini'] },
  { id: 'zucchini', name: 'Zucchini / Courgette', category: 'produce', commonUnits: 'medium' },
  { id: 'cabbage', name: 'Cabbage', category: 'produce', indianName: 'Patta Gobi', teluguName: 'Cabbage', commonUnits: 'cups shredded' },
  { id: 'cucumber', name: 'Cucumber', category: 'produce', indianName: 'Kheera', teluguName: 'Dosakaya / Kheera', commonUnits: 'medium' },
  { id: 'shallots', name: 'Shallots / Small Sambar Onions', category: 'produce', indianName: 'Chota Pyaz', teluguName: 'Chinna Ullipayalu', commonUnits: 'cup peeled', substitutes: ['Red onion'] },
  { id: 'drumstick', name: 'Drumsticks', category: 'produce', indianName: 'Sahjan', teluguName: 'Munakkaya', commonUnits: 'pieces chopped' },
  { id: 'fresh_coconut', name: 'Fresh Grated Coconut', category: 'produce', indianName: 'Taaza Nariyal', teluguName: 'Pachi Kobbari', commonUnits: 'cups grated', substitutes: ['Desiccated coconut + warm water', 'Coconut milk'] },
  { id: 'mango', name: 'Ripe Sweet Mango', category: 'produce', indianName: 'Paka Aam', teluguName: 'Teepi Mamidikaya', commonUnits: 'cups sliced' },
  { id: 'scallions', name: 'Scallions / Spring Onions', category: 'produce', indianName: 'Hara Pyaz', teluguName: 'Ulli Kadalu', commonUnits: 'stalks' },
  { id: 'lemongrass', name: 'Fresh Lemongrass', category: 'produce', commonUnits: 'stalks' },
  { id: 'bean_sprouts', name: 'Crunchy Bean Sprouts', category: 'produce', commonUnits: 'cups' },

  // Proteins, Dal & Dairy
  { id: 'peanuts', name: 'Raw Peanuts / Groundnuts (Pallilu)', category: 'proteins-dairy', indianName: 'Mungfali', teluguName: 'Pallilu / Verusenaga Pappu', commonUnits: 'cup / tbsp', substitutes: ['Cashews', 'Almonds'] },
  { id: 'chana_dal', name: 'Bengal Gram (Chana Dal / Senaga Pappu)', category: 'proteins-dairy', indianName: 'Chana Dal', teluguName: 'Senaga Pappu', commonUnits: 'tbsp', substitutes: ['Urad dal', 'Split yellow peas'] },
  { id: 'urad_dal', name: 'Split Black Gram (Urad Dal / Minapa Pappu)', category: 'proteins-dairy', indianName: 'Urad Dal', teluguName: 'Minapa Pappu', commonUnits: 'tbsp', substitutes: ['Chana dal'] },
  { id: 'toor_dal', name: 'Yellow Pigeon Peas (Toor Dal / Kandi Pappu)', category: 'proteins-dairy', indianName: 'Toor Dal', teluguName: 'Kandi Pappu', commonUnits: 'cup', substitutes: ['Yellow Moong Dal', 'Red Lentils'] },
  { id: 'moong_dal', name: 'Yellow Moong Dal (Pesara Pappu)', category: 'proteins-dairy', indianName: 'Moong Dal', teluguName: 'Pesara Pappu', commonUnits: 'cup', substitutes: ['Masoor Dal', 'Split peas'] },
  { id: 'paneer', name: 'Paneer (Indian Cottage Cheese)', category: 'proteins-dairy', indianName: 'Paneer', teluguName: 'Paneer', commonUnits: 'grams', substitutes: ['Extra-firm Tofu', 'Halloumi', 'Ricotta (pressed)'] },
  { id: 'tofu', name: 'Firm Tofu', category: 'proteins-dairy', commonUnits: 'grams', substitutes: ['Paneer', 'Tempeh'] },
  { id: 'chicken_breast', name: 'Chicken Breast / Thighs', category: 'proteins-dairy', indianName: 'Murgh', teluguName: 'Kodi Mamsam', commonUnits: 'grams', substitutes: ['Paneer', 'Turkey', 'Tofu'] },
  { id: 'eggs', name: 'Eggs', category: 'proteins-dairy', indianName: 'Ande', teluguName: 'Guddu', commonUnits: 'pieces' },
  { id: 'yogurt', name: 'Plain Yogurt / Curd', category: 'proteins-dairy', indianName: 'Dahi', teluguName: 'Perugu', commonUnits: 'cups', substitutes: ['Greek yogurt', 'Sour cream', 'Coconut yogurt'] },
  { id: 'cream', name: 'Heavy Cream / Cooking Cream', category: 'proteins-dairy', indianName: 'Malai', teluguName: 'Meegada / Cream', commonUnits: 'tbsp', substitutes: ['Cashew paste + water', 'Coconut cream'] },
  { id: 'masoor_dal', name: 'Red Lentils (Masoor Dal)', category: 'proteins-dairy', indianName: 'Masoor Dal', commonUnits: 'cup', substitutes: ['Moong Dal', 'Brown lentils'] },
  { id: 'chickpeas', name: 'Chickpeas / Garbanzo Beans', category: 'proteins-dairy', indianName: 'Kabuli Chana', teluguName: 'Bili Senagalu', commonUnits: 'can / cup boiled', substitutes: ['White kidney beans', 'Black beans'] },
  { id: 'black_beans', name: 'Black Beans', category: 'proteins-dairy', commonUnits: 'can / cup', substitutes: ['Rajma / Kidney beans', 'Pinto beans'] },
  { id: 'kidney_beans', name: 'Red Kidney Beans', category: 'proteins-dairy', indianName: 'Rajma', commonUnits: 'can / cup boiled' },
  { id: 'parmesan', name: 'Parmesan Cheese', category: 'proteins-dairy', commonUnits: 'grams grated', substitutes: ['Pecorino Romano', 'Nutritional yeast'] },
  { id: 'mozzarella', name: 'Mozzarella Cheese', category: 'proteins-dairy', commonUnits: 'grams shredded' },
  { id: 'fish_fillet', name: 'White Fish / Salmon Fillet', category: 'proteins-dairy', indianName: 'Machli', teluguName: 'Chepa', commonUnits: 'grams', substitutes: ['Shrimp / Prawns'] },
  { id: 'shrimp', name: 'Shrimp / Prawns', category: 'proteins-dairy', indianName: 'Jhinga', teluguName: 'Royyalu', commonUnits: 'grams' },
  { id: 'jackfruit_kathal', name: 'Raw Green Jackfruit (Kathal)', category: 'proteins-dairy', indianName: 'Kathal', teluguName: 'Panasa Kaya', commonUnits: 'cups cubed', substitutes: ['Paneer', 'Mushrooms', 'Tofu'] },
  { id: 'condensed_milk', name: 'Sweetened Condensed Milk / Mawa (Khoya)', category: 'proteins-dairy', indianName: 'Mawa / Khoya', teluguName: 'Kova / Paala Meegada', commonUnits: 'can / cup', substitutes: ['Milk powder + butter + sugar', 'Heavy cream reduced'] },

  // Grains, Pasta & Staples
  { id: 'basmati_rice', name: 'Basmati Rice (Extra Long Grain)', category: 'grains-staples', indianName: 'Chawal', teluguName: 'Biyyam / Annam', commonUnits: 'cups', substitutes: ['Jasmine rice', 'Long grain white rice'] },
  { id: 'seeraga_samba_rice', name: 'Seeraga Samba / Sona Masoori Rice', category: 'grains-staples', indianName: 'Jeerakasala / Seeraga Samba', teluguName: 'Sona Masoori / Jeelakarra Samba', commonUnits: 'cups', substitutes: ['Basmati rice', 'Short grain white rice'] },
  { id: 'idli_rice', name: 'Idli & Dosa Rice (Parboiled)', category: 'grains-staples', indianName: 'Idli Chawal', teluguName: 'Puzhungal Biyyam / Idli Biyyam', commonUnits: 'cups', substitutes: ['Sona Masoori rice', 'Short grain rice'] },
  { id: 'sticky_rice', name: 'Glutinous Sweet Sticky Rice', category: 'grains-staples', indianName: 'Chikna Chawal', commonUnits: 'cups', substitutes: ['Jasmine rice + 1 tbsp tapioca starch'] },
  { id: 'ramen_noodles', name: 'Fresh or Dried Ramen Noodles', category: 'grains-staples', commonUnits: 'packs', substitutes: ['Udon noodles', 'Spaghetti + pinch baking soda'] },
  { id: 'besan', name: 'Gram Flour (Besan / Chickpea Flour)', category: 'grains-staples', indianName: 'Besan', teluguName: 'Senaga Pindi', commonUnits: 'cups', substitutes: ['All-purpose flour', 'Rice flour'] },
  { id: 'semolina_rava', name: 'Semolina / Rava (Sooji)', category: 'grains-staples', indianName: 'Sooji', teluguName: 'Rava / Bombay Rava', commonUnits: 'cups' },
  { id: 'sugar', name: 'Granulated / Powdered Sugar', category: 'grains-staples', indianName: 'Cheeni / Shakkar', teluguName: 'Chakkara', commonUnits: 'cups', substitutes: ['Brown sugar', 'Honey'] },
  { id: 'jaggery', name: 'Unrefined Cane / Palm Jaggery', category: 'grains-staples', indianName: 'Gud', teluguName: 'Bellam', commonUnits: 'grams / blocks', substitutes: ['Dark brown sugar', 'Molasses'] },
  { id: 'pasta', name: 'Pasta (Spaghetti, Penne or Rigatoni)', category: 'grains-staples', commonUnits: 'grams' },
  { id: 'rice_noodles', name: 'Rice Noodles / Egg Noodles', category: 'grains-staples', commonUnits: 'grams', substitutes: ['Spaghetti', 'Ramen noodles'] },
  { id: 'wheat_flour', name: 'Whole Wheat Flour (Atta)', category: 'grains-staples', indianName: 'Gehun ka Atta', teluguName: 'Godhuma Pindi', commonUnits: 'cups', substitutes: ['All-purpose flour'] },
  { id: 'all_purpose_flour', name: 'All-Purpose Flour (Maida)', category: 'grains-staples', indianName: 'Maida', teluguName: 'Maida', commonUnits: 'cups' },
  { id: 'bread', name: 'Bread Slices / Pav Buns', category: 'grains-staples', indianName: 'Pav / Double Roti', teluguName: 'Rotte / Bread', commonUnits: 'pieces' },
  { id: 'coconut_milk', name: 'Coconut Milk', category: 'grains-staples', indianName: 'Nariyal ka Doodh', teluguName: 'Kobbari Paalu', commonUnits: 'can / cup', substitutes: ['Heavy cream', 'Almond milk + cornstarch'] },
  { id: 'canned_tomatoes', name: 'Canned Crushed Tomatoes / Puree', category: 'grains-staples', commonUnits: 'can', substitutes: ['Fresh blended tomatoes'] },
  { id: 'tortillas', name: 'Flour or Corn Tortillas', category: 'grains-staples', commonUnits: 'pieces', substitutes: ['Chapati / Roti', 'Pita bread'] },
  { id: 'tamarind', name: 'Tamarind Paste / Pulp', category: 'grains-staples', indianName: 'Imli', teluguName: 'Chintapandu', commonUnits: 'tbsp', substitutes: ['Lemon juice + brown sugar', 'Pomegranate molasses'] },
  { id: 'cornstarch', name: 'Cornstarch / Cornflour', category: 'grains-staples', commonUnits: 'tbsp', substitutes: ['Arrowroot', 'All-purpose flour'] },

  // Indian Spices & Masalas
  { id: 'dry_red_chillies', name: 'Dried Whole Red Chillies (Endu Mirapakayalu)', category: 'indian-spices', indianName: 'Sukhi Lal Mirch', teluguName: 'Endu Mirapakayalu', commonUnits: 'pieces', substitutes: ['Red pepper flakes', 'Cayenne'] },
  { id: 'mustard_seeds', name: 'Black Mustard Seeds (Avalu)', category: 'indian-spices', indianName: 'Rai / Sarson', teluguName: 'Avalu', commonUnits: 'tsp', substitutes: ['Yellow mustard seeds', 'Cumin seeds'] },
  { id: 'cumin_seeds', name: 'Cumin Seeds (Jeelakarra)', category: 'indian-spices', indianName: 'Jeera', teluguName: 'Jeelakarra', commonUnits: 'tsp', substitutes: ['Ground cumin', 'Caraway seeds'] },
  { id: 'turmeric', name: 'Turmeric Powder (Pasupu)', category: 'indian-spices', indianName: 'Haldi', teluguName: 'Pasupu', commonUnits: 'tsp', substitutes: ['Curry powder (pinch)', 'Saffron'] },
  { id: 'asafoetida', name: 'Asafoetida (Inguva)', category: 'indian-spices', indianName: 'Hing', teluguName: 'Inguva', commonUnits: 'pinch', substitutes: ['Garlic powder + onion powder'] },
  { id: 'saffron', name: 'Royal Saffron Strands', category: 'indian-spices', indianName: 'Kesar / Zafran', teluguName: 'Kumkuma Puvvu', commonUnits: 'pinch', substitutes: ['Turmeric in warm milk', 'Yellow food color'] },
  { id: 'shahi_jeera', name: 'Shahi Jeera (Royal Caraway / Black Cumin)', category: 'indian-spices', indianName: 'Shahi Jeera', teluguName: 'Shahi Jeera', commonUnits: 'tsp', substitutes: ['Cumin seeds', 'Caraway seeds'] },
  { id: 'mace_nutmeg', name: 'Mace & Nutmeg (Javitri & Jaiphal)', category: 'indian-spices', indianName: 'Javitri & Jaiphal', teluguName: 'Japatri / Jajikaya', commonUnits: 'pinch', substitutes: ['Garam masala', 'Allspice + cinnamon'] },
  { id: 'star_anise', name: 'Star Anise', category: 'indian-spices', indianName: 'Chakra Phool', teluguName: 'Biryani Puvvu / Anasa Puvvu', commonUnits: 'pieces', substitutes: ['Fennel seeds', 'Chinese 5 spice'] },
  { id: 'black_cardamom', name: 'Black Cardamom (Badi Elaichi)', category: 'indian-spices', indianName: 'Badi Elaichi', teluguName: 'Nalla Yalakulu', commonUnits: 'pods', substitutes: ['Green cardamom + pinch smoked paprika'] },
  { id: 'fennel_seeds', name: 'Fennel Seeds', category: 'indian-spices', indianName: 'Saunf', teluguName: 'Sompu', commonUnits: 'tsp', substitutes: ['Aniseed'] },
  { id: 'garam_masala', name: 'Garam Masala', category: 'indian-spices', indianName: 'Garam Masala', teluguName: 'Garam Masala', commonUnits: 'tsp', substitutes: ['Cumin + coriander + cinnamon + cloves blend'] },
  { id: 'coriander_powder', name: 'Coriander Powder', category: 'indian-spices', indianName: 'Dhania Powder', teluguName: 'Dhaniyala Podi', commonUnits: 'tsp', substitutes: ['Crushed coriander seeds'] },
  { id: 'kashmiri_chilli', name: 'Kashmiri Red Chilli Powder (Mild & Vibrant)', category: 'indian-spices', indianName: 'Kashmiri Mirch', teluguName: 'Kashmiri Karam', commonUnits: 'tsp', substitutes: ['Smoked sweet paprika + pinch cayenne'] },
  { id: 'kasuri_methi', name: 'Dried Fenugreek Leaves', category: 'indian-spices', indianName: 'Kasuri Methi', teluguName: 'Menthikura Endina Aakulu', commonUnits: 'tbsp', substitutes: ['Crushed celery leaves + pinch maple syrup', 'Fenugreek powder (tiny pinch)'] },
  { id: 'cardamom', name: 'Green Cardamom Pods', category: 'indian-spices', indianName: 'Hari Elaichi', teluguName: 'Yalakulu', commonUnits: 'pods', substitutes: ['Ground cardamom'] },
  { id: 'cinnamon', name: 'Cinnamon Stick', category: 'indian-spices', indianName: 'Dalchini', teluguName: 'Dalchina Chekka', commonUnits: 'stick', substitutes: ['Ground cinnamon'] },
  { id: 'cloves', name: 'Cloves', category: 'indian-spices', indianName: 'Laung', teluguName: 'Lavangalu', commonUnits: 'pieces' },
  { id: 'chaat_masala', name: 'Chaat Masala', category: 'indian-spices', indianName: 'Chaat Masala', commonUnits: 'tsp', substitutes: ['Amchur powder + black salt (kala namak) + cumin'] },
  { id: 'amchur', name: 'Dry Mango Powder', category: 'indian-spices', indianName: 'Amchur', teluguName: 'Mamidikaya Podi', commonUnits: 'tsp', substitutes: ['Lemon juice', 'Sumac'] },

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
  { id: 'birista', name: 'Birista (Crispy Golden-Brown Fried Onions)', category: 'condiments-oils', indianName: 'Birista / Taley Pyaz', commonUnits: 'cups', substitutes: ['Thinly sliced slow-fried onions', 'French fried onions'] },
  { id: 'kewra_rose_water', name: 'Kewra & Rose Essence Water', category: 'condiments-oils', indianName: 'Kewra / Gulab Jal', commonUnits: 'tsp', substitutes: ['Cardamom-infused milk', 'Vanilla (subtle drops)'] },
  { id: 'cashews_raisins', name: 'Golden Fried Cashews & Kishmish (Sultanas)', category: 'condiments-oils', indianName: 'Kaju & Kishmish', commonUnits: 'tbsp', substitutes: ['Slivered almonds'] },
  { id: 'dried_plums', name: 'Dried Sour Plums (Aloo Bukhara)', category: 'condiments-oils', indianName: 'Aloo Bukhara', commonUnits: 'pieces', substitutes: ['Prunes + lemon juice', 'Dried apricots'] },
  { id: 'olive_oil', name: 'Extra Virgin Olive Oil', category: 'condiments-oils', commonUnits: 'tbsp', substitutes: ['Canola oil', 'Sunflower oil'] },
  { id: 'ghee', name: 'Ghee (Clarified Butter)', category: 'condiments-oils', indianName: 'Desi Ghee', commonUnits: 'tbsp', substitutes: ['Unsalted butter', 'Coconut oil'] },
  { id: 'butter', name: 'Butter', category: 'condiments-oils', indianName: 'Makkhan', commonUnits: 'tbsp', substitutes: ['Ghee', 'Olive oil'] },
  { id: 'soy_sauce', name: 'Soy Sauce / Tamari', category: 'condiments-oils', commonUnits: 'tbsp', substitutes: ['Coconut aminos', 'Worcestershire sauce'] },
  { id: 'sesame_oil', name: 'Toasted Sesame Oil', category: 'condiments-oils', commonUnits: 'tsp' },
  { id: 'vinegar', name: 'Vinegar (Apple Cider / White / Rice)', category: 'condiments-oils', indianName: 'Sirka', commonUnits: 'tbsp', substitutes: ['Lemon juice'] },
  { id: 'mustard_oil', name: 'Mustard Oil (Pungent & Authentic)', category: 'condiments-oils', indianName: 'Sarson ka Tel', commonUnits: 'tbsp', substitutes: ['Vegetable oil + drop of wasabi/horseradish'] },
  { id: 'cardamom_powder', name: 'Green Cardamom Powder', category: 'indian-spices', indianName: 'Elaichi Powder', teluguName: 'Yalukala Podi', commonUnits: 'tsp', substitutes: ['Cinnamon + nutmeg'] },
  { id: 'pistachios', name: 'Pistachios (Pista)', category: 'condiments-oils', indianName: 'Pista', teluguName: 'Pistapappu', commonUnits: 'tbsp', substitutes: ['Cashews', 'Almonds'] },
  { id: 'rice_vinegar', name: 'Japanese / Asian Rice Vinegar', category: 'condiments-oils', commonUnits: 'tbsp', substitutes: ['Apple cider vinegar'] },
  { id: 'gochujang', name: 'Gochujang / Asian Red Chili Paste', category: 'condiments-oils', commonUnits: 'tbsp', substitutes: ['Sriracha', 'Chili garlic paste'] },
  { id: 'miso_paste', name: 'Fermented White / Red Miso Paste', category: 'condiments-oils', commonUnits: 'tbsp', substitutes: ['Soy sauce + vegetable bouillon'] },
  { id: 'cocoa_powder', name: 'Dutch Cocoa / Dark Chocolate Powder', category: 'condiments-oils', commonUnits: 'tbsp' },
  { id: 'espresso', name: 'Espresso / Strong Filter Coffee Decoction', category: 'condiments-oils', indianName: 'Filter Kaapi', teluguName: 'Filter Coffee', commonUnits: 'tbsp / shots' },
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
    id: 'andhra-telugu-lemon-rice',
    name: 'Andhra Chitrannam (Nimmakaya Pulihora)',
    cuisine: 'Andhra & Telugu',
    flag: '🍋',
    description: 'Cooked rice, lemon (nimmakaya), roasted peanuts (pallilu), chana dal, urad dal, curry leaves (karivepaku), mustard (avalu), green chillies & turmeric.',
    ingredientIds: ['basmati_rice', 'lemon', 'peanuts', 'chana_dal', 'urad_dal', 'curry_leaves', 'mustard_seeds', 'green_chilli', 'dry_red_chillies', 'ginger', 'turmeric', 'asafoetida', 'ghee']
  },
  {
    id: 'andhra-gongura-pappu',
    name: 'Andhra Gongura Pappu (Sorrel Dal)',
    cuisine: 'Andhra & Telugu',
    flag: '🌿',
    description: 'Toor dal (kandi pappu), fresh tangy gongura leaves, green chillies, garlic, mustard & cumin tadka in desi ghee.',
    ingredientIds: ['toor_dal', 'gongura', 'green_chilli', 'garlic', 'onion', 'mustard_seeds', 'cumin_seeds', 'curry_leaves', 'dry_red_chillies', 'turmeric', 'ghee', 'asafoetida']
  },
  {
    id: 'hyderabadi-dum-biryani',
    name: 'Hyderabadi Nizami Dum Biryani',
    cuisine: 'Hyderabadi Biryani',
    flag: '👑',
    description: 'Long basmati, saffron, birista fried onions, mint, yogurt, shahi jeera, ghee and royal spices.',
    ingredientIds: ['basmati_rice', 'saffron', 'birista', 'yogurt', 'ghee', 'mint', 'cilantro', 'paneer', 'green_chilli', 'ginger', 'garlic', 'cardamom', 'shahi_jeera', 'kewra_rose_water']
  },
  {
    id: 'kolkata-shahi-biryani',
    name: 'Kolkata Shahi Dum Biryani',
    cuisine: 'Kolkata Biryani',
    flag: '🥔',
    description: 'Fragrant basmati, golden saffron-braised potatoes, boiled eggs, mild rose-kewra perfume and ghee.',
    ingredientIds: ['basmati_rice', 'potato', 'eggs', 'saffron', 'ghee', 'onion', 'garlic', 'ginger', 'yogurt', 'cloves', 'cardamom', 'kewra_rose_water']
  },
  {
    id: 'thalassery-malabar-biryani',
    name: 'Malabar Thalassery Biryani',
    cuisine: 'Malabar Coastal Biryani',
    flag: '🥥',
    description: 'Short Kaima/Seeraga rice, ghee, fried cashews & raisins, fennel seeds, green chillies & mint.',
    ingredientIds: ['seeraga_samba_rice', 'ghee', 'cashews_raisins', 'fennel_seeds', 'green_chilli', 'onion', 'tomato', 'ginger', 'garlic', 'mint', 'cilantro', 'turmeric']
  },
  {
    id: 'dindigul-thalappakatti-biryani',
    name: 'Dindigul Thalappakatti Biryani',
    cuisine: 'Dindigul Biryani',
    flag: '🌶️',
    description: 'Aromatic Seeraga Samba small rice, crushed black pepper, shallots, curd, green chillies & fresh mint.',
    ingredientIds: ['seeraga_samba_rice', 'onion', 'yogurt', 'mint', 'cilantro', 'green_chilli', 'garlic', 'ginger', 'ghee', 'cinnamon', 'cloves']
  },
  {
    id: 'sindhi-spicy-biryani',
    name: 'Sindhi Zesty Dum Biryani',
    cuisine: 'Sindhi Biryani',
    flag: '✨',
    description: 'Spiced basmati rice, potatoes, dried sour plums (aloo bukhara), tomatoes, yoghurt, and fiery green chillies.',
    ingredientIds: ['basmati_rice', 'potato', 'tomato', 'yogurt', 'dried_plums', 'green_chilli', 'onion', 'mint', 'cumin_seeds', 'kashmiri_chilli', 'ghee']
  },
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
    id: 'south-indian-crispy-dosa',
    name: 'South Indian Crispy Dosa & Sambar',
    cuisine: 'South Indian',
    flag: '🥞',
    description: 'Fermented idli/dosa rice, urad dal, potato masala, fresh coconut chutney, drumstick, toor dal & crackling curry leaf popu.',
    ingredientIds: ['idli_rice', 'urad_dal', 'potato', 'fresh_coconut', 'toor_dal', 'shallots', 'drumstick', 'mustard_seeds', 'curry_leaves', 'tamarind', 'green_chilli', 'ghee']
  },
  {
    id: 'royal-indian-mithai',
    name: 'Royal Indian Sweets & Mithai (Gulab Jamun, Mysore Pak, Kheer)',
    cuisine: 'Desserts & Sweets',
    flag: '🍯',
    description: 'Besan gram flour, pure desi ghee, sugar, cardamom, saffron, milk solids, roasted cashews & pistachios.',
    ingredientIds: ['besan', 'ghee', 'sugar', 'cardamom_powder', 'saffron', 'condensed_milk', 'cashews_raisins', 'pistachios', 'basmati_rice']
  },
  {
    id: 'thai-mango-sticky-rice',
    name: 'Thai Mango Sticky Rice & Asian Sweets',
    cuisine: 'Desserts & Sweets',
    flag: '🥭',
    description: 'Glutinous sweet sticky rice, ripe mango, rich coconut milk, toasted sesame seeds and palm sugar.',
    ingredientIds: ['sticky_rice', 'coconut_milk', 'mango', 'sugar', 'sesame_seeds', 'salt']
  },
  {
    id: 'pan-asian-wok-ramen',
    name: 'Pan-Asian Wok, Ramen & Street Food',
    cuisine: 'Asian Street Food',
    flag: '🍜',
    description: 'Ramen or rice noodles, soy sauce, toasted sesame oil, ginger, garlic, tofu, scallions, chili and mushrooms.',
    ingredientIds: ['ramen_noodles', 'rice_noodles', 'soy_sauce', 'sesame_oil', 'tofu', 'garlic', 'ginger', 'scallions', 'mushrooms', 'rice_vinegar', 'gochujang']
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
