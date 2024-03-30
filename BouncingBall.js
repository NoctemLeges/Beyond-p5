let x,y;
let xspeed,yspeed;
function setup(){
    createCanvas(600,400);
    x = width/2;
    y = height/2;
    xspeed = 2;
    yspeed = 2;
}

function draw(){
    background(0);
    circle(x,y,10);
    if(x>=width || x<0){
        xspeed*=-1;
    }
    if(y>=height || y<0){
        yspeed*=-1;
    }
    x+=xspeed;
    y+=yspeed;
}