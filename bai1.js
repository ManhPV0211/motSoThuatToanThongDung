// Thuat toan hoan vi gia tri hai bien
function algorithm1(x, y){
    let init = [x, y];
    let tg;
    tg = init[0];
    init[0] = init[1];
    init[1] = tg;
    console.log(init);
}