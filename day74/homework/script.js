class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    capabilities(){
        console.log(this.name +  "can breathe")
        console.log(this.name +  "can move")
        console.log(this.name  +  "can agressive")
        console.log(this.name +  "can eat")
    }
}
class Cat extends Animal{
    capabilities(){
        super.capabilities();
        console.log("")
    }
}
const cat = new Cat("aizen", 1)
cat.capabilities();


class Car{
    constructor(name,model){
        this.name = name
        this.model = model
    }

    capabilities(){
        console.log("this car can start")
        console.log("this car can move")
      
    }
}
class Porche extends Car{
    capabilities(){
        super.capabilities();
        console.log("")
    }
}
let porche = new Porche("porche", "911 GT-3 RS")
porche.capabilities();
