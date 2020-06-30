var character = document.getElementById('character');
var block = document.getElementById('block');
var score = document.getElementById('score');
var body = document.querySelector('body');
var lost = document.querySelector('.lost')

function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate')
    },1000);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    if(blockLeft<30 && blockLeft>-20 && characterTop>=blockTop){
        block.style.animation = 'none';
        document.getElementById('audio').play();
        block.style.left = '30vw';
        lost.style.display = 'block';
    }  
},1);

var initResult = 0;
    
character.addEventListener('animationiteration',function(){
    initResult++;
    score.innerHTML = initResult;
})