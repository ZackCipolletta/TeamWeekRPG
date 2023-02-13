//temp hero 0:role 1:health 2:hp 3:ap 4:dx 
let hero1 = {role:"warrior", health: 10, hp: 10, ap: 10, dx: 10};
//temp npc
let npc = {role:"zombie", health: 8, hp: 8, ap: 8, dx: 7};


class Combat {
  constructor(heroHit, heroCriticalHit, heroDamage, npcHit, npcCriticalHit, npcDamage)
  this.heroHit = false;
  this.heroCriticalHit = false;
  this.heroDamage = 0;
  this.npcHit = false;
  this.npcCriticalHit = false;
  this.npcDamage = 0;
  }
  die1_10() {
    const roll1_10= Math.ceil(Math.random() * 10);
    return roll1_10;
  }
  die1_6() {
    const roll1_6= Math.ceil(Math.random() * 6);
    return roll1_6;
  }
  attackAndDamage(){
    function heroAttack() {
      const totalDamage = 0;
      const roll = die1_10();
      const attackChance = roll + hero1.dx;
      if (roll = 10) {
        //critical hit!
        totalDamage = hero1.ap * 2;
        return `Critical hit! ${hero1} does ${damage} points damage.`
      }
      else if ((attackChance) >= 16)  {
        //hit 
        const damage = die1_10()/10 * hero1.ap;
        return `Hit for ${damage} points damage.`
      }
      else if (attackChance < 15) {
        //miss
      }
      else {
        console.log("error");
      } 
    };
}
  npcAttack() {
    const roll = die1_6();
    const attackChance = roll + npc.dx;
    if (roll = 6) {
      //critical hit!
    }
    else if ((attackChance) >= 13)  {
      const damage = (die1_6()/6)* npc.ap; 
      return `hit! ${damage} points damage`
    } 
    else if (attackChance < 12) {
      return "miss"
    } else {
      console.log ("error")
    }
  }
}


