let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")
let homeScore = guestScore = 0

function home1() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 1
}

function home2() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2
}

function home3() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3
}


function guest1() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 1
}

function guest2() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2
}

function guest3() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3
}

function awayfoul() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) - 1
}

function homefoul() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) - 1
}

function newgame() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}