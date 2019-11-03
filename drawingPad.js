const drawingPad = document.querySelector("#drawing-pad");
const colorpk = document.querySelector("#colpk");
let currentColor = "black";
let drawing = false;
let brush = 20;

function saveSettings() {
    localStorage.setItem("color ", currentColor);
}

function brushwidth(num) {
    saveSettings();
    brush = num;

}
colpk.addEventListener('change', function () {
    currentColor = this.value;
})


function setColor(color) {
    currentColor = color;
}

drawingPad.onmousedown = function (e) {
    drawing = true;
};

drawingPad.onmouseup = function () {
    drawing = false;
};

drawingPad.onmousemove = function (e) {
    if (drawing) {
        drawingPad.innerHTML += `<div class="mark " style="left:${e.offsetX}px;top:${e.offsetY}px;background-color:${currentColor};width:${brush};height:${brush}; "></div>`;
    }
};