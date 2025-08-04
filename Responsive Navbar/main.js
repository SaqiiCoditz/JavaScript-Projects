const btn = document.getElementById("hamburger");
const links = document.getElementById("links");

btn.onclick = function(){
    btn.classList.toggle("active");
    links.classList.toggle("active");
};