import Pond from "./pond"
export default class Game{
    static PIX_X = 800;
    static PIX_Y = 600;
    constructor(ctx){
        this.fish = [];
        this.pond = new Pond(ctx);
        
        setInterval( function() {
            let fish = new Fish();
            fish.draw(ctx);
        }, 10000)
    }

    draw(ctx){
        this.fish.forEach( fishy => {
            fishy.draw(ctx)
        });
    }
}