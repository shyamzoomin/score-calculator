

let count = 0;
let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");


function increament(){
    count= count + 1;
    countEL.textContent= count;
   
}

function save(){
    let countStr = count + " - "

    saveEL.textContent += countStr;
    countEL.innerText= 0;
    count =0;
}