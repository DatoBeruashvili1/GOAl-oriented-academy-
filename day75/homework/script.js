class Animals{
    constructor(species){
        this.species
    }
    capabilities(){
        console.log(this.species + "can breathe")
        console.log(this.species + "can move")
        console.log(this.species + "can eat")

    }

}

class Dog extends Animals{
    capabilities(){
        super.capabilities();
        console.log("")
    }
}
const dog = new Dog("dog")
Dog.capabilities


class Duck extends Animals{
    capabilities(){
        super.capabilities();
        console.log("")
    }
}
const duck = new Duck("duck")
Duck.capabilities

class Cat extends Animals{
    capabilities(){
        super.capabilities();
        console.log("")
    }
}
const cat = new Cat("Cat")
Cat.capabilities



class Horse extends Animals{
    capabilities(){
        super.capabilities();
        console.log("")
    }
}
const horse = new Horse("Horse")
Horse.capabilities









