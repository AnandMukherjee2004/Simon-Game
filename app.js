let btn = ["red", "yellow", "green", "blue"];
let heading = document.querySelector("h2")

let gameSeq = [];
let playerSeq = [];

let level = 0;
let started = false;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started")
        started = true;
        
        levelUp();
    }
})

function levelUp(){
    playerSeq = [];

    level++
    heading.innerHTML = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)

    gameSeq.push(randColor)
    console.log(gameSeq)
    btnFlash(randBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    playerSeq.push(userColor)

    checkAns(playerSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btns of allBtn){
    btns.addEventListener("click", btnPress)
}

function checkAns(idx){

    if(gameSeq[idx] === playerSeq[idx]){
        if(playerSeq.length == gameSeq.length){
            setTimeout(() => {
                levelUp();
            }, 1000);
    }}else{
        heading.innerHTML = `Game Over! Your Score was <b>${level -1 }</b> <br>Press any key to start`
        reset();
    }
}

function reset(){
    level = 0;
    gameSeq = [];
    started = false;
    playerSeq = [];
}