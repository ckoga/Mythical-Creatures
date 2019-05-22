class Dragon{
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.meals = 0;
  }
  eat(){
    this.meals++;
    if (this.meals >= 3){
      this.hungry = false;
    }
  }
}

module.exports = Dragon;























// class Dragon {
//   constructor(name,rider, color) {
//     this.name = name;
//     this.rider = rider;
//     this.color = color;
//     this.hungry = true;
//     this.meals = 0;
//   }
//   eat() {
//     this.meals = this.meals + 1;
//     if(this.meals >= 3){
//       this.hungry = false;
//     }
//   }
// }

// module.exports = Dragon;



// class Dragon {
//   constructor(name, rider, color) {
//     this.name = name;
//     this.rider = rider;
//     this.color = color;
//     this.hungry = true;
//     this.meals = 0;
//   }
//   eat() {
//     this.meals++;
//     if(this.meals >= 3){
//       this.hungry = false;
//     }

//   }
// }


// module.exports = Dragon;


// class Dragon {
//   constructor(name, human, color) {
//     this.name = name;   
//     this.rider = human;
//     this.color = color;
//     this.hungry = true;
//     this.counter = 0;
//   }
//   eat() {
//     this.counter++;
//     if (this.counter >=
//      3) {
//       this.hungry = false;
//     }

//   }


// };

// module.exports = Dragon


// npm test mythical-creatures/test/dragon-test.js