/* Get all elements with class name square into an array */
const squares = document.querySelectorAll('.square')

var mole;

/* set score to 0*/
var score = 0;


/* Use setInterval to run a set of functions for every 2.5 seconds (2500 miliseconds) */
setInterval(function () {

    /* select the next random mole */
    nextMole = selectMole()

    /* pass random generated index number and call setMole function */
    setMole(nextMole)

}, 2500);


function selectMole(){
    /* pick random number that's rounded between 0 and 8 
       so we can use this as our index for our array */
       nextMole = Math.floor(Math.random() * 8);

    return nextMole
}


function setMole( nextMole ){
    
    /* we get current selected mole */
    mole = document.querySelector('.mole')

    /* remove the class from it */
    mole.classList.remove("mole") 

    /* remove any event listeners attatched to the mole to prevent non-moles 
       from adding a point  */
    mole.removeEventListener("mousedown", buttonClicked )

    /* set our next random mole by giving the mole class name to the
       random selected index */
    squares[nextMole].classList.add("mole")

    /* give our newly selected mole an event listener and attatch the function buttonClick() */
    squares[nextMole].addEventListener("mousedown", buttonClicked )
    
}

/* this function will increment the score by adding 1 every time the mole is clicked */
function buttonClicked(){
    score++
    console.log(score);

    nextMole = selectMole()
    setMole(nextMole)
}