export default class EndScreen{
    constructor(){
        let minigame = document.createElement('canvas')     //creating minigame canvas, and attaching it to board div
        minigame.classList.add('minigame')
        minigame.setAttribute('id','minigame-canvas')
        minigame.setAttribute('z-index','1')
        minigame.setAttribute('width', '200px')
        minigame.setAttribute('height', '200px')
        minigame.setAttribute('position', 'absolute')
        minigame.setAttribute('display', 'none')
        document.getElementById("board-container").appendChild(minigame)
    }
}