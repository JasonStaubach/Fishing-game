
export default class Minigame{
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
        this.circleRunning = false;
    }
    timingMinigame (fish, completionCallback){

       const minigame = document.getElementById('minigame-canvas')     //print background on background canvas
       const mgctx = minigame.getContext("2d");
       mgctx.clearRect(0,0,200,200)

       minigame.style.top = `${(fish.pos[1]) - 100}px`
       minigame.style.left = `${(fish.pos[0]) - 100}px`

    
       minigame.setAttribute('display', 'block')

       this.sumArr = this.curriedSumArr(fish);
       this.finishedFishing = false
       this.completionCallback = completionCallback
   
       this.clickTiming = this.clickTiming.bind(this)
       document.getElementById("minigame-canvas").addEventListener("click", this.clickTiming)
   
       this.timingCircleSize = 100;
      
       this.minigameCircle(mgctx);
         
   }

   clickTiming(e){
       const canvasEl = document.getElementById("minigame-canvas")

       let cursorX = e.clientX - canvasEl.getBoundingClientRect().left
       let cursorY = e.clientY - canvasEl.getBoundingClientRect().top

       if(cursorX > 0 && cursorX < 200 && cursorY > 0 && cursorY < 200){
           let totalSum = this.sumArr()
           if(Number.isInteger(totalSum)){
                this.finishedFishing = true
                this.completionCallback(totalSum)
                this.removeMinigame()
           } else {
                return undefined;
           }
       }
   }

   curriedSumArr(fish){
    let arr = []        //arr holds all previous scores
        return function curry(){
           
            arr.push(this.timingCircleSize)     //uses radius of minigame as score

           if(arr.length === fish.reels){
                return arr.reduce((add, a) => add + a, 0)   //sum and return score
           } else {
               return curry;
           }
         }
   }

   removeMinigame(){
    document.getElementById("minigame-canvas").remove()
   }

   minigameCircle(mgctx){
    mgctx.clearRect(0,0,200,200)
    if(this.circleRunning){
        this.circleRunning = false;
    } else {
        this.circleRunning = true;
    }

    if(this.circleRunning){
        let growing = false;

        setInterval(() => {
            mgctx.clearRect(0,0,200,200)
            let gradient = mgctx.createRadialGradient(100, 100, 10, 100, 100, 90);      //(x, y, innerRadius, x, y, outerRadius)
            gradient.addColorStop(1, 'blue');
            gradient.addColorStop(0.5, 'yellow');
            gradient.addColorStop(0, 'red')
            mgctx.arc(100,100, 50, 0, 2 * Math.PI)          //(x, y, radius, start, end);
            mgctx.fillStyle = gradient;
            mgctx.fill();

            if(growing && this.timingCircleSize < 100 || !growing && this.timingCircleSize === 0){
                growing = true;
                this.timingCircleSize += 5;
            } else {
                growing = false;
                this.timingCircleSize -= 5
            }
            mgctx.lineWidth = 5;
            mgctx.beginPath();
            mgctx.arc(100, 100, this.timingCircleSize    , 0, 2 * Math.PI);
            mgctx.stroke();
            mgctx.lineWidth = 1
        }, 60)
    }

   }
}
    // minigame.position = 'relative'
    // minigame.top = '-600px'  //`${(-1100 + fish.pos[0])}px`)
    // minigame.left = `${(fish.pos[1])}px`

    