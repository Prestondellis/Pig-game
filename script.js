'use strict';
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
const player1 = document.querySelector('.player--1')
const player2 = document.querySelector('.player--2')
const name1 = document.querySelector('#name--1')
const name2 = document.querySelector('#name--2')
const diceImg = document.querySelector('.dice') 
let current = 0
let score2 = Number(document.querySelector('#score--2').textContent)
let score1 = Number(document.querySelector('#score--1').textContent)
let diceNum= 0
let playerTurn = 1

//displays current points for player 2
const dispCurrent2 = function() {
    document.querySelector('#current--2').textContent = current
}
//displays total score for player 2
const dispScore2 = function() {
    document.querySelector('#score--2').textContent = score2
}
//displays current points either player
const dispCurrent1 = function() {
    document.querySelector('#current--1').textContent = current
}
//displays total score for player 1
const dispScore1 = function() {
    document.querySelector('#score--1').textContent = score1
}
//adds class with css elements to either side
const yourTurn = function(player) {
    player.classList.add('player--active')
}
//removes class with css elements from either side
const notYourTurn = function(player) {
    player.classList.remove('player--active')
}
//changes the dice picture to whatever number is given
const diceChange = function(roll) {
    diceImg.src = "dice-" + roll + ".png"
}
// roll dice button is presed
btnRoll.addEventListener('click', function(){
    diceNum = 0
    diceNum += Math.floor(Math.random() * 6) + 1
    diceChange(diceNum)
    //if a 1 is rolled and its player 2s turn
    if (diceNum === 1 && playerTurn === 2){
        current = 0
        dispCurrent2()
        playerTurn--
        yourTurn(player1)
        notYourTurn(player2)
    // if its player 2s turn and anything other than a 1 is rolled
    } else if (playerTurn === 2) {
        current += diceNum
        dispCurrent2()
    // if its player 1s turn and a 1 is rolled
    } else if (diceNum === 1 && playerTurn === 1){
        current = 0
        dispCurrent1()
        playerTurn++
        yourTurn(player2)
        notYourTurn(player1)
    // if its player 1s turn and anything other than a 1 is rolled
    } else {
        current += diceNum
        dispCurrent1()
    }
})

// hold button is pressed
btnHold.addEventListener('click', function() {
    if(playerTurn === 2){
        score2 += current
        current = 0
        if(score2 >= 100){
            name2.textContent = 'Player 2 Wins!'
        } else {
            dispScore2()
            dispCurrent2()
            playerTurn--
            yourTurn(player1)
            notYourTurn(player2)
        }
    } else if (playerTurn === 1){
        score1 += current 
        current = 0
        if (score1 >= 100){
            name1.textContent = 'Player 1 Wins!'
        } else {
            dispScore1()
            dispCurrent1()
            playerTurn++
            yourTurn(player2)
            notYourTurn(player1)
        }
    }
})

// when the new game button is clicked
btnNew.addEventListener('click', function(){
    current = 0
    score1 = 0
    score2 = 0
    playerTurn = 1
    name1.textContent = 'Player 1'
    name2.textContent = 'Player 2'
    dispScore1()
    dispCurrent1()
    dispScore2()
    dispCurrent2()
    notYourTurn(player1)
    notYourTurn(player2)
    yourTurn(player1)
})
