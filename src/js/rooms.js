export default class Room {

  whatsInTheRoom(hero) {
    if (Math.round(Math.random() * 4) + 1 == 5) {
      return 'empty';
    } else if (Math.round(Math.random() * 4) + 1 == 4) {
      return itemFunction();
    } else {
      if (hero.totalAtributes <= 30) {
        let monster = createSlime();
        fightOrRunFunc(monster);
      }
    }
  }
}

itemFunction(hero) {
  let item = Math.round(Math.random() * 10);

}


let items = {
  1: "sword",
  2: "wand",
  3: "shield",
  4: "health potion",
  5: "strength potion",
  6: "empty boot",
  7: "key",
  8: "food",
  weapon: ["dagger", (() => {
    if (hero.role === 'rogue') { // this should work.  Just check items['weapon'][1] and then + or - to equip or drop.
      return 10;
    } else {
      return 3;
    }
  })()],
  10: "luck potion"
};

