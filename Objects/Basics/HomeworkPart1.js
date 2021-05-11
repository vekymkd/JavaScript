function Animal(name,kind,speak){
    this.name = name;
    this.kind = kind;
    this.speak = function(){
        return document.getElementById("creation").innerHTML = `${this.kind} with name ${this.name} says: Hey Bro!!!!`;
    }
}

function createAnimal(name,kind,speak){
    name = document.getElementById("name").value;
    kind = document.getElementById("kindOfAnimal").value;

    let animal = new Animal(name, kind, speak);
    animal.speak();
}

document.getElementById("btn").addEventListener('click', createAnimal);