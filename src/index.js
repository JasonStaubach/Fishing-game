
import Fish from "./scripts/fish"
import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
    canvasEl.width = Game.PIX_X;
    canvasEl.height = Game.PIX_Y;

    let fish = new Fish()
    console.log(fish.name);
    //start game in here
})