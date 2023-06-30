export function randomVec(){
    const deg = 2 * Math.PI * Math.random();
    const length = 10 * Math.random()
    return [(Math.sin(deg) * length), (Math.cos(deg) * length)]
}