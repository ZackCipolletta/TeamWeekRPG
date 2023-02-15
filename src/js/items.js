export function randomPotion(hero, randomN) { // Takes random number func as paramter to return a random potion from the potions object.
  let potions = {
    1: {
      potion: ["swift", (() => {
        if (hero.role === 'rogue') {
          return (7 + (hero.level * 1.5));
        } else {
          return (2 + hero.level -1);
        }
      })()]
    },
    2: {
      potion: ["strength", (() => {
        if (hero.role === 'warrior') {
          return (7 + (hero.level * 1.5));
        } else {
          return (2 + hero.level -1);
        }
      })()]
    },
    3: {
      potion: ["magic", (() => {
        if (hero.role === 'mage') {
          return (7 + (hero.level * 1.5));
        } else {
          return (2 + hero.level -1);
        }
      })()]
    }
  };
  return potions[randomN];
}

export function randomWeapon(hero, randomN) { // same as potions, for the weapons object.
  let weapons = {
    1: {
      weapon: ["dagger", (() => {
        if (hero.role === 'rogue') {
          return Math.floor(hero.level * 1.2 * 4);
        } else {
          return Math.floor(hero.level * 1.2 * 2);
        }
      })()]
    },
    2: {
      weapon:
        ["sword", (() => {
          if (hero.role === 'warrior') {
            return Math.floor(hero.level * 1.2 * 4);
          } else {
            return Math.floor(hero.level * 1.2 * 2);
          }
        })()]
    },
    3: {
      weapon: ["staff", (() => {
        if (hero.role === 'mage') {
          return Math.floor(hero.level * 1.2 * 4);
        } else {
          return Math.floor(hero.level * 1.2 * 2);
        }
      })()]
    }
  };
  return weapons[randomN];
}