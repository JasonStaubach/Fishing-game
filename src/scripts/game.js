import Pond from "./pond"
import Score from "./score"
import Background from "./background";
import IntroScreen from "./introscreen";


export default class Game{
    static PIX_X = 1100;
    static PIX_Y = 600;
    ;
    constructor(ctx){
        const header = document.createElement('img')                //add header image
        header.setAttribute("src", "src/images/thefishinhole.jpg")
        header.classList.add("the-fishin-hole-sign")
        document.getElementById("main").appendChild(header)
        this.background = new Background()
        
        this.IntroScreen = new IntroScreen()


        this.score = 0;
        this.music = true;
        this.ctx = ctx;
        this.makeHeaderButton = this.makeHeaderButton.bind(this);

        let audio = document.createElement("audio")
        audio.setAttribute('id', 'music-audio')
        audio.setAttribute("src", "src/images/forest-lullaby.mp3")
        audio.loop = true;
        
        document.getElementById("main").appendChild(audio)

        this.makeHeaderButton("linkedin","./src/images/linkedin.jpg")
        document.getElementById("linkedin").setAttribute('onclick',"window.location.href='https://linkedin.com/JasonStaubach';")
        this.makeHeaderButton("github","src/images/github.jpg")
        document.getElementById("github").setAttribute('onclick',"window.location.href='https://github.com/JasonStaubach';")
        this.makeHeaderButton("game_sound","./src/images/sound-off.jpg")
        this.makeHeaderButton("music-button","./src/images/sound-off.jpg")      //make button row
        let musicButton = document.getElementById("music-button")
        musicButton.addEventListener("click", this.toggleMute);
        //let howtoplay = new IntroScreen(this.beginGame, this.background, this.ctx, this.score)
        
        setTimeout(() => {              //timeout is so that the background can load before score added to it
            //const minigame = new Minigame();
            this.score = new Score(this.background)
            this.pond = new Pond(ctx, this.score, this.background, this.intro);
            this.background.getScore(this.score)
        }, 100);
    }

    // beginGame(background, ctx, score){
    //     this.score = new Score(background)
    //     this.pond = new Pond(ctx, score, background);
    //     this.background.getScore(score)
    // }

    score(){
        return this.score
    }

    makeInstructions(){
        let instructions = document.createElement('div')
    }


    makeHeaderButton(name, imgSrc){
        let newButton = document.createElement('button')
        newButton.setAttribute('id', name)
       
        newButton.setAttribute('type','submit')
        let img = document.createElement('img')
        img.setAttribute("src", imgSrc)
        img.setAttribute('id', `${name}1`)
        newButton.appendChild(img)
        document.getElementById("button-group").appendChild(newButton) 
        return newButton   
    }

    toggleMute() {
        if(this.music === false){
            document.getElementById('music-audio').play()
            document.getElementById("music-button1").setAttribute('src',"./src/images/sound-on.jpg")
            // this.makeHeaderButton('music-audio', "./src/images/sound-on.jpg")
            this.music = true;
        } else {
            document.getElementById('music-audio').pause()
            document.getElementById("music-button1").setAttribute('src',"./src/images/sound-off.jpg")

            // document.getElementById("music-button").firstElementChild.setAttribute('src','src/images/sound-off.jpg')
            // document.getElementById("music-audio").remove()
            // this.makeHeaderButton('music-audio', "./src/images/sound-off.jpg")
            this.music = false;
        }
        // let myAudio = document.getElementById("music-button");
        // myAudio.muted = !myAudio.muted;
        // console.log(myAudio)
     }

}