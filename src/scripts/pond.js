import Fish from "./fish";
import Game from "./game";
import Score from "./score"
import Minigame from "./reeling-clicks";
import FishDisplay from "./caught-fish-display";
import EndScreen from "./endscreen";

export default class Pond{
    static COLOR = "lightblue"
    static RADIUS = 200;
    constructor(ctx, score, background){
        this.fishes = [];
        this.score = score
        this.background = background
        this.timer = this.timer()
        this.overlay = false;
        this.gameover = false;

        this.pondOutline = this.drawPond(ctx)
        for(let i = 0; i < 3; i++){
            this.fishes.push(new Fish());
        }
        this.canClick = true;
        this.ctx = ctx;

        setInterval(() => {
            if(!this.gameover){
                let count = 0
                while(count < 2){
                    count++;
                    let fish = new Fish();
                    this.fishes.push(fish);
                    if(!this.overlay){
                        fish.draw(ctx);
                    }
                }
            }
        }, 10000)

        setInterval(() => {
            ctx.clearRect(0,0,Game.PIX_X,Game.PIX_Y);
            if(!this.gameover){
                ctx.strokeStyle = 'black'
                this.drawPond(ctx);
                ctx.fillStyle = 'black'
                ctx.fillText(this.timer(), 200, 50);
                this.clickable(ctx);
                
                if(!this.overlay){
                    this.fishes.forEach( fishy =>{
                        fishy.move(ctx, this.pondOutline);
                        fishy.draw(ctx);
                    })
                }
            }
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
        // ctx.stroke(pond);
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
            this.fishes.forEach( (fish, idx) => {
                if((cursorX >= fish.pos[0] && cursorX <= (fish.pos[0] + 20)) &&
                (cursorY >= fish.pos[1] && cursorY <= (fish.pos[1] + 10))){
                    // console.log(fish.imagesrc)
                    this.fishes = this.fishes.slice(0,idx).concat(this.fishes.slice(idx+1))
                    this.catch(fish);
                }
        });
        }
        if(this.canClick === true){
            this.canClick = false;
            setTimeout(() => this.canClick = true, 500) //set back to 3000 when not debugging
        }
    }

    clickable(ctx){
        ctx.font = "36px Bradley Hand, cursive";
        if(this.canClick){
            ctx.fillStyle = "green"
            ctx.fillText(`Go Fish!`, 50, 50);
        } else {
            ctx.strokeStyle = "red"
            ctx.strokeText(`No fish`, 50, 50);
        }
    }

    catch(fish){
        let minigame = new Minigame();
        // debugger
        minigame.timingMinigame(fish, this.calculateScore.bind(this, fish))
    }

    calculateScore(fish, score){
        let caught = false
        if((score / fish.reels) < 20) caught = true;
        if(caught){
            this.overlay = true;
            let fishDisplay = new FishDisplay();
            fishDisplay.displayFish(fish)
            this.score.addScore(fish.score);
            
            if(this.score.score >= 5000){
                let endscreen = new EndScreen()
                this.gameover = true;
                endscreen.showEndscreen(this.timer())
            }


            this.background.drawTopThree(this.score.topThree(fish))               //if necissary, adds fish to top 3 fish caught
            this.score.drawScore()
            console.log(`Caught a ${fish.name} and earned ${fish.score} points!`);
            setTimeout(() => this.overlay = false, 4020)
        } else {
            console.log(`${fish.name} got away!`)
            
            let fishDisplay = new FishDisplay();
            fishDisplay.displayNoFish()
        }
    }

    timer(){
        let seconds = 0;
        let minutes = 0
        setInterval(() => {
            seconds++;
            if(seconds === 60){
                seconds = 0;
                minutes += 1;
            }
        }, 1000)
        return function returnTime(){
            return `Timer: ${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
        }
    }

}