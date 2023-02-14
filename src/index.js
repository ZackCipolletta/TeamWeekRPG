import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { createMage, createRogue, createWarrior } from "./js/character.js";
import { createZombie, } from "./js/monster.js";
import { heroVsMonster, levelUp, nextMonsterFunc } from "./js/combat.js";

function handleRoleSelection() {
  let role = document.getElementById("choose-role-value").value;
  let hero;
  if (role === "1") {
    hero = createWarrior()
  } else if (role === "2") {
    hero = createMage();
  } else if (role === "3") {
    hero = createRogue();
  }
  hideChooseChar();

  return hero;
}

//hides choose your character div
function hideChooseChar() {
  const chooseCharDiv = document.querySelector("#choose-character-id");
  chooseCharDiv.setAttribute("class", "hidden");
  document.querySelector("#bottom-div").removeAttribute("class", "hidden");
  let monster = createZombie();
  let hero = 0;
  callCombatFunc(hero, monster);
}

function callCombatFunc(hero, monster) {
  const displayDiv = document.getElementById("display-div");
  displayDiv.after;
  console.log(`You ${hero.role} have encountered ${monster.name} do you attack or run?`);
  // console.log(`attackOrRunFunc() is being called with the value ${monster.name} inside of callCombatFunc`);
  attackOrRunFunc(hero, monster);
}

function attackOrRunFunc(hero, monster) {
  // console.log(`attackOrRunFunc() was just called with the value of ${monster.name}`)
  document.querySelector("#fight-monster").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#fight-monster").removeEventListener("click", this);
    attackHanlder(hero, monster);
  });

  document.querySelector("#run-from-monster").addEventListener("click", function (e) {
    e.preventDefault();
    runAwayFunc(hero, monster);
  });
  function runAwayFunc() {
    console.log(`Your ${hero.role} ran away from the ${monster.name}`);
  }
}

function attackHanlder(hero, monster) {
  // console.log(`attackHanlder() was just called with a value of ${hero.role} for hero @ level ${hero.level} and the monster is ${monster.name}`)
  if (monster.hp - hero.ap <= 0) {
    levelUp(hero);
    console.log(`You defeated the ${monster.name}!  Your ${hero.role} has leveled up.  Current HP:${hero.hp} current AP:${hero.ap}.  Your level is ${hero.level}`);

    callingNewMonsterFunc(hero);
    // console.log(`callingNewMonsterFunc`)
  } else {
    heroVsMonster(hero, monster);
    console.log(`After the attack your ${hero.role}'s hp is: ${hero.hp}.  The ${monster.name}'s hp is: ${monster.hp}`);
  }
}

function callingNewMonsterFunc(hero) {
  let monster = nextMonsterFunc(hero);
  // console.log(`the new monster is: ${monster.name}`);
  callCombatFunc(hero, monster);
}



//load and button logic
window.addEventListener("load", function () {
  document.querySelector("#choose-role").addEventListener("submit", function (e) {
    e.preventDefault();
    handleRoleSelection();
  });
  document.querySelector("#warrior-class").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("#warrior-img").removeAttribute("class", "hidden");
    hideChooseChar();
    console.log("clicked-war");
   
  });
  document.querySelector("#mage-class").addEventListener("click", function (e) {
    e.preventDefault();
    hideChooseChar();
    console.log("clicked-mage");

  });
  document.querySelector("#rogue-class").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked");
    hideChooseChar();

  });
});