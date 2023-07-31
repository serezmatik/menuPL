const menu = [
  {
    id: 1,
    title: "MARGHERITA",
    category: "pizza",
    price: 29,
    ingredients: "tomato sauce | mozzarella",
  },
  {
    id: 2,
    title: "GARLIC BREAD",
    category: "pizza",
    price: 29,
    ingredients: "olive oil | mozzarella | garlic",
  },
  {
    id: 3,
    title: "PROSCIUTTO",
    category: "pizza",
    price: 34,
    ingredients: "tomato sauce | mozzarella | cooked ham",
  },
  {
    id: 4,
    title: "SALAMI",
    category: "pizza",
    price: 34,
    ingredients: "tomato sauce | mozzarella | salami",
  },
  {
    id: 5,
    title: "POLLO",
    category: "pizza",
    price: 36,
    ingredients: "tomato sauce | mozzarella | chicken breast | regular onion",
  },
  {
    id: 6,
    title: "CAPRICCIOSA",
    category: "pizza",
    price: 36,
    ingredients: "tomato sauce | mozzarella | cooked ham | mushrooms",
  },
  {
    id: 7,
    title: "ITALIAN",
    category: "pizza",
    price: 36,
    ingredients: "tomato sauce | mozzarella | sundried tomatoes | gorgonzola",
  },
  {
    id: 8,
    title: "PARMA",
    category: "pizza",
    price: 38,
    ingredients:
      "tomato sauce | mozzarella | aged ham | arugula | grana padano cheese | cherry tomatoes",
  },
  {
    id: 9,
    title: "CELTIC",
    category: "pizza",
    price: 38,
    ingredients:
      "tomato sauce | mozzarella | cooked ham | mild salami | mushrooms",
  },
  {
    id: 10,
    title: "THE BEST",
    category: "pizza",
    price: 38,
    ingredients:
      "tomato sauce | mozzarella | cherry tomatoes | feta cheese | onion",
  },
  {
    id: 11,
    title: "TONNO",
    category: "pizza",
    price: 38,
    ingredients: "tomato sauce | mozzarella | tuna | anchovies | red onion",
  },
  {
    id: 12,
    title: "MAMMA MIA",
    category: "pizza",
    price: 38,
    ingredients:
      "tomato sauce | mozzarella | grana padano cheese | pine nuts | pear | honey",
  },
  {
    id: 13,
    title: "QUATTRO FORMAGGI",
    category: "pizza",
    price: 38,
    ingredients:
      "tomato sauce | mozzarella | gorgonzola | grana padano cheese | feta",
  },
  {
    id: 14,
    title: "DIAVOLO",
    category: "pizza",
    price: 38,
    ingredients:
      "tomato sauce | mozzarella | spicy salami | olives | spicy pepperoni",
  },
  {
    id: 15,
    title: "TOSCANA",
    category: "pizza",
    price: 38,
    ingredients:
      "mozzarella | mushrooms | arugula | artichokes | cherry tomatoes",
  },
  {
    id: 16,
    title: "SMOKED",
    category: "pizza",
    price: 39,
    ingredients:
      "tomato sauce | mozzarella | smoked cheese | chicken breast | salami | onion",
  },
  {
    id: 17,
    title: "SPINACI",
    category: "pizza",
    price: 39,
    ingredients:
      "tomato sauce | mozzarella | spinach | garlic | gorgonzola | egg",
  },
  {
    id: 18,
    title: "PRIMAVERA",
    category: "pizza",
    price: 47,
    ingredients:
      "tomato sauce | mozzarella | burrata cheese | beef ham Bresaola | arugula | grana padano cheese | cherry tomatoes",
  },
  {
    id: 25,
    title: "SHRIMPS ON TOAST",
    category: "Starters",
    price: 10,
    ingredients: "bread | shrimps | garlic | butter",
  },
  {
    id: 26,
    title: "SALMON PANCAKES",
    category: "Starters",
    price: 12,
    ingredients: "smoked salmon | potato pancakes | cream cheese",
  },
  {
    id: 27,
    title: "BEEF TENDERLOIN CARPACCIO",
    category: "Starters",
    price: 38,
    ingredients: "beef tenderloin | arugula | capers | grana padano cheese",
  },
  {
    id: 28,
    title: "FRESH TOMATO SOUP",
    category: "Soups",
    price: 16,
  },
  {
    id: 29,
    title: "CHICKEN BROTH WITH NOODLES",
    category: "Soups",
    price: 16,
  },
  {
    id: 19,
    title: "PARMESAN CHICKEN",
    category: "Main Courses",
    price: 38,
    ingredients: "fries | salad | horseradish dressing",
  },
  {
    id: 20,
    title: "MILANESE PORK LOIN",
    category: "Main Courses",
    price: 41,
    ingredients: "tagliatelle pasta | grilled tomatoes | with spinach",
  },
  {
    id: 21,
    title: "BEEF TENDERLOIN STEAK",
    category: "Main Courses",
    price: 46,
    ingredients:
      "on a hot plate | tomatoes | bread | rosemary and pepper olive oil",
  },
  {
    id: 22,
    title: "BEEF GOULASH",
    category: "Main Courses",
    price: 38,
    ingredients: "potato pancakes | goulash sauce | pieces of beef",
  },
  {
    id: 23,
    title: "POTATO PANCAKE - 1 PC.",
    category: "Main Courses",
    price: 10,
    ingredients: "sour cream | sugar",
  },
  {
    id: 24,
    title: "BEEF TENDERLOIN STEAK",
    category: "Main Courses",
    price: 85,
  },
  {
    id: 35,
    title: "CAPRESE",
    category: "Salads",
    price: 31,
    ingredients:
      "parma ham | mozzarella cheese | tomato | olives | capers | grana padano cheese | red onion | basil pesto",
  },
  {
    id: 36,
    title: "WITH PEAR AND GORGONZOLA",
    category: "Salads",
    price: 31,
    ingredients:
      "gorgonzola cheese | pear | arugula | lamb's lettuce | pistachios | honey vinaigrette",
  },
  {
    id: 37,
    title: "WITH BEETROOT AND SHEEP CHEESE",
    category: "Salads",
    price: 31,
    ingredients:
      "arugula lettuce | baby spinach | beetroot | sheep cheese | walnuts | honey vinaigrette",
  },
  {
    id: 38,
    title: "CAESAR",
    category: "Salads",
    price: 33,
    ingredients:
      "grilled chicken and bacon | romaine lettuce | grana padano cheese | poached egg | Caesar dressing",
  },
  {
    id: 39,
    title: "WITH CHICKEN",
    category: "Salads",
    price: 33,
    ingredients:
      "grilled chicken breast | mixed greens | tomato | cucumber | bell pepper | olives | feta cheese | basil pesto | thousand island dressing",
  },
  {
    id: 40,
    title: "WITH TUNA",
    category: "Salads",
    price: 33,
    ingredients:
      "tuna | romaine lettuce | olives | red onion | anchovies | capers | egg | dressing",
  },
  {
    id: 41,
    title: "WITH BEEF TENDERLOIN AND POMEGRANATE",
    category: "Salads",
    price: 37,
    ingredients:
      "slices of marinated beef tenderloin | mixed greens | cherry tomatoes | pumpkin seeds | pomegranate seeds | lemon vinaigrette",
  },
  {
    id: 42,
    title: "SPAGHETTI CARBONARA",
    category: "Pasta",
    price: 34,
    ingredients:
      "speck | garlic | fresh parsley | grana padano cheese | onion | sauce",
  },
  {
    id: 43,
    title: "SPAGHETTI BOLOGNESE",
    category: "Pasta",
    price: 35,
    ingredients: "bolognese sauce | grana padano cheese",
  },
  {
    id: 44,
    title: "TAGLIATELLE WITH CHICKEN",
    category: "Pasta",
    price: 35,
    ingredients: "cream sauce | gorgonzola",
  },
  {
    id: 45,
    title: "SPAGHETTI SICILIAN",
    category: "Pasta",
    price: 36,
    ingredients:
      "anchovies | onion | sundried tomatoes | grana padano cheese | fresh parsley | garlic",
  },
  {
    id: 46,
    title: "FARFALLE WITH SHRIMPS",
    category: "Pasta",
    price: 36,
    ingredients: "tomato sauce | garlic | chives",
  },
  {
    id: 47,
    title: "ORECCHIETTE WITH BROCCOLI",
    category: "Pasta",
    price: 36,
    ingredients: "broccoli | pistachios | lemon zest",
  },
  {
    id: 48,
    title: "TAGLIATELLE WITH ARTICHOKES",
    category: "Pasta",
    price: 36,
    ingredients:
      "artichokes | pistachios | grana padano cheese | garlic | lemon zest",
  },
  {
    id: 49,
    title: "PENNE WITH BEEF TENDERLOIN",
    category: "Pasta",
    price: 38,
    ingredients: "fresh red pepper | sesame | grana padano cheese | onion",
  },
  {
    id: 30,
    title: "WITH BROCCOLI",
    category: "risotto",
    price: 38,
  },
  {
    id: 31,
    title: "WITH CHICKEN",
    category: "risotto",
    price: 38,
    ingredients: "with chicken and green peas",
  },
  {
    id: 32,
    title: "WITH PRAWNS AND LEEK",
    category: "risotto",
    price: 38,
  },
  {
    id: 33,
    title: "POULTRY TENDERLOINS",
    category: "for kids",
    price: 27,
    ingredients: "cornflake coating | fries | carrot with apple",
  },
  {
    id: 34,
    title: "PIZZA WITH HAM",
    category: "for kids",
    price: 27,
    ingredients: "tomato sauce | mozzarella | ham",
  },
  {
    id: 50,
    title: "LEAF TEA",
    category: "hot drinks",
    price: 10,
    ingredients: "black | green | white | rooibos",
  },
  {
    id: 51,
    title: "ESPRESSO",
    category: "hot drinks",
    price: 9,
  },
  {
    id: 52,
    title: "BLACK COFFEE",
    category: "hot drinks",
    price: 9,
  },
  {
    id: 53,
    title: "WHITE COFFEE",
    category: "hot drinks",
    price: 10,
  },
  {
    id: 54,
    title: "CAPPUCCINO",
    category: "hot drinks",
    price: 11,
  },
  {
    id: 55,
    title: "LATTE MACCHIATO",
    category: "hot drinks",
    price: 13,
  },
  {
    id: 56,
    title: "ICED COFFEE",
    category: "hot drinks",
    price: 17,
  },
  {
    id: 57,
    title: "HOT CHOCOLATE",
    category: "hot drinks",
    price: 17,
  },
  {
    id: 63,
    title: "SPARKLING / STILL WATER CARAFE 0.5 L",
    category: "cold drinks",
    price: 9,
  },
  {
    id: 64,
    title: "SPARKLING / STILL WATER CARAFE 1 L",
    category: "cold drinks",
    price: 13,
  },
  {
    id: 65,
    title: "APPLE / ORANGE JUICE",
    category: "cold drinks",
    price: 9,
  },
  {
    id: 66,
    title: "FRESHLY SQUEEZED JUICE",
    category: "cold drinks",
    price: 15,
    ingredients: "apple | carrot | orange | grapefruit",
  },
  {
    id: 67,
    title: "ON LEMON 0.33 L",
    category: "cold drinks",
    price: 11,
  },

  {
    id: 68,
    title: "APEROL SPRITZ",
    category: "drinks",
    price: 28,
    ingredients: "aperol | prosecco | soda water",
  },
  {
    id: 69,
    title: "MOJITO",
    category: "drinks",
    price: 27,
    ingredients: "white rum | lime | mint syrup | brown sugar | crushed ice",
  },
  {
    id: 70,
    title: "CUBA LIBRE",
    category: "drinks",
    price: 26,
    ingredients: "dark rum | lime | cola",
  },
  {
    id: 71,
    title: "PINA COLADA",
    category: "drinks",
    price: 29,
    ingredients: "white rum | malibu | pineapple syrup | milk | crushed ice",
  },
  {
    id: 72,
    title: "SEX ON THE BEACH",
    category: "drinks",
    price: 28,
    ingredients: "malibu | vodka | peach syrup | grenadine | orange juice",
  },
  {
    id: 73,
    title: "TEQUILA SUNRISE",
    category: "drinks",
    price: 27,
    ingredients: "tequila silver | orange juice | grenadine",
  },
  {
    id: 74,
    title: "STONEHENGE COLLINS",
    category: "drinks",
    price: 29,
    ingredients: "gin | mint liqueur | lemon juice | crushed ice | tonic",
  },
  {
    id: 75,
    title: "VIRGIN MOJITO",
    category: "non-alcoholic drinks",
    price: 23,
    ingredients: "lime | mint syrup | brown sugar | soda water",
  },
  {
    id: 76,
    title: "VIRGIN PINACOLADA",
    category: "non-alcoholic drinks",
    price: 23,
    ingredients: "pineapple syrup | coconut syrup | milk",
  },
  {
    id: 77,
    title: "SUNRISE",
    category: "non-alcoholic drinks",
    price: 23,
    ingredients: "orange juice | grapefruit juice | lemon juice | grenadine",
  },
  {
    id: 78,
    title: "SKY",
    category: "non-alcoholic drinks",
    price: 23,
    ingredients: "orange juice | lime juice | blue curacao | tonic",
  },
  {
    id: 81,
    title: "ZWIERZYNIEC PILS",
    category: "beers",
    price: 13,
    ingredients: "10.50 zł (0,3 l) / 13 zł (0,5 l)",
  },
  {
    id: 82,
    title: "ZWIERZYNIEC WITBIER",
    category: "beers",
    price: 13,
    ingredients: "10.50 zł (0,3 l) / 13 zł (0,5 l)",
  },
  {
    id: 82.5,
    title: "NON-ALCOHOLIC BEER",
    category: "beers",
    price: "13",
    ingredients: "0,5 l",
  },
  {
    id: 83,
    title: "HOMEMADE SEMI-DRY",
    category: "wines",
    price: "11/16",
    ingredients: "red or white 100ml/250ml",
  },
  {
    id: 84,
    title: "CHIANTI",
    category: "wines",
    price: "70",
    ingredients: "red | dry | 0.75 L",
  },
  {
    id: 85,
    title: "NERO D'AVOLA",
    category: "wines",
    price: "70",
    ingredients: "red | dry | 0.75 L",
  },
  {
    id: 86,
    title: "DOLCE NOVELLA",
    category: "wines",
    price: "15/85",
    ingredients: "red | semi-sweet | 100ml / 0.75 L",
  },
  {
    id: 87,
    title: "PROSECCO",
    category: "wines",
    price: "70",
    ingredients: "sparkling | white | dry | 0.75 L",
  },
  {
    id: 88,
    title: "Vodka",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 89,
    title: "Cherry Liqueur",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 90,
    title: "Piolunowka",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 91,
    title: "Apricot Brandy",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 92,
    title: "Walnut Liqueur",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 93,
    title: "WHISKY",
    category: "alcoholic drinks",
    price: "15",
  },
  {
    id: 94,
    title: "GIN",
    category: "alcoholic drinks",
    price: "11",
  },
  {
    id: 95,
    title: "Suweren Vodka",
    category: "alcoholic drinks",
    price: "15",
  },
  {
    id: 96,
    title: "Ovovit Liqueur",
    category: "alcoholic drinks",
    price: "11",
  },
  {
    id: 97,
    title: "JACK DANIEL'S Whiskey",
    category: "alcoholic drinks",
    price: "19",
  },
  {
    id: 98,
    title: "TEQUILA SILVER",
    category: "alcoholic drinks",
    price: "18",
  },
  {
    id: 99,
    title: "TEQUILA GOLD",
    category: "alcoholic drinks",
    price: "19",
  },
  {
    id: 100,
    title: "JAMESON Whiskey",
    category: "alcoholic drinks",
    price: "16",
  },
  {
    id: 101,
    title: "MARTEL VSOP Cognac",
    category: "alcoholic drinks",
    price: "27",
  },
  {
    id: 102,
    title: "Rum",
    category: "alcoholic drinks",
  },
  {
    id: 111,
    title: "Mulled Beer",
    category: "seasonal",
    price: "21",
  },
  {
    id: 112,
    title: "Mulled Wine",
    category: "seasonal",
    price: "20",
  },
];
export default menu;
