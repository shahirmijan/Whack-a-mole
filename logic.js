const squares = document.querySelectorAll('.square')
var mole;
var score = 0;

setInterval(function () {
    nextMole = selectMole()
    setMole(nextMole)
}, 2500);


function selectMole(){
    nextMole = Math.floor(Math.random() * 8);
    return nextMole
}


function setMole( nextMole ){
    mole = document.querySelector('.mole')
    mole.classList.remove("mole") 
    mole.removeEventListener("mousedown", buttonClicked )
    squares[nextMole].classList.add("mole")
    squares[nextMole].addEventListener("mousedown", buttonClicked )
}

function buttonClicked(){
    score++
    console.log(score);
    nextMole = selectMole()
    setMole(nextMole)
}