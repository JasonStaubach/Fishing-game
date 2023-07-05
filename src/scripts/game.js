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
        this.music = false;

        let audio = document.createElement("audio")
        audio.setAttribute('id', 'music-audio')
        audio.setAttribute("src", "src/images/forest-lullaby.mp3")
        audio.loop = true;
        console.log(audio)
        document.getElementById("main").appendChild(audio)

        this.makeHeaderButton("linkedin","./src/images/linkedin.jpg")
        document.getElementById("linkedin").setAttribute('onclick',"window.location.href='https://linkedin.com/JasonStaubach';")
        this.makeHeaderButton("github","src/images/github.jpg")
        document.getElementById("github").setAttribute('onclick',"window.location.href='https://github.com/JasonStaubach';")
        this.makeHeaderButton("game_sound","./src/images/sound-off.jpg")
        this.makeHeaderButton("music-button","./src/images/sound-off.jpg")      //make button row
        let musicButton = document.getElementById("music-button")
        musicButton.addEventListener("click", this.toggleMute);
        
        
        setTimeout(() => {              //timeout is so that the background can load before score added to it
            //const minigame = new Minigame();
            this.score = new Score(this.background)
            this.pond = new Pond(ctx, this.score, this.background);
            this.background.getScore(this.score)
        }, 100);
    }

    score(){
        return this.score
    }


    makeHeaderButton(name, imgSrc){
        let newButton = document.createElement('button')
        newButton.setAttribute('id', name)
        newButton.setAttribute('window.location.href','https://github.com/JasonStaubach')
        newButton.setAttribute('type','submit')
        let img = document.createElement('img')
        img.setAttribute("src", imgSrc)
        newButton.appendChild(img)
        document.getElementById("button-group").appendChild(newButton) 
        return newButton   
    }

    toggleMute() {
        if(this.music = false){
            document.getElementById('music-audio').play()
            document.getElementById("music-button").setAttribute('src','src/images/sound-on.jpg')
            this.music = true;
        } else {
            document.getElementById('music-audio').pause()
            document.getElementById("music-button").firstElementChild.setAttribute('src','src/images/sound-off.jpg')
            this.music = false;
        }
        console.log(document.getElementById('music-audio'))
        // let myAudio = document.getElementById("music-button");
        // myAudio.muted = !myAudio.muted;
        // console.log(myAudio)
     }

}