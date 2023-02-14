
import {CombatRound} from "../src/js/combatRound.js";
import {Character} from "../src/js/combatRound.js";

describe('Combat: should do some fighting', () => {
});
test('', () => {

  //combat round
  let round = new CombatRound;
  (function startCombatRound() {
    round.combatRoundInitialize();
    round.heroAndMonsterData("Warrior", 10, 10, 10, 2, 0, "Baddie", 6, 6);
    //CombatRound.heroAttack();
    round.monsterAttack(round.heroAttack());
  })();
  // let lester = Character.createWarrior();

  // let theFight = Combat.combatRound();

  // console.log (lester);
  // console.log (theFight);
  // expect(theFight).toEqual(true);
});

