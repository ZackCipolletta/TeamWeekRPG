
// from zach's "character.js" won't be needed here, just for testing------
// export class Character {
//   constructor(role, heroHp, heroAp, heroDex, level, hpCapacity) {
//     this.role = role;
//     this.heroHp = heroHp;
//     this.heroAp = heroAp;
//     this.heroDex = heroDex;
//     this.level = level;
//     this.hpCapacity = hpCapacity;
//     this.totalAttributes = hpCapacity + heroAp + heroDex;
//     this.items = [];
//   }
//   static createWarrior() {
//     let warrior = new Character("warrior", 10, 10, 10, 1, 10); 
//     return warrior;
//   }
// }

//only what happens in a single combat round
export class CombatRound {
  constructor(role, heroHp, heroAp, heroDex, heroLevel, heroExp, monsterName, monsterHp, monsterAp, heroHit, heroCriticalHit, heroDamage, heroMessage, monsterHit, monsterCriticalHit, monsterDamage, monsterMessage) {
    this.role = role;
    this.heroHp = heroHp;
    this.heroAp = heroAp;
    this.heroDex = heroDex;
    this.heroLevel = heroLevel;
    this.heroExp = heroExp;
    this.monsterName = monsterName;
    this.monsterHp = monsterHp;
    this.monsterAp = monsterAp;
    //
    this.heroHit = heroHit;
    this.heroCriticalHit = heroCriticalHit;
    this.heroDamage = heroDamage;
    this.heroCriticalDodge = false;
    this.heroDodgeSucess = false;
    this.heroMessage = heroMessage;  
    this.monsterHit = monsterHit;
    this.monsterCriticalHit = monsterCriticalHit;
    this.monsterDamage = monsterDamage;
    this.monsterMessage = monsterMessage;
  }
  heroAndMonsterData(role, heroHp, heroAp, heroDex, heroLevel, heroExp, monsterName, monsterHp, monsterAp){
    this.role = role;
    this.heroHp = heroHp;
    this.heroAp = heroAp;
    this.heroDex = heroDex;
    this.heroLevel = heroLevel;
    this.heroExp = heroExp;
    this.monsterName = monsterName;
    this.monsterHp = monsterHp;
    this.monsterAp = monsterAp;
  }
  combatRoundInitialize() {
    let cRound = new CombatRound(false, false, 0, "", false, false, 0, "");
    this.heroHit = false;
    this.heroCriticalHit = false;
    this.heroDamage = 0;
    this.heroCriticalDodge = false;
    this.heroDodgeSucess = false;
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
    const attackChance = roll + this.heroDex;
    if (roll === 10) {
      //critical hit!
      console.log("critical hit!");
      this.heroCriticalHit = true;
      this.heroDamage = this.heroAp * 2;
      this.monsterHp = this.monsterHp - this.heroDamage;
      this.heroMessage = `Critical Hit! ${this.role} does ${this.heroDamage} points damage.`;
    }
    else if ((attackChance) >= 16)  {
      //hit 
      this.heroHit = true;
      this.heroDamage = this.die1_10()/10 * this.heroAp;
      this.monsterHp = this.monsterHp - this.heroDamage;
      this.heroMessage = `${this.role} hit for ${this.heroDamage} points damage.`;
    }
    else if (attackChance <= 15) {
      //miss
      this.heroMessage = `${this.role} missed.`;
    }
    else {
      console.log("error");
      console.log(attackChance);
    } 
    console.log(this.heroMessage);
    
    return this;
  }
  heroDodge() {
    const roll = this.die1_10();
    const dodgeChance = roll + this.heroDex;
    if (roll === 10) {
      //critical dodge and hit!
      this.heroCriticalDodge = true;
      this.heroDamage = this.heroAp;
      this.heroHp ++;
      this.monsterHp = this.monsterHp - this.heroDamage;
      this.heroMessage = `Badass! you dodged, recoverd 1 hp, and hit ${this.monsterName} for ${this.heroDamage} points damage`;
      
    }
    else if ((dodgeChance) >= 16)  {
      //hit 
      this.heroDodgeSuccess = true;
      this.heroMessage = `${this.role} evaded ${this.monsterName} successfully, taking 0 damage.`;
    }
    else if (dodgeChance <= 15) {
      //miss
      this.heroMessage = `${this.role} was too slow to dodge this time`;
    }
    else {
      console.log("error");
      console.log(dodgeChance);
    } 
    console.log(this.heroMessage);
    
    return this;
  }
  
  monsterAttack() {
    const roll = this.die1_10();
    const attackChance = roll + this.heroDex;
    if (this.heroCriticalDodge === true) {
      console.log(`${this.role}: ${this.heroHp}  ___ ${this.monsterName}: ${this.monsterHp}`);
      return this;
    }
    if (this.heroDodgeSuccess === true) {
      console.log(this.heroMessage);
      console.log(`${this.role}: ${this.heroHp}  ___ ${this.monsterName}: ${this.monsterHp}`);
      return this;
    }
    if (roll === 6) {
      //critical hit by monster!
      this.monsterCriticalHit = true;
      this.monsterDamage = this.monsterAp;
      this.heroHp = this.heroHp - this.monsterDamage;
      this.monsterMessage = `Critical Hit! ${this.monsterName} does ${this.monsterDamage} points damage.`;
    }
    //--------only using critical hit as hit by baddie for now
    else if ((attackChance) >= 13)  {
      //hit 
      this.monsterHit = true;
      this.monsterDamage = Math.round((this.die1_6()/6)* this.monsterAp); 
      this.heroHp = this.heroHp - this.monsterDamage;
      this.monsterMessage = `${this.monsterName} hit for ${this.monsterDamage} points damage.`;
    }
    else if (attackChance <= 12) {
      //miss
      this.monsterMessage = `${this.monsterName} missed.`;
    }
    else {
      console.log("error");
    } 
    console.log (this.monsterMessage);
    if (this.monsterHp < 0) {
      console.log("YOU KILLED THE BADDIE!");
    }
    console.log(`${this.role}: ${this.heroHp}  ___ ${this.monsterName}: ${this.monsterHp}`);
  }

}