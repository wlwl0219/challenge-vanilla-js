const generate = document.querySelector(".js-generate"),
    range = document.querySelector(".js-range"),
    inputRange = range.querySelector("input"),
    playForm = document.querySelector(".js-play"),
    playInput = playForm.querySelector("input"),
    playBtn = playForm.querySelector("button"),
    chose = document.querySelector(".js-chose"),
    result = document.querySelector(".js-result");

function loadChoose() {
    if (!playInput.value) {
        alert("guess the number")
        playInput.value = ""
        chose.textContent = ""
        result.textContent = ""
    } else {
        let machinenum = Math.floor(Math.random() * playInput.max) + 1;
        chose.textContent = `You chose: ${playInput.value}, the machine chose: ${machinenum}.`;
        let num = Number(playInput.value)
        if (num === machinenum) {
            result.textContent = "You Win!"
        } else {
            result.textContent = "You lost!"
        }
    }
}

function playEvent() {
    playBtn.addEventListener('click', loadChoose);
}

function rangeEvent() {
    inputRange.addEventListener('input', loadGenerate, false);
}

function loadGenerate() {
    let rangeNum = Number(inputRange.value);
    generate.textContent = `Generate a number between 0 and ${rangeNum}`;
    playInput.max = rangeNum;
}

function init() {
    loadGenerate();
    rangeEvent();
    playEvent()
}

init();

// refer
// const range = document.getElementById("js-range");
// const title = document.querySelector(".js-title");
// const guessForm = document.getElementById("js-guess");
// const result = document.getElementById("js-result");

// function handleRangeChange(e) {
//   const selectedRange = title.querySelector("span");
//   selectedRange.innerHTML = range.value;
// }

// function handleGuessSubmit(e) {
//   e.preventDefault();
//   const guessInput = guessForm.querySelector("input");
//   if (guessInput.value === "") {
//     return;
//   }
//   const max = range.value;
//   const random = Math.ceil(Math.random() * max);
//   const userGuess = parseInt(guessInput.value, 10);
//   const resultSpan = result.querySelector("span");
//   resultSpan.innerHTML = `
//   You chose: ${userGuess},
//   the machine chose: ${random}.<br />
//   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
//   `;
// }

// guessForm.addEventListener("submit", handleGuessSubmit);
// range.addEventListener("input", handleRangeChange);