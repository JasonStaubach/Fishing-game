export function timingMinigame(fish){
    let minigame = document.createElement('canvas')     //creating minigame canvas, and attaching it to board div
    minigame.classList.add('minigame')
    minigame.setAttribute('id','minigame-canvas')
    document.getElementById("board-container").appendChild(minigame)
    minigame.setAttribute('width', '200px')
    minigame.setAttribute('height', '200px')
    minigame.setAttribute('position', 'relative')
    minigame.setAttribute('top', '-600px') //`${(-1100 + fish.pos[0])}px`)


    const minigameCanvas = document.getElementById('minigame-canvas')     //print background on background canvas
    const mgctx = minigameCanvas.getContext("2d");

    debugger

    for(let i = 0; i < fish.reels; i++){       
        let gradient = mgctx.createRadialGradient(100, 100, 10, 100, 100, 90);      //(x, y, innerRadius, x, y, outerRadius)
        gradient.addColorStop(1, 'green');
        gradient.addColorStop(0.5, 'blue');
        gradient.addColorStop(0, 'red')
        mgctx.arc(100,100, 50, 0, 2 * Math.PI)          //(x, y, radius, start, end);
        mgctx.fillStyle = gradient;
        mgctx.fill();
    }
    return true;
}