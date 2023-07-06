export default class FishDisplay{
    constructor(){
        let minigame = document.createElement('canvas')     //creating minigame canvas, and attaching it to board div
        minigame.classList.add('bigFish')
        minigame.setAttribute('id','fish-display-canvas')
        minigame.setAttribute('z-index','12')
        minigame.setAttribute('width', '1100px')
        minigame.setAttribute('height', '600px')
        //minigame.setAttribute('position', 'absolute')
        minigame.setAttribute('display', 'none')
        document.getElementById("board-container").appendChild(minigame)
    }

    displayFish(fish){
        const fishDisplay = document.getElementById('fish-display-canvas')     //print background on background canvas
       
        const ctx = fishDisplay.getContext("2d");

        let fishImg = new Image();
        fishImg.src = `./src/images/${fish.name.replace(/\s+/g, '').toLowerCase()}.jpg`
        ctx.ellipse(500, 350, 400, 250, 0, 0, Math.PI*2)
       // debugger
        ctx.fillStyle = "orange"//"#402F1D"
        ctx.fill()
        ctx.fillStyle = "yellow"
        ctx.font = "46px Bradley Hand, cursive"
        ctx.fillText(`${fish.name}`.padEnd(15, " ") +  `Score: ${fish.score}`, 240, 240)
        fishImg.onload = () => {
            ctx.drawImage(fishImg,270, 260,440,220);   
            setTimeout(() => {
                this.removeFishDisplay();
            }, 4000)
        }
    }

    displayNoFish(){
        const fishDisplay = document.getElementById('fish-display-canvas')     //print background on background canvas
        const ctx = fishDisplay.getContext("2d")

        ctx.font = "30px Bradley Hand, cursive"
        ctx.fillStyle = 'red'
        ctx.fillText(`Did Not Catch Fish`, 240, 100)  
        setTimeout(() => {
            this.removeFishDisplay();
        }, 4000) 
    }

    removeFishDisplay(){
        document.getElementById("fish-display-canvas").remove()
    }
}