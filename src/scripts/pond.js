import Fish from "./fish";

export default class Pond{
    static COLOR = "lightblue"
    static RADIUS = 200;
    constructor(ctx){
        this.drawPond(ctx)
    }

    drawPond(ctx){
        ctx.beginPath();
        ctx.moveTo(50, 375);
        ctx.bezierCurveTo(100, 500, 700, 700, 600, 400);
        // ctx.moveTo(600,400)
        ctx.bezierCurveTo(600, 400, 500, 40, 100, 150);
        // ctx.moveTo(100,150)
        ctx.bezierCurveTo(100,150,60, 170, 100, 200);
        ctx.bezierCurveTo(100,200, 160, 245, 100, 300)
        ctx.bezierCurveTo(100, 300, 40, 345, 50, 375)
        ctx.fillStyle = "blue";
        ctx.fill();

        ctx.stroke();
    }
}