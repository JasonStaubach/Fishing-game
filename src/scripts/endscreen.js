export default class EndScreen{
    constructor(){
        let endscreen = document.createElement('canvas')     //creating minigame canvas, and attaching it to board div
        endscreen.classList.add('endscreen')
        endscreen.setAttribute('id','endgame-canvas')
        endscreen.setAttribute('width', '1100px')
        endscreen.setAttribute('height', '600px')
        // endscreen.setAttribute('position', 'absolute')
        endscreen.setAttribute('display', 'none')
        document.getElementById("board-container").appendChild(endscreen)
    }

    showEndscreen(timer){
        const holdendscreen = document.getElementById('endgame-canvas') 
        holdendscreen.setAttribute('display', 'block')
       console.log('endscreen!')
        const ctx = holdendscreen.getContext("2d");

        ctx.fillStyle = 'lightblue'
        ctx.fillRect(0, 0, 1100, 600)
        ctx.fillStyle = 'orange'
        ctx.font = "46px Bradley Hand, cursive"
        ctx.fillText(`Your time to reach at least`, 200, 200)
        ctx.fillText( `5000 points was ${timer.slice(7)}`, 200 , 350)
    }
}