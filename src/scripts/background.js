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
                let name = `./src/images/${bigFishArr[i].name.replace(/\s+/g, '').toLowerCase()}.jpg`
                fish.src = name;
                console.log(fish.src)
                fish.onload = () => {
                    debugger
                    this.bgctx.drawImage(fish, 800, (120 + i * 100), 120, 50)
                }
            } else {
                return
            }
        }
    }
}