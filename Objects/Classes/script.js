class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eat(animal) {
        if (animal instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
                return 
            } else if (this.size >= animal.size * 2) {
                animal.isEaten = true
                console.log(`The animal ${this.name} ate the ${animal.name}`)
                return 
            } else {
                console.log(`The animal ${this.name} tried to eat the ${animal.name} but it was too large.`)
                return
            }
        }
        console.log(`The animal ${this.name} is eating ${animal}.`)
    }
}

let lion = new Animal("Lion", "Carnivore", 10, 200);
let bear = new Animal("Bear", "Omnivore", 15, 400);
let hippo = new Animal("Hippo", "Herbivore", 20, 600);

console.log(lion);
console.log(bear);
console.log(bear);

lion.eat(bear);
bear.eat(lion);
hippo.eat(lion);
lion.eat(hippo);
