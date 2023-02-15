export class CombatRound {
  constructor(role, heroHp, heroAp, heroDex, heroLevel, heroExp, monsterName, monsterHp, monsterAp, heroHit, heroCriticalHit, heroDamage, heroCriticalDodge, heroDodgeSuccess, heroRunSuccess, heroMessage, monsterHit, monsterCriticalHit, monsterDamage, monsterMessage, monsterAlive, itemDrop) {
    this.role = role;
    this.heroHp = heroHp;
    this.heroAp = heroAp;
    this.heroDex = heroDex;
    this.heroLevel = heroLevel;
    this.heroExp = heroExp;
    this.monsterName = monsterName;
    this.monsterHp = monsterHp;
    this.monsterAp = monsterAp;
    // these values populate with 
    this.heroHit = heroHit;
    this.heroCriticalHit = heroCriticalHit;
    this.heroDamage = heroDamage;
    this.heroCriticalDodge = heroCriticalDodge;
    this.heroDodgeSuccess = heroDodgeSuccess;
    this.heroRunSuccess = heroRunSuccess;
    this.heroMessage = heroMessage;  
    this.monsterHit = monsterHit;
    this.monsterCriticalHit = monsterCriticalHit;
    this.monsterDamage = monsterDamage;
    this.monsterMessage = monsterMessage;
    this.monsterAlive = monsterAlive;
    this.itemDrop = itemDrop;
  }
  //chage for increased leveling up effects
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
    let cRound = new CombatRound();
    this.heroHit = null;
    this.heroCriticalHit = null;
    this.heroDamage = 0;
    this.heroCriticalDodge = null;
    this.heroDodgeSuccess = null;
    this.heroRunSuccess = null;
    this.heroMessage = null;  
    this.monsterHit = null;
    this.monsterCriticalHit = null;
    this.monsterDamage = 0;
    this.monsterMessage = null;
    this.monsterAlive = true;
    this.itemDrop = null;
    return cRound;
  }
  d100() {
    const roll1= Math.ceil(Math.random() * 100);
    return roll1;
  }
  d20() {
    const roll1= Math.ceil(Math.random() * 20);
    return roll1;
  }
  d10() {
    const roll1= Math.ceil(Math.random() * 10);
    return roll1;
  }
  d6() {
    const roll1= Math.ceil(Math.random() * 6);
    return roll1;
  }
  heroAttack() {
    let beginningCriticalHit = false
    let criticalHitExtraRolls = false
    let beginningHit = false
    let hitExtraRolls = false
    beginningCriticalHit = this.loopD20(1);
    criticalHitExtraRolls = this.loopD100(Math.max((this.heroDex -10), 0));
    beginningHit = this.loopD6(3);
    hitExtraRolls = this.loopD20(Math.max((this.heroDex -10), 0));
    
    if (beginningCriticalHit || criticalHitExtraRolls) {
      //critical hit!
      this.heroCriticalHit = true;
      this.heroDamage = this.heroAp * 2;
      this.monsterHp = this.monsterHp - this.heroDamage;
      this.heroMessage = `Critical Hit! ${this.role} does ${this.heroDamage} points damage.`;
      this.monsterCheckPulse();
    }
    else if (beginningHit || hitExtraRolls) {
      //hit!
      this.heroHit = true;
      this.heroDamage = this.d10()/10 * this.heroAp;
      this.monsterHp = this.monsterHp - this.heroDamage;
      this.heroMessage = `${this.role} hit for ${this.heroDamage} points damage.`;
      this.monsterCheckPulse();
    }
    else if (beginningCriticalHit === false && (criticalHitExtraRolls === false || criticalHitExtraRolls === undefined) && beginningHit === false && (hitExtraRolls === false || hitExtraRolls === undefined)) {
      //miss
      this.heroMessage = `${this.role} missed.`;
    }
    else {
      console.log("error");
    } 
    console.log(this.heroMessage);
    
    return this;
  }
  heroDodge() {
    let beginningCriticalDodge = false
    let criticalDodgeExtraRolls = false
    let beginningDodge = false
    let dodgeExtraRolls = false
    beginningCriticalDodge = this.loopD20(1);
    criticalDodgeExtraRolls = this.loopD100(Math.max((this.heroDex -10), 0));
    beginningDodge = this.loopD6(3);
    dodgeExtraRolls = this.loopD20(Math.max((this.heroDex -10), 0));

    //
    if (beginningCriticalDodge || criticalDodgeExtraRolls) {
      //critical dodge and hit!
      this.heroCriticalDodge = true;
      this.heroDamage = this.heroAp;
      this.heroHp ++;
      this.monsterHp = this.monsterHp - this.heroDamage;
      this.heroMessage = `Badass! you dodged, recoverd 1 hp, and hit ${this.monsterName} for ${this.heroDamage} points damage!`;
      this.monsterCheckPulse();
    }
    else if (beginningDodge || dodgeExtraRolls)  {
      this.heroDodgeSuccess = true;
      this.heroMessage = `${this.role} evaded ${this.monsterName} successfully, taking 0 damage.`;
    }
    else if (beginningCriticalDodge === false && (criticalDodgeExtraRolls === false || criticalDodgeExtraRolls === undefined) && beginningDodge === false && (dodgeExtraRolls === false || dodgeExtraRolls ===undefined)) {
      //miss
      this.heroMessage = `${this.role} was too slow to dodge this time`;
    }
    else {
      console.log("error");
    } 
    console.log(this.heroMessage);
    
    return this;
  }
  
  monsterAttack() {
    const roll = this.d10();
    const attackChance = roll + 10 - this.heroDex;
    if (this.monsterAlive === false) {
      return this;
    }
    if (this.heroRunSuccess === true) {
      console.log(this.heroMessage);
      return this;
    }
    if (this.heroRunSuccess === false) {
      console.log(this.heroMessage);
    }
    if (this.heroCriticalDodge === true) {
      console.log(`${this.role}: ${this.heroHp}  ___ ${this.monsterName}: ${this.monsterHp}`);
      return this;
    }
    if (this.heroDodgeSuccess === true) {
      console.log(this.heroMessage);
      console.log(`${this.role}: ${this.heroHp}  ___ ${this.monsterName}: ${this.monsterHp}`);
      return this;
    }
    if (roll === 10) {
      //critical hit by monster!
      this.monsterCriticalHit = true;
      this.monsterDamage = this.monsterAp;
      this.heroHp = this.heroHp - this.monsterDamage;
      this.monsterMessage = `Critical Hit! ${this.monsterName} does ${this.monsterDamage} points damage.`;
    }
    else if (attackChance >= 8)  {
      //hit 
      this.monsterHit = true;
      this.monsterDamage = Math.round((this.d6()/6)* this.monsterAp); 
      this.heroHp = this.heroHp - this.monsterDamage;
      this.monsterMessage = `${this.monsterName} hit for ${this.monsterDamage} points damage.`;
    }
    else if (attackChance <= 7) {
      //miss
      this.monsterMessage = `${this.monsterName} missed.`;
    }
    else {
      console.log("error");
    } 
    console.log(`${this.role}: ${this.heroHp}  ___ ${this.monsterName}: ${this.monsterHp}`);
  }
  heroRun() { 
    let escapeChance;
    for (let i = 0; i < this.heroLevel; i ++){
      escapeChance = this.d6();
      console.log ("escapeChance: " + escapeChance);
      if (escapeChance === 6) {
        this.heroRunSuccess = true;
        this.heroMessage = `Ran away!  ${this.role} is a real wuss!`
        return this;
      }
      else if (escapeChance !== 6) {
        this.heroMessage = `Take off those swashbuckler boots and run you dork!  Too slow!`
        this.heroRunSuccess = false;
      };
    }
    return this;
  }
  monsterCheckPulse() {
    if (this.monsterHp < 1) {
      this.monsterAlive = false;
      this.itemDropChance();
    }
  }  
  // currently loop is not active, just 1 out of 10 chance for item at any level -jd
  itemDropChance() {
    let dropChance;
    for (let i = 0; i < 1; i ++){
      dropChance = this.d10();
      if (dropChance === 10) {
        this.itemDrop = true;
        return this;
      }
      else if (dropChance !== 10) {
        this.itemDrop = false;
      };
    }
    return this;
  };
  // 1 roll of die for extra critical chance or item 
  loopD100(numRolls) {
    let roll;
    for (let i = 0; i < numRolls; i ++){
      roll = this.d100();
      if (roll === 100) {
        console.log("SUCCESS");
        return true;
      }
      else return false;
    }
  };
  loopD20(numRolls) {
  let roll;
  for (let i = 0; i < numRolls; i ++){
    roll = this.d20();
    if (roll === 20) {
      console.log("SUCCESS");
      return true;
    }
    else return false;
  }
  };
  loopD10(numRolls) {
  let roll;
  for (let i = 0; i < numRolls; i ++){
    roll = this.d10();
    if (roll === 10) {
      console.log("SUCCESS");
      return true;
    }
    else return false;
    }
  }
  loopD6(numRolls) {
  let roll;
  for (let i = 0; i < numRolls; i ++){
    roll = this.d6();
    if (roll === 6) {
      console.log("SUCCESS");
      return true;
    }
    else return false
    }
  }
}

