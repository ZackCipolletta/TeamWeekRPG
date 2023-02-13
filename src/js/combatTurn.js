//temp hero 0:role 1:health 2:hp 3:ap 4:dx 
let hero1 = {role:"warrior", health: 10, hp: 10, ap: 10, dx: 10};
//temp npc
let npc = {role:"zombie", health: 8, hp: 8, ap: 8, dx: 7};


class Combat {
  constructor(heroHit, heroCriticalHit, heroDamage, heroMessage, npcHit, npcCriticalHit, npcDamage, npcMessage) {
  this.heroHit = false;
  this.heroCriticalHit = false;
  this.heroDamage = 0;
  this.heroMessage ="";  
  this.npcHit = false;
  this.npcCriticalHit = false;
  this.npcDamage = 0;
  this.npcMessage ="";
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
    const roll = die1_10();
    const attackChance = roll + hero1.dx;
    if (roll = 10) {
      //critical hit!
      this.heroCriticalHit = true;
      this.heroDamage = hero1.ap * 2;
      this.heroMessage = `Critical Hit! ${hero1} does ${this.heroDamage} points damage.`
    }
    else if ((attackChance) >= 16)  {
      //hit 
      this.heroHit = true;
      this.heroDamage = die1_10()/10 * hero1.ap;
      this.heroMessage = `Hit for ${this.heroDamage} points damage.`
    }
    else if (attackChance < 15) {
      //miss
      this.heroMessage = `${hero1} missed.`
    }
    else {
      console.log("error");
    } 
  };
  
  npcAttack() {
    const roll = die1_6();
    const attackChance = roll + npc.dx;
    
    if (roll = 6) {
      //critical hit!
      this.npcCriticalHit = true;
      this.npcDamage = npc.ap * 1.5;
      this.npcMessage = `Critical Hit! ${npc} does ${this.npcDamage} points damage.`
    }
    else if ((attackChance) >= 13)  {
      //hit 
      this.npcHit = true;
      this.npcDamage = (die1_6()/6)* npc.ap; 
      this.npcMessage = `${npc} hit for ${this.npcDamage} points damage.`
    }
    else if (attackChance < 12) {
      //miss
      this.heroMessage = `${npc} missed.`
    }
    else {
      console.log("error");
    } 
  };
};