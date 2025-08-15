let Game = ["🪨", "📜", "✂️"]
let spaceEl = document.getElementById("space")
let startGame = document.getElementById("StartGame")
let resultEl = document.getElementById("result")
startGame.addEventListener("click", function () {
    let random = Math.floor(Math.random() * Game.length)
    let random1 = Math.floor(Math.random() * Game.length)
    spaceEl.textContent = "You chose " + Game[random] + "\n Computer chose " + Game[random1]

    if (random === random1) {
        resultEl.textContent = " It's a tie!"
    } else if ((random === 0 && random1 === 2) || (random === 1 && random1 === 0) || (random === 2 && random1 === 1)) {
        resultEl.textContent = " You win!"
    } else {
        resultEl.textContent = " Computer wins!"
    }
})
Reset.addEventListener("click", function () {
    spaceEl.textContent = ""
    resultEl.textContent = ""
})