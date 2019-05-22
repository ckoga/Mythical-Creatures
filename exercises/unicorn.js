// read the test
// ask youself if its going to fail and why
// run the test
// make it pass

class Unicorn {
  constructor(name, color){
    this.name = name;
    this.color = color || 'white';
  }
  isWhite(){
    if(this.color !== 'white'){
      return false;
    }
  }
  says(message){
    return `**;* ${message} *;**`
  }
}


module.exports = Unicorn;















// class Unicorn {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color || 'white';
//   }
//   isWhite(){
//     if(this.color !== 'white'){
//       return false;
//     }
//   }
//   says(message) {
//     return `**;* ${message} *;**`;
//   }
// }

// module.exports = Unicorn;


// class Unicorn {
//   constructor(name, color) {
//     this.name = name;
//     if (color === undefined) {
//       this.color = 'white';
//     } else {
//       this.color = color;
//     }
//   }
//   isWhite() {
//     if (this.color !== 'white'){
//       return false;
//     }
//   } 

//   says(message) {
//     return `**;* ${message} *;**`;
//   }

// }
