import { randomWeapon, randomPotion } from "./items";
import { heroLevelRandomNumber, randomMonster } from "./monster.js";

export function whatsInTheRoom(hero) {
  // let number = randomNumFunc(1, 5);
  let number = randomNumFunc(1, 5);
  if (number === 5) {
    console.log('empty'); // delete
    return 'empty';
  } else if (number === 4) {
    return defineItems(hero, randomNumFunc(1, 3), randomNumFunc(1, 3), randomNumFunc(1, 3)); // assiging to a variable makes it easier to pass into another function.
    // console.log(item[1]); // delete
    // pick up item? if yes, getWeapon(hero, weapon) or getItem(hero, item);
  } else {
    let monster;
    if (hero.level <= 3) {
      monster = randomMonster(hero.level - 1, (randomNumFunc(0, 2))); // makes it easier to pass the monster object into other functions.
    } else if (hero.level <= 6) {
      monster = randomMonster(hero.level, (randomNumFunc(3, 5)));
    } else if (hero.level <= 9) {
      monster = randomMonster(hero.level, (randomNumFunc(6, 8)));
    }
    console.log(monster);
    return monster;
  } // call combatFunction(hero, monster);
}


export function defineItems(hero, randomW, randomP, randomItem) { // needs 3 variables in order to generate and return a random item from the weapon and potion objects.  Third variable selects which item from the item array is returned after random potion and random weapon are generated.
  let items = {
    1: randomPotion(hero, randomP),
    2: randomWeapon(hero, randomW),
    3: 'Health Potion',
    // 4: 'random thing2'
  };
  return items[randomItem];
}
// create function to interact with items? Pick up item Y/N in UI, calls this function: getItem(hero, item) {
//  if (item === 'Health Potion') {
// hero.hp = hero.hp + x;
//  } else if (item === 'potion') {
// hero.ap = hero.ap + item.potion[1];
// }  something like this.  A helper function which will be called when a potion is picked up and can be used as getWeapon is for weapons.  It will eval the potion and call another helper function to apply the appropriate attritube depending on each character calss.

function randomNumFunc(lowerLimit, upperLimit) { // RNG function used repeatedly.
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}

function getWeapon(hero, weapon) {  // used to equip a new weapon when a hero finds a weapon and wants to change out for current weapon.
  hero.ap -= hero.weapon[1];
  delete hero.weapon;
  hero.weapon = weapon;
  hero.ap += hero.weapon[1];
}