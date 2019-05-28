class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
    this.wrongAnswer = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }
  attemptAnswer(answer){
    var response
    for (var i = 0; i < this.riddles.length; i++) {
   if (this.riddles[i].answer === answer) {
      response = 'That wasn\'t that hard, I bet you don\'t get the next one'
    } else {
      this.wrongAnswer++
    }
  }
    if (this.riddles.length === this.wrongAnswer) {
      this.heroesEaten++
    }
   this.riddles = this.riddles.filter(function(riddle) {
        if(riddle.answer !== answer){
          return riddle
        } else {
          return
        }
        })
   if (this.riddles.length === 0) {
    response = 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"' + answer + '\"???'
   }
    return response
  }
}


module.exports = Sphinx;