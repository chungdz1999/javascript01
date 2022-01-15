function log(){
    console.log('okok');
}
function thorttle(callback , wait){
    let isThorttle = false;

    return function() {
        if (isThorttle) return;

        isThorttle = true;
        setTimeout(() => {
            callback();
            isThorttle =false;
        },wait)
    }
}
const he1 = thorttle(log , 500)
// 0-> 500
he1();
he1();
he1();
 /// 600 -> 1100
setTimeout(he1,600);
setTimeout(he1,600);
setTimeout(he1,700);
setTimeout(he1,700);
