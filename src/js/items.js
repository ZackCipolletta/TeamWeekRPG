export function randomPotion(hero, randomN) { // Takes random number func as paramter to return a random potion from the potions object.
  let potions = {
    1: {
      type: "potion",
      potion: ["swift", (() => {
        if (hero.role === 'rogue') {
          return (7 + (hero.heroLevel * 1.5));
        } else {
          return (2 + hero.heroLevel -1);
        }
      })()]
    },
    2: {
      type: "potion",
      potion: ["strength", (() => {
        if (hero.role === 'warrior') {
          return (7 + (hero.heroLevel * 1.5));
        } else {
          return (2 + hero.heroLevel -1);
        }
      })()]
    },
    3: {
      type: "potion",
      potion: ["magic", (() => {
        if (hero.role === 'mage') {
          return (7 + (hero.heroLevel * 1.5));
        } else {
          return (2 + hero.heroLevel -1);
        }
      })()]
    }
  };
  return potions[randomN];
}

export function randomWeapon(hero, randomN) { // same as potions, for the weapons object.
  let weapons = {
    1: {
      type: "weapon",
      weapon: ["dagger", (() => {
        if (hero.role === 'rogue') {
          return Math.floor(hero.heroLevel * 1.2 * 4);
        } else {
          return Math.floor(hero.heroLevel * 1.2 * 2);
        }
      })()]
    },
    2: {
      type: "weapon",
      weapon:
        ["sword", (() => {
          if (hero.role === 'warrior') {
            return Math.floor(hero.heroLevel * 1.2 * 4);
          } else {
            return Math.floor(hero.heroLevel * 1.2 * 2);
          }
        })()]
    },
    3: {
      type: "weapon",
      weapon: ["staff", (() => {
        if (hero.role === 'mage') {
          return Math.floor(hero.heroLevel * 1.2 * 4);
        } else {
          return Math.floor(hero.heroLevel * 1.2 * 2);
        }
      })()]
    }
  };
  return weapons[randomN];
}
