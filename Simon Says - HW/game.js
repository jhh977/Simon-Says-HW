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
            keyPress(element)
            
        })
        
    });
    function keyPress(element){
        const old = element.className;
            element.classList = 'btn pressed';
            let btnId  = element.id;
            var audio = new Audio('sounds/'+btnId+'.mp3');
            audio.play();
            setTimeout(() => {
                element.classList = old;
            }, 100);
    }
