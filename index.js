let homeScore = document.getElementById("homescore")
let awayScore = document.getElementById("awayscore")

document.getElementById("reset")


let homeCount = 0
let awayCount= 0


function home1() {
    homeCount += 1
    homeScore.textContent = homeCount   
}


function home2() {
    homeCount += 2
    homeScore.textContent = homeCount 
}

function home3() {
    homeCount += 3
    homeScore.textContent = homeCount
}


function away1() {
    awayCount += 1
    awayScore.textContent = awayCount 
}


function away2() {
    awayCount += 2
    awayScore.textContent = awayCount  
}

function away3() {
    awayCount += 3
    awayScore.textContent = awayCount
}


function resetScores() {
    awayCount = 0
    homeCount = 0
    
    homeScore.textContent = 0
    awayScore.textContent = 0
}