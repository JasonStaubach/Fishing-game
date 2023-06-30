import Pond from "./pond"
import Fish from './fish'
export default class Game{
    static PIX_X = 800;
    static PIX_Y = 600;
    constructor(ctx){
        this.fishes = [];
        this.pond = new Pond(ctx);
        
        setInterval(() => {
            let fish = new Fish();
            this.fishes.push(fish);
            fish.draw(ctx);
        }, 10000)

        setInterval(() => {
            this.fishes.forEach( fishy =>{
                fishy.move();
                fishy.draw(ctx);
            })
        }, 50);
    }

    draw(ctx){
        this.fish.forEach( fishy => {
            fishy.draw(ctx)
        });
    }
}