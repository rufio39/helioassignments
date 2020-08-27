class Animal {
    constructor(sayName, speak) {

        this.sayName = sayName;
        this.speak = speak;
    }
    set aName(x) {
        this.sayName = x;
    }
    get aName() {
        return this.sayName;
    }
}
class Dog extends Animal {
    constructor(name, sound) {

        super(name, sound)
        this.name = name;
        this.sound = sound;
    }
}

animalName = new Animal("doug", "squirrel!");
animalName.aName = "charles";
newDog = new Dog('jack russell terrior', 'woof');

console.log(animalName)
console.log(newDog)
