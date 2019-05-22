class Wizard{
  constructor(object){
    this.name = object.name;
    this.bearded = true;
    this.isRested = true;
    this.mana = 0;
    if (object.bearded === false){
      this.bearded = object.bearded;
    } else {
      this.bearded = true;
      }
    }

  incantation(spell) {
      return spell.toUpperCase()
  }

  cast() {
     this.mana++
      if (this.mana >= 3){
        this.isRested = false;
        return 'I SHALL NOT CAST!';
      } else {
        return 'MAGIC BULLET';
      }
    }
}

module.exports = Wizard;





















// class Wizard {
//   constructor (object){
//     this.name = object.name;
//     this.bearded = true;
//     this.isRested = true;
//     if(object.bearded === false){
//       this.bearded = object.bearded;
//     } else {
//       this.bearded = true;
//     }
//     this.mana = 0;
//     }
//     incantation(spell) {
//       return spell.toUpperCase()
//   }
//   cast() {
//     this.mana++
//     if (this.mana >= 3){
//       this.isRested = false;
//     } 
//     if (this.isRested === true){
//       return 'MAGIC BULLET'
//     } else {
//       return 'I SHALL NOT CAST!'
//     }
//   }
// }

// module.exports = Wizard;