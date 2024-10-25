class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    capabilities(){
        console.log("this animal can breathe")
        console.log("this animal can move")
        console.log("this animal can agressive")
        console.log("this animal can eat")
    }
}
class Cat extends Animal{
    capabilities(){
        super.capabilities();
        console.log("")
    }
}
let cat = new Cat("aizen", 1)
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
class porche extends Animal{
    capabilities(){
        super.capabilities();
        console.log("")
    }
}
let porche = new Cat("porche", "911 GT-3 RS")
porche.capabilities();