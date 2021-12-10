// Your code here

const dodger = document.getElementById('dodger');

//dodger.style.bottom = "100px";
//const movingLeft = dodger.style.left.replace("px", "");
//const convertToNumber = parseInt(movingLeft, 10);

function moveDodgerLeft() {
    const movingLeft = dodger.style.left.replace("px", "");
    const convertToNumber = parseInt(movingLeft, 10);

    if (convertToNumber > 0){
        dodger.style.left = `${convertToNumber - 1}px`;
    }
}

function moveDodgerRight() {
    const movingLeft = dodger.style.left.replace("px", "");
    const convertToNumber = parseInt(movingLeft, 10);

    if (convertToNumber < 360){
        dodger.style.left = `${convertToNumber + 1}px`;
    }
}
document.addEventListener("keydown", function (e) { 
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
});


