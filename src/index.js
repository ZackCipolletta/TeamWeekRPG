import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { chooseCharacter } from "./js/character.js";
import { whatsInTheRoom, defineItems } from './js/rooms.js';
import { Monster } from './js/monster';


// import { heroVsMonster, levelUp, nextMonsterFunc } from "./js/combat.js";

function handleCharSelection(role) {

  let hero = chooseCharacter(role);
  let room = whatsInTheRoom(hero);
  document.getElementById("hero-level").innerText = "Level: " + hero.level;
  document.getElementById("hero-health").innerText = "Health: " + hero.hp;
  document.getElementById("hero-ap").innerText = "AP: " + hero.ap;
  document.getElementById("hero-dex").innerText = "DEX: " + hero.dex;
  document.getElementById("hero-items").innerText = "Items: " + hero.items;


  //populating the room with the first monster, empty, or item
  console.log(room);
  if (room.type === 'monster') {

    document.querySelector("#combat-buttons").removeAttribute("class", "hidden");
    document.querySelector("#enemy-info").removeAttribute("class", "hidden");
    let monster = document.getElementById(`${room.name}`);
    monster.removeAttribute("class", "hidden");
    document.getElementById("enemy-name").innerText = 'Name: ' + room.name;
    document.getElementById("enemy-hp").innerText = 'HP: ' + room.hp;
    document.getElementById("enemy-ap").innerText = 'AP: ' + room.ap;
  } else if (room === "empty") {
    console.log(room);
    document.querySelector("#continue-button").removeAttribute("class", "hidden");
  } else if (room.potion) {
    console.log(room.potion[0]);
    let potion = document.getElementById(`${room.potion[0]}`);
    potion.removeAttribute("class", "hidden");
    document.querySelector("#pick-up-button").removeAttribute("class", "hidden");
    document.querySelector("#continue-button").removeAttribute("class", "hidden");
  } else if (room.weapon) {
    console.log(room.weapon[0]);
    let weapon = document.getElementById(`${room.weapon[0]}`);
    weapon.removeAttribute("class", "hidden");
    document.querySelector("#pick-up-button").removeAttribute("class", "hidden");
    document.querySelector("#continue-button").removeAttribute("class", "hidden");
  } else if (room === 'Health-Potion') {
    let healthpotion = document.getElementById("Health-Potion");
    healthpotion.removeAttribute("class", "hidden");

    document.querySelector("#pick-up-button").removeAttribute("class", "hidden");
    document.querySelector("#continue-button").removeAttribute("class", "hidden");
  }
}
// let monster = monster.name;



//hides choose your character div
function hideChooseChar() {

  //hiding choose character
  const chooseCharDiv = document.querySelector("#choose-character-id");
  chooseCharDiv.setAttribute("class", "hidden");

  //displaying bottom ui and first enemy stats
  document.querySelector("#bottom-div").removeAttribute("class", "hidden");
  document.getElementById("enemy-name").removeAttribute("class", "hidden");
  document.getElementById("enemy-hp").removeAttribute("class", "hidden");
  document.getElementById("enemy-ap").removeAttribute("class", "hidden");

}

// function callCombatFunc(hero, monster) {
//   console.log(`You ${hero.role} have encountered ${monster.name} do you attack or run?`);
//   // console.log(`attackOrRunFunc() is being called with the value ${monster.name} inside of callCombatFunc`);
//   attackOrRunFunc(hero, monster);
// }

// function attackOrRunFunc(hero, monster) {
//   // console.log(`attackOrRunFunc() was just called with the value of ${monster.name}`)
//   document.querySelector("#fight-monster").addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector("#fight-monster").removeEventListener("click", this);
//     attackHanlder(hero, monster);
//   });

//   document.querySelector("#run-from-monster").addEventListener("click", function (e) {
//     e.preventDefault();
//     runAwayFunc(hero, monster);
//   });
//   function runAwayFunc() {
//     console.log(`Your ${hero.role} ran away from the ${monster.name}`);
//   }
// }

// function attackHanlder(hero, monster) {
//   // console.log(`attackHanlder() was just called with a value of ${hero.role} for hero @ level ${hero.level} and the monster is ${monster.name}`)
//   if (monster.hp - hero.ap <= 0) {
//     levelUp(hero);
//     console.log(`You defeated the ${monster.name}!  Your ${hero.role} has leveled up.  Current HP:${hero.hp} current AP:${hero.ap}.  Your level is ${hero.level}`);

//     callingNewMonsterFunc(hero);
//     // console.log(`callingNewMonsterFunc`)
//   } else {
//     heroVsMonster(hero, monster);
//     console.log(`After the attack your ${hero.role}'s hp is: ${hero.hp}.  The ${monster.name}'s hp is: ${monster.hp}`);
//   }
// }

// function callingNewMonsterFunc(hero) {
//   let monster = nextMonsterFunc(hero);
//   // console.log(`the new monster is: ${monster.name}`);
//   callCombatFunc(hero, monster);
// }



//load and button logic
window.addEventListener("load", function () {

  document.querySelector("#warrior-class").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#warrior-img").removeAttribute("class", "hidden");
    let type = 1;
    hideChooseChar();
    handleCharSelection(type);

  });
  document.querySelector("#mage-class").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#mage-img").removeAttribute("class", "hidden");
    hideChooseChar();
    let type = 2;
    handleCharSelection(type);



  });
  document.querySelector("#rogue-class").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#rogue-img").removeAttribute("class", "hidden");
    hideChooseChar();
    let type = 3;
    handleCharSelection(type);
  });
});