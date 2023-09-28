let outputTw = document.querySelector('.OutputTw');
const word = "Keller";

let charPosition = 0;

setInterval(function() {
    if (charPosition < word.length) {
        outputTw.textContent += word[charPosition];
        charPosition++;
    } else {
        clearInterval(interval);
    }
}, 1000);



const elapsedTimeElement = document.querySelector(".elapsedTime");
let seconds = 0;

function updateTimeElapsed() {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const pluralMinutes = minutes === 1 ? "minute" : "minutes";

    if (seconds < 60) {
        elapsedTimeElement.textContent = `${seconds} second${seconds === 1 ? "" : "s"} have passed`;
        } else {
        elapsedTimeElement.textContent = `${minutes} ${pluralMinutes} have passed`;
        }
    }

updateTimeElapsed();
setInterval(updateTimeElapsed, 1000);