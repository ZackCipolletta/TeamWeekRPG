export class Monster {
  constructor(name, level, hp, ap) {
<<<<<<< HEAD
=======
    this.type = 'monster';
>>>>>>> stephen
    this.name = name;
    this.level = level;
    this.hp = hp + Math.floor(hp * level / 2);
    this.ap = ap + Math.floor(ap * level / 2);
    this.xp = Math.floor((hp + ap) / 3);
  }
}

export function randomMonster(level, randomNum) {
  let monsters = [
    function createSlime(level) {
      let slime = new Monster("slime", level, 11, 1);
      return slime;
    },

    function createZombie(level) {
      let zombie = new Monster("zombie", level, 17, 3);
      return zombie;
    },

<<<<<<< HEAD
    function createOwlBear() {
      let owlBear = new Monster("owlbear", level, 30, 4);
=======
    function createDragon() {
      let owlBear = new Monster("dragon", level, 30, 4);
>>>>>>> stephen
      return owlBear;
    },

    function createDemon() {
      let demon = new Monster("demon", level, 19, 5);
      return demon;
    },

    function createGoblin() {
      let goblin = new Monster("goblin", level, 12, 4);
      return goblin;
    },

    function createTroll() {
      let troll = new Monster("troll", level, 40, 8);
      return troll;
    },

    function createVampire() {
      let vampire = new Monster("vampire", level, 14, 10);
      return vampire;
    },

    function createCthulu() {
      let Cthulu = new Monster("Cthulu", level, 100, 20);
      return Cthulu;
    }
  ];
  return monsters[randomNum](level);
}

<<<<<<< HEAD
function heroLevelRandomNumber(hero) { // use this to get a random number for when you want a number that is 1 +/- the current hero level.  Used for generating the level of an item, weapon or monster.
  if (hero.level = 1) {
    randomNum(2); // wil return a number 1 or 2
  } else {
    randomNumFunc((hero.level - 1), (hero.level + 1)); // will return a number equal to hero level, one greater or one less than hero.level.
  }
}

function randomNumFunc(lowerLimit, upperLimit) { // RNG function used repeatedly.
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}
=======
export function heroLevelRandomNumber(hero) { // use this to get a random number for when you want a number that is 1 +/- the current hero level.  Used for generating the level of an item, weapon or monster.
  if (hero.level = 1) {
    return randomNumFunc(0, 2); // wil return a number 1 or 2
  } else {
    return randomNumFunc((hero.level - 1), (hero.level + 1)); // will return a number equal to hero level, one greater or one less than hero.level.
  }
}


function randomNumFunc(lowerLimit, upperLimit) { // RNG function used repeatedly.
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}
>>>>>>> stephen
