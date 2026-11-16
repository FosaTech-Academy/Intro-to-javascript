// parent class
class Animal {
  constructor(name, color) {
    // attributes
    this.name = name;
    this.color = color;
  }

  // behaviours
  getBasicDescription() {
    return `Hi, this is ${this.name} and it's color is ${this.color}`;
  }

  getBehaviour() {
    return "I can move";
  }

  get getName() {
    return this.name;
  }

  get getColor() {
    return this.color;
  }

  set setName(name) {
    this.name = name;
  }

  set setColor(color) {
    this.color = color;
  }
}

class Monkey extends Animal {
  constructor(name, color, specie) {
    super(name, color);
    this.specie = specie;
  }

  getBasicDescription() {
    return `Hi, this is ${this.name} and it's color is ${this.color} and my specie name is ${this.specie}`;
  }

  getBehaviour() {
    return "I can climb complex terrains";
  }
}

const monkey1 = new Monkey("james", "ashes", "oreguatuan");
console.log(monkey1.getBasicDescription());
