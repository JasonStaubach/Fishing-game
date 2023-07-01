import Pond from "./pond"
import Score from "./score"
export default class Game{
    static PIX_X = 1100;
    static PIX_Y = 600
    ;
    constructor(ctx){
        const header = document.createElement('img')
        header.setAttribute("src", "src/images/thefishinhole.jpg")
        document.getElementById("main").appendChild(header);
        this.pond = new Pond(ctx);
    }

}