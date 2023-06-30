import Fish from "./fish";

export default class Pond{
    static COLOR = "lightblue"
    static RADIUS = 200;
    constructor(ctx){
        this.fishes = [];
        this.pondOutline = this.drawPond(ctx)

        this.fishes.push(new Fish());

        setInterval(() => {
            let fish = new Fish();
            this.fishes.push(fish);
            fish.draw(ctx);
        }, 10000)

        setInterval(() => {
            this.fishes.forEach( fishy =>{
                fishy.move(ctx, this.pondOutline);
                fishy.draw(ctx);
            })
        }, 50);
    }

    drawPond(ctx){
        let pond = new Path2D();

        pond.moveTo(50, 375);
        pond.bezierCurveTo(100, 500, 700, 700, 600, 400);
        // ctx.moveTo(600,400)
        pond.bezierCurveTo(600, 400, 500, 40, 100, 150);
        // ctx.moveTo(100,150)
        pond.bezierCurveTo(100,150,60, 170, 100, 200);
        pond.bezierCurveTo(100,200, 160, 245, 100, 300)
        pond.bezierCurveTo(100, 300, 40, 345, 50, 375)
        ctx.stroke(pond);
        return pond;
        // pond.fillStyle() = "blue";
        // pond.fill();
        
        //ctx version of pond

        // ctx.beginPath();
        // ctx.moveTo(50, 375);
        // ctx.bezierCurveTo(100, 500, 700, 700, 600, 400);
        // // ctx.moveTo(600,400)
        // ctx.bezierCurveTo(600, 400, 500, 40, 100, 150);
        // // ctx.moveTo(100,150)
        // ctx.bezierCurveTo(100,150,60, 170, 100, 200);
        // ctx.bezierCurveTo(100,200, 160, 245, 100, 300)
        // ctx.bezierCurveTo(100, 300, 40, 345, 50, 375)
        // ctx.fillStyle() = "blue";
        // ctx.fill();

        // ctx.stroke();
    }
    draw(ctx){
        this.fish.forEach( fishy => {
            fishy.draw(ctx)
        });
    }
}