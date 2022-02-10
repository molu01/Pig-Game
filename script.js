'use strict'
// Selecting Elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


let playing, scores, currentScore, activePlayer;

function reset() {
    // Scores
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    // Starting Conditions
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');

    // location.reload()
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
}
reset();


const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = currentScore = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

// Rolling The Dice
function roll() {
    if (playing) {
        var dice = Math.ceil(Math.random() * 6);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // Check for Rolled 1
        if (dice !== 1) {
            // Add Dice to Current Score
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            // Switch to Next Player
            switchPlayer()
        }
    }
}

// Holding The Score
function holdScore() {
    if (playing) {
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // If score Becomes 100
        if (scores[activePlayer] >= 100) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            // document.getElementById(`name--${activePlayer+1}`).textContent = `WON`;
        } else {
            switchPlayer()
        }
    }
}


btnRoll.addEventListener('click', roll)
btnHold.addEventListener('click', holdScore)
btnNew.addEventListener('click', reset)












































// 'use strict'
// // Selecting Elements
// const player0El = document.querySelector('.player--0')
// const player1El = document.querySelector('.player--1')
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new')
// const btnRoll = document.querySelector('.btn--roll')
// const btnHold = document.querySelector('.btn--hold')
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// // Starting Conditions
// score0El.textContent = 0
// score1El.textContent = 0
// diceEl.classList.add('hidden');


// // Scores
// const scores = [0, 0]
// let currentScore = 0;
// let activePlayer = 0;

// const switchPlayer = () => {
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore = 0;
//         currentScore = 0;
//         activePlayer = activePlayer === 0 ? 1 : 0;
//         player0El.classList.toggle('player--active')
//         player1El.classList.toggle('player--active')
//     }
//     // Rolling The Dice
// function roll() {
//     var dice = Math.ceil(Math.random() * 6);
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // Check for Rolled 1
//     if (dice !== 1) {
//         // Add Dice to Current Score
//         currentScore += dice
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore;

//     } else {
//         // Switch to Next Player
//         switchPlayer()
//     }
// }

// // Holding The Score
// function holdScore() {
//     scores[activePlayer] += currentScore
//     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
//     score0El.textContent = scores[0]
//     currentScore = 0
//     switchPlayer()

//     // If score Becomes 100
//     if (scores[activePlayer] >= 10) {
//         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
//         document.getElementById(`name--${activePlayer}`).textContent = `Player ${activePlayer} WON`;
//     } else {
//         switchPlayer()
//     }
// }


// btnRoll.addEventListener('click', roll)
// btnHold.addEventListener('click', holdScore)