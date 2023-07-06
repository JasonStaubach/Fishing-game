import Game from "./game"
import Score from "./score"

export default class Background{
    constructor(){
        this.score = 0;
        const background = document.createElement('canvas')         //create background canvas
        background.setAttribute('id','background')
        background.setAttribute('width', Game.PIX_X)
        background.setAttribute('height', Game.PIX_Y)
        document.getElementById("board-container").appendChild(background)

        const backgroundCanvas = document.getElementById('background')     //print background on background canvas
        this.bgctx = backgroundCanvas.getContext("2d");
        let back = new Image();
        back.src = "./src/images/pondbackground.jpg"
        back.onload = () => {
            this.bgctx.drawImage(back,0,0,1100,600); 
            this.drawScoreHeader()  
        }

    }

    drawTopThree(bigFishArr){
        this.bgctx.clearRect(0,0,Game.PIX_X,Game.PIX_Y);
        this.drawBackground()
        setTimeout(() => {
        this.drawScoreHeader()

        
        for(let i = 0; i < 3; i++){
            if(bigFishArr[i] != undefined){  
                this.bgctx.beginPath()
                this.bgctx.roundRect(765, 45 + i * 200, 300, 150, 15)
                this.bgctx.stroke()
                if(i === 0) this.bgctx.fillStyle = "#C4A484"
                if(i === 1) this.bgctx.fillStyle = "#808080"
                if(i === 2) this.bgctx.fillStyle = "brown"
                this.bgctx.fill()
                let fish = new Image();
                let name = `./src/images/${bigFishArr[i].name.replace(/\s+/g, '').toLowerCase()}.jpg`
                fish.src = name;
            
                fish.onload = () => {
                    this.bgctx.drawImage(fish, 790, (65 + i * 200), 250, 105)
                }
            } else {
                return
            }
        }
        }, 40);
        setTimeout(() => {
            this.score.drawScore()
        }, 200);
    }

    drawBackground(){
        let back = new Image();
        back.src = "./src/images/pondbackground.jpg"
        back.onload = () => {
            this.bgctx.drawImage(back,0,0,1100,600);   
        }
    }

    drawScoreHeader(){
        this.bgctx.font = "44px Bradley Hand, cursive";
        // console.log()
        this.bgctx.fillStyle = 'black';
        this.bgctx.fillText(`Score: ${this.score.score || 0}`, 450, 50);

        // this.bgctx.font = "24px Lucida Console"
        // this.bgctx.strokeText('Top 3 Rarest Fish', 600, 50)
    }

    getScore(score){
        this.score = score;
    }
}