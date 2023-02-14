function whatsInTheRoom(hero) {
  if (randomNum(5) + 1 === 5) {
    console.log('empty'); // delete
    return 'empty';
  } else if (Math.round(Math.random() * 4) + 1 === 4) {
    let item = defineItems(hero, randomNum(3), randomNum(3), randomNum(4)); // assiging to a variable makes it easier to pass into another function.
    console.log(item[1]) // delete
    return item;
  } else {
    if (hero.totalAtributes <= 30) {
      let monster = createSlime(); // makes it easier to pass the monster object into other functions.
      console.log(monster); // delete
      fightOrRunFunc(monster);
    }
  }
}

let weapons = {
  1: {
    weapon: ["dagger", (() => {
      if (hero.role === 'rogue') {
        let attack = dagerFunc(hero);
        return attack;
      } else {
        let attack = daggerFunc(hero);
        return 3;
      }
    })()]
  },
  2: {
    weapon:
      ["sword", (() => {
        if (hero.role === 'warrior') {
          return 10;
        } else {
          return 3;
        }
      })()]
  },
  3: {
    weapon: ["staff", (() => {
      if (hero.role === 'mage') {
        return 10;
      } else {
        return 3;
      }
    })()]
  }
};


let potions = {
  1: {
    potion: ["health", (() => {
      if (hero.role === 'rogue') {
        return 10;
      } else {
        return 3;
      }
    })()]
  },
  2: {
    potion: ["strength", (() => {
      if (hero.role === 'warrior') {
        return 10;
      } else {
        return 3;
      }
    })()]
  },
  3: {
    potion: ["magic", (() => {
      if (hero.role === 'mage') {
        return 10;
      } else {
        return 3;
      }
    })()]
  }
};

function defineItems(hero, randomW, randomP, randomItem) { // needs 3 variables in order to generate and return a random item from the weapon and potion objects.  Third variable selects which item from the item array is returned after random potion and random weapon are generated.
  let items = {
    1: randomPotion(hero, randomP),
    2: randomWeapon(hero, randomW),
    3: 'random thing1',
    4: 'random thing2'
  };
  return items[randomItem];
}

function randomNum(numOfVariables) { // RNG function used repeatedly.
  return Math.floor(Math.random() * numOfVariables) + 1;
}

function randomPotion(hero, randomN) { // Takes random number func as paramter to return a random potion from the potions object.
  let potion = potions(hero)[randomN]
  return potions[randomN];
}

function randomWeapon(randomN) { // same as potions, for the weapons object.
  return weapons[randomN];
}

function getWeapon(hero, weapon) {  // used to equip a new weapon when a hero finds a weapon and wants to change out for current weapon.
  hero.ap -= hero.weapon[1];
  delete hero.weapon;
  hero.weapon = weapon;
  hero.ap += hero.weapon[1];
}