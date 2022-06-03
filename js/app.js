/*-------------------------------- Constants --------------------------------*/
let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.square')


const messageEl = document.querySelector('h2')



/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
})


/*-------------------------------- Functions --------------------------------*/
init()
function init() {
  board = [1, null, null, null, null, null, null, null, null]
  turn = 1 // represents player x
  winner = null // null = no winner, 1 = x won, -1 = o won, t= tie, anything else game over
  render() 
}

function render () {
  board.forEach(function(square, i) {
    console.log(squareEls[i])
    if (square === 1) {
      squareEls[i].textContent = 'X' 
    } 
    if (square === -1) {
      squareEls[i].textContent = 'O'
    }
  })
  renderMessage()
}

function renderMessage() {
  if (winner === null) {
    messageEl.textContent = `Player ${turn === 1 ? 'X' : 'O'}'s turn!`
  } else if (winner === 'T') {
    messageEl.textContent = `It's a tie!`
  } else {
    messageEl.textContent = `Player ${turn === 1 ? 'O' : 'X'} won!`
  }
}

function handleClick(evt) {
// console.log(evt)
// console.log(evt.target)
console.log(evt.target.id.slice(2))
const sqIdx = evt.target.id.substring(2)
} 