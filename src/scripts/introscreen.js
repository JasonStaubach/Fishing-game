import Game from './game'

export default class IntroScreen{
    constructor(){
        
        let img = document.createElement('img')
        img.setAttribute('id', 'howtoplay' )
        img.setAttribute('src', '/src/images/howtoplay.jpg')
        document.getElementById("board-container").appendChild(img)

        img.addEventListener("mouseover", function (){
            img.style.display = "none"
          });
    }
    //     const intro = document.createElement('canvas')         //create background canvas
    //     intro.setAttribute('id','howtoplay')
    //     intro.setAttribute('width', Game.PIX_X)
    //     intro.setAttribute('height', Game.PIX_Y)
    //     document.getElementById("board-container").appendChild(intro)

        
    //     const backgroundCanvas = document.getElementById('howtoplay')     //print background on background canvas
    //     let ctx = backgroundCanvas.getContext("2d");
    //     let back = new Image();
    //     back.src = "./src/images/howtoplay.jpg"
    //     back.onload = () => {
    //         ctx.drawImage(back,0,0,1100,600); 
    //     }
    //     document.getElementById("board-container").addEventListener("mousedown", this.removeIntroScreen)
    // }

    // removeIntroScreen(){
    //     debugger
    //     document.getElementById("howtoplay").remove()
    //     document.getElementById("board-container").removeEventListener('mousedown', this.removeIntroScreen, true)
    //     // document.getElementById("howtoplay").setAttribute('width', '0px')
    //     // document.getElementById("howtoplay").setAttribute('height', '0px')
    // }
}