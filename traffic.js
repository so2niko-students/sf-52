function init(){
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");

    const colors = {
        grey : "rgb(51, 51, 51)",
        red : "rgb(255, 0, 0)",
        yellow : "rgb(255, 255, 0)",
        green : "rgb(0, 128, 0)",
    };

    let count = -1;

    function next() {
        count = (count + 1) % 3;

        if (count == 0) {
            red.style.backgroundColor = colors.grey;
            yellow.style.backgroundColor = colors.yellow;
            return;
        }
        if (count == 1) {
            yellow.style.backgroundColor = colors.grey;
            green.style.backgroundColor = colors.green;
            return;
        }
        if (count == 2) {
            green.style.backgroundColor = colors.grey;
            red.style.backgroundColor = colors.red;
            return;
        }
    }

    document.querySelector(".btn-next").addEventListener("click", next);
}

init();