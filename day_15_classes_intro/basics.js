class Dog {
  // a class would have attributes (properties) and behaviors(methods)
  constructor(name, breed, size, lifespan) {
    this.name = name;
    this.breed = breed;
    this.size = size;
    this.lifespan = lifespan;

    this.isRecommendedForDomesticPurposes = false;
  }

  static showDogCelebrationDayInTheYear() {
    return "Dog appreciation day is 13 of January annually";
  }

  getBasicDescription() {
    const recommendationText = this.isRecommendedForDomesticPurpose()
      ? "is recommended"
      : "is not recommended";
    return `Hi, meet ${this.name}, of breed ${this.breed}. The dog size is ${this.size} and it's lifespan is ${this.lifespan} and ${recommendationText} for domestic use`;
  }

  isRecommendedForDomesticPurpose() {
    const listOfNonRecommendedBreeds = ["pittbulls", "rotweiller", "kangal"];
    if (listOfNonRecommendedBreeds.includes(this.breed)) {
      return false;
    } else {
      return true;
    }
  }

  get getName() {
    return this.name;
  }

  get getBreed() {
    return this.breed;
  }

  set setName(name) {
    this.name = name;
  }
}

const dog1 = new Dog("billy", "german pinscher", "medium", "over 15 years");
const dog2 = new Dog("manny", "hovawart", "large", "over 10 years");
const dog3 = new Dog("sherif", "kangal", "very large", "over 10 years");

// console.log(dog2.getBreed);
// console.log(dog3.getName);
// console.log(dog1.getName);
// dog1.setName = "shirly";
// console.log(dog1.getName);

console.log(Dog.showDogCelebrationDayInTheYear());

// example of static method for built-in Date class
const currentDate = new Date();
// example of class instantiation with build-in Date class
console.log(currentDate.toLocaleString());
