var colors = generateRandomColors(6);

var numSquare = 6;
var nSquare = 3;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numSquare = 3;
colors = generateRandomColors(3);
pickedColor = pickColor();
messageDisplay.textContent = "";
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    if(colors[i]){
        squares[i].style.background = colors[i];
    } else {
        squares[i].style.display = "none"
    }
}
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquare = 6;
    colors = generateRandomColors(numSquare);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = "";
for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block"
    }
}
);

resetButton.addEventListener("click", function(){
    numSquare = squares.length;
    if(easyBtn.classList.contains("selected")){
        colors = generateRandomColors(nSquare)
    } else {
        colors = generateRandomColors(numSquare);
    }
 
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    
  }
  h1.style.background = "steelblue"; 
})


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Jouer encore?"
            changeColors(clickedColor);
            h1.style.background = clickedColor; 
        } else {
            this.style.background = "rgba(255, 255, 255, 0)";
            messageDisplay.textContent = "Reésayez"
        }
    });
}
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}
function randomColor() {
     var r = Math.floor(Math.random() * 256);  
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
}