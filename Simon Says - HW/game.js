const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
})


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

function nextSequence(){
    level++;
    document.querySelector("#level-title").textContent = `Level ${level}`
    let rand = getRandomInt(4);
    gamePattern.push(buttonColors[rand]);
    keyPress(document.getElementById(buttonColors[rand]))

}



let buttons = document.querySelectorAll('div[type="button"]')

    buttons.forEach(element => {
        element.addEventListener('click', function() {
                keyPress(element);   
        })
        
    });

    function fail(){
        let body = document.querySelector('body')
        body.classList.toggle('game-over');
        var audio = new Audio('sounds/wrong.mp3')
        audio.play();
        document.querySelector("#level-title").textContent = `Game Over, Press Any Key To Restart`
        level = 0
        gamePattern = []
        started = false
        setTimeout(() => {
            body.classList.toggle('game-over')
        }, 100);
    }

    function keyPress(element){
        const oldClass = element.className;
            element.classList = 'btn pressed';
            let btnId  = element.id;
            var audio = new Audio('sounds/'+btnId+'.mp3');

            audio.play();
            setTimeout(() => {
                element.classList = oldClass;
            }, 100);
    }
