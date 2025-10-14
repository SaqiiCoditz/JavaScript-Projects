const count =document.getElementById("count")
const inc = document.getElementById("inc")
const res = document.getElementById("res")
const dec =document.getElementById("dec")

let num = 1;
count.textContent = num;

function increment(){
    num++;
    count.textContent = num;
}

function decrement(){
    num--;
    count.textContent = num;
}

function reset(){
    num = 0;
    count.textContent = num;
}

inc.addEventListener("click", increment)
res.addEventListener("click", reset)
dec.addEventListener("click", decrement)