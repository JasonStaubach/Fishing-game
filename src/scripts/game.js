import Pond from "./pond"
import Score from "./score"
export default class Game{
    static PIX_X = 800;
    static PIX_Y = 600;
    constructor(ctx){
        this.pond = new Pond(ctx);
    }

}