import Pond from "./pond"
import Score from "./score"
export default class Game{
    static PIX_X = 1100;
    static PIX_Y = 600
    ;
    constructor(ctx){
        const header = document.createElement('img')                //add header image
        header.setAttribute("src", "src/images/thefishinhole.jpg")
        header.classList.add("the-fishin-hole-sign")
        document.getElementById("main").appendChild(header)

        const music = this.makeHeaderButton("music","./src/images/music.jpg")      //make button row
        const game_sound = this.makeHeaderButton("game_sound","./src/images/game_sound.jpg")
        const linkedin = this.makeHeaderButton("linkedin","./src/images/linkedin.jpg")
        const github = this.makeHeaderButton("github","src/images/github.jpg")

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