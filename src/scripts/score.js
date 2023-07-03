import Background from "./background";
export default class Score{
    constructor(background){
        this.score = 0
        this.rareThree = []
        this.background = background
        const holdBackground = document.getElementById('background')  
        this.ctx = holdBackground.getContext("2d");
        this.drawScore(this.ctx)
    }

    drawScore(){
        this.ctx.fillStyle = "black"
        if(this.rareThree.length){
            this.ctx.font = "20px Lucida Console"
            this.ctx.fillText(`${this.rareThree[0].name}`.padEnd(16, " ") +  `Score: ${this.rareThree[0].score}`, 760, 30)
            if(this.rareThree.length > 1){
                this.ctx.fillText(`${this.rareThree[1].name}`.padEnd(16, " ") +  `Score: ${this.rareThree[1].score}`, 760, 230)
                if(this,this.rareThree.length > 2){
                    this.ctx.fillText(`${this.rareThree[2].name}`.padEnd(16, " ") +  `Score: ${this.rareThree[2].score}`, 760, 430)
                }
            }
        } 
    }

    score(){
        return this.score
    }
        
    addScore(num){
        this.score += num;
    }

    topThree(fish){
        if(!this.rareThree.length){                 //if there are no fish
            this.rareThree.push(fish)

        }else if(this.rareThree.length < 3){              //if there are less than 3 fish
            if(fish.score > this.rareThree[0].score){
                this.rareThree.unshift(fish)
            } else if (this.rareThree.length === 1 || (fish.score > this.rareThree[1].score)){
                this.rareThree = this.rareThree.slice(0,1).concat([fish],this.rareThree.slice(1))
            } else {
                this.rareThree.push(fish)
            }
        
        }else if (fish.score > this.rareThree[2].score){              //if there are three fish
            if(fish.score > this.rareThree[0].score){
                this.rareThree.unshift(fish)
                this.rareThree.pop()
            } else if(fish.score > this.rareThree[1].score){
                this.rareThree = this.rareThree.slice(0,1).concat([fish],this.rareThree.slice(2))
            } else {
                this.rareThree.pop()
                this.rareThree.push(fish)
            }
        }
        // debugger
        console.log(this.background)
        this.background.drawTopThree(this.rareThree)
        console.log(this.rareThree)
        return this.rareThree
    }
}