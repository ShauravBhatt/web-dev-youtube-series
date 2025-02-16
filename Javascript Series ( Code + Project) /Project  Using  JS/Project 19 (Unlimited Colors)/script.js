const body = document.querySelector('body');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const rgbValue  = document.querySelector('#rgb-value');
let r,g,b;
let intervalId;

function changeColor() {
    r = Math.floor((Math.random()*(255-0+1))+0);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

start.addEventListener('click',function () {
    document.querySelector("#value").classList.add("hidden");
    intervalId = setInterval(changeColor,1000);
})

stop.addEventListener('click',function(){
    document.querySelector("#value").classList.remove("hidden");
    rgbValue.innerHTML = `rgb(${r},${g},${b})`;
    clearInterval(intervalId);
})