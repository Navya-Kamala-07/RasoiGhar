import { TechniqueMasterclass } from '../types/recipe';

export const TECHNIQUES_MASTERCLASS: TechniqueMasterclass[] = [
  {
    id: 'tadka-tempering',
    name: 'The Art of Tadka (Chhonk / Baghar / Tempering)',
    originalTerm: 'तड़का (Tadka) / छौंक (Chhonk)',
    cuisine: 'Indian',
    brief: 'Blooming whole spices and aromatics in hot fat (ghee or oil) to extract and multiply their fat-soluble aromatic oils before introducing liquids.',
    whyItMatters: 'Essential spice oils (like cuminaldehyde in cumin and allylisothiocyanate in mustard seeds) are fat-soluble, not water-soluble. Adding raw spices into a watery gravy keeps them harsh and raw; blooming them in hot fat unlocks deep nuttiness and complex floral notes.',
    sensoryCheck: 'Listen for rapid crackling of mustard seeds, watch cumin seeds puff up and darken by one shade, and inhale the rich toasted nutty fragrance within 8–12 seconds.',
    stepByStep: [
      'Heat 1–2 tbsp of ghee or oil in a small heavy-bottomed tadka pan over medium heat until shimmering (approx. 175°C / 350°F).',
      'Add denser whole spices first: black mustard seeds, cumin seeds, or whole dried red chillies.',
      'Allow mustard seeds to actively pop and crackle; cumin seeds will foam slightly and turn golden-brown (not black!).',
      'Lower the heat and add fragile ingredients: minced ginger, green chillies, curry leaves, and asafoetida (hing). They will sizzle instantly.',
      'Immediately pour the sizzling fragrant oil directly over your cooked dal, rice, or yogurt raita with a loud sizzle, then cover with a lid for 2 minutes to trap the vapor.'
    ],
    commonMistakes: [
      'Oil too hot: Burned black spices become intensely bitter and ruin the dish. If spices burn, discard and restart with fresh oil.',
      'Oil not hot enough: Spices soak in oil without blooming, leaving an oily, limp texture without aromatic release.',
      'Leaving the pot uncovered after pouring: The aromatic steam escapes; always cover the dish immediately.'
    ],
    bestForDishes: ['Dal Tadka', 'South Indian Sambar & Rasam', 'Jeera Rice', 'Cucumber Raita', 'Aloo Gobi']
  },
  {
    id: 'bhunao-caramelization',
    name: 'Bhunao (Slow Sautéing & Masala Caramelization)',
    originalTerm: 'भुनाई (Bhunao)',
    cuisine: 'Indian',
    brief: 'The systematic frying and reducing of onion-ginger-garlic-tomato paste until water evaporates, natural sugars caramelize, and the oil separates.',
    whyItMatters: 'This is the foundational soul of almost all North Indian and Mughlai gravies. It drives out raw sulfur compounds from onions and garlic while triggering the Maillard reaction. Skipping bhunao results in a flat, watery, harsh gravy.',
    sensoryCheck: 'Look for the "Roghan" or oil droplets separating and pooling around the edges of the glossy masala paste. The mixture will pull away from the pan as a cohesive shiny paste.',
    stepByStep: [
      'Sauté finely chopped onions with a pinch of salt over medium heat until deep golden brown (10–12 minutes). Do not rush on high flame.',
      'Add freshly crushed ginger and garlic paste; stir continuously for 60 seconds until the raw harshness dissipates into sweet warmth.',
      'Add tomato puree and ground spice powders (turmeric, coriander, Kashmiri chilli). Stir constantly.',
      'Reduce flame to medium-low. Keep stirring occasionally so the spices don’t scorch at the bottom.',
      'Sprinkle tiny tablespoons of warm water if the paste sticks, scraping up browned bits (fond).',
      'Continue until oil beads glisten and clearly separate from the masala paste. Your gravy base is now cooked to perfection!'
    ],
    commonMistakes: [
      'Under-cooking onions: Pale onions yield a pale, sweetish, watery curry instead of rich body.',
      'Burning dry spices: Always lower the heat or mix spice powders with 1 tbsp of water before adding to hot oil.',
      'Rushing the process on high heat: Charred exterior with raw sulfurous interior.'
    ],
    bestForDishes: ['Paneer Butter Masala', 'Chicken Tikka Masala', 'Chole / Chana Masala', 'Rogan Josh', 'Egg Curry']
  },
  {
    id: 'mantecatura-pasta',
    name: 'Mantecatura (Emulsifying Pasta Water & Fat)',
    originalTerm: 'Mantecatura',
    cuisine: 'International',
    brief: 'Vigorously tossing al dente pasta in its sauce along with starchy cooking water and cold fat (olive oil or butter) off-heat to create a glossy, clingy sauce.',
    whyItMatters: 'Water and oil normally separate. The gelatinized starches suspended in salted boiling pasta water act as a natural emulsifying agent, binding the sauce lipids to the pasta surface so sauce clings rather than puddling at the bottom of the bowl.',
    sensoryCheck: 'A soft "chhk-chhk" sound as you toss the skillet, transforming watery pan juices into an opaque, creamy, silky glaze without adding any heavy cream.',
    stepByStep: [
      'Boil pasta in generously salted water until 1–2 minutes before the package al dente time.',
      'Reserve at least 1 cup of cloudy, starchy pasta water right before draining.',
      'Transfer pasta directly into the warm sauce skillet.',
      'Add 1/4 cup of the hot pasta water and turn heat to medium-high; toss vigorously to finish cooking the pasta in the sauce for 60 seconds.',
      'Remove from heat! Drizzle good extra virgin olive oil or cold butter cubes, along with grated parmesan.',
      'Toss rapidly in a swirling motion until the starches and fats fuse into a luxurious silk sauce.'
    ],
    commonMistakes: [
      'Draining and rinsing pasta in cold water: Rinsing washes away all the precious starches needed for emulsification.',
      'Adding cheese over direct high heat: Cheese will clump and turn rubbery instead of melting smoothly into an emulsion.',
      'Throwing away pasta water: Always save a mug before draining.'
    ],
    bestForDishes: ['Spaghetti Aglio e Olio', 'Cacio e Pepe', 'Pasta Pomodoro', 'Carbonara']
  },
  {
    id: 'dum-cooking',
    name: 'Dum Pukht (Sealed Steam Infusion)',
    originalTerm: 'दम पुख्त (Dum Pukht)',
    cuisine: 'Indian',
    brief: 'Cooking food in its own trapped aromatic steam inside a heavy, hermetically sealed vessel on very gentle low heat.',
    whyItMatters: 'By locking the steam inside, no volatile essential oils or natural juices escape. The steam condenses on the lid and rains back down into the grains, yielding exceptionally tender grains of rice and juicy meats infused with saffron, rose, and spices.',
    sensoryCheck: 'When you break the dough seal or foil after 20 minutes of resting, a cloud of heady, fragrant aromatic steam should billow out instantly.',
    stepByStep: [
      'Layer your partially cooked parboiled fragrant basmati rice (70% cooked) over your prepared gravy or marinated vegetables/paneer.',
      'Garnish top layer with fried onions (birista), fresh mint, cilantro, saffron milk, and dollops of desi ghee.',
      'Place a sheet of aluminum foil over the pot or roll a cylinder of wheat flour dough along the rim of the heavy pot.',
      'Press the heavy lid tightly onto the seal. Place a heavy mortar or weight on top if necessary.',
      'Place a heavy iron flat tawa/griddle on the stove over medium-low heat, and place your sealed pot on top of the tawa (indirect heat protects the bottom from burning).',
      'Cook on low for 15–20 minutes, then let it rest off heat for 10 minutes before breaking the seal.'
    ],
    commonMistakes: [
      'Cooking over direct flame without a diffuser tawa: The bottom layer will scorch while the top stays undercooked.',
      'Opening the pot mid-way: The steam pressure drops and the rice won’t cook evenly.',
      'Using completely raw rice: Rice must be parboiled until it has a slight bite before assembling the dum.'
    ],
    bestForDishes: ['Hyderabadi Vegetable Dum Biryani', 'Awadhi Dum Aloo', 'Kashmiri Dum Pulao']
  },
  {
    id: 'velveting-stirfry',
    name: 'Velveting (Silky Tenderizing for Wok Cooking)',
    originalTerm: '上浆 (Shàngjiāng)',
    cuisine: 'International',
    brief: 'Marinating protein (or paneer/tofu) in egg white/starch/oil before brief poaching or shallow searing to preserve supreme tenderness in high-heat stir-fries.',
    whyItMatters: 'High-heat wok searing normally drives moisture out of meats or tofu, making them dry or chewy. The cornstarch barrier seals internal moisture, creating a silky "velvet" exterior that grips savory stir-fry sauces.',
    sensoryCheck: 'Tofu or chicken glides smoothly in the pan with a soft, glossy sheen and doesn’t release excess watery liquid into your wok.',
    stepByStep: [
      'Slice protein or firm tofu into uniform bite-sized strips or cubes.',
      'Toss with 1 egg white (or 1 tbsp water for vegan), 1 tbsp cornstarch, 1 tsp soy sauce, and 1 tsp oil.',
      'Let sit for 15 minutes to form a protective starch slurry.',
      'Briefly blanch in simmering water for 40 seconds OR flash-sear in a hot oiled wok for 60 seconds until 80% cooked, then drain.',
      'Stir-fry your aromatics and crunchy veggies, then toss the velveted protein back in with your glaze sauce for the final 60 seconds.'
    ],
    commonMistakes: [
      'Over-blanching: Keep it under 60 seconds; the protein will finish cooking when tossed into the hot sauce.',
      'Crowding the wok: If the pan is overcrowded, temperature plunges and items steam instead of searing crisp.'
    ],
    bestForDishes: ['Indo-Chinese Chilli Paneer', 'Hakka Noodles', 'Kung Pao Tofu', 'Ginger Soy Chicken Stir Fry']
  },
  {
    id: 'pan-deglazing',
    name: 'Deglazing the Pan (Unlocking the Fond)',
    originalTerm: 'Déglacer',
    cuisine: 'International',
    brief: 'Adding liquid (stock, wine, lemon juice, or water) to a hot pan to dissolve caramelized browned food residues stuck to the bottom.',
    whyItMatters: 'The browned bits stuck to the pan (the "fond") are concentrated clusters of umami and caramelized protein sugars created by the Maillard reaction. Dissolving them into your sauce turns simple pan drippings into a restaurant-grade velvety sauce.',
    sensoryCheck: 'A sharp hiss and cloud of steam when liquid hits the pan, followed by scraping up the darkened bits with a wooden spatula until the pan bottom is clean.',
    stepByStep: [
      'Sear vegetables, paneer, or chicken in a stainless steel or cast-iron skillet until well browned.',
      'Remove the main ingredients to a warm plate, leaving behind the dark golden residues and residual fat.',
      'Pour in 1/4 to 1/2 cup of liquid (broth, water with splash of lemon/vinegar, or wine) over high heat.',
      'Scrape the bottom vigorously with a flat wooden spoon as the liquid boils and foams.',
      'Simmer until reduced by half, then whisk in cold butter or cream for a rich pan sauce.'
    ],
    commonMistakes: [
      'Deglazing burnt/black residue: If food charred to black carbon, it tastes acrid and bitter—clean the pan instead of deglazing.',
      'Using a non-stick pan: Non-stick pans don’t allow fond to form properly, missing out on deep caramelization.'
    ],
    bestForDishes: ['Mushroom Pan Sauce', 'Seared Chicken Piccata', 'Rich Onion Gravy Base']
  }
];
