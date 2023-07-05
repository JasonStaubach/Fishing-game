import Pond from "./pond"
import Score from "./score"
import Background from "./background";
import Minigame from "./reeling-clicks"

export default class Game{
    static PIX_X = 1100;
    static PIX_Y = 600;
    ;
    constructor(ctx){
        const header = document.createElement('img')                //add header image
        header.setAttribute("src", "src/images/thefishinhole.jpg")
        header.classList.add("the-fishin-hole-sign")
        document.getElementById("main").appendChild(header)

        this.background = new Background();
        this.score = 0;

        this.makeHeaderButton("music","./src/images/sound-off.jpg")      //make button row
        this.makeHeaderButton("game_sound","./src/images/sound-off.jpg")
        // this.makeHeaderButton("linkedin","./src/images/linkedin.jpg")
        // this.makeHeaderButton("github","src/images/github.jpg")

        
        setTimeout(() => {              //timeout is so that the background can load before score added to it
            const minigame = new Minigame();
            this.score = new Score(this.background)
            this.pond = new Pond(ctx, this.score, this.background, minigame);
            this.background.getScore(this.score)
        }, 100);
    }

    score(){
        return this.score
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