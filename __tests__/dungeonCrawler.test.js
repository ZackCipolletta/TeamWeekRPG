
import {Combat} from "../src/js/combatTurn.js";
import {Character} from "../src/js/combat.js";

describe('Combat: should do some fighting', () => {
});
test('just fight already', () => {
  let lester = new Character;
  let theFight = new Combat;

  console.log (lester);
  console.log (theFight);
  expect(theFight).toEqual(true);
});


//   test('4.5: should return age in all 4 planet years from input in earth years', () => {
//     theCalculator.user1.mercuryUserAge = theCalculator.mercury(user1.userAge);
//     theCalculator.user1.venusUserAge = theCalculator.venus(user1.userAge);
//     theCalculator.user1.marsUserAge = theCalculator.mars(user1.userAge);
//     theCalculator.user1.jupiterUserAge = theCalculator.jupiter(user1.userAge);
//     expect(theCalculator.user1.mercuryUserAge).toEqual(Math.round(theCalculator.user1.userAge / .24));
//     expect(theCalculator.user1.venusUserAge).toEqual(Math.round(theCalculator.user1.userAge /.62));
//     expect(theCalculator.user1.marsUserAge).toEqual(Math.round(theCalculator.user1.userAge / 1.88));
//     expect(theCalculator.user1.jupiterUserAge).toEqual(Math.round(theCalculator.user1.userAge / 11.86));
//   });

//   test ('5.1: should return planet ages for years since a specific birthday', () => {
//     expect(user1.mercuryYearsSinceCalc(47)).toEqual(221);
//     expect(user1.venusYearsSinceCalc(47)).toEqual(85);
//     expect(user1.marsYearsSinceCalc(47)).toEqual(28);
//     expect(user1.jupiterYearsSinceCalc(47)).toEqual(4);
//   });
//   test ('6: should return years to pass until x birthday on each of 5 planets', () => {
//     user1.yearsUntilCalc(111);
//     expect(user1.mercuryYearsUntil).toEqual(46);
//     expect(user1.venusYearsUntil).toEqual(18);
//     expect(user1.earthYearsUntil).toEqual(11);
//     expect(user1.marsYearsUntil).toEqual(6);
//     expect(user1.jupiterYearsUntil).toEqual(1);

//   });

// }); //ends BeforeEach------------------------