import Fish from "./fish";
import Game from "./game";

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
            ctx.clearRect(0,0,Game.PIX_X,Game.PIX_Y);
            this.drawPond(ctx);
            this.fishes.forEach( fishy =>{
                fishy.move(ctx, this.pondOutline);
                fishy.draw(ctx);
            })
        }, 50);
        this.checkClick = this.checkClick.bind(this);

        document.getElementById("game-canvas").addEventListener("click", this.checkClick)
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

    checkClick(e){
    //    let cursorX = e.pageX
    //    let cursorY = e.pageY
        const canvasEl = document.getElementById("game-canvas");
        let cursorX = e.clientX - canvasEl.getBoundingClientRect().left
        let cursorY = e.clientY - canvasEl.getBoundingClientRect().top
       this.fishes.forEach( fish => {
            if((cursorX >= fish.pos[0] && cursorX <= (fish.pos[0] + 20)) &&
            (cursorY >= fish.pos[1] && cursorY <= (fish.pos[1] + 10))){
                fish.catch();
            }
       });
    }
}