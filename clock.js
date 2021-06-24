const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = (date.getHours()<10?'0':'') + date.getHours();
    const minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
    const seconds = (date.getSeconds()<10?'0':'') + date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();