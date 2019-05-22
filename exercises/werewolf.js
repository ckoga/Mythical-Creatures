class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    this.human = !this.human; //toggling (switching to whatever is the opposite)
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }
  eat(victim) {
    if (this.human === true){
      victim.alive = true;
    } else {
    victim.alive = false;
    this.change();
  }
}
}

module.exports = Werewolf;





















// class Werewolf {
//   constructor(name, location){
//     this.name = name;
//     this.location = location;
//     this.human = true;
//     this.wolf = false;
//     this.hungry = false;
//   }
//   change(){
//     this.human = !this.human;
//     this.wolf = !this.wolf;
//     this.hungry = !this.hungry;
//   }
//   eat(victim){
//     if (this.human === true){
//     victim.alive = true;
//   } else {
//     victim.alive = false;
//     this.change();
//   }
//   }
// }

// module.exports = Werewolf;