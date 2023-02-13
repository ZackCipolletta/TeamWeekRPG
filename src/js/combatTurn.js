//temp hero 0:role 1:health 2:hp 3:ap 4:dx 
let warrior = {role:"warrior", health: 10, hp: 10, ap: 10, dx: 10};
//temp npc
let zombie = {role:"zombie", health: 8, hp: 8, ap: 8, dx: 7};

export class Combat {
  static turn() {

  }
  static die1_10() {
    const roll1_10= Math.ceil(Math.random() * 10);
    console.log(roll1_10);
  }
  static die1_6() {
    const roll1_6= Math.ceil(Math.random() * 6);
  
  }
}


