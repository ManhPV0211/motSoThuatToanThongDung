// Thuat toan hoan vi gia tri hai bien
function algorithm1(x, y){
    let init = [x, y];
    let tg;
    tg = init[0];
    init[0] = init[1];
    init[1] = tg;
    console.log(init);
}
// Thuat toan kiem tra so nguyen to
function algorithm2(x){
    let flag = true;
    for(i = 1; i < x; i++){
        if(x%i == 0){
            flag = false;
        }
    }
    if(flag = true){
        console.log("Day la so nguyen to");
    } else{
        console.log("Day khong phai la so nguyen to");
    }
}
// chua xong bai nay

// Thuat toan tim phan tu lon nhat
function algorithm3(){
    
}