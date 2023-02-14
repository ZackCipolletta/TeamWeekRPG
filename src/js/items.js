export function randomPotion(hero, randomN) { // Takes random number func as paramter to return a random potion from the potions object.
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
  return potions[randomN];
}


export function randomWeapon(randomN) { // same as potions, for the weapons object.
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
  return weapons[randomN];
}