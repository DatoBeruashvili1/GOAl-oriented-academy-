class Animal {
    constructor(name,species,age){
        this.name = name
        this.species = species
        this.age = age
    
    }
    sound(){
        console.log(this.name, "makes this sound")
    }



    details(){
        console.log("Name:",this.name)
        console.log("Species:",this.species)
        console.log("Age:",this.age,"years old")

    }
}

let cat = new Animal("Aizen", "Cat", "1")

class Car {
    constructor(name,model){
        this.name = name
        this.model = model
        
    
    }



    details(){
        console.log("Name:",this.name)
        console.log("Model:",this.model)
        

    }
}

let porche = new Animal("porche", "911 GT-3 RS")
Car.details();


class Human {
    constructor(name,lastname,age){
        this.name = name
        this.lastname = lastname
        this.age = age
    
    }
    



    details(){
        console.log("Name:",this.name)
        console.log("Lastname:",this.lastname)
        console.log("Age:",this.age,"years old")

    }
}

let dato = new Human("dato", "beruashvili", "16")
