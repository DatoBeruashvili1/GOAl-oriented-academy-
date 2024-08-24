const p = document.getElementById("paragraph") 
const button = document.getElementById("btn")
const button2 = document.getElementById("btn2")


let number = 0

button.addEventListener("click",function(){
    num += 1
    p.textContent = number
})

button2.addEventListener("click",function(){
    num -= 1
    p.textContent = number
})