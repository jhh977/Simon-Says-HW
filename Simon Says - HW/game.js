const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0
let index = 0;

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
})

// generate random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
//main function
function nextSequence(){
    level++;
    document.querySelector("#level-title").textContent = `Level ${level}`
    let rand = getRandomInt(4);
    gamePattern.push(buttonColors[rand]);
    keyPress(document.getElementById(buttonColors[rand]))
    
}


//on click checking answer
let buttons = document.querySelectorAll('div[type="button"]')

    buttons.forEach(element => {
        element.addEventListener('click', function() {
            keyPress(element)
            if(element.id == gamePattern[index]){
                index ++
                if(index == gamePattern.length){
                    setTimeout(()=>{nextSequence()},1000)
                    
                    index =0
                }
            }else(
                fail()
            )
            
        })
        
    });
// fail screen effect + restart the game
    function fail(){
        let body = document.querySelector('body')
        body.classList.toggle('game-over');
        var audio = new Audio('sounds/wrong.mp3')
        audio.play();
        document.querySelector("#level-title").textContent = `Game Over, Press Any Key To Restart`
        level = 0
        gamePattern = []
        started = false
        index = 0
        setTimeout(() => {
            body.classList.toggle('game-over')
        }, 100);
    }
// Buttons effect 
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
