class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.tired = 0;
    this.layingDown = false;
  }

  shoot() {
    this.tired++;
    this.checkTired()
    if (this.layingDown === true || this.cranky === true){
      return 'NO!'
    } else {
      return 'Twang!!!';
    }
  }

  run() {
    this.tired++;
    this.checkTired()
    if(this.layingDown === true) {
      return 'NO!';
    } else {
    return 'Clop clop clop clop!!!';
    }
  }

  checkTired() {
    if (this.tired >= 3){
      this.cranky = true;
    }
  }

  sleep() {
    if (this.standing === true){
      return 'NO!'
    } else {
      this.cranky = false;
      this.tired = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown === true) {
    return 'Not while I\'m laying down!'
  } else {
    this.noDrink()
  }
  }
  noDrink() {
    if (this.cranky === false) {
      this.cranky = true;
    } else {
      this.tired = 0;
      this.cranky = false;
    }
  }
}

module.exports = Centaur;