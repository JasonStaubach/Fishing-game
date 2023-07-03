export function timingMinigame(fish){
    let minigame = document.createElement('canvas')     //creating minigame canvas, and attaching it to board div
    minigame.classList.add('minigame')
    minigame.setAttribute('id','minigame-canvas')
    document.getElementById("board-container").appendChild(minigame)


    const minigameCanvas = document.getElementById('minigame-canvas')     //print background on background canvas
    const mgctx = minigameCanvas.getContext("2d");

    debugger

    for(let i = 0; i < fish.reels; i++){       
        let gradient = mgctx.createRadialGradient(10, 90, 10, 10, 90, 90);      //(x, y, innerRadius, x, y, outerRadius)
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(1, 'white');
        mgctx.arc(400,400, 200, 0, 2 * Math.PI)          //(x, y, radius, start, end);
        mgctx.fillStyle = gradient;
        mgctx.fill();
    }
    return true;
}