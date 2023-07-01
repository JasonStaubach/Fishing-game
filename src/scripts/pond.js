import Fish from "./fish";
import Game from "./game";
import Score from "./score"

export default class Pond{
    static COLOR = "lightblue"
    static RADIUS = 200;
    constructor(ctx){
        this.fishes = [];
        this.pondOutline = this.drawPond(ctx)
        this.fishes.push(new Fish());
        this.score = new Score(ctx, this.score);
        this.canClick = true;

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
            this.score.drawScore(ctx)
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
        // let background = new Image();
        // background.src = "./src/images/pondbackground.jpg"
        // background.onload = () => {
        //     ctx.drawImage(background,0,0,1100,600);   
        // }
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

    draw(ctx){
        this.fish.forEach( fishy => {
            fishy.draw(ctx)
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
                    this.catch(fish);
                }
        });
        }
       this.canClick = false;
       setTimeout(() => this.canClick = true, 3000)
    }

    clickable(ctx){
        ctx.font = "36px Lucida Console";
        if(this.canClick){
            ctx.strokeText(`Click!`, 420, 50);
        } else {
            ctx.strokeText(`No click`, 400, 50);
        }
    }

    catch(fish){
        this.score.addScore(fish.score);
        // debugger
        this.score.topThree(fish)               //if necissary, adds fish to top 3 fish caught
        this.fishes = (this.fishes.slice(0,this.fishes.indexOf(fish)).concat(this.fishes.slice(this.fishes.indexOf(fish) + 1)))
        console.log(`Caught a ${fish.name} and earned ${fish.score} points!`);
        // console.log(fishArr.indexOf(this))
    }

    
}