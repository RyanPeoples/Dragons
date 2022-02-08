class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...instances){
    let arr = [];
    for(let i = 0;i<instances.length;i++){
      let name = instances[i].name;
      arr.push(name);
    }
    return arr;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
