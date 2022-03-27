'use strict';
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
let current = 0
const dispCurrent2 = function() {
    document.querySelector('#current--2').textContent = current
}
let score2 = Number(document.querySelector('#score--2').textContent)
const dispScore2 = function() {
    document.querySelector('#score--2').textContent = score2
}
const dispCurrent1 = function() {
    document.querySelector('#current--1').textContent = current
}
let score1 = Number(document.querySelector('#score--1').textContent)
const dispScore1 = function() {
    document.querySelector('#score--1').textContent = score1
}
let diceNum= 0
let playerTurn = 1

// roll dice button is presed
btnRoll.addEventListener('click', function(){
    diceNum = 0
    diceNum += Math.floor(Math.random() * 6) + 1
    if (diceNum === 1 && playerTurn === 2){
        current = 0
        dispCurrent2()
        playerTurn--
    } else if (playerTurn === 2) {
        current += diceNum
        dispCurrent2()
    } else if (diceNum === 1 && playerTurn === 1){
        current = 0
        dispCurrent1()
        playerTurn++
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
            
        }
        dispScore2()
        dispCurrent2()
        playerTurn--
    } else if (playerTurn === 1){
        score1 += current 
        current = 0
        dispScore1()
        dispCurrent1()
        playerTurn++
    }
})
