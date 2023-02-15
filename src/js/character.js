export class Character {
  constructor(role, hp, ap, dex, level, ) {
    this.role = role;
    this.hp = hp;
    this.ap = ap;
    this.dex = dex;
    this.xp = 0;
    this.level = level;
    this.xpLimit = 20;
<<<<<<< HEAD
    this.hpCapacity = hp;
    this.totalAtributes = this.hpCapacity + ap + dex;
=======
    this.hpCapacity = hpCapacity;
    this.totalAtributes = hpCapacity + ap + dex;
>>>>>>> stephen
    this.items = [];
  }

  levelUP() {
    if (this.role === 'mage') {
      this.level++;
<<<<<<< HEAD
      this.hpCapacity += 3;
      this.hp = this.hpCapacity;
=======
      this.hp = this.hp + 3;
>>>>>>> stephen
      this.ap = this.ap + 5;
      this.dex = this.dex + 2;
    } else if (this.role === 'warrior') {
      this.level++;
<<<<<<< HEAD
      this.hpCapacity += 4;
      this.hp = this.hpCapacity;
=======
      this.hp = this.hp + 4;
>>>>>>> stephen
      this.ap = this.ap + 3;
      this.dex = this.dex + 3;
    } else if (this.role === 'rogue') {
      this.level++;
<<<<<<< HEAD
      this.hpCapacity += 2;
      this.hp = this.hpCapacity;
=======
      this.hp = this.hp + 2;
>>>>>>> stephen
      this.ap = this.ap + 4;
      this.dex = this.dex + 4;
    }
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
  if (type === 1) {
    return createWarrior();
  } else if (type === 2) {
    return createMage();
  } else if (type === 3) {
    return createRogue();
  }
}