import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { chooseCharacter } from "./js/character.js";
import { whatsInTheRoom, defineItems } from './js/rooms.js';
import { Monster } from './js/monster';
import { CombatRound } from './js/combatRound';



// import { heroVsMonster, levelUp, nextMonsterFunc } from "./js/combat.js";

function handleCharSelection(role) {
  let hero = chooseCharacter(role);
  document.getElementById("hero-level").innerText = "Level: " + hero.heroLevel;
  document.getElementById("hero-health").innerText = "Health: " + hero.heroHp;
  document.getElementById("hero-ap").innerText = "AP: " + hero.heroAp;
  document.getElementById("hero-dex").innerText = "DEX: " + hero.heroDex;
  document.getElementById("hero-items").innerText = "Items: " + hero.items;

  handleEnterNewRoom(hero);
}

function handleEnterNewRoom(hero) {
  let room = whatsInTheRoom(hero);
  console.log(room.monsterName);
  if (room.type === 'monster') {
    document.querySelector("#combat-buttons").removeAttribute("class", "hidden");
    document.querySelector("#enemy-info").removeAttribute("class", "hidden");
    let monster = document.getElementById(`${room.monsterName}`);
    monster.removeAttribute("class", "hidden");
    document.getElementById("enemy-name").innerText = 'Name: ' + room.monsterName;
    document.getElementById("enemy-hp").innerText = 'HP: ' + room.monsterHp;
    document.getElementById("enemy-ap").innerText = 'AP: ' + room.monsterAp;
    console.log(hero);
    console.log(room);
    const round = new CombatRound();
    round.combatRoundStart(hero, room);
    console.log(round);
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
  return hero;
}


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






//load and button logic
window.addEventListener("load", function () {
  //selecting character
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

  //combat buttons
  document.querySelector("#attack-button").addEventListener("click", function (e) {
    round.heroAttack();
    console.log("clicked");

  });
  document.querySelector("#dodge-button").addEventListener("click", function (e) {
    console.log("clicked");

  });
  document.querySelector("#run-button").addEventListener("click", function (e) {
    console.log("clicked");

  });

  //entering a new room
  document.querySelector("#continue-button").addEventListener("click", function (e) {
    console.log("clicked");
    handleEnterNewRoom();
  });


});