export default class Fish{

    constructor(){
        let makeFish = this.fishGenerator(Math.floor(Math.random()*1000));
        
        this.name = makeFish.name;
        this.reels = makeFish.reels; //num of pulls after hooked
        this.score = makeFish.score;
        this.color = makeFish.color;
        this.pos = Fish.randomPosition();
        //this.body = Fish.makeBody();
    }
    
    fishGenerator(seedNum){
        const FISHCLASS = [
            {name:"catfish",reels: 2, score: 100, color: "#d6ae40", img: "catfish.jpg"},
            {name:"dogfish",reels: 2, score: 150, color: "#a89665", img: "dogfish.jpg"},
            {name: "juvenile drum",reels: 1, score: 200, color: "#000000", img: "juvenile_drum.jpg"},
            {name: "Queen Angelfish", reels: 3, score: 500, color: "#0075a3", img: "queen_angelfish.jpg"}
        ]
        
        switch(seedNum){
            case(seedNum < 100): //0-100 Catfish
                return FISHCLASS[0];
            case(seedNum < 150):           //100-150 dogfish
                return FISHCLASS[1];
            case(seedNum < 160):           //150-160 juvenile drum
                return FISHCLASS[2];
            default:                      //TEMP!! 160-1000 Queen Angelfish
                return FISHCLASS[3];
        }
    }

    
    draw(ctx){
        ctx.fillStyle = this.color
        
        ctx.beginPath();
        // ctx.moveTo(10, 50);
        ctx.bezierCurveTo(0 + this.pos[0],0 + this.pos[1], 5 + this.pos[0], 5 + this.pos[1] ,20 + this.pos[0], 10 + this.pos[1])
        ctx.bezierCurveTo(20 + this.pos[0], 10 + this.pos[1], 40 + this.pos[0], 5 + this.pos[1], 20 + this.pos[0], 0 + this.pos[1])
        ctx.bezierCurveTo(20 + this.pos[0], 0 + this.pos[1], 5 + this.pos[0],5 + this.pos[1], 0 + this.pos[0], 10 + this.pos[1])
        ctx.lineTo(0 + this.pos[0],0 + this.pos[1])
        ctx.stroke();
        ctx.fill;
    }
    static randomPosition(){
        let pos1 = Math.random() * 800;
        let pos2 = Math.random() * 600;
        return [pos1,pos2]
    }
}
