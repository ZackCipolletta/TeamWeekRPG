
// from zach's "character.js" won't be needed here, just for testing------
export class Character {
  constructor(role, hp, ap, dex, level, hpCapacity) {
    this.role = role;
    this.hp = hp;
    this.ap = ap;
    this.dex = dex;
    this.level = level;
    this.hpCapacity = hpCapacity;
    this.totalAttributes = hpCapacity + ap + dex;
    this.items = [];
  }
  static createWarrior() {
    let warrior = new Character("warrior", 10, 10, 10, 1, 10); 
    return warrior;
  }
}

//only what happens in the combat round
export class CombatRound {
  constructor(role, hp, ap, dex, monsterName, monsterHp, monsterAp, heroHit, heroCriticalHit, heroDamage, heroMessage, monsterHit, monsterCriticalHit, monsterDamage, monsterMessage) {
    this.role = role;
    this.hp = hp;
    this.ap = ap;
    this.dex = dex;
    this.monsterName = monsterName;
    this.monsterHp = monsterHp;
    this.monsterAp = monsterAp;
    //
    this.heroHit = heroHit;
    this.heroCriticalHit = heroCriticalHit;
    this.heroDamage = heroDamage;
    this.heroMessage = heroMessage;  
    this.monsterHit = monsterHit;
    this.monsterCriticalHit = monsterCriticalHit;
    this.monsterDamage = monsterDamage;
    this.monsterMessage = monsterMessage;
  }
  heroAndMonsterData(role, hp, ap, dex, monsterName, monsterHp, monsterAp){
    this.role = role;
    this.hp = hp;
    this.ap = ap;
    this.dex = dex;
    this.monsterName = monsterName;
    this.monsterHp = monsterHp;
    this.monsterAp = monsterAp;
  }
  combatRoundInitialize() {
    let cRound = new CombatRound(false, false, 0, "", false, false, 0, "");
    this.heroHit = false;
    this.heroCriticalHit = false;
    this.heroDamage = 0;
    this.heroMessage = "";  
    this.monsterHit = false;
    this.monsterCriticalHit = false;
    this.monsterDamage = 0;
    this.monsterMessage = "";
    return cRound;
  }
  die1_10() {
    const roll1_10= Math.ceil(Math.random() * 10);
    return roll1_10;
  }
  die1_6() {
    const roll1_6= Math.ceil(Math.random() * 6);
    return roll1_6;
  }
  heroAttack() {
    const roll = this.die1_10();
    const attackChance = roll + this.dex;
    if (roll === 10) {
      //critical hit!
      console.log("critical hit!");
      this.heroCriticalHit = true;
      this.heroDamage = this.ap * 2;
      this.heroMessage = `Critical Hit! ${this.role} does ${this.heroDamage} points damage.`;
    }
    else if ((attackChance) >= 16)  {
      //hit 
      console.log("hit");
      this.heroHit = true;
      this.heroDamage = this.die1_10()/10 * this.ap;
      this.heroMessage = `${this.role} hit for ${this.heroDamage} points damage.`;
    }
    else if (attackChance < 15) {
      //miss
      this.heroMessage = `${this.role} missed.`;
      console.log("miss");
    }
    else {
      console.log("error");
      console.log(attackChance);
    } 
    console.log(this.heroMessage);
  }
  
  monsterAttack() {
    const roll = this.die1_6();
    const attackChance = roll + this.dex;
    
    if (roll === 6) {
      //critical hit!
      this.monsterCriticalHit = true;
      this.monsterDamage = this.ap * 1.5;
      this.monsterMessage = `Critical Hit! ${this.monsterName} does ${this.monsterDamage} points damage.`;
    }
    else if ((attackChance) >= 13)  {
      //hit 
      this.monsterHit = true;
      this.monsterDamage = (this.die1_6()/6)* this.ap; 
      this.monsterMessage = `${this.monsterName} hit for ${this.monsterDamage} points damage.`;
    }
    else if (attackChance < 12) {
      //miss
      this.heroMessage = `${this.monsterName} missed.`;
    }
    else {
      console.log("error");
    } 
  }
}