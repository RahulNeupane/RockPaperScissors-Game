const player = Array.from(document.querySelectorAll('.user'))
const bot = Array.from(document.querySelectorAll('.bot'))
const selected = document.querySelector('.selected')
const botSelected = document.querySelector('.bot-selected')
const result = document.querySelector('.result')
const main = document.querySelector('.main')
let user = 0
let npc = 0
player.forEach((option)=>{
    option.addEventListener('click',function(){
        user =  player.indexOf(option)
        removeColour()
        option.style.color = '#00A4CCFF'
        getOpponentChoice()
        printUserSelected()
        getResult()
    })
})

function removeColour(){
    player.forEach(option=>{
        option.style.color = '#000'
    })
    bot.forEach(option=>{
        option.style.color = '#000'
    })
}

function getOpponentChoice(){
    npc = Math.floor(Math.random()*3)
    bot[npc].style.color = '#00A4CCFF'
    switch(true){
        case npc == 0:
            botSelected.innerHTML = 'Rock'
        break;
        case npc == 1:
            botSelected.innerHTML = 'Paper'
        break;
        case npc == 2:
            botSelected.innerHTML = 'Scissors'
        break;
        
        default:
        break;
    }
    botSelected.style.color = '#00A4CCFF'
}

function printUserSelected(){
    switch(true){
        case user == 0:
            selected.innerHTML = 'Rock'
        break;
        case user == 1:
            selected.innerHTML = 'Paper'
        break;
        case user == 2:
            selected.innerHTML = 'Scissors'
        break;
        
        default:
        break;
    }
    selected.style.color = '#00A4CCFF'
}

function getResult(){
    if(user > npc){
        if(user == 2 && npc == 0 )result.innerHTML = "You Lose ! 😥"
        else result.innerHTML = "You Win ! 🏆"
    }else if(user < npc){
        if(user == 0 && npc == 2 )result.innerHTML = "You Win ! 🏆"
        else result.innerHTML = "You Lose ! 😥"
    }else result.innerHTML = "It's a  draw ! "


    if(result.innerHTML == "You Win ! 🏆") main.style.backgroundColor = 'green'
    else if (result.innerHTML == "You Lose ! 😥") main.style.backgroundColor = 'red'
    else main.style.backgroundColor = '#fff'
}