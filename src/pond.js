export default class Pond{
    constructor(){
        // const canvas = document.getElementById("game-canvas");
        // const ctx = canvas.getContext("d2");

        // ctx.beginPath();
        // ctx.arc(100, 75, 50, 0, 2*Math.PI);
        // ctx.stroke;
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "green";
        ctx.fillRect(10, 10, 150, 100);
    }
}