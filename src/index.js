
import Fish from "./scripts/fish"

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");


    new Example(main)

    let fish = new Fish()
    console.log(fish.name);
    //start game in here
})