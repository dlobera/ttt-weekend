/*-------------------------------- Constants --------------------------------*/
const players


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('square')
console.log('.square')

const messageEl = document.querySelector('h2')
console.log(messageEl)


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1 // represents player x
  winner = null // null = no winner, 1 = x won, -1 = o won, t= tie, anything else game over
  render() 
}

function render () {
  
}