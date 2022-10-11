score = 0
cross = true
audio = new Audio('music.mp3')
audiogo = new Audio('gameOver.mp3')

setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function(e){
    console.log('Key code is presses : '+ e.keyCode)
    if(e.keyCode == 38){
        man = document.querySelector('.man');
        man.classList.add('animateMan');
        setTimeout(()=>{
            man.classList.remove('animateMan')
        },700);
    }
    if(e.keyCode == 39){
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'))
        man.style.left = manX + 112 + 'px'
    }
    if(e.keyCode == 37){
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'))
        man.style.left = manX - 112 + 'px'
    }
    
}
setInterval(() => {
    man = document.querySelector('.man')
    gameOver = document.querySelector('.gameOver')
    gameOver1 = document.querySelector('.gameOver1')
    lion = document.querySelector('.lion');
    
    dx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(lion, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(lion, null).getPropertyValue('top'))
    
    offsetX = Math.abs(dx-ox)
    offsetY = Math.abs(dy-oy)
    // console.log(offsetX, offsetY)
    if(offsetX<80 && offsetY<80){
        gameOver.style.visibility = 'visible'
        gameOver1.style.visibility = 'visible'
        lion.classList.remove('lionAni')
        audiogo.play()
        setTimeout(() => {
            audiogo.pause()
            audio.pause()
        }, 1000);
        man.style.visibility = 'hidden'
        lion.style.visibility = 'hidden'
        
    }
    else if(offsetX < 80 && cross){
        score += 1
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(lion, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.05;
            lion.style.animationDuration = newDur + 's'
            console.log('Animation Duration is : ', newDur)
        }, 700);
    }
    

}, 10);

function updateScore(score){
    scoreCount.innerHTML = 'Your Score: ' + score
}