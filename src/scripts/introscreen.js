import Game from './game'

export default class IntroScreen{
    constructor(callback){
        this.callback = callback

        const intro = document.createElement('howtoplay-canvas')         //create background canvas
        intro.setAttribute('id','howtoplayscreen')
        intro.setAttribute('width', Game.PIX_X)
        intro.setAttribute('height', Game.PIX_Y)
        document.getElementById("board-container").appendChild(intro)

        const backgroundCanvas = document.getElementById('howtoplay')     //print background on background canvas
        ctx = backgroundCanvas.getContext("2d");
        let back = new Image();
        back.src = "./src/images/howtoplay.jpg"
        back.onload = () => {
            ctx.drawImage(back,0,0,1100,600); 
        }
        addEventListener("click", this.removeIntroScreen)
    }

    removeIntroScreen(){
        this.callback();
        document.getElementById("howtoplay-canvas").remove()
    }
}