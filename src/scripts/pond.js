import Fish from "./fish";
import Game from "./game";
import Score from "./score"
import { timingMinigame } from "./reeling-clicks";

export default class Pond{
    static COLOR = "lightblue"
    static RADIUS = 200;
    constructor(ctx, score, background, minigame){
        this.fishes = [];
        this.score = score
        this.background = background
        this.minigame = minigame

        this.pondOutline = this.drawPond(ctx)
        for(let i = 0; i < 3; i++){
            this.fishes.push(new Fish());
        }
        this.canClick = true;
        this.ctx = ctx;

        setInterval(() => {
            let count = 0
            while(count < 2){
                count++;
                let fish = new Fish();
                this.fishes.push(fish);
                fish.draw(ctx);
            }
        }, 10000)

        setInterval(() => {
            ctx.clearRect(0,0,Game.PIX_X,Game.PIX_Y);
            this.drawPond(ctx);
            this.clickable(ctx);
    
            this.fishes.forEach( fishy =>{
                fishy.move(ctx, this.pondOutline);
                fishy.draw(ctx);
            })
        }, 50);
        this.checkClick = this.checkClick.bind(this);
        this.catch = this.catch.bind(this);

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
    }

    draw(){
        this.fish.forEach( fishy => {
            fishy.draw(this.ctx)
        });
    }

    checkClick(e){
    //    let cursorX = e.pageX
    //    let cursorY = e.pageY
    
        if(this.canClick){
            const canvasEl = document.getElementById("game-canvas");
            let cursorX = e.clientX - canvasEl.getBoundingClientRect().left
            let cursorY = e.clientY - canvasEl.getBoundingClientRect().top
            this.fishes.forEach( fish => {
                if((cursorX >= fish.pos[0] && cursorX <= (fish.pos[0] + 20)) &&
                (cursorY >= fish.pos[1] && cursorY <= (fish.pos[1] + 10))){
                    // console.log(fish.imagesrc)
                    this.catch(fish);
                }
        });
        }
        if(this.canClick === true){
            this.canClick = false;
            setTimeout(() => this.canClick = true, 300) //set back to 3000 when not debugging
        }
    }

    clickable(ctx){
        ctx.font = "36px Lucida Console";
        if(this.canClick){
            ctx.strokeText(`Click!`, 420, 50);
        } else {
            ctx.strokeText(`No click`, 400, 50);
        }
    }

    async catch(fish){
        let caught = await this.minigame.timingMinigame(fish)

        if(caught){
            this.score.addScore(fish.score);
            // debugger
            this.background.drawTopThree(this.score.topThree(fish))               //if necissary, adds fish to top 3 fish caught
            this.score.drawScore()
            this.fishes = (this.fishes.slice(0,this.fishes.indexOf(fish)).concat(this.fishes.slice(this.fishes.indexOf(fish) + 1)))
            console.log(`Caught a ${fish.name} and earned ${fish.score} points!`);
            // console.log(fishArr.indexOf(this))
        } else {
            console.log(`${fish.name} got away!`)
        }
    }

}