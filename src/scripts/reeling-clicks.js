export function timingMinigame(fish){
    const minigame = document.getElementById('minigame-canvas')     //print background on background canvas
    minigame.setAttribute('display', 'block')
    minigame.setAttribute('top', `${(fish.pos[0])}px`)
    console.log(minigame)
    minigame.setAttribute('left',`${(fish.pos[1])}px`)
    console.log(minigame)
    const mgctx = minigame.getContext("2d");
    let growing = false;
    let timingCircleSize = 100

    for(let i = 0; i < fish.reels; i++){       
        setInterval(() => {
        mgctx.clearRect(0,0,200,200)
        let gradient = mgctx.createRadialGradient(100, 100, 10, 100, 100, 90);      //(x, y, innerRadius, x, y, outerRadius)
        gradient.addColorStop(1, 'green');
        gradient.addColorStop(0.5, 'yellow');
        gradient.addColorStop(0, 'red')
        mgctx.arc(100,100, 50, 0, 2 * Math.PI)          //(x, y, radius, start, end);
        mgctx.fillStyle = gradient;
        mgctx.fill();

        if(growing && timingCircleSize < 100 || !growing && timingCircleSize === 0){
            growing = true;
            timingCircleSize += 5;
        } else {
            growing = false;
            timingCircleSize -= 5
        }
            mgctx.lineWidth = 10;
            mgctx.beginPath();
            mgctx.arc(100, 100, timingCircleSize    , 0, 2 * Math.PI);
            mgctx.stroke();
            mgctx.lineWidth = 1
        }, 60)
    }
}

export function makeMinigameCanvas(){
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
    // minigame.position = 'relative'
    // minigame.top = '-600px'  //`${(-1100 + fish.pos[0])}px`)
    // minigame.left = `${(fish.pos[1])}px`


    