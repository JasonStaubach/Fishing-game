export default class FishDisplay{
    constructor(){
        let minigame = document.createElement('canvas')     //creating minigame canvas, and attaching it to board div
        minigame.classList.add('bigFish')
        minigame.setAttribute('id','fish-display-canvas')
        minigame.setAttribute('z-index','12')
        minigame.setAttribute('width', '1100px')
        minigame.setAttribute('height', '600px')
        minigame.setAttribute('position', 'absolute')
        minigame.setAttribute('display', 'none')
        document.getElementById("board-container").appendChild(minigame)
    }

    displayFish(fish){
        const fishDisplay = document.getElementById('fish-display-canvas')     //print background on background canvas
       
        const ctx = fishDisplay.getContext("2d");

        let fishImg = new Image();
        fishImg.src = `./src/images/${fish.name.replace(/\s+/g, '').toLowerCase()}.jpg`
        ctx.ellipse(400, 250, 350, 200, 0, 0, Math.PI*2)
       // debugger
        ctx.fillStyle = "#402F1D"
        ctx.fill()
        ctx.fillStyle = "yellow"
        ctx.font = "36px Bradley Hand, cursive"
        ctx.fillText(`${fish.name}`.padEnd(16, " ") +  `Score: ${fish.score}`, 190, 125)
        fishImg.onload = () => {
            ctx.drawImage(fishImg,190,165,400,200);   
            setTimeout(() => {
                this.removeFishDisplay();
            }, 5000)
        }
    }

    removeFishDisplay(){
        document.getElementById("fish-display-canvas").remove()
    }
}