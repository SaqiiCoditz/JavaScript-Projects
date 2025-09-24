const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const updateTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
    dateElement.textContent = now.toDateString();
}
setInterval(updateTime, 1000);
updateTime()