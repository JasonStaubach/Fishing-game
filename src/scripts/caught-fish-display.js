export default class FishDisplay{
    constructor(){
        let minigame = document.createElement('canvas')     //creating minigame canvas, and attaching it to board div
        minigame.classList.add('bigFish')
        minigame.setAttribute('id','fish-display-canvas')
        minigame.setAttribute('z-index','7')
        minigame.setAttribute('width', '600px')
        minigame.setAttribute('height', '200px')
        minigame.setAttribute('position', 'absolute')
        minigame.setAttribute('display', 'none')
        document.getElementById("board-container").appendChild(minigame)
    }

    displayFish(fish){
        const fishDisplay = document.getElementById('fish-display-canvas')     //print background on background canvas
       
        const ctx = fishDisplay.getContext("2d");

        let fishImg = new Image();
        fishImg.src = fish.src;
        back.onload = () => {
            ctx.drawImage(fishImg,25,25,575,175);   
        }
        setTimeout(() => {
            this.removeFishDisplay();
        }, 1000)
    }

    removeFishDisplay(){
        document.getElementById("fish-display-canvas").remove()
    }
}