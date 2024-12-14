class MyApp {
    constructor() {
        this.init();
    }

    init() {
        this.form = document.getElementById('inputForm');
        this.output = document.getElementById('output');
        this.bindEvents();
    }

    bindEvents() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const userInput = document.getElementById('userInput').value;
        this.displayOutput(userInput);
        this.form.reset(); 
    }

    displayOutput(input) {
        this.output.innerHTML = `You submitted: <strong>${input}</strong>`;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new MyApp();
});