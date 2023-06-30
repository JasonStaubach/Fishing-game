import Pond from "./pond"
import Game from "./game"
export default class Score{
    constructor(ctx){
        this.score = 0
        this.rareThree = []
        this.drawScore(ctx)
    }

    drawScore(ctx){
        ctx.font = "44px Lucida Console";
        ctx.strokeText(`Score: ${this.score}`, 120, 50);
    }

    addScore(num){
        console.log(this.score)
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
        console.log(this.rareThree)
        return this.rareThree
    }
}