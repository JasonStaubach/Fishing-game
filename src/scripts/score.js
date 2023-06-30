import Pond from "./pond"
import Game from "./game"
export default class Score{
    constructor(ctx){
        this.score = 0
        this.drawScore(ctx)
    }

    drawScore(ctx){
        ctx.font = "44px Lucida Console";
        ctx.strokeText(`Score: ${this.score}`, 120, 50);
    }

    addScore(num){
        console.log(this.score)
        this.score += num;
    }
}