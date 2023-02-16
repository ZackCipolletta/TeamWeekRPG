import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { chooseCharacter } from "./js/character.js";
import { whatsInTheRoom, defineItems } from './js/rooms.js';
import { Monster } from './js/monster';
import { CombatRound } from './js/combatRound';

// import { heroVsMonster, levelUp, nextMonsterFunc } from "./js/combat.js";
let hero;

function hideMonsterUI(room) {
  document.getElementById("attack-button").setAttribute("class", "hidden");
  document.getElementById("dodge-button").setAttribute("class", "hidden");
  document.getElementById("run-button").setAttribute("class", "hidden");
  const continueButton = document.getElementById("continue-button");
  continueButton.removeAttribute("class", "hidden");
  document.getElementById(`${room.monsterName}`).setAttribute("class", "hidden");
  
  
  console.log("reached here");
}
function handleCharSelection(role) {
  hero = chooseCharacter(role);

  //setting intial hero attributes
  document.getElementById("hero-level").innerText = "Level: " + hero.heroLevel;
  document.getElementById("hero-health").innerText = "Health: " + hero.heroHp;
  document.getElementById("hero-ap").innerText = "AP: " + hero.heroAp;
  document.getElementById("hero-dex").innerText = "DEX: " + hero.heroDex;
  document.getElementById("hero-items").innerText = "Items: " + hero.items;


  handleEnterNewRoom(hero);
}

function handleEnterNewRoom(hero) {
  let room = whatsInTheRoom(hero);
  //   console.log(room.monsterName);
  //conditional for if room is a monster
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
    chooseAction(hero, room);
  } else if (room === "empty") {
    console.log(room);
    document.querySelector("#continue-button").removeAttribute("class", "hidden");
    
    //conditional if room contains a potion
  } else if (room.potion) {

    console.log(room.potion[0]);
    let potion = document.getElementById(`${room.potion[0]}`);
    let potionDescription = document.getElementById(`${room.potion[0]}1`);
    potion.removeAttribute("class", "hidden");
    potionDescription.removeAttribute("class", "hidden");
    document.querySelector("#pick-up-button").removeAttribute("class", "hidden");
    document.querySelector("#continue-button").removeAttribute("class", "hidden");
    console.log(hero.heroAp);
    console.log(hero.heroHp);
    console.log(hero.heroDex);

    //grabbing the value of the potion and passing it to the pickup button
    if (room.potion[0] === "magic") {
      let pickup = document.querySelector("#pick-up-button");
      pickup.setAttribute("data-value", room.potion[1]);
      pickup.setAttribute("data-type", room.potion[0]);
    } else if (room.potion[0] === "Health-Potion") {
      let pickup = document.querySelector("#pick-up-button");
      pickup.setAttribute("data-value", room.potion[1]);
      pickup.setAttribute("data-type", room.potion[0]);
    } else if (room.potion[0] === "swift") {
      let pickup = document.querySelector("#pick-up-button");
      pickup.setAttribute("data-value", room.potion[1]);
      pickup.setAttribute("data-type", room.potion[0]);
    } else if (room.potion[0] === "strength") {
      let pickup = document.querySelector("#pick-up-button");
      pickup.setAttribute("data-value", room.potion[1]);
      pickup.setAttribute("data-type", room.potion[0]);
    }

    //conditional if room has a weapon
  } else if (room.weapon) {
    console.log(room.weapon[0]);
    let weapon = document.getElementById(`${room.weapon[0]}`);
    weapon.removeAttribute("class", "hidden");
    let weaponDescription = document.getElementById(`${room.weapon[0]}1`);
    weaponDescription.removeAttribute("class", "hidden");
    document.querySelector("#pick-up-button").removeAttribute("class", "hidden");
    document.querySelector("#continue-button").removeAttribute("class", "hidden");
    console.log(hero.heroAp);
    console.log(hero.heroHp);
    console.log(hero.heroDex);
    if (room.weapon[0] === "sword") {
      let pickup = document.querySelector("#pick-up-button");
      pickup.setAttribute("data-value", room.weapon[1]);
      pickup.setAttribute("data-type", room.weapon[0]);
      console.log(room.weapon[0]);
    } else if (room.weapon[0] === "staff") {
      let pickup = document.querySelector("#pick-up-button");
      pickup.setAttribute("data-value", room.weapon[1]);
      pickup.setAttribute("data-type", room.weapon[0]);
    } else if (room.weapon[0] === "dagger") {
      let pickup = document.querySelector("#pick-up-button");
      pickup.setAttribute("data-value", room.weapon[1]);
      pickup.setAttribute("data-type", room.weapon[0]);
    }
    //conditional if room has a health potion
  } else if (room === 'Health-Potion') {
    let healthpotion = document.getElementById("Health-Potion");
    let potionDescription = document.getElementById("Health-Potion1");
    potionDescription.removeAttribute("class", "hidden");
    healthpotion.removeAttribute("class", "hidden");
    let pickup = document.querySelector("#pick-up-button");
    pickup.setAttribute("data-value", 5);
    pickup.setAttribute("data-type", "Health-Potion");
    document.querySelector("#pick-up-button").removeAttribute("class", "hidden");
    document.querySelector("#continue-button").removeAttribute("class", "hidden");
  }
  return room;
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

