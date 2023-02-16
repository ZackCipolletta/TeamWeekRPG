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
    //choose Action -jd
    chooseAction(hero, room)
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

//initialize combat -jd
function initializeCombat(hero, room) {
  let round = new CombatRound();
  round.combatRoundPopulate(hero, room);
  return round;
}
//choose action -jd
async function chooseAction(hero, room){
  let combatInitialized = initializeCombat(hero, room);
  return new Promise((resolve, reject) => {
    
    const button1 = document.getElementById('attack-button');
    const button2 = document.getElementById('dodge-button');
    const button3 = document.getElementById('run-button');
    
    button1.addEventListener('click', () => {
      resolve('attack-button was clicked');
      if (combatInitialized.monsterAlive === false) {
        deadMonsterCombatOver(combatInitialized);
      }
      combatInitialized.monsterAttack(combatInitialized.heroAttack());
    });
    button2.addEventListener('click', () => {
      if (combatInitialized.monsterAlive === false) {
        deadMonsterCombatOver(combatInitialized);
      }
      resolve('dodge-button was clicked');
      combatInitialized.monsterAttack(combatInitialized.heroDodge());
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
  console.log("KILLED MONSTER: After Action Report: " + afterActionReport)
  console.log ("immortal hero:" + afterActionReport.heroHp)
  console.log ("undead monster:" + afterActionReport.monster.Hp)

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
  
  
  // #region
  // document.querySelector("#attack-button").addEventListener("click", function () {
    //   //round.heroAttack();
    
    //   console.log("clicked");
    
    // });
    // document.querySelector("#dodge-button").addEventListener("click", function () {
      //   console.log("clicked");
      
      // });
      // document.querySelector("#run-button").addEventListener("click", function () {
        //   console.log("clicked");
        
        // });
        
        // #endregion
        
        //entering a new room
        document.querySelector("#continue-button").addEventListener("click", function () {
          console.log("clicked");
          handleEnterNewRoom();
        });
        
        
      });