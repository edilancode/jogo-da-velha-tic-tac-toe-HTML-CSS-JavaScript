    /*HTML elements Selection*/

let tab = document.querySelectorAll('.cell');
let gameStatus = document.getElementById("status");
let btn = document.getElementById("restart");

    /* Variable declaration*/
let play_1 = "X";
let play_2 = "O";
let checkTurn = true;

    /*Sequence array combination to win*/
const combination = [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]];

        /*loop for through tab array and function play*/
    for (let x=0; x<tab.length; x++) {
       tab[x].addEventListener('click', play);
    
    } if (gameOver) {

    }
        
function play(obj){
    if (obj.target.matches('.cell')){
        playTurn(obj.target.id);
        obj.target.removeEventListener('click', play);
        }
    }
    
    /*Function select play turn and mark cell*/
function playTurn(id){
    let cel = document.getElementById(id)
    turn =  checkTurn ? play_1 : play_2;
    cel.textContent = turn;
    cel.classList.add(turn);
    checkWinner(turn)
    gameStatus.textContent = "O "  +turn+ " Jogou!" ;
   
}
function checkWinner(turn) {
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
            if (tab[index].classList.contains(play_1)){
            x++;
        }
            if (tab[index].classList.contains(play_2)){
            o++;
        }
      }
    }

    return x + o == 9 ? true : false;
}
function gameOver(win = null){
    if (win) {
        display.innerHTML = ' O '+win+ ' é o vencedor' ;
        
        } else {
        display.innerHTML = 'Epatou';
    }
}

btn.addEventListener('click', reset);

function reset() {
    location.reload()
    
}




