import Pond from "./pond"
import Score from "./score"
export default class Game{
    static PIX_X = 1100;
    static PIX_Y = 600;
    ;
    constructor(ctx){
        const header = document.createElement('img')                //add header image
        header.setAttribute("src", "src/images/thefishinhole.jpg")
        header.classList.add("the-fishin-hole-sign")
        document.getElementById("main").appendChild(header)

        const background = document.createElement('canvas')         //create background canvas
        background.setAttribute('id','background')
        background.setAttribute('width', Game.PIX_X)
        background.setAttribute('height', Game.PIX_Y)
        document.getElementById("board-container").appendChild(background)

        const backgroundCanvas = document.getElementById('background')     //print background on background canvas
        const bgctx = backgroundCanvas.getContext("2d");
        let back = new Image();
        back.src = "./src/images/pondbackground.jpg"
        back.onload = () => {
            bgctx.drawImage(back,0,0,1100,600);   
        }

        this.makeHeaderButton("music","./src/images/sound-on.jpg")      //make button row
        this.makeHeaderButton("game_sound","./src/images/sound-on.jpg")
        this.makeHeaderButton("linkedin","./src/images/linkedin.jpg")
        this.makeHeaderButton("github","src/images/github.jpg")

        this.pond = new Pond(ctx);
    }


    makeHeaderButton(name, imgSrc){
        let newButton = document.createElement('button')
        newButton.classList.add(name)
        let img = document.createElement('img')
        img.setAttribute("src", imgSrc)
        newButton.appendChild(img)
        document.getElementById("button-group").appendChild(newButton) 
        return newButton   
    }

}