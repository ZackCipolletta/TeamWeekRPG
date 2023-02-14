export class Monster {
  constructor(name, level, hp, ap) {
    this.name = name;
    this.level = level;
    this.hp = hp + Math.floor(hp * level / 2);
    this.ap = ap + Math.floor(ap * level / 2);
    this.xp = Math.floor((hp + ap) / 3);
  }
}

export function createSlime(level) {
  let slime = new Monster("slime", level, 5, 1);
  return slime;
}

export function createZombie() {
  let zombie = new Monster("zombie", 0, 17, 3);
  return zombie;
}

export function createOwlBear() {
  let owlBear = new Monster("owlbear", 0, 30, 4);
  return owlBear;
}

export function createDemon() {
  let demon = new Monster("demon", 0, 19, 5);
  return demon;
}

export function createGoblin() {
  let goblin = new Monster("goblin", 0, 12, 4);
  return goblin;
}

export function createTroll() {
  let troll = new Monster("troll", 0, 40, 8);
  return troll;
}

export function createVampire() {
  let vampire = new Monster("vampire", 0, 14, 10);
  return vampire;
}

export function createCthulu() {
  let Cthulu = new Monster("Cthulu", 0, 100, 20);
  return Cthulu;
}


//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }
//   }

function heroLevelRandomNumber(hero) { // use this to get a random number for when you want a number that is 1 +/- the current hero level.  Used for generating the level of an item, weapon or monster.
  if (hero.level = 1) {
    randomNum(2); // wil return a number 1 or 2
  } else if (hero.level = 2) {
    randomNum(3); // return a random number from 1 to 3
  } else if (hero.level >= 3) {
    randomNumFunc((hero.level - 1), (hero.level + 1)); // will return a number equal to hero level, one greater or one less than hero.level.
  }
}

function randomNumFunc(lowerLimit, upperLimit) { // RNG function used repeatedly.
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}



//////////////////////////////////////////////////////////////////////////////
function randomMonster(level, randomNum) {
  let monsters = [
    function createSlime(level) {
      let slime = new Monster("slime", level, 11, 1);
      return slime;
    },

    function createZombie(level) {
      let zombie = new Monster("zombie", level, 17, 3);
      return zombie;
    },

    function createOwlBear() {
      let owlBear = new Monster("owlbear", level, 30, 4);
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