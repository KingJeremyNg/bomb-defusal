const input = document.getElementById('input');
const output = document.getElementById('output');

input.onkeydown = keyPress;

var array = [];
function keyPress(e) {
    if (e.code == "Backspace") {
        array.pop();
    }
    else if (e.code.startsWith("Key")) {
        array.push(e.code.slice(-1));
    }
    else if (e.code == "Space") {
        array.push(e.code);
    }

    console.log(array);
    output.innerHTML = (`${array}`);
}



// (async () => {
//     var input = document.getElementById("input");
//     var output = document.getElementById("output");

//     output.innerHTML = input.innerHTML;

//     output.innerHTML = "THIS WORK??";
// })