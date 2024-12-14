class Animal {
    constructor(species, habitat, diet, look) {
        this.species = species;
        this.habitat = habitat;
        this.diet = diet;
        this.looks = looks;
    }
    cardmaker(){
        let div = document.createElement("div")
        this.img = this.looks
        let element1 = document.createElement("h1")
        element1.textContent = this.species
        this.diet = diet

    }
}

class App {
    constructor() {
        this.animals = [];
    }

    add(doc) {
        this.animals.push(doc)
    }

    render() {
        let img = document.createElement("img");
        img.src = animal.look;
        document.body.appendChild("img")
    }
}

const app = new App()

app.add(new Animal("Jaguar","jungle","meat","Jaguars.jpg"))