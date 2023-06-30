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
            {name:"catfish",reels: 2, score: 100, color: "#d6ae40", img: "catfish.jpg"},
            {name:"dogfish",reels: 2, score: 150, color: "#a89665", img: "dogfish.jpg"},
            {name: "juvenile drum",reels: 1, score: 200, color: "#000000", img: "juvenile_drum.jpg"},
            {name: "Queen Angelfish", reels: 3, score: 500, color: "#0075a3", img: "queen_angelfish.jpg"}
        ]
        
        let seedNum = Math.random()*1000;
        // console.log(seedNum)
        let fish = null;

            if (seedNum < 300){ //0-100 Catfish
                fish = FISHCLASS[0];
            }else if (seedNum < 600){ 
                fish = FISHCLASS[1];        //100-150 dogfish
            }else if (seedNum < 900){           //150-160 juvenile drum
                fish = FISHCLASS[2];
            } else {                    //TEMP!! 160-1000 Queen Angelfish
                fish = FISHCLASS[3];
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
        if(ctx.isPointInPath(pond, newX, newY)){
            this.pos = [newX, newY]
        } else {  
            this.vel = Util.randomVec()
            // this.vel = [-1 * this.vel[0],-1 * this.vel[1]]
            // this.pos = [this.pos[0] + this.vel[0], this.pos[0] + this.vel[0]];
        }
    }

    
}