//initialize combat -jd
function initializeCombat(hero, room) {
  let round = new CombatRound();
  round.combatRoundPopulate(hero, room);
  return round;
}
//choose action -jd
async function chooseAction(hero, room) {
  let combatInitialized = initializeCombat(hero, room);
  return new Promise((resolve, reject) => {
    document.getElementById("attack-button").removeAttribute("class", "hidden");
    document.getElementById("dodge-button").removeAttribute("class", "hidden");
    document.getElementById("run-button").removeAttribute("class", "hidden");
    const button1 = document.getElementById('attack-button');
    const button2 = document.getElementById('dodge-button');
    const button3 = document.getElementById('run-button');

    button1.addEventListener('click', () => {
      resolve('attack-button was clicked');
      combatInitialized.monsterAttack(combatInitialized.heroAttack());
      if (combatInitialized.monsterAlive === false) {
        hideMonsterUI(room);
        deadMonsterCombatOver(combatInitialized);
      }
    });
    button2.addEventListener('click', () => {
      resolve('dodge-button was clicked');
      combatInitialized.monsterAttack(combatInitialized.heroDodge());
      if (combatInitialized.monsterAlive === false) {
        deadMonsterCombatOver(combatInitialized);
      }
    });
    button3.addEventListener('click', () => {
      if (combatInitialized.monsterAlive === false) {
        deadMonsterCombatOver(combatInitialized);
      }
      resolve('run-button was clicked');
      combatInitialized.monsterAttack(combatInitialized.heroRun());
    });
  });
}

//probably remove button visibility in this function
function deadMonsterCombatOver(afterActionReport) {
  console.log("KILLED MONSTER: After Action Report: " + afterActionReport);
  console.log("immortal hero:" + afterActionReport.heroHp);
  console.log("undead monster:" + afterActionReport.monster.Hp);
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
  document.querySelector("#pick-up-button").addEventListener("click", function (e) {
    console.log("clicked");
    let pickup = document.querySelector("#pick-up-button");
    switch (pickup.getAttribute("data-type")) {
      case "magic":
        hero.heroAp += parseFloat(pickup.getAttribute("data-value"));
        break;
      case "Health-Potion":
        hero.heroHp += parseFloat(pickup.getAttribute("data-value"));
        break;
      case "swift":
        hero.heroDex += parseFloat(pickup.getAttribute("data-value"));
        break;
      case "strength":
        hero.heroAp += parseFloat(pickup.getAttribute("data-value"));
        break;
      case "sword":
        hero.heroAp += parseFloat(pickup.getAttribute("data-value"));
        break;
      case "staff":
        hero.heroAp += parseFloat(pickup.getAttribute("data-value"));
        break;
      case "dagger":
        hero.heroAp += parseFloat(pickup.getAttribute("data-value"));
    }

    switch (pickup.getAttribute("data-type")) {
      case "magic":
        document.querySelector("#magic").setAttribute("class", "hidden");
        document.querySelector("#magic1").setAttribute("class", "hidden");
        break;
      case "Health-Potion":
        document.querySelector("#Health-Potion").setAttribute("class", "hidden");
        document.querySelector("#Health-Potion1").setAttribute("class", "hidden");
        break;
      case "swift":
        document.querySelector("#swift").setAttribute("class", "hidden");
        document.querySelector("#swift1").setAttribute("class", "hidden");
        break;
      case "strength":
        document.querySelector("#strength").setAttribute("class", "hidden");
        document.querySelector("#strength1").setAttribute("class", "hidden");
        break;
      case "sword":
        document.querySelector("#sword").setAttribute("class", "hidden");
        document.querySelector("#sword1").setAttribute("class", "hidden");
        break;
      case "staff":
        document.querySelector("#staff").setAttribute("class", "hidden");
        document.querySelector("#staff1").setAttribute("class", "hidden");
        break;
      case "dagger":
        document.querySelector("#dagger").setAttribute("class", "hidden");
        document.querySelector("#dagger1").setAttribute("class", "hidden");
    }
    console.log(hero.heroAp);
    console.log(hero.heroHp);
    console.log(hero.heroDex);

    document.querySelector("#pick-up-button").setAttribute("class", "hidden");

  });

  document.querySelector("#continue-button").addEventListener("click", function () {
    console.log("clicked");
    const continueButton = document.getElementById("continue-button");
    continueButton.setAttribute("class", "hidden");
    handleEnterNewRoom(hero);
    
    // document.getElementById("contine-button").removeAttribute("class", "hidden");
  });


});