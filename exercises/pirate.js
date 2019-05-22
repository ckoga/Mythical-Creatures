class Pirate {
  constructor(name, job){
    this.name = name;
    this.job = job || 'Scallywag'
    this.cursed = false;
    this.crime = 0;
    this.booty = 0;
  }
  commitHeinousAct(){
    this.crime++;
    if (this.crime >= 3){
      this.cursed = true;
    }
  }
  robShip(){
    this.booty = 100;
    return 'YAARRR!'
    
  }
}

module.exports = Pirate;






















// class Pirate{
//   constructor(name, job){
//     this.name = name;
//     this.job = job || 'Scallywag'
//     this.cursed = false;
//     this.crime = 0;
//     this.booty = 0;
//   }
//   commitHeinousAct(){
//     // this.crime = this.crime + 1
//     this.crime++;
//     if(this.crime >= 3){
//       this.cursed = true;
//     }
//   }
//   robShip(){
//     this.booty = 100;
//     return 'YAARRR!';
//   }
// }

// module.exports = Pirate;





















// class Pirate {
//   constructor (name, job){
//     this.name = name;
//     this.job = job || 'Scallywag';
//     // this.job = 'Scallywag';
//     // if (job === 'cook') {
//     //   this.job = 'cook'
//     // }
//     this.cursed = false;
//     this.crime = 0;
//     this.booty = 0;
//   }
//   commitHeinousAct() {
//     this.crime++;
//     if (this.crime >= 3){
//       this.cursed = true;
//     };
//   }
//   robShip(message) {
//     this.booty = 100;
//     return `${'YAARRR!'}`
//   }
// }


// module.exports = Pirate