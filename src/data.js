const menu = [
  {
    id: 1,
    title: "MARGHERITA",
    category: "pizza",
    price: 29,
    ingredients: "sos pomidorowy | mozzarella",
  },
  {
    id: 2,
    title: "PIECZYWO CZOSNKOWE",
    category: "pizza",
    price: 29,
    ingredients: "oliwa z oliwek | mozzarella | czosnek",
  },
  {
    id: 3,
    title: "PROSCIUTTO",
    category: "pizza",
    price: 34,
    ingredients: "sos pomidorowy | mozzarella | szynka gotowana",
  },
  {
    id: 4,
    title: "SALAMI",
    category: "pizza",
    price: 34,
    ingredients: "sos pomidorowy | mozzarella | salami",
  },
  {
    id: 5,
    title: "POLLO",
    category: "pizza",
    price: 36,
    ingredients:
      "sos pomidorowy | mozzarella | pierś z kurczaka | cebula zwykła",
  },
  {
    id: 6,
    title: "CAPRICCIOSA",
    category: "pizza",
    price: 36,
    ingredients: "sos pomidorowy | mozzarella | szynka gotowana | pieczarki",
  },
  {
    id: 7,
    title: "WŁOSKA",
    category: "pizza",
    price: 36,
    ingredients: "sos pomidorowy | mozzarella | suszone pomidory | gorgonzola",
  },
  {
    id: 8,
    title: "PARMA",
    category: "pizza",
    price: 38,
    ingredients:
      "sos pomidorowy | mozzarella | szynka dojrzewająca | sałata rukola | ser grana padano | pomidorki koktajlowe",
  },
  
  {
    id: 10,
    title: "NAJLEPSZA",
    category: "pizza",
    price: 38,
    ingredients:
      "sos pomidorowy | mozzarella | pomidorki koktajlowe | ser feta | cebula",
  },
  {
    id: 11,
    title: "TONNO",
    category: "pizza",
    price: 38,
    ingredients:
      "sos pomidorowy | mozzarella | tuńczyk | anchois | czerwona cebula",
  },
  {
    id: 12,
    title: "MAMMA MIA",
    category: "pizza",
    price: 38,
    ingredients:
      "sos pomidorowy | mozzarella | ser grana padano | orzeszki piniowe | gruszka | miód",
  },
  {
    id: 13,
    title: "QUATTRO FORMAGGI",
    category: "pizza",
    price: 38,
    ingredients:
      "sos pomidorowy | mozzarella | gorgonzola | ser grana padano | feta",
  },
  {
    id: 14,
    title: "DIAVOLO",
    category: "pizza",
    price: 38,
    ingredients:
      "sos pomidorowy | mozzarella | salami pikantne | oliwki | papryka pepperoni ostra",
  },
  {
    id: 15,
    title: "TOSCANA",
    category: "pizza",
    price: 38,
    ingredients:
      "mozzarella | pieczarki | rukola | karczochy | pomidorki koktajlowe",
  },
  {
    id: 16,
    title: "AFFUMICATA",
    category: "pizza",
    price: 39,
    ingredients:
      "sos pomidorowy | mozzarella | ser wędzony | pierś z kurczaka | salami | cebula",
  },
  {
    id: 17,
    title: "SPINACI",
    category: "pizza",
    price: 39,
    ingredients:
      "sos pomidorowy | mozzarella | szpinak | czosnek | gorgonzola | jajko",
  },
  {
    id: 18,
    title: "PRIMAVERA",
    category: "pizza",
    price: 47,
    ingredients:
      "sos pomidorowy | mozzarella | burrata | szynka wołowa Bresaola | sałata rukola | ser grana padano | pomidorki koktajlowe",
  },
  {
    id: 25,
    title: "KREWETKA NA GRZANCE",
    category: "Startery",
    price: 10,
    ingredients: "pieczywo | krewetki | czosnek | masło",
  },
  {
    id: 26,
    title: "PLACUSZEK Z ŁOSOSIEM",
    category: "Startery",
    price: 12,
    ingredients: "łosoś wędzony | placuszki ziemniaczane | kremowy serek",
  },
  {
    id: 27,
    title: "CARPACCIO Z POLĘDWICY WOŁOWEJ",
    category: "Startery",
    price: 38,
    ingredients: "polędwica wołowa | rukola | kapary | ser grana padano",
  },
  {
    id: 28,
    title: "KREM ZE ŚWIEŻYCH POMIDORÓW",
    category: "Zupy",
    price: 16,
  },
  {
    id: 29,
    title: "ROSÓŁ Z MAKARONEM",
    category: "Zupy",
    price: 16,
  },
  {
    id: 19,
    title: "KURCZAK W PARMEZANIE",
    category: "Dania główne",
    price: 38,
    ingredients: "frytki | sałatka | chrzanowy dresing",
  },
  {
    id: 20,
    title: "SCHAB PO MEDIOLAŃSKU",
    category: "Dania główne",
    price: 41,
    ingredients: "makaron tagliatelle | grillowane pomidorki | ze szpinakiem",
  },
  {
    id: 21,
    title: "PLAŚCIKI POLĘDWICY WOŁOWEJ",
    category: "Dania główne",
    price: 46,
    ingredients:
      "na gorącym talerzu | pomidorki | pieczywo | oliwa z rozmarynem i pieprzem",
  },
  {
    id: 22,
    title: "GULASZ WOŁOWY",
    category: "Dania główne",
    price: 38,
    ingredients: "placki ziemniaczane | sos gulaszowy | kawałki mięsa wołowego",
  },
  {
    id: 23,
    title: "PLACEK ZIEMNIACZANY- 1 SZT.",
    category: "Dania główne",
    price: 10,
    ingredients: "śmietana | cukier",
  },
  {
    id: 24,
    title: "STEK Z POLĘDWICY WOŁOWEJ",
    category: "Dania główne",
    price: 85,
  },
  {
    id: 35,
    title: "CAPRESE",
    category: "sałatki",
    price: 31,
    ingredients:
      "szynka parmeńska | ser mozzarella | pomidor | oliwki | kapary | ser grana padano | czerwona cebula | pesto z bazylii",
  },
  {
    id: 36,
    title: "Z GRUSZKĄ I GORGONZOLĄ",
    category: "sałatki",
    price: 31,
    ingredients:
      "ser gorgonzola | gruszka | rukola | roszponka | pistacje | miodowy winegret",
  },
  {
    id: 37,
    title: "Z BURAKIEM I SEREM OWCZYM",
    category: "sałatki",
    price: 31,
    ingredients:
      "sałata rukola | szpinak baby | burak | ser owczy | orzechy włoskie | miodowy winegret",
  },
  {
    id: 38,
    title: "CESAR",
    category: "sałatki",
    price: 33,
    ingredients:
      "grillowany kurczak i boczek | sałata rzymska | ser grana padano | jajko w koszulce | sos Cesar",
  },
  {
    id: 39,
    title: "Z KURCZAKIEM",
    category: "sałatki",
    price: 33,
    ingredients:
      "grillowana pierś z kurczaka | mix sałat | pomidor | ogórek | papryka | oliwki | ser feta | pesto z bazylii | sos tysiaca wysp",
  },
  {
    id: 40,
    title: "Z TUNCZYKIEM",
    category: "sałatki",
    price: 33,
    ingredients:
      "tuńczyk | sałata rzymska | oliwki | czerwona cebula | anchois | kapary | jajko | sos",
  },
  {
    id: 41,
    title: "PRIMAVERA",
    category: "sałatki",
    price: 37,
    ingredients:
      "burrata | szynka wołowa Bresaola | mix sałat | pomidorki koktajlowe | pestki dyni | pestki granatu | cytrynowy winegret",
  },
  {
    id: 42,
    title: "SPAGHETTI CARBONARA",
    category: "pasta",
    price: 34,
    ingredients:
      "speck | czosnek | świeża natka pietruszki | ser grana padano | cebula | sos",
  },
  {
    id: 43,
    title: "SPAGHETTI BOLOGNESE",
    category: "pasta",
    price: 35,
    ingredients: "sos boloński | ser grana padano",
  },
  {
    id: 44,
    title: "TAGLIATELLE Z KURCZAKIEM",
    category: "pasta",
    price: 35,
    ingredients: "sos śmietanowy | gorgonzola",
  },
  {
    id: 45,
    title: "SPAGHETTI PO SYCYLIJSKU",
    category: "pasta",
    price: 36,
    ingredients:
      "anchois | cebula | suszone pomidory | ser grana padano | świeża natka pietruszki | czosnek",
  },
  {
    id: 46,
    title: "FARFALLE Z KREWETKAMI",
    category: "pasta",
    price: 36,
    ingredients: "sos pomidorowy | czosnek | szczypiorek",
  },
  {
    id: 47,
    title: "ORECCHIETTE Z BROKULAMI",
    category: "pasta",
    price: 36,
    ingredients: "brokuły | ser parmigiano reggiano",
  },
  {
    id: 48,
    title: "TAGLIATELLE Z KARCZOCHAMI",
    category: "pasta",
    price: 36,
    ingredients: "karczochy | orzeszki pistacjowe | skórka cytrynowa",
  },
  {
    id: 49,
    title: "PENNE Z POŁĘDWICĄ WOŁOWĄ",
    category: "pasta",
    price: 38,
    ingredients: "świeża czerwona papryka | sezam | ser grana padano | cebula",
  },
  {
    id: 30,
    title: "Z BROKULAMI",
    category: "risotto",
    price: 38,
  },
  {
    id: 31,
    title: "Z KURCZAKIEM",
    category: "risotto",
    price: 38,
    ingredients: "z kurczakiem i zielonym groszkiem",
  },
  {
    id: 32,
    title: "Z KREWETKAMI I POREM",
    category: "risotto",
    price: 38,
  },
  {
    id: 33,
    title: "POŁĘDWICZKI DROBIOWE",
    category: "dla dzieci",
    price: 27,
    ingredients:
      "panierka z płatków kukurydzianych | frytki | marchewka z jabłkiem",
  },
  {
    id: 34,
    title: "PIZZA Z SZYNKĄ",
    category: "dla dzieci",
    price: 27,
    ingredients: "sos pomidorowy | mozzarella | szynka",
  },
  {
    id: 50,
    title: "HERBATA LIŚCIASTA",
    category: "napoje gorące",
    price: 10,
    ingredients: "czarna | zielona | biała | rooibos",
  },
  {
    id: 51,
    title: "ESPRESSO",
    category: "napoje gorące",
    price: 9,
  },
  {
    id: 52,
    title: "KAWA CZARNA",
    category: "napoje gorące",
    price: 9,
  },
  {
    id: 53,
    title: "KAWA BIAŁA",
    category: "napoje gorące",
    price: 10,
  },
  {
    id: 54,
    title: "CAPPUCINO",
    category: "napoje gorące",
    price: 11,
  },
  {
    id: 55,
    title: "LATTE MACCHIATO",
    category: "napoje gorące",
    price: 13,
  },
  {
    id: 56,
    title: "KAWA MROŻONA Z LODAMI",
    category: "napoje gorące",
    price: 17,
  },
  {
    id: 57,
    title: "GORĄCA CZEKOLADA",
    category: "napoje gorące",
    price: 17,
  },
  {
    id: 63,
    title: "WODA GAZOWANA / NIEGAZOWANA KARAFKA 0,5 L",
    category: "napoje zimne",
    price: 9,
  },
  {
    id: 64,
    title: "WODA GAZOWANA / NIEGAZOWANA KARAFKA 1 L",
    category: "napoje zimne",
    price: 13,
  },
  {
    id: 65,
    title: "SOK JABŁKO / POMARAŃCZA",
    category: "napoje zimne",
    price: 9,
  },
  {
    id: 66,
    title: "ŚWIEŻO WYCISKANY SOK",
    category: "napoje zimne",
    price: 15,
    ingredients: "jabłko | marchew | pomarańcza | grejpfrut",
  },
  {
    id: 67,
    title: "ON LEMON 0,33 L",
    category: "napoje zimne",
    price: 11,
  },
  {
    id: 68,
    title: "APEROL SPRITZ",
    category: "drinki",
    price: 28,
    ingredients: "aperol | prosecco | woda gazowana",
  },
  {
    id: 69,
    title: "MOJITO",
    category: "drinki",
    price: 27,
    ingredients:
      "biały rum | limonka | syrop miętowy | brązowy cukier | kruszony lód",
  },
  {
    id: 70,
    title: "CUBA LIBRE",
    category: "drinki",
    price: 26,
    ingredients: "czarny rum | limonka | cola",
  },
  {
    id: 71,
    title: "PINA COLADA",
    category: "drinki",
    price: 29,
    ingredients: "biały rum | malibu | syrop ananasowy | mleko | kruszony lód",
  },
  {
    id: 72,
    title: "SEX ON THE BEACH",
    category: "drinki",
    price: 28,
    ingredients:
      "malibu | wódka | syrop brzoskwiniowy | grenadyna | sok pomarańczowy",
  },
  {
    id: 73,
    title: "TEQUILA SUNRISE",
    category: "drinki",
    price: 27,
    ingredients: "tequila silver | sok pomarańczowy | grenadyna",
  },
  {
    id: 74,
    title: "STONEHENGE COLLINS",
    category: "drinki",
    price: 29,
    ingredients: "gin | likier miętowy | sok z cytryny | kruszony lód | tonic",
  },
  {
    id: 75,
    title: "VIRGIN MOJITO",
    category: "drinki bezalkoholowe",
    price: 23,
    ingredients: "limonka | syrop miętowy | brązowy cukier | woda gazowana",
  },
  {
    id: 76,
    title: "VIRGIN PINACOLADA",
    category: "drinki bezalkoholowe",
    price: 23,
    ingredients: "syrop ananasowy | syrop kokosowy | mleko",
  },
  {
    id: 77,
    title: "SUNRISE",
    category: "drinki bezalkoholowe",
    price: 23,
    ingredients:
      "sok pomarańczowy | sok grejpfrutowy | sok cytrynowy | grenadyna",
  },
  {
    id: 78,
    title: "SKY",
    category: "drinki bezalkoholowe",
    price: 23,
    ingredients: "sok pomarańczowy | sok z limonki | blue curacao | tonic",
  },
  {
    id: 81,
    title: "ZWIERZYNIEC PILS",
    category: "piwa",
    price: 13,
    ingredients: "10.50 zł (0,3 l) / 13 zł (0,5 l)",
  },
  {
    id: 82,
    title: "ZWIERZYNIEC WITBIER",
    category: "piwa",
    price: 13,
    ingredients: "10.50 zł (0,3 l) / 13 zł (0,5 l)",
  },
  {
    id: 82.5,
    title: "PIWO 0%",
    category: "piwa",
    price: "13",
    ingredients: "0,5 l",
  },
  {
    id: 83,
    title: "DOMOWE POLWYTRAWNE",
    category: "wina",
    price: "11/16",

    ingredients: "czerwone lub białe  100ml/250ml",
  },
  {
    id: 84,
    title: "CHIANTI",
    category: "wina",
    price: "70",
    ingredients: "czerwone | wytrawne | 0,75 L",
  },
  {
    id: 85,
    title: "NERO D'AVOLA",
    category: "wina",
    price: "70",
    ingredients: "czerwone | wytrawne | 0,75 L",
  },
  {
    id: 86,
    title: "DOLCE NOVELLA",
    category: "wina",
    price: "15/85",
    ingredients: "czerwone | półsłodkie | 100ml / 0,75 L",
  },
  {
    id: 87,
    title: "PROSECCO",
    category: "wina",
    price: "70",
    ingredients: "musujące | białe | wytrawne | 0,75 L",
  },
  {
    id: 88,
    title: "Wódka",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 89,
    title: "Wiśniówka",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 90,
    title: "Piołunówka",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 91,
    title: "Morelówka",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 92,
    title: "Orzechówka",
    category: "Baczewski",
    price: "11",
  },
  {
    id: 93,
    title: "WHISKY",
    category: "napoje alkoholowe",
    price: "15",
  },
  {
    id: 94,
    title: "GIN",
    category: "napoje alkoholowe",
    price: "11",
  },
  {
    id: 95,
    title: "Wódka Suweren",
    category: "napoje alkoholowe",
    price: "15",
  },
  {
    id: 96,
    title: "Ovovit Likier",
    category: "napoje alkoholowe",
    price: "11",
  },
  {
    id: 97,
    title: "JACK DANIEL'S Whiskey",
    category: "napoje alkoholowe",
    price: "19",
  },
  {
    id: 98,
    title: "TEQUILA SILVER",
    category: "napoje alkoholowe",
    price: "18",
  },
  {
    id: 99,
    title: "TEQUILA GOLD",
    category: "napoje alkoholowe",
    price: "19",
  },
  {
    id: 100,
    title: "JAMESON Whiskey",
    category: "napoje alkoholowe",
    price: "16",
  },
  {
    id: 101,
    title: "MARTEL VSOP Koniak",
    category: "napoje alkoholowe",
    price: "27",
  },
  {
    id: 102,
    title: "Rum",
    category: "napoje alkoholowe",
  },
  {
    id: 111,
    title: "Grzane piwo",
    category: "sezonowe",
    price: "21",
  },
  {
    id: 112,
    title: "Grzane wino",
    category: "sezonowe",
    price: "20",
  },
];
export default menu;
