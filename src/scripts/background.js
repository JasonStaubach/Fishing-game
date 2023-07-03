import Game from "./game"
import Score from "./score"

export default class Background{
    constructor(){
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
        }
    }

    drawTopThree(bigFishArr){
        for(let i = 0; i < 3; i++){
            console.log(bigFishArr[i])
            if(bigFishArr[i] != undefined){  
                let fish = new Image();
                fish.src = bigFishArr[i].imagesrc;
                console.log(fish.src)
                fish.onload = () => {
                    debugger
                    this.bgctx.drawImage(fish, 200, (200 + i * 100), 200, (300 + i * 100))
                }
            } else {
                return
            }
        }
    }
}