const Dragon = require('./dragon');

class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }
  dontInviteThemOverForDinner() {
    let arr = this.evilDoings;
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(`${this.name} likes to ${arr[i]}`);
    // }

    arr.forEach(evilDoing => {
      console.log(`${this.name} will ${evilDoing}`);
    });
  }
  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}

module.exports = EvilDragon;
