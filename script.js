const player = document.querySelectorAll('.user')
const bot = document.querySelectorAll('.bot')
// let user = 0;
// let npc = 0;
player.forEach((option)=>{
    option.addEventListener('click',function(){
       removeColour()
        option.style.color = '#00A4CCFF'
        getOpponentChoice()
        showResult()
    })
})

function removeColour(){
    player.forEach(option=>{
        option.style.color = '#000'
    })
}

function getOpponentChoice(){
    removeOpponentColour()
    bot[Math.floor(Math.random()*3)].style.color = '#00A4CCFF'
}
function removeOpponentColour(){
    bot.forEach(option=>{
        option.style.color = '#000'
    })
}

function showResult(){
    // console.log(user,npc)
}