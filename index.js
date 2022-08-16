let player = 'X';
let gameOver = false;

const changePlayer = () => {
    return player === 'X' ? "0" : "X";
}

const checkWon = () => {

}

let boxes = document.getElementsByClassName("box");
//console.log(boxes);
Array.from(boxes).forEach((box) => {
    let boxText = box.querySelector(".boxText");
    
    box.addEventListener("click" ()=>{
        boxText.innerText = player;
        player = changePlayer;
        checkWon();
    });
})