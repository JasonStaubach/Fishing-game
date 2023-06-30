import Pond from "./pond"
import Fish from './fish'
export default class Game{
    static PIX_X = 800;
    static PIX_Y = 600;
    constructor(ctx){
        this.pond = new Pond(ctx);
        this.score = 0;
        
    }

}