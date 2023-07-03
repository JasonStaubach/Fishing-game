import * as Util from "./util"; 
export default class Fish{

    constructor(){
        let makeFish = this.fishGenerator();
        
        this.name = makeFish.name;
        this.reels = makeFish.reels; //num of pulls after hooked
        this.score = makeFish.score;
        this.color = makeFish.color;
        this.pos = Fish.randomPosition();
        this.vel = Util.randomVec();
        this.timeToChangeDir = (Math.floor(Math.random() * 15) + 5)
        this.rotation = (Math.atan(this.vel[0]/this.vel[1]) * 180/Math.PI) //converts the velocity of the fish into rotation in degrees
        
    }
    
    fishGenerator(){
        const FISHCLASS = [
            {name: "Starfish", reels: 2, score: 150, color: "#eb34eb", img: "./src/images/starfish.jpg"},
            {name: "Juvenile Drum",reels: 1, score: 200, color: "#000000", img: "./src/images/juvenile-drum.jpg"},
            {name:"Lionfish",reels: 3, score: 225, color: "orange", img: "./src/images/lionfish.jpg"},
            {name:"Clownfish",reels: 1, score: 100, color: "#orange", img: "./src/images/clownfish.jpg"},
            {name: "Queen Angelfish", reels: 3, score: 400, color: "#0075a3", img: "./src/images/queen-angelfish.jpg"},
            {name: "Seahorse", reels: 2, score: 250, color: "yellow", img: "./src/images/seahorse.jpg"},
            {name:"Shrimp", reels: 1, score: 75, color: "pink", img: "./src/images/shrimp.jpg"},
            {name:"Sea Turtle", reels: 3, score: 350, color: "green", img: "./src/images/sea-turtle.jpg"},
            {name:"Pufferfish", reels: 2, score: 125, color: "yellow", img: "./src/images/pufferfish.jpg"},
            {name:"Beta Fish", reels: 1, score: 50, color: "green", img: "./src/images/betafish.jpg"},
            {name:"Jellyfish", reels: 1, score: 50, color: "pink", img: "./src/images/jellyfish.jpg"},
            {name:"Flounder", reels: 2, score: 200, color: "green", img: "./src/images/flounder.jpg"},
            {name: "Hermit Crab", reels: 1, score: 50, color: "red", img: "./src/images/hermit-crab.jpg"},
            {name: "Octopus", reels: 4, score: 600, color: "pink", img: "./src/images/octopus.jpg"},
            {name: "Ribbon Eel", reels: 3, score: 300, color: "lightblue", img: "./src/images/ribbon-eel.jpg"},
            {name: "Squid", reels:3, score: 325, color: "pink", img: "./src/images/squid.jpg"},
            {name: "Lobster", reels: 3, score: 250, color: "red", img: "./src/images/lobster.jpg"},
            {name: "Manta Ray", reels: 4, score: 450, color: "lightblue", img: "./src/images/manta-ray.jpg"},
            {name: "Marlon", reels: 3, score: 425, color: "lightblue", img: "./src/images/marlon.jpg"},
            {name: "Tarpon", reels: 4, score: 500, color: "silver", img: "./src/images/tarpon.jpg"},
            {name: "Blue Tang", reels: 2, score: 175, color:"blue", img: "./src/images/blue-tang.jpg"}

        ]
        
        let seedNum = Math.random()*1000;
        console.log(seedNum)
        let fish = null;
    

            if (seedNum < 50){      //starfish 0-50
                fish = FISHCLASS[0];
            }else if (seedNum < 70){ //juvenile drum 50-70
                fish = FISHCLASS[1];        
            }else if (seedNum < 120){     //lionfish 70 - 120    
                fish = FISHCLASS[2];
            } else if (seedNum < 150) {    //clownfish 120 - 150               
                fish = FISHCLASS[3];
            } else if (seedNum < 200){  //queen angelfish 150 -200
                fish = FISHCLASS[4];
            } else if (seedNum < 240){  //seahorse 200- 240
                fish = FISHCLASS[5]
            } else if (seedNum < 280){  //shrimp 240 - 280
                fish = FISHCLASS[6]
            } else if (seedNum < 300){  //sea turtle 280 - 300
                fish = FISHCLASS[7]
            } else if (seedNum < 350){   //pufferfish 300 - 350
                fish = FISHCLASS[8]
            } else if (seedNum < 450){  //beta fish 350 - 450
                fish = FISHCLASS[9]
            } else if (seedNum < 490){  //jellyfish 450 - 490
                fish = FISHCLASS[10]
            } else if (seedNum < 530){  //flounder 490 - 530
                fish = FISHCLASS[11]
            } else if (seedNum < 600){  //hermit crab 530 - 600  !!!!good to reduce if want more fish
                fish = FISHCLASS[12]
            } else if (seedNum < 610){  //octopus 600 - 610
                fish = FISHCLASS[13]
            } else if (seedNum < 660){  //ribbon eel 610 - 660
                fish = FISHCLASS[14]
            } else if (seedNum < 700){  //squid 660 - 700
                fish = FISHCLASS[15]
            } else if (seedNum < 725){  //lobster 700 - 725
                fish = FISHCLASS[16]
            } else if (seedNum < 750){  //manta ray 725 - 750
                fish = FISHCLASS[17]
            } else if (seedNum < 775){  //Marlon 750 - 775
                fish = FISHCLASS[18]
            } else if (seedNum < 800){ //Tarpon 775 - 800
                fish = FISHCLASS[19]
            } else{                     //blue tang 800 - 1000
                fish = FISHCLASS[20]
            }

        console.log(fish);
        return fish;
    }

    
    draw(ctx){
        // console.log(this.color)
        ctx.fillStyle = this.color
        
        ctx.beginPath();
        // babyFish = new Path2D()
        // ctx.moveTo(10, 50);
        ctx.bezierCurveTo(0 + this.pos[0],0 + this.pos[1], 5 + this.pos[0], 5 + this.pos[1] ,20 + this.pos[0], 10 + this.pos[1])
        ctx.bezierCurveTo(20 + this.pos[0], 10 + this.pos[1], 40 + this.pos[0], 5 + this.pos[1], 20 + this.pos[0], 0 + this.pos[1])
        ctx.bezierCurveTo(20 + this.pos[0], 0 + this.pos[1], 5 + this.pos[0],5 + this.pos[1], 0 + this.pos[0], 10 + this.pos[1])
        ctx.lineTo(0 + this.pos[0],0 + this.pos[1])
        ctx.stroke();
        // ctx.rotate(this.rotation)
        ctx.fill();
    }
    static randomPosition(){
        //ctx.rect(150,200, 300, 265) spawning area
        let pos1 = (Math.random() * 300) + 150;
        let pos2 = (Math.random() * 265) + 200;
        return [pos1,pos2]
    }

    move(ctx, pond){
        if(this.timeToChangeDir === 0){
            this.vel = Util.randomVec();
            this.timeToChangeDir = (Math.floor(Math.random() * 15) + 5)
        } else {
            this.timeToChangeDir--;
        }
        let newX = this.pos[0] + this.vel[0];
        let newY = this.pos[1] + this.vel[1];
        // console.log(pond)
        if(ctx.isPointInPath(pond, newX, newY) && ctx.isPointInPath(pond, (newX + 20),(newY + 10))
         && ctx.isPointInPath(pond, (newX + 20),(newY)) && ctx.isPointInPath(pond, (newX),(newY + 10))){
            this.pos = [newX, newY]
        } else {  
            this.vel = Util.randomVec()
            // this.vel = [-1 * this.vel[0],-1 * this.vel[1]]
            // this.pos = [this.pos[0] + this.vel[0], this.pos[0] + this.vel[0]];
        }
    }


}
