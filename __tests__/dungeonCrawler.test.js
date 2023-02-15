
import {CombatRound} from "../src/js/combatRound.js";
import {Character} from "../src/js/combatRound.js";

describe('Combat: should do some fighting', () => {
});
test('', () => {

  //combat round
  let round = new CombatRound;
  (function startCombatRound() {
    round.combatRoundInitialize();
    round.heroAndMonsterData("Warrior", 10, 10, 10, 1, 0, "Baddie", 6, 6, 1);
    //CombatRound.heroAttack();
    round.monsterAttack(round.heroAttack());
    console.log(round);
    console.log(`Hero hp: ${round.heroHp} Monster hp: ${round.monsterHp}`);

  })();

});

