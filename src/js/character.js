export class Character {
  constructor(role, hp, ap, dex, level, hpCapacity) {
    this.role = role;
    this.hp = hp;
    this.ap = ap;
    this.dex = dex;
    this.xp = 0;
    this.xpLimit = 20;
    this.level = level;
    this.hpCapacity = hpCapacity;
    this.totalAtributes = hpCapacity + ap + dex;
    this.items = [];
  }
}

export function createWarrior() {
  let warrior = new Character("warrior", 10, 10, 10, 1, 10);
  return warrior;
}

export function createMage() {
  let mage = new Character("mage", 8, 17, 5, 1, 7);
  return mage;
}

export function createRogue() {
  let rogue = new Character("rogue", 7, 10, 13, 1, 7);
  return rogue;
}

export function chooseCharacter(type) {
  /* istanbul ignore else */
  if (type ===1) {
    return createWarrior();
  } else if (type === 2) {
    return createMage();
  } else if (type === 3) { 
    return createRogue();
  }
}

