// option 2 to handle event
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
function makeRed(){
    document.body.style.backgroundColor = "red";
}

// option 3: get Element by Id and then set onclick
const btnMakeLightGreen = document.getElementById('btn-make-lightGreen');

btnMakeLightGreen.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'lightgreen';
}

// option 3: different version
const btnMakePink = document.getElementById('btn-make-pink');
btnMakePink.onclick = makePink;

function makePink(){
    document.body.style.backgroundColor = 'pink';
}