import { Recipe, RecipeStep, VideoTutorialSuggestion } from '../types/recipe';

export interface VideoRecommendation {
  title: string;
  channelName: string;
  youtubeQuery: string;
  youtubeUrl: string;
  videoId?: string;
  durationHint?: string;
  tip?: string;
  curatedSource: string;
}

// Curated top chef video channels by cuisine / region
export const RECOMMENDED_CHANNELS_BY_CUISINE: Record<string, { channel: string; reason: string }[]> = {
  'South Indian': [
    { channel: 'Vismai Food', reason: 'Authentic Andhra & Telugu family recipes with exact measurements' },
    { channel: 'Hebbar\'s Kitchen', reason: 'Step-by-step visual South Indian vegetarian cooking' },
    { channel: 'Vahchef - Sanjay Thumma', reason: 'Masterclass Hyderabadi and South Indian culinary techniques' }
  ],
  'North Indian': [
    { channel: 'Chef Ranveer Brar', reason: 'Culinary storytelling, sensory cues, and restaurant secrets' },
    { channel: 'CookingShooking Hindi', reason: 'Dhaba style dishes and foolproof street food methods' },
    { channel: 'Chef Kunal Kapur', reason: 'Mastering tandoori, curries, and Indian breads' }
  ],
  'Italian': [
    { channel: 'Vincenzo\'s Plate', reason: 'Traditional nonna techniques and authentic Italian pasta chemistry' },
    { channel: 'Italia Squisita', reason: 'Italian Michelin star and trattoria chefs demonstrating classical recipes' }
  ],
  'Asian': [
    { channel: 'Marion\'s Kitchen', reason: 'Vibrant Thai, Vietnamese, and East Asian wok cooking' },
    { channel: 'Aaron and Claire', reason: 'Simple, delicious Korean home cooking and pantry hacks' },
    { channel: 'Just One Cookbook', reason: 'Detailed Japanese dashi, ramen, and comfort dishes' }
  ],
  'Mexican': [
    { channel: 'De mi Rancho a Tu Cocina', reason: 'Traditional Mexican ranch cooking directly over wood fire' },
    { channel: 'Rick Bayless', reason: 'Authentic Mexican salsas, moles, and chili roasting' }
  ],
  'Continental': [
    { channel: 'French Cooking Academy', reason: 'Classical sauces, stocks, and pan-searing techniques' },
    { channel: 'Binging with Babish', reason: 'Clear culinary step breakdowns and plating' }
  ]
};

// Curated video mapping for built-in recipes
const CURATED_RECIPE_VIDEOS: Record<string, Partial<VideoRecommendation>> = {
  'dal-tadka': {
    title: 'Dhaba Style Dal Tadka Masterclass',
    channelName: 'Chef Ranveer Brar',
    youtubeQuery: 'Ranveer Brar dhaba style dal tadka recipe',
    videoId: 'i_yZq-9Pz5E',
    durationHint: '12 mins',
    tip: 'Watch how Ranveer browns the garlic to a golden nuttiness without burning it, and pours the sizzling ghee tadka right into the dal pot.'
  },
  'paneer-butter-masala': {
    title: 'Restaurant Style Paneer Butter Masala',
    channelName: 'CookingShooking',
    youtubeQuery: 'CookingShooking restaurant style paneer butter masala',
    durationHint: '14 mins',
    tip: 'Observe how straining the tomato-cashew puree gives the velvety makhani gravy texture.'
  },
  'chana-masala': {
    title: 'Authentic Amritsari Chana Masala (Pindi Chole)',
    channelName: 'Chef Kunal Kapur',
    youtubeQuery: 'Kunal Kapur authentic pindi chana masala',
    durationHint: '11 mins',
    tip: 'Notice the tea bag boil trick that gives the deep dark color and tannins to soften the chickpeas.'
  },
  'biryani-dum': {
    title: 'Hyderabadi Veg Dum Biryani Authentic Method',
    channelName: 'Vismai Food',
    youtubeQuery: 'Vismai Food hyderabadi veg dum biryani recipe',
    durationHint: '18 mins',
    tip: 'Crucial visual cue: check the par-cooked rice grains (70% done) before layering over the marinated spiced vegetables.'
  },
  'pasta-pomodoro': {
    title: 'Authentic Spaghetti al Pomodoro like an Italian Nonna',
    channelName: 'Vincenzo\'s Plate',
    youtubeQuery: 'Vincenzo\'s Plate authentic spaghetti al pomodoro',
    durationHint: '10 mins',
    tip: 'Pay attention to how pasta cooking water is vigorously swirled with olive oil to emulsify a glossy sauce without cream.'
  },
  'thai-green-curry': {
    title: 'Authentic Thai Green Curry from Scratch',
    channelName: 'Marion\'s Kitchen',
    youtubeQuery: 'Marions Kitchen authentic thai green curry',
    durationHint: '13 mins',
    tip: 'Watch how she splits the coconut milk cream first to fry the green curry paste until aromatic oil pools on top.'
  },
  'palak-paneer': {
    title: 'Dhaba Style Palak Paneer (Keep it Bright Green)',
    channelName: 'Chef Ranveer Brar',
    youtubeQuery: 'Ranveer Brar authentic palak paneer bright green secret',
    durationHint: '12 mins',
    tip: 'Watch the ice bath blanching step that traps chlorophyll and prevents the spinach from turning dull army green.'
  },
  'masala-dosa': {
    title: 'Crispy Restaurant Style Masala Dosa & Potato Masala',
    channelName: 'Hebbar\'s Kitchen',
    youtubeQuery: 'Hebbars Kitchen crispy masala dosa recipe',
    durationHint: '9 mins',
    tip: 'Observe the batter consistency and the spiral ladle motion from the center outward to create paper-thin crispy edges.'
  },
  'gulab-jamun': {
    title: 'Perfect Soft Gulab Jamun (No Cracks)',
    channelName: 'Vismai Food',
    youtubeQuery: 'Vismai Food perfect soft gulab jamun without cracks',
    durationHint: '15 mins',
    tip: 'Watch the gentle low-flame frying technique where ghee is stirred in a whirlpool so the balls rise without touching the pan bottom.'
  },
  'shahi-paneer': {
    title: 'Royal Shahi Paneer with Saffron & Cashew Silk',
    channelName: 'Chef Ranveer Brar',
    youtubeQuery: 'Ranveer Brar authentic royal shahi paneer',
    durationHint: '13 mins',
    tip: 'Notice how the whole spices are simmered with onions, ground fine, and strained for a velvet royal gravy.'
  }
};

/**
 * Returns a robust video tutorial suggestion for any recipe.
 * If the user cannot understand the textual instructions, they can click to watch
 * on YouTube or watch embedded directly.
 */
export function getVideoSuggestionForRecipe(recipe: Recipe): VideoRecommendation {
  const curated = CURATED_RECIPE_VIDEOS[recipe.id];
  const cuisineCategory = recipe.regionCategory === 'indian' ? 'North Indian' : 'Asian';
  const defaultChannel = recipe.cuisine?.toLowerCase().includes('andhra') || recipe.cuisine?.toLowerCase().includes('south')
    ? 'Vismai Food'
    : recipe.regionCategory === 'indian'
    ? 'Chef Ranveer Brar'
    : recipe.cuisine?.toLowerCase().includes('italian')
    ? 'Vincenzo\'s Plate'
    : 'Marion\'s Kitchen';

  const defaultQuery = `${recipe.title} authentic step by step recipe ${defaultChannel}`;
  const query = curated?.youtubeQuery || recipe.videoTutorial?.youtubeQuery || recipe.youtubeVideoQuery || defaultQuery;
  const channel = curated?.channelName || recipe.videoTutorial?.channelName || defaultChannel;
  const title = curated?.title || recipe.videoTutorial?.title || `${recipe.title} Video Masterclass`;

  return {
    title,
    channelName: channel,
    youtubeQuery: query,
    youtubeUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
    videoId: curated?.videoId || recipe.videoTutorial?.videoId,
    durationHint: curated?.durationHint || recipe.videoTutorial?.durationHint || '10-15 mins',
    tip: curated?.tip || recipe.videoTutorial?.tip || `Watch how the chef balances spices and watches sensory heat cues during the cooking process.`,
    curatedSource: `Recommended Chef Channel: ${channel}`
  };
}

/**
 * Returns a specific search URL for a confusing textual step
 * e.g. "Tadka blooming", "folding dough", "emulsifying sauce"
 */
export function getStepVideoSearchUrl(recipe: Recipe, step: RecipeStep): { query: string; url: string } {
  const query = `${recipe.title} ${step.title} cooking technique`;
  return {
    query,
    url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
  };
}
