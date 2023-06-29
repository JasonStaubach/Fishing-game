export default class Fish{

    constructor(){
        let makeFish = this.fishGenerator(Math.floor(Math.random()*1000));
        
        this.name = makeFish.name;
        this.reels = makeFish.reels; //num of pulls after hooked
        this.score = makeFish.score;
        
        this.body = Fish.makeBody();
    }
    
    fishGenerator(seedNum){
        const FISHCLASS = [
            {name:"catfish",reels: 2, score: 100, img: "catfish.jpg"},
            {name:"dogfish",reels: 2, score: 150, img: "dogfish.jpg"},
            {name: "juvenile drum",reels: 1, score: 200, img: "juvenile_drum.jpg"},
            {name: "Queen Angelfish", reels: 2, score: 500, img: "queen_angelfish.jpg"}
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
}