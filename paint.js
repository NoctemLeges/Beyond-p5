//TODO:Create a button to clear the canvas, a simple colour pallete and a few brush sizes.

let color;

function redButtonCallback(){
    color = "red";
}
function greenButtonCallback(){
    color = "green";
}
function blueButtonCallback(){
    color = "blue";
}
function blackButtonCallback(){
    color = "black";
}

function resetCallback(){
    background(127);
}

function setup(){
    createCanvas(1900,600);
    background(127);
    color = "black";
    const redButton = createButton("RED");
    redButton.mousePressed(redButtonCallback);
    const greenButton = createButton("GREEN");
    greenButton.mousePressed(greenButtonCallback);
    const blueButton = createButton("BLUE");
    blueButton.mousePressed(blueButtonCallback);
    const blackButton = createButton("BLACK");
    blackButton.mousePressed(blackButtonCallback);
    const resetButton = createButton("RESET");
    resetButton.mousePressed(resetCallback);
}

function draw(){
    noStroke();
    fill(color);
    
}

function mouseDragged(){
    circle(mouseX,mouseY,10);
}