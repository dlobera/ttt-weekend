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

let resetBtnEl = document.querySelector('button')



/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', function() {
  init()
})

/*-------------------------------- Functions --------------------------------*/
init()
function init() {
  board = [null, null, null, null, null, null, null, null, null]
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
    if (!square) {
      squareEls[i].textContent = ''
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
const sqIdx = parseInt(evt.target.id.substring(2))

if (board[sqIdx] !== null || winner !== null) {
  return
} 

board[sqIdx] = turn
turn*=-1
getWinner()
render()
}

function getWinner() {
  winningCombos.forEach(function(winningCom) {
    let sum = board[winningCom[0]] + board[winningCom[1]] + board[winningCom[2]] 
    if(sum === 3) {
      winner = 'X'
    }
    else if (sum === -3) {
      winner = 'O'
    }
    else if (board.every(isTaken) && board.some(isNull) === false) {
      sum === 3 ? winner = 'X' : winner = 'T'
    }
  })
  function isTaken(element) {
    if (element.value === 1 || element.value === -1) return true
  }
  function isNull(element) {
    if (element.value === null) return true
  }
}

