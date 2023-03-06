/*
 * All data gathered from a modified version of polarstoat/stardew-crop-data
 */

// Crop List
var crops = {
  "amaranth": {
    "name": "Amaranth",
    "url": "http://stardewvalleywiki.com/Amaranth",
    "img": "amaranth.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 150,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "grape": {
    "name": "Grape",
    "url": "http://stardewvalleywiki.com/Grape",
    "img": "grape.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 80,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "hops": {
    "name": "Hops",
    "url": "http://stardewvalleywiki.com/Hops",
    "img": "hops.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 1
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 25,
      "keg": 300,
      "jarType": "Pickles",
      "kegType": "Pale Ale"
    }
  },
  "pineapple": {
    "name": "Pineapple",
    "url": "http://stardewvalleywiki.com/Pineapple",
    "img": "pineapple.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 400,
      "specialLoc": "Island Trader",
      "specialUrl": "http://stardewvalleywiki.com/Island_Trader"
    },
    "growth": {
      "initial": 14,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 300,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "sweetgemberry": {
    "name": "Sweet Gem Berry",
    "url": "http://stardewvalleywiki.com/Sweet_Gem_Berry",
    "img": "sweetgemberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 24,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 3000
    }
  },
  "tealeaves": {
    "name": "Tea Leaves",
    "url": "http://stardewvalleywiki.com/Tea_Leaves",
    "img": "tealeaves.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 20,
      "regrow": 1
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50,
      "keg": 100,
      "jarType": "Pickles",
      "kegType": "Tea"
    }
  },
  "fairyrose": {
    "name": "Fairy Rose",
    "url": "http://stardewvalleywiki.com/Fairy_Rose",
    "img": "fairyrose.png",
    "seeds": {
      "pierre": 200,
      "joja": 250,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 290
    }
  },
  "tulip": {
    "name": "Tulip",
    "url": "http://stardewvalleywiki.com/Tulip",
    "img": "tulip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 30
    }
  },
  "bluejazz": {
    "name": "Blue Jazz",
    "url": "http://stardewvalleywiki.com/Blue_Jazz",
    "img": "bluejazz.png",
    "seeds": {
      "pierre": 30,
      "joja": 37,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
    }
  },
  "sunflower": {
    "name": "Sunflower",
    "url": "http://stardewvalleywiki.com/Sunflower",
    "img": "sunflower.png",
    "seeds": {
      "pierre": 200,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
    }
  },
  "coffeebean": {
    "name": "Coffee Bean",
    "url": "http://stardewvalleywiki.com/Coffee_Bean",
    "img": "coffeebean.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 2500,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 10,
      "regrow": 2
    },
    "produce": {
      "extra": 3,
      "extraPerc": 1,
      "price": 15,
      "keg": 150 / 5,
      "kegType": "Coffee"
    }
  },
  "poppy": {
    "name": "Poppy",
    "url": "http://stardewvalleywiki.com/Poppy",
    "img": "poppy.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140
    }
  },
  "summerspangle": {
    "name": "Summer Spangle",
    "url": "http://stardewvalleywiki.com/Summer_Spangle",
    "img": "summerspangle.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
    }
  },
  "parsnip": {
    "name": "Parsnip",
    "url": "http://stardewvalleywiki.com/Parsnip",
    "img": "parsnip.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "greenbean": {
    "name": "Green Bean",
    "url": "http://stardewvalleywiki.com/Green_Bean",
    "img": "greenbean.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 40,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "cauliflower": {
    "name": "Cauliflower",
    "url": "http://stardewvalleywiki.com/Cauliflower",
    "img": "cauliflower.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 175,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "potato": {
    "name": "Potato",
    "url": "http://stardewvalleywiki.com/Potato",
    "img": "potato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 80,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "garlic": {
    "name": "Garlic",
    "url": "http://stardewvalleywiki.com/Garlic",
    "img": "garlic.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "taroroot": {
    "name": "Taro Root",
    "url": "http://stardewvalleywiki.com/Taro_Root",
    "img": "taroroot.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 24,
      "specialLoc": "Island Trader",
      "specialUrl": "http://stardewvalleywiki.com/Island_Trader"
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "kale": {
    "name": "Kale",
    "url": "http://stardewvalleywiki.com/Kale",
    "img": "kale.png",
    "seeds": {
      "pierre": 70,
      "joja": 87,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 110,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "unmilledrice" : {
    "name": "Unmilled Rice",
    "url": "http://stardewvalleywiki.com/Unmilled_Rice",
    "img": "unmilledrice.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.11,
      "price": 30,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "rhubarb": {
    "name": "Rhubarb",
    "url": "http://stardewvalleywiki.com/Rhubarb",
    "img": "rhubarb.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 220,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "melon": {
    "name": "Melon",
    "url": "http://stardewvalleywiki.com/Melon",
    "img": "melon.png",
    "seeds": {
      "pierre": 80,
      "joja": 100,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 250,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "tomato": {
    "name": "Tomato",
    "url": "http://stardewvalleywiki.com/Tomato",
    "img": "tomato.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.05,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "blueberry": {
    "name": "Blueberry",
    "url": "http://stardewvalleywiki.com/Blueberry",
    "img": "blueberry.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 4
    },
    "produce": {
      "extra": 2,
      "extraPerc": 1,
      "price": 50,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "hotpepper": {
    "name": "Hot Pepper",
    "url": "http://stardewvalleywiki.com/Hot_Pepper",
    "img": "hotpepper.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.03,
      "price": 40,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "wheat": {
    "name": "Wheat",
    "url": "http://stardewvalleywiki.com/Wheat",
    "img": "wheat.png",
    "seeds": {
      "pierre": 10,
      "joja": 12,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25,
      "keg": 200,
      "jarType": "Pickles",
      "kegType": "Beer"
    }
  },
  "radish": {
    "name": "Radish",
    "url": "http://stardewvalleywiki.com/Radish",
    "img": "radish.png",
    "seeds": {
      "pierre": 40,
      "joja": 50,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "redcabbage": {
    "name": "Red Cabbage",
    "url": "http://stardewvalleywiki.com/Red_Cabbage",
    "img": "redcabbage.png",
    "seeds": {
      "pierre": 100,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 260,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "starfruit": {
    "name": "Starfruit",
    "url": "http://stardewvalleywiki.com/Starfruit",
    "img": "starfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 400,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 750,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "corn": {
    "name": "Corn",
    "url": "http://stardewvalleywiki.com/Corn",
    "img": "corn.png",
    "seeds": {
      "pierre": 150,
      "joja": 187,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 14,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 50,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "eggplant": {
    "name": "Eggplant",
    "url": "http://stardewvalleywiki.com/Eggplant",
    "img": "eggplant.png",
    "seeds": {
      "pierre": 20,
      "joja": 25,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.002,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "artichoke": {
    "name": "Artichoke",
    "url": "http://stardewvalleywiki.com/Artichoke",
    "img": "artichoke.png",
    "seeds": {
      "pierre": 30,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 160,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "pumpkin": {
    "name": "Pumpkin",
    "url": "http://stardewvalleywiki.com/Pumpkin",
    "img": "pumpkin.png",
    "seeds": {
      "pierre": 100,
      "joja": 125,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 320,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "bokchoy": {
    "name": "Bok Choy",
    "url": "http://stardewvalleywiki.com/Bok_Choy",
    "img": "bokchoy.png",
    "seeds": {
      "pierre": 50,
      "joja": 62,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "yam": {
    "name": "Yam",
    "url": "http://stardewvalleywiki.com/Yam",
    "img": "yam.png",
    "seeds": {
      "pierre": 60,
      "joja": 75,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 160,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "cranberries": {
    "name": "Cranberries",
    "url": "http://stardewvalleywiki.com/Cranberries",
    "img": "cranberries.png",
    "seeds": {
      "pierre": 240,
      "joja": 300,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 75,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "beet": {
    "name": "Beet",
    "url": "http://stardewvalleywiki.com/Beet",
    "img": "beet.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 20,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 100,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "ancientfruit": {
    "name": "Ancient Fruit",
    "url": "http://stardewvalleywiki.com/Ancient_Fruit",
    "img": "ancientfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 450,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 28,
      "regrow": 7
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 550,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "cactusfruit": {
    "name": "Cactus Fruit",
    "url": "http://stardewvalleywiki.com/Cactus_Fruit",
    "img": "cactusfruit.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 150,
      "specialLoc": "Oasis",
      "specialUrl": "http://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 12,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 75,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "strawberry": {
    "name": "Strawberry",
    "url": "http://stardewvalleywiki.com/Strawberry",
    "img": "strawberry.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Egg Festival",
      "specialUrl": "http://stardewvalleywiki.com/Egg_Festival"
    },
    "growth": {
      "initial": 8,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.02,
      "price": 120,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "camellia": {
    "name": "Camellia",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "camellia.png",
    "seeds": {
      "pierre": 60,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.02,
      "price": 50
  },
 },
  "allium": {
    "name": "Allium",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "allium.png",
    "seeds": {
      "pierre": 60,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 50
  },
 },
  "carnation": {
    "name": "Carnation",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "carnation.png",
    "seeds": {
      "pierre": 45,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140
  },
 },
 "chrysanthemum": {
    "name": "Chrysanthemum",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "chrysanthemum.png",
    "seeds": {
      "pierre": 15,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60
  },
 },
 "clematis": {
    "name": "Clematis",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "clematis.png",
    "seeds": {
      "pierre": 50,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0.2,
      "price": 60
  },
 },
 "dahlia": {
    "name": "Dahlia",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "dahlia.png",
    "seeds": {
      "pierre": 20,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 75
  },
 },
 "delphinium": {
    "name": "Delphinium",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "delphinium.png",
    "seeds": {
      "pierre": 50,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 160
  },
 },
 "englishrose": {
    "name": "English Rose",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "englishrose.png",
    "seeds": {
      "pierre": 100,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 290
  },
 },
 "freesia": {
    "name": "Freesia",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "freesia.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 150
  },
 },
 "geranium": {
    "name": "Geranium",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "geranium.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140
  },
 },
 "herbalpeony": {
    "name": "Herbal Peony",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "herbalpeony.png",
    "seeds": {
      "pierre": 50,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 240
  },
 },
 "hyacinth": {
    "name": "Hyacinth",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "hyacinth.png",
    "seeds": {
      "pierre": 20,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 60
  },
 },
 "hydrangea": {
    "name": "Hydrangea",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "hydrangea.png",
    "seeds": {
      "pierre": 50,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 170
  },
 },
 "iris": {
    "name": "Iris",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "iris.png",
    "seeds": {
      "pierre": 60,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 200
  },
 },
 "lavender": {
    "name": "Lavender",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "lavender.png",
    "seeds": {
      "pierre": 50,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 220
  },
 },
 "lilac": {
    "name": "Lilac",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "lilac.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 180
  },
 },
 "lily": {
    "name": "Lily",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "lily.png",
    "seeds": {
      "pierre": 35,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 150
  },
 },
 "lotus": {
    "name": "Lotus",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "lotus.png",
    "seeds": {
      "pierre": 40,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 5
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 70
  },
 },
 "petunia": {
    "name": "Petunia",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "petunia.png",
    "seeds": {
      "pierre": 25,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 80
  },
 },
 "violet": {
    "name": "Violet",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "violet.png",
    "seeds": {
      "pierre": 20,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90
  },
 },
 "wisteria": {
    "name": "Wisteria",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "wisteria.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 20,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.1,
      "price": 280
  },
 },
  "adzukibean": {
    "name": "Adzuki Bean",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "adzukibean.png",
    "seeds": {
      "pierre": 50,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 90,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "aloe": {
    "name": "Aloe",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "aloe.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 100,
      "specialLoc": "Clinic",
      "specialUrl": "https://stardewvalleywiki.com/Harvey%27s_Clinic"
    },
    "growth": {
      "initial": 9,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 140,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "asparagus": {
    "name": "Asparagus",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "asparagus.png",
    "seeds": {
      "pierre": 20,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "bamboo": {
    "name": "Bamboo",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "bamboo.png",
    "seeds": {
      "pierre": 150,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 5
    },
    "produce": {
      "extra": 2,
      "extraPerc": 1,
      "price": 55,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "barley": {
    "name": "Barley",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "barley.png",
    "seeds": {
      "pierre": 10,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 25,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
    "basil": {
    "name": "Basil",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "basil.png",
    "seeds": {
      "pierre": 20,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      "price": 35,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "bellpepper": {
    "name": "Bell Pepper",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "bellpepper.png",
    "seeds": {
      "pierre": 130,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 70,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
    "blackberry": {
    "name": "Blackberry",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "blackberry.png",
    "seeds": {
      "pierre": 60,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 20,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "blueagave": {
    "name": "Blue Agave",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "blueagave.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 200,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 12,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 300,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "broccoli": {
    "name": "Broccoli",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "broccoli.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 120,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "buckwheat": {
    "name": "Buckwheat",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "buckwheat.png",
    "seeds": {
      "pierre": 10,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 25,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "butternutsquash": {
    "name": "Butternut Squash",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "butternutsquash.png",
    "seeds": {
      "pierre": 180,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 440,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "cabbage": {
    "name": "Cabbage",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "cabbage.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 120,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "cactusflower": {
    "name": "Cactus Flower",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "cactusflower.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1300,
      "specialLoc": "Oasis",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 24,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 600,
    }
  },
    "carrot": {
    "name": "Carrot",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "carrot.png",
    "seeds": {
      "pierre": 50,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 65,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "cassava": {
    "name": "Cassava",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "cassava.png",
    "seeds": {
      "pierre": 60,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 80,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "celery": {
    "name": "Celery",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "celery.png",
    "seeds": {
      "pierre": 55,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 70,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "chickpea": {
    "name": "Chickpea",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "chickpea.png",
    "seeds": {
      "pierre": 200,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 5
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 55,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "chives": {
    "name": "Chives",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "chives.png",
    "seeds": {
      "pierre": 20,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 35,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "cotton": {
    "name": "cotton",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "cotton.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 7,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 65,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "cucumber": {
    "name": "Cucumber",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "cucumber.png",
    "seeds": {
      "pierre": 65,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 11,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 90,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "durum": {
    "name": "Durum",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "durum.png",
    "seeds": {
      "pierre": 10,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 25,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "elderberry": {
    "name": "Elderberries",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "elderberry.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 20,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "fennel": {
    "name": "Fennel",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "fennel.png",
    "seeds": {
      "pierre": 20,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 5,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 35,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "ginger": {
    "name": "Ginger",
    "url": "https://stardewvalleywiki.com/Ginger",
    "img": "ginger.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 35,
      "specialLoc": "Oasis (fixed Willy's boat) ",
      "specialUrl": "https://stardewvalleywiki.com/Oasis"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 60,
      "jarType": "Pickles",
    }
  },
  "ginseng": {
    "name": "Ginseng",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "ginseng.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Dwarf",
      "specialUrl": "https://stardewvalleywiki.com/Dwarf"
    },
    "growth": {
      "initial": 30,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 2000,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "gooseberry": {
    "name": "Gooseberries",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "gooseberry.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 20,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "greenpeas": {
    "name": "Green Peas",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "greenpeas.png",
    "seeds": {
      "pierre": 50,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 30,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "habanero": {
    "name": "Habanero",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "habanero.png",
    "seeds": {
      "pierre": 130,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 120,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "jalapeno": {
    "name": "Jalapeno",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "jalapeno.png",
    "seeds": {
      "pierre": 130,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.2,
      "price": 40,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "juniper": {
    "name": "Juniper Berries",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "juniper.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 13,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 15,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "kidneybean": {
    "name": "Kidney Bean",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "kidneybean.png",
    "seeds": {
      "pierre": 180,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 35,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "kiwi": {
    "name": "Kiwi",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "kiwi.png",
    "seeds": {
      "pierre": 300,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 21,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0.1,
      "price": 100,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "lettuce": {
    "name": "Lettuce",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "lettuce.png",
    "seeds": {
      "pierre": 55,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 6,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 65,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "licoriceroot": {
    "name": "Licorice Root",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "licoriceroot.png",
    "seeds": {
      "pierre": 100,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 135,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "maguey": {
    "name": "Maguey",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "maguey.png",
    "seeds": {
      "pierre": 100,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 170,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "mint": {
    "name": "Mint",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "mint.png",
    "seeds": {
      "pierre": 30,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 25,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "muskmelon": {
    "name": "Muskmelon",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "muskmelon.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 180,
      "jarType": "Jelly",
      "kegType": "Wine"
    }
  },
  "navybean": {
    "name": "Navy Bean",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "navybean.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 3
    },
    "produce": {
      "extra": 1,
      "extraPerc": 1,
      "price": 15,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "oat": {
    "name": "Oat",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "oat.png",
    "seeds": {
      "pierre": 10,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 25,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "okra": {
    "name": "Okra",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "okra.png",
    "seeds": {
      "pierre": 160,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 10,
      "regrow": 4
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 60,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "onion": {
    "name": "Onion",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "onion.png",
    "seeds": {
      "pierre": 80,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 8,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 115,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "oregano": {
    "name": "Oregano",
    "url": "https://mouseypounds.github.io/ppja-ref/crops.html",
    "img": "oregano.png",
    "seeds": {
      "pierre": 30,
      "joja": 0,
      "special": 0,
      "specialLoc": "",
      "specialUrl": ""
    },
    "growth": {
      "initial": 4,
      "regrow": 0
    },
    "produce": {
      "extra": 1,
      "extraPerc": 0,
      "price": 50,
      "jarType": "Pickles",
      "kegType": "Juice"
    }
  },
  "springseeds": {
    "name": "Spring Seeds",
    "url": "http://stardewvalleywiki.com/Spring_Seeds",
    "img": "springseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Wild Horseradish + Daffodil + Leek + Dandelion) / 4
      "price": (50 + 30 + 60 + 40) / 4
    },
    "isWildseed": true
  },
  "summerseeds": {
    "name": "Summer Seeds",
    "url": "http://stardewvalleywiki.com/Summer_Seeds",
    "img": "summerseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Spice Berry + Grape + Sweet Pea) / 3
      "price": (80 + 80 + 50) / 3,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "isWildseed": true
  },
  "fallseeds": {
    "name": "Fall Seeds",
    "url": "http://stardewvalleywiki.com/Fall_Seeds",
    "img": "fallseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Blackberry + Common Mushroom + Hazelnut + Wild Plum) / 4
      "price": (20 + 40 + 90 + 80) / 4,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "isWildseed": true
  },
  "winterseeds": {
    "name": "Winter Seeds",
    "url": "http://stardewvalleywiki.com/Winter_Seeds",
    "img": "winterseeds.png",
    "seeds": {
      "pierre": 0,
      "joja": 0,
      "special": 1000,
      "specialLoc": "Travelling Cart",
      "specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
    },
    "growth": {
      "initial": 7,
      "regrow": 0
    },
    "produce": {
      "extra": 0,
      "extraPerc": 0,
      // (Crocus + Crystal Fruit + Snow Yam + Winter Root) / 4
      "price": (60 + 150 + 100 + 70) / 4,
      "jarType": "Jelly",
      "kegType": "Wine"
    },
    "isWildseed": true
  },
};
