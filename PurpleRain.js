class Raindrop{
    constructor(){
        this.x = random(width);
        this.y = random(-500,-50);
        this.z = random(1,20);
        this.yspeed = map(this.z,1,20,2,5);
    }
    show(){
        if(this.y>height){
            fill(0);
            circle(this.x,height,10);
            this.y=random(-500,-50);
            this.x=random(width);
            this.yspeed = random(2,5);
        }
        this.thick = map(this.z,1,20,1,3);
        strokeWeight(this.thick);
        stroke(this.y/10,this.y/20,this.y/10);
        rect(this.x,this.y+5,0.2,10);
    }
    
    fall(){
        this.y+=this.yspeed;
        this.yspeed+=map(this.z,1,20,0,0.2);
    }
}

let raindrops = []
function setup(){
    createCanvas(1900,800);
    let pRain = document.createElement("audio");
    let rain = document.createElement("audio");
    let rainOverlap = document.createElement("audio");
    rainOverlap.src = "audio/rain.mp3";
    rainOverlap.loop = true;
    rain.src = "audio/rain.mp3";
    rain.loop = true;
    pRain.src = "audio/pRain.mp3";
    pRain.volume = 0.2;
    rain.volume = 0.1;
    rainOverlap.volume = 0.1;
    rain.play();
    pRain.play();
    for(i=0;i<500;i++){
        raindrops.push(new Raindrop());
    }
    rainOverlap.fastSeek(5);
    rainOverlap.play();
        
}

function draw(){
    background(230,230,250);
    
    for(let tn of raindrops){
        tn.fall();
        tn.show();
    }

}