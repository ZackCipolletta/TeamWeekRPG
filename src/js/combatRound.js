
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
  static heroAndMonsterData(role, hp, ap, dex, monsterName, monsterHp, monsterAp){
    return {
      role: role,
      hp: hp,
      ap: ap,
      dex: dex,
      monsterName: monsterName,
      monsterHp: monsterHp,
      monsterAp: monsterAp
    };
  }
  
  static combatRoundInitialize() {
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
  static die1_10() {
    const roll1_10= Math.ceil(Math.random() * 10);
    return roll1_10;
  }
  static die1_6() {
    const roll1_6= Math.ceil(Math.random() * 6);
    return roll1_6;
  }
  static heroAttack() {
    const roll = CombatRound.die1_10();
    const attackChance = roll + hero1.dx;
    if (roll === 10) {
      //critical hit!
      this.heroCriticalHit = true;
      this.heroDamage = hero1.ap * 2;
      this.heroMessage = `Critical Hit! ${hero1} does ${this.heroDamage} points damage.`
    }
    else if ((attackChance) >= 16)  {
      //hit 
      this.heroHit = true;
      this.heroDamage = CombatRound.die1_10()/10 * hero1.ap;
      this.heroMessage = `Hit for ${this.heroDamage} points damage.`
    }
    else if (attackChance < 15) {
      //miss
      this.heroMessage = `${hero1} missed.`
    }
    else {
      console.log("error");
    } 
  }
  
  static monsterAttack() {
    const roll = CombatRound.die1_6();
    const attackChance = roll + monster.dx;
    
    if (roll === 6) {
      //critical hit!
      this.monsterCriticalHit = true;
      this.monsterDamage = monster.ap * 1.5;
      this.monsterMessage = `Critical Hit! ${monster} does ${this.monsterDamage} points damage.`
    }
    else if ((attackChance) >= 13)  {
      //hit 
      this.monsterHit = true;
      this.monsterDamage = (CombatRound.die1_6()/6)* monster.ap; 
      this.monsterMessage = `${monster} hit for ${this.monsterDamage} points damage.`
    }
    else if (attackChance < 12) {
      //miss
      this.heroMessage = `${monster} missed.`
    }
    else {
      console.log("error");
    } 
  };
};