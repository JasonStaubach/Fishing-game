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
        fishImg.onload = () => {
            ctx.drawImage(fishImg,200,100,600,350);   
            setTimeout(() => {
                this.removeFishDisplay();
            }, 1000)
        }
    }

    removeFishDisplay(){
        document.getElementById("fish-display-canvas").remove()
    }
}