let welcomeEl = document.getElementById("welcome-el");
let name = "Marco", greeting = "Hello, my name is ";
welcomeEl.innerText = greeting+name;
welcomeEl.innerText += " 👋";

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    count++;
    countEl.innerText = formatNegativeNumber(count);
}

function decrement() {
    count--;
    countEl.innerText = formatNegativeNumber(count);
}

function save() {
    let countStr = formatNegativeNumber(count) + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function formatNegativeNumber(number) {
    if (number < 0) {
        return "(" + Math.abs(number) + ")";
    } else {
        return number.toString();
    }
}

