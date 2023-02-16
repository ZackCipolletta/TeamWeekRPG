export class Character {
  constructor(role, hp, ap, dex, level, ) {
    this.role = role;
    this.heroHp = hp;
    this.heroAp = ap;
    this.heroDex = dex;
    this.heroExp = 0;
    this.heroLevel = level;
    this.xpLimit = 20;
    this.hpCapacity = hp;
    this.totalAtributes = this.hpCapacity + ap + dex;

    this.items = [];
  }


  levelUP() {
    if (this.role === 'mage') {
      this.heroLevel++;
      this.hpCapacity += 3;
      this.heroHp = this.hpCapacity;

      this.heroAp = this.heroAp + 5;
      this.heroDex = this.heroDex + 2;
    } else if (this.role === 'warrior') {
      this.heroLevel++;
      this.hpCapacity += 4;
      this.heroHp = this.hpCapacity;
      this.heroAp = this.heroAp + 3;
      this.heroDex = this.heroDex + 3;
    } else if (this.role === 'rogue') {
      this.heroLevel++;
      this.hpCapacity += 2;
      this.heroHp = this.hpCapacity;
      this.heroAp = this.heroAp + 4;
      this.heroDex = this.heroDex + 4;
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