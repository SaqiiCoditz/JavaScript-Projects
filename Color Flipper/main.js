const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);

    msg.textContent = `rgba(${random1}, ${random2}, ${random3})`

    document.body.style.backgroundColor = `rgba(${random1}, ${random2}, ${random3})`
})