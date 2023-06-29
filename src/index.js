
import Fish from "./scripts/fish"
import Game from "./scripts/game"
import Pond from "./scripts/pond"

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
    canvasEl.width = Game.PIX_X;
    canvasEl.height = Game.PIX_Y;


    
    let game = new Game(ctx)
    let fish = new Fish()
    fish.draw(ctx);
    // let fish = new Fish()
    // let pond = new Pond(ctx)
    // console.log(fish.name);
    //start game in here
})