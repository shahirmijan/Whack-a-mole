var squares;
var mole;
var score = 0;
var scoreDisplay;

window.onload = () => {
    squares = document.querySelectorAll('.square');
    scoreDisplay = document.getElementById('score');
    setScore();
}

setInterval(function () {
    nextMole = selectMole()
    setMole(nextMole)
}, 2000);


function selectMole(){
    nextMole = Math.floor(Math.random() * 9);
    return nextMole;
}


function setMole( nextMole ){
    mole = document.querySelector('.mole')

    if(mole){
        mole.classList.remove("mole")
        mole.removeEventListener("mousedown", buttonClicked )
    }

    squares[nextMole].classList.add("mole")
    squares[nextMole].addEventListener("mousedown", buttonClicked )
}

function setScore() {
    scoreDisplay.innerHTML = score;
}
function buttonClicked(){
    score++;
    setScore();

    nextMole = selectMole();
    setMole(nextMole);

}