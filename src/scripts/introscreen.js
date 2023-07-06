import Game from './game'

export default class IntroScreen{
    constructor(){
        this.removeIntroScreen = this.removeIntroScreen.bind(this);

        const intro = document.createElement('canvas')         //create background canvas
        intro.setAttribute('id','howtoplay')
        intro.setAttribute('width', Game.PIX_X)
        intro.setAttribute('height', Game.PIX_Y)
        document.getElementById("board-container").appendChild(intro)

        
        const backgroundCanvas = document.getElementById('howtoplay')     //print background on background canvas
        let ctx = backgroundCanvas.getContext("2d");
        let back = new Image();
        back.src = "./src/images/howtoplay.jpg"
        back.onload = () => {
            ctx.drawImage(back,0,0,1100,600); 
        }
        addEventListener("click", this.removeIntroScreen)
    }

    removeIntroScreen(){
        let howtoplay = document.getElementById("howtoplay")
        howtoplay.setAttribute('display', 'hidden')
        howtoplay.remove()
        // document.getElementById("howtoplay").setAttribute('width', '0px')
        // document.getElementById("howtoplay").setAttribute('height', '0px')
    }
}