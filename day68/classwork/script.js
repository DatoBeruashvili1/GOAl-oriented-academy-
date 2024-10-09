// #1
const divElements = document.getElementsByTagName('div')

for(const div of elements){
    div.addEventListener('click', () => {
        console.log('clicked on div with id : ${div.id}');
    })
}

// #2



const next = document.getElementById('next');
const prev = document.getElementById('prev');
const img = document.querySelector('img');

const imgArray = ['ferrari.png', 'mercedes.png', 'pagani.png'];

let currentIndex = 0;

next.addEventListener('click', function() {
    currentIndex++;

    if(currentIndex >= imgArray.length) {
        currentIndex = 0;
    }

    img.src = imgArray[currentIndex];
});

prev.addEventListener('click', function() {
    currentIndex--;

    if(currentIndex < 0) {
        currentIndex = 2;
    }
    
    img.src = imgArray[currentIndex];
});