let count = 0;
      function show(number){
  if(count == 0){
   let div = document.getElementById("boxes-"+ number);
   if(div.innerText==""){
    div.innerText = "X";
    count = 1;
    gameWon();
   }else{
    let warning = document.getElementById("show-warning");
    warning.innerHTML = "&#9888; already-filled!"
    setTimeout(()=>{
        warning.innerText = ""
    },1800)
   }

}else{
   let div = document.getElementById("boxes-"+ number);
   if(div.innerText==""){
    div.innerText = "O";
    div.style.color = "white";
    count = 0;
    gameWon();
   }else{
    let warning = document.getElementById("show-warning");
    warning.innerHTML = "&#9888; already-filled!"
    setTimeout(()=>{
        warning.innerText = ""
    },1800)
   }
  }

}

function reset(){
   window.location.reload()
}

function gameWon(){
    let box1 = document.getElementById('boxes-1');
    let box2 = document.getElementById('boxes-2');
    let box3 = document.getElementById('boxes-3');
    let box4 = document.getElementById('boxes-4');
    let box5 = document.getElementById('boxes-5');
    let box6 = document.getElementById('boxes-6');
    let box7 = document.getElementById('boxes-7');
    let box8 = document.getElementById('boxes-8');
    let box9 = document.getElementById('boxes-9');
    if(((box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X") || (box4.innerText == "X" && box5.innerText == "X" && box6.innerText == "X") || (box7.innerText == "X" && box8.innerText == "X" && box9.innerText == "X")) || ((box1.innerText == "X" && box4.innerText == "X" && box7.innerText == "X") || (box2.innerText == "X" && box5.innerText == "X" && box8.innerText == "X") || (box3.innerText == "X" && box6.innerText == "X" && box9.innerText == "X")) || ((box1.innerText == "X" && box5.innerText == "X" && box9.innerText == "X") || (box3.innerText == "X" && box5.innerText == "X" && box7.innerText == "X"))){
        let warning = document.getElementById("show-warning");
    warning.innerHTML = "&#127942; 'X' won the game"
    }
    else if(((box1.innerText == "O" && box2.innerText == "O" && box3.innerText == "O") || (box4.innerText == "O" && box5.innerText == "O" && box6.innerText == "O") || (box7.innerText == "O" && box8.innerText == "O" && box9.innerText == "O")) || ((box1.innerText == "O" && box4.innerText == "O" && box7.innerText == "O") || (box2.innerText == "O" && box5.innerText == "O" && box8.innerText == "O") || (box3.innerText == "O" && box6.innerText == "O" && box9.innerText == "O")) || ((box1.innerText == "O" && box5.innerText == "O" && box9.innerText == "O") || (box3.innerText == "O" && box5.innerText == "O" && box7.innerText == "O"))){
        let warning = document.getElementById("show-warning");
    warning.innerHTML = "&#127942; 'O' won the game"
    }else if(box1.innerText !== "" && box2.innerText !== "" && box3.innerText !== "" && box4.innerText !== "" && box5.innerText !== "" && box6.innerText !== "" && box7.innerText !== "" && box8.innerText !== "" && box9.innerText !== "" ){
        let warning = document.getElementById("show-warning");
    warning.innerHTML = "&#127941; game got tied"
    }
}
