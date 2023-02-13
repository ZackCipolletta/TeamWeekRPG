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
  1: ["dagger", (() => {
    if (hero.role === 'rogue') {
      return 10;
    } else {
      return 3;
    }
  })()],
  2: ["sword", (() => {
    if (hero.role === 'warrior') {
      return 10;
    } else {
      return 3;
    }
  })()],
  3: ["staff", (() => {
    if (hero.role === 'mage') {
      return 10;
    } else {
      return 3;
    }
  })()]
};

let potions = {
  1: ["health", (() => {
    if (hero.role === 'rogue') {
      return 10;
    } else {
      return 3;
    }
  })()],
  2: ["strength", (() => {
    if (hero.role === 'warrior') {
      return 10;
    } else {
      return 3;
    }
  })()],
  3: ["magic", (() => {
    if (hero.role === 'mage') {
      return 10;
    } else {
      return 3;
    }
  })()]
};

function defineItems(random) {
  let items = {
    1: "health potion",
    2: "strength potion",
    3: "empty boot",
    4: "key",
    5: "food",
    weapon: randomWeapon(random),
    // weapon: randomWeapon(Math.round(Math.random() * 2) + 1),
    6: "luck potion"
  };
  return items;
  }

function randomNum() {
  return Math.floor(Math.random() * 3) + 1
  }


// function getItems(hero) {
//   let items = defineItems(randomNum());
//     hero.items.push(items['weapon'])
// }
  

// items['weapon'];


function randomWeapon(randomNum) {
  // let randomWeapon = Math.floor(Math.random() * 2) + 1;
  return weapons[randomNum];
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