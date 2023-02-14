export default class Room {

    whatsInTheRoom(hero) {
        if (Math.round(Math.random() * 4) + 1 == 5) {
            return 'empty';
        } else if (Math.round(Math.random() * 4) + 1 == 4) {
            return itemFunction();
        } else {
            if (hero.totalAtributes <= 30) {
                let monster = createSlime();
                fightOrRunFunc(monster);
            }
        }
    }
}

function itemFunction(hero) {
    let item = Math.round(Math.random() * 10);
};

let weapons = {
    1: {
        weapon: ["dagger", (() => {
            if (hero.role === 'rogue') {
                return 10;
            } else {
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

function defineItems(randomW, randomP, randomItem) {
    let items = {
        1: randomPotion(randomP),
        2: randomWeapon(randomW),
        3: 'random thing1',
        4: 'random thing2'
    };
    return items[randomItem];
}

function randomNum(numOfVariables) {
    return Math.floor(Math.random() * numOfVariables) + 1;
}

function randomPotion(randomN) {
    return potions[randomN];
}

function randomWeapon(randomN) {
    // let randomWeapon = Math.floor(Math.random() * 2) + 1;
    return weapons[randomN];
}

function getWeapon(hero, weapon) {
    hero.ap -= hero.weapon[1];
    delete hero.weapon;
    hero.weapon = weapon;
    hero.ap += hero.weapon[1];
}


  // weapon1: ["dagger", (() => {
  //   if (hero.role === 'rogue') { // this should work.  Just check items['weapon'][1] and then + or - to equip or drop.
  //     return 10;
  //   } else {
  //     return 3;
  //   }
  // })()],
  // weapon2: ["sword", (() => {
  //   if (hero.role === 'warrior') { // this should work.  Just check items['weapon'][1] and then + or - to equip or drop.
  //     return 10;
  //   } else {
  //     return 3;
  //   }
  // })()],
  // weapon3: ["staff", (() => {
  //   if (hero.role === 'mage') { // this should work.  Just check items['weapon'][1] and then + or - to equip or drop.  To drop or replace a weapon run the method 'delete hero.weapon' then equip new weapon.
  //     return 10;
  //   } else {
  //     return 3;
  //   }
  // })()]