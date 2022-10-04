         // select html elements

const tab = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('status');
const btn = document.getElementById('reset');
const display = document.getElementById('display')

const play_1 = 'X';
const play_2 = 'O';
let checkTurn = true;

        // combination to win
const combination = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]]

        // loop array

    tab.forEach(tab => {
        tab.addEventListener('click', play);
        
    });

function play(obj) {
    if (obj.target.matches('.cell')) {
        playTurn(obj.target.id);
        obj.target.removeEventListener('click', play);
    }
 }

function playTurn(id) {
    let cell = document.getElementById(id);
    turn = checkTurn ? play_1 : play_2;
    cell.textContent = turn;
    cell.classList.add(turn);
    checkWinner(turn);
    gameStatus.textContent = 'O ' +turn+ ' Jogou!';
}

function checkWinner() {
    const win = combination.some((comb) => {
        return comb.every((index) => {
            return tab[index].classList.contains(turn);
        });
    });

    if (win) {
        gameOver(turn);
    
    } else if (checkTie()) {
        gameOver();
    
    } else {
        checkTurn = !checkTurn;
    
    }
}

function checkTie() {
    let x = 0;
    let o = 0;

    for (index in tab) {
        if (!isNaN(index)) {
            if (tab[index].classList.contains(play_1)) {
                x++
            }

            if (tab[index].classList.contains(play_2)) {
                o++

            }
        }
    }

    return x + o == 9 ? true : false;
}

function gameOver(win = null) {
    if (win) {
        display.innerHTML = ' O ' +win+ ' é o vencedor!';
        setTimeout(reset, 1200);
        
    } else {
        display.innerHTML = 'Empate';
        setTimeout(reset, 1200);
    }
}

btn.addEventListener('click', reset);

function reset() {
    location.reload();
}




